import { useLoaderData } from "react-router";
import { useState, useEffect, useCallback } from "react";
import { useFetcher } from "~/feature/search/hooks/useFetcher";
import { type ArticleData } from "../../types/fetch.type";
import { SearchPresenter } from "../components/SearchPage/index.presenter";

export async function loader() {
  const { articles } = await useFetcher();
  return { articles };
}

export default function SearchContainer() {
  const { articles } = useLoaderData<typeof loader>();
  const [inputValue, setInputValue] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(() => articles);

  // articlesが変更された時にfilteredArticlesを更新
  useEffect(() => {
    setFilteredArticles(articles);
  }, [articles]);

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
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
    },
    [inputValue, articles]
  );

  const handleClear = useCallback(() => {
    setInputValue("");
    setFilteredArticles(articles);
  }, [setInputValue, setFilteredArticles, articles]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [setInputValue]
  );

  return (
    <SearchPresenter
      articles={articles}
      inputValue={inputValue}
      filteredArticles={filteredArticles}
      onInputChange={handleInputChange}
      onSearch={handleSearch}
      onClear={handleClear}
    />
  );
}
