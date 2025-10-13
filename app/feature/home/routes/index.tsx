import { useLoaderData } from "react-router";
import { useFetchLimit } from "../hooks/useFetcherLimit";

export async function loader() {
  return await useFetchLimit();
}

export default function Home() {
  const { articles } = useLoaderData<typeof loader>();

  return (
    <div className="sm:ml-56">
      <h1>記事一覧です</h1>
      <ul className="list-disc list-outside">
        {articles.map((article) => (
          <li key={article.id}>{`${article.id}: ${article.title}`}</li>
        ))}
      </ul>
    </div>
  );
}
