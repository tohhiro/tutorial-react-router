import { useLoaderData } from "react-router";
import { useState } from "react";
import { useFetcher, type ArticleData } from "~/hooks/useFetcher";
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

      <ul className="list-disc list-outside space-y-2">
        {filteredArticles.map((article: any) => (
          <li key={article.id} className="ml-4">
            {`${article.id}: ${article.title}`}
          </li>
        ))}
      </ul>

      {filteredArticles.length === 0 && inputValue && (
        <p className="text-gray-500 mt-4">検索結果が見つかりませんでした。</p>
      )}
    </div>
  );
}
