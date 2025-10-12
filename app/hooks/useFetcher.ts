export type ArticleData = {
  id: number;
  title: string;
};

export const useFetcher = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const articles: ArticleData[] = await res.json();
  return { articles };
};
