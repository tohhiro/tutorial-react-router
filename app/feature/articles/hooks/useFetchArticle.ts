export const useFetchArticle = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response.ok) {
    throw new Error(`記事が見つかりません: ${id}`);
  }
  const article = await response.json();
  return { article };
};
