import { Link } from "react-router";
import { type ArticleData } from "../../../types/fetch.type";
import { SearchButton } from "../SearchButton";
import { ClearButton } from "../ClearButton";
import { InputKeyword } from "../InputKeyword";

interface SearchPresenterProps {
  articles: ArticleData[];
  inputValue: string;
  filteredArticles: ArticleData[];
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.FormEvent) => void;
  onClear: () => void;
}

export function SearchPresenter({
  inputValue,
  filteredArticles,
  onInputChange,
  onSearch,
  onClear,
}: SearchPresenterProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">検索ページ</h1>
      {/* 検索フォーム */}
      <form onSubmit={onSearch} className="mb-6">
        <div className="flex gap-2">
          <InputKeyword
            keyword={inputValue}
            onChange={onInputChange}
            placeholder="記事タイトルを検索..."
          />
          <SearchButton />
          <ClearButton onClick={onClear} />
        </div>
      </form>

      {/* 検索結果 */}
      {inputValue && (
        <p className="mb-4 text-gray-600">
          「{inputValue}」の検索結果: {filteredArticles.length}件
        </p>
      )}

      <div className="space-y-2">
        {filteredArticles.map((article) => (
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
