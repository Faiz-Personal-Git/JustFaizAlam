
const API_BASE = "/api/youtube";

async function requestYouTube(action, params = {}) {
  const url = new URL(API_BASE, window.location.origin);
  url.searchParams.set("action", action);

  Object.entries(params).forEach(([key, value]) => {
    if (value != null) {
      url.searchParams.set(key, String(value));
    }
  });

  const response = await fetch(url);
  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(
      result.error || "Unable to fetch YouTube data"
    );
  }

  return result;
}

export const youtubeApi = {
  getChannel: () => requestYouTube("channel"),

  getVideos: (limit = 6) =>
    requestYouTube("videos", { limit }),

  getVideo: (videoId) =>
    requestYouTube("video", { id: videoId }),
};
