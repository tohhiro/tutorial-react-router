import { useLoaderData, useParams, Link } from "react-router";
import { useFetchArticle } from "../hooks/useFetchArticle";

export async function loader({ params }: { params: { id: string } }) {
  if (!params.id) {
    throw new Error("記事IDが必要です");
  }
  return await useFetchArticle(params.id);
}

export default function ArticleDetail() {
  const { article } = useLoaderData<typeof loader>();

  return (
    <div className="sm:ml-56 p-6">
      <div className="mb-4">
        <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
          ← 記事一覧に戻る
        </Link>
      </div>

      <article className="max-w-4xl">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {article.title}
          </h1>
          <div className="text-sm text-gray-500">
            記事ID: {article.id} | ユーザーID: {article.userId}
          </div>
        </header>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {article.body}
          </p>
        </div>
      </article>
    </div>
  );
}
