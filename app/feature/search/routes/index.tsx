import { useLoaderData, Link } from "react-router";
import { useState } from "react";
import { useFetcher } from "~/feature/search/hooks/useFetcher";
import { type ArticleData } from "../../types/fetch.type";
import { SearchButton } from "../components/SearchButton";
import { ClearButton } from "../components/ClearButton";
import { InputKeyword } from "../components/InputKeyword";

export async function loader() {
  const { articles } = await useFetcher();
  return { articles };
}

export default function Search() {
  const { articles } = useLoaderData<typeof loader>();
  const [inputValue, setInputValue] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const keyword = inputValue.trim().toLowerCase();

    if (keyword) {
      const filtered = articles.filter(
        (post: ArticleData) =>
          post.title.toLowerCase().includes(keyword) ||
          post.body.toLowerCase().includes(keyword)
      );
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(articles);
    }
  };

  const handleClear = () => {
    setInputValue("");
    setFilteredArticles(articles);
  };

  return (
    <div className="sm:ml-56 p-4">
      <h1 className="text-2xl font-bold mb-4">検索ページ</h1>

      {/* 検索フォーム */}
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-2">
          <InputKeyword
            keyword={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="記事タイトルを検索..."
          />
          <SearchButton />
          <ClearButton onClick={handleClear} />
        </div>
      </form>

      {/* 検索結果 */}
      {inputValue && (
        <p className="mb-4 text-gray-600">
          「{inputValue}」の検索結果: {filteredArticles.length}件
        </p>
      )}

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

      {filteredArticles.length === 0 && inputValue && (
        <p className="text-gray-500 mt-4">検索結果が見つかりませんでした。</p>
      )}
    </div>
  );
}
