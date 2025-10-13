import { type ArticleData } from "../../types/fetch.type";

export const useFetcher = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles: ArticleData[] = await res.json();
  return { articles };
};
