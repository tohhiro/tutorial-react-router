import { type ArticleData, useFetcher } from "~/hooks/useFetcher";
import { useLoaderData } from "react-router";

export async function loader() {
  return await useFetcher();
}

export default function Search() {
  const { articles } = useLoaderData<typeof loader>();

  return (
    <div className="sm:ml-56">
      <h1>検索ページ</h1>

      <ul className="list-disc list-outside">
        {articles.map((article: ArticleData) => (
          <li key={article.id}>{`${article.id}: ${article.title}`}</li>
        ))}
      </ul>

      {/* <fetcher.Form method="post">
        <input type="text" name="keyword" />
        <button type="submit">検索</button>
      </fetcher.Form> */}
    </div>
  );
}
