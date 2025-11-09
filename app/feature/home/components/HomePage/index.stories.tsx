import type { Meta, StoryObj } from "@storybook/react";
import { HomePresenter } from "./index.presenter";
import { type ArticleData } from "../../../types/fetch.type";

// モックデータ
const mockArticles: ArticleData[] = [
  {
    id: 1,
    title: "最新記事: React Router v7入門",
    body: "React Router v7の新機能について詳しく解説します。SSR、ダイナミックルーティング、ローダー機能など。",
    userId: 1,
  },
  {
    id: 2,
    title: "TypeScript + React開発ガイド",
    body: "TypeScriptを使ったReact開発の実践的な手法について説明します。型安全性と開発効率の両立を実現。",
    userId: 2,
  },
  {
    id: 3,
    title: "モダンフロントエンド開発",
    body: "Vite、ESLint、Prettier、Vitestを使った効率的な開発環境の構築方法について。",
    userId: 1,
  },
  {
    id: 4,
    title: "パフォーマンス最適化テクニック",
    body: "Reactアプリケーションの描画性能を向上させるための実践的なテクニックを紹介します。",
    userId: 3,
  },
  {
    id: 5,
    title: "Component設計パターン",
    body: "再利用可能で保守しやすいReactコンポーネントの設計パターンについて詳しく解説。",
    userId: 2,
  },
];

const meta = {
  title: "Pages/HomePresenter",
  component: HomePresenter,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    articles: mockArticles,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HomePresenter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    articles: [],
  },
};
