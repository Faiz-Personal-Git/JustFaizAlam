
const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";

async function youtubeRequest(resource, params) {
  const url = new URL(`${YOUTUBE_API_BASE}/${resource}`);

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  }

  url.searchParams.set("key", process.env.YOUTUBE_API_KEY);

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    const error = new Error(
      data.error?.message || "YouTube API request failed"
    );
    error.status = response.status;
    throw error;
  }

  return data;
}

function normalizeVideo(video) {
  const snippet = video.snippet || {};
  const statistics = video.statistics || {};
  const thumbnails = snippet.thumbnails || {};

  return {
    id: video.id,
    title: snippet.title || "",
    description: snippet.description || "",
    publishedAt: snippet.publishedAt || null,
    channelId: snippet.channelId || null,
    channelTitle: snippet.channelTitle || "",
    thumbnail:
      thumbnails.maxres?.url ||
      thumbnails.high?.url ||
      thumbnails.medium?.url ||
      thumbnails.default?.url ||
      null,
    views: statistics.viewCount ?? null,
    likes: statistics.likeCount ?? null,
    comments: statistics.commentCount ?? null,
    url: `https://www.youtube.com/watch?v=${video.id}`,
  };
}

export default async function handler(req, res) {
  res.setHeader(
    "Cache-Control",
    "s-maxage=300, stale-while-revalidate=600"
  );

  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    return res.status(500).json({
      success: false,
      error: "YouTube API configuration is missing",
    });
  }

  try {
    const { action = "videos" } = req.query;

    if (action === "channel") {
      const data = await youtubeRequest("channels", {
        part: "snippet,statistics,contentDetails",
        id: channelId,
      });

      const channel = data.items?.[0];

      if (!channel) {
        return res.status(404).json({
          success: false,
          error: "Channel not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: {
          id: channel.id,
          title: channel.snippet?.title,
          description: channel.snippet?.description,
          thumbnail:
            channel.snippet?.thumbnails?.high?.url ||
            channel.snippet?.thumbnails?.default?.url,
          subscribers: channel.statistics?.hiddenSubscriberCount
            ? null
            : channel.statistics?.subscriberCount ?? null,
          views: channel.statistics?.viewCount ?? null,
          videoCount: channel.statistics?.videoCount ?? null,
          uploadsPlaylistId:
            channel.contentDetails?.relatedPlaylists?.uploads,
        },
      });
    }

    if (action === "videos") {
      const parsedLimit = Number(req.query.limit ?? 6);
      const limit = Number.isFinite(parsedLimit)
        ? Math.min(50, Math.max(1, Math.floor(parsedLimit)))
        : 6;

      const channelData = await youtubeRequest("channels", {
        part: "contentDetails",
        id: channelId,
      });

      const uploadsPlaylistId =
        channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

      if (!uploadsPlaylistId) {
        return res.status(404).json({
          success: false,
          error: "Uploads playlist not found",
        });
      }

      const playlistData = await youtubeRequest("playlistItems", {
        part: "snippet,contentDetails",
        playlistId: uploadsPlaylistId,
        maxResults: limit,
      });

      const ids = (playlistData.items || [])
        .map((item) => item.contentDetails?.videoId)
        .filter(Boolean);

      if (!ids.length) {
        return res.status(200).json({
          success: true,
          data: [],
          nextPageToken: playlistData.nextPageToken || null,
        });
      }

      const videoData = await youtubeRequest("videos", {
        part: "snippet,statistics,contentDetails",
        id: ids.join(","),
      });

      const videos = (videoData.items || []).map(normalizeVideo);
      const videoMap = new Map(videos.map((video) => [video.id, video]));

      const orderedVideos = ids
        .map((id) => videoMap.get(id))
        .filter(Boolean);

      return res.status(200).json({
        success: true,
        data: orderedVideos,
        nextPageToken: playlistData.nextPageToken || null,
      });
    }

    if (action === "video") {
      const id = String(req.query.id || "").trim();

      if (!/^[a-zA-Z0-9_-]{11}$/.test(id)) {
        return res.status(400).json({
          success: false,
          error: "A valid YouTube video ID is required",
        });
      }

      const data = await youtubeRequest("videos", {
        part: "snippet,statistics,contentDetails",
        id,
      });

      const video = data.items?.[0];

      if (!video) {
        return res.status(404).json({
          success: false,
          error: "Video not found or unavailable",
        });
      }

      return res.status(200).json({
        success: true,
        data: normalizeVideo(video),
      });
    }

    return res.status(400).json({
      success: false,
      error: "Unsupported action. Use channel, videos or video.",
    });
  } catch (error) {
    console.error("YouTube API error:", error.message);

    return res.status(502).json({
      success: false,
      error:
        error.status === 403
          ? "YouTube API access denied or quota exceeded. Check API settings."
          : "Unable to fetch YouTube data. Please try again later.",
    });
  }
}
