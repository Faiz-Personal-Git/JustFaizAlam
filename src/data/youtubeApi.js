
const API_BASE = "/api/youtube";

async function requestYouTube(action, params = {}) {
  const url = new URL(API_BASE, window.location.origin);

  url.searchParams.set("action", action);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, String(value));
    }
  });

  const response = await fetch(url);
  const responseText = await response.text();

  let result;

  try {
    result = JSON.parse(responseText);
  } catch {
    console.error("YouTube API returned non-JSON:", responseText);

    throw new Error(
      "YouTube API returned an invalid response. Check the API URL and Vercel deployment."
    );
  }

  if (!response.ok || !result.success) {
    throw new Error(
      result.error || "Unable to fetch YouTube data"
    );
  }

  return result;
}

export const youtubeApi = {
  getChannel() {
    return requestYouTube("channel");
  },

  getVideos(limit = 6) {
    return requestYouTube("videos", { limit });
  },

  getVideo(videoId) {
    return requestYouTube("video", { id: videoId });
  },
};
