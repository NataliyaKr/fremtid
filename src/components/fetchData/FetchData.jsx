import articles from "../../data/future.json";

export async function fetchArticles() {
  try {
    return articles;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}
