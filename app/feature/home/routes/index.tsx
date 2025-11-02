import { useLoaderData, Link } from "react-router";
import { useFetchLimit } from "../hooks/useFetchLimit";

export async function loader() {
  return await useFetchLimit();
}

export default function Home() {
  const { articles } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">記事一覧</h1>
      <div className="space-y-2">
        {articles.map((article) => (
          <div
            key={article.id}
            className="border p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Link to={`/articles/${article.id}`} className="block group">
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">記事ID: {article.id}</p>
              <div className="text-blue-500 group-hover:text-blue-700 text-sm mt-2">
                詳細を見る →
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
