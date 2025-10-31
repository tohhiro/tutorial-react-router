import { type ArticleData } from "../../../types/fetch.type";

export const useFetchLimit = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const articles: ArticleData[] = await res.json();
  return { articles };
};
