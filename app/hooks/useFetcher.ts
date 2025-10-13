export type ArticleData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const useFetcher = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles: ArticleData[] = await res.json();
  return { articles };
};
