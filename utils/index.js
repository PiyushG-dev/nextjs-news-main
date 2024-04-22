import axios from "axios";

export async function fetchTopHeadlines(country) {
  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        country: country,
        apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
