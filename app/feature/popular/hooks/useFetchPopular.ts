import { type ArticleData } from "../../types/fetch.type";

export const useFetchPopular = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?id=2&id=10"
  );
  const articles: ArticleData[] = await res.json();
  return { articles };
};
