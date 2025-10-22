import { useLoaderData } from "react-router";
import { useFetchPopular } from "../hooks/useFetchPopular";

export async function loader() {
  const { articles } = await useFetchPopular();
  return { articles };
}

export default function Popular() {
  const { articles } = useLoaderData<typeof loader>();

  return (
    <div className="sm:ml-56">
      <h1>人気記事</h1>
      <ul className="list-disc list-outside">
        {articles.map((article) => (
          <li key={article.id}>{`${article.id}: ${article.title}`}</li>
        ))}
      </ul>
    </div>
  );
}
