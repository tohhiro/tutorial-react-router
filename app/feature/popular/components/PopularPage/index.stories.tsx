import type { Meta, StoryObj } from "@storybook/react";
import { PopularPresenter } from "./index.presenter";
import { type ArticleData } from "../../../types/fetch.type";

const mockArticles: ArticleData[] = [
  {
    id: 2,
    title: "人気記事: React Hooksの使い方",
    body: "React Hooksを使った効果的な状態管理の方法について詳しく説明します。useState、useEffect、useContextなどの基本的なフックから、カスタムフックの作成まで。",
    userId: 1,
  },
  {
    id: 10,
    title: "人気記事: TypeScript実践ガイド",
    body: "TypeScriptを使った実践的な開発手法について解説します。型定義、インターフェース、ジェネリクスなど、実際の開発で役立つテクニック。",
    userId: 2,
  },
];

const meta = {
  title: "Pages/PopularPresenter",
  component: PopularPresenter,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PopularPresenter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    articles: mockArticles,
  },
};

export const Empty: Story = {
  args: {
    articles: [],
  },
};
