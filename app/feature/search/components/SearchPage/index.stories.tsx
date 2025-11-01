import type { Meta, StoryObj } from "@storybook/react";
import { SearchPresenter } from "./index.presenter";
import { type ArticleData } from "../../../types/fetch.type";

// モックデータ
const mockArticles: ArticleData[] = [
  {
    id: 1,
    title: "React Router v7の使い方",
    body: "React Router v7の基本的な使い方について説明します。ダイナミックルーティングやローダー機能について。",
    userId: 1,
  },
  {
    id: 2,
    title: "TypeScriptとReactの組み合わせ",
    body: "TypeScriptを使ったReact開発の良い実践方法について説明します。型安全性を保ちながら開発する方法。",
    userId: 1,
  },
  {
    id: 3,
    title: "Storybookでコンポーネント開発",
    body: "Storybookを使用してReactコンポーネントを効率的に開発する方法について説明します。",
    userId: 2,
  },
];

const meta = {
  title: "Pages/SearchPresenter",
  component: SearchPresenter,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchPresenter>;

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルトストーリー
export const Default: Story = {
  args: {
    articles: mockArticles,
    inputValue: "",
    filteredArticles: mockArticles,
    onInputChange: () => {},
    onSearch: () => {},
    onClear: () => {},
  },
};

// 検索中の状態
export const WithSearchKeyword: Story = {
  args: {
    articles: mockArticles,
    inputValue: "React",
    filteredArticles: mockArticles.filter((article) =>
      article.title.toLowerCase().includes("react")
    ),
    onInputChange: () => {},
    onSearch: () => {},
    onClear: () => {},
  },
};

// 検索結果が0件の状態
export const NoResults: Story = {
  args: {
    articles: mockArticles,
    inputValue: "存在しないキーワード",
    filteredArticles: [],
    onInputChange: () => {},
    onSearch: () => {},
    onClear: () => {},
  },
};

// 記事が0件の状態
export const EmptyState: Story = {
  args: {
    articles: [],
    inputValue: "",
    filteredArticles: [],
    onInputChange: () => {},
    onSearch: () => {},
    onClear: () => {},
  },
};
