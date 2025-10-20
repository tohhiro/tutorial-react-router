import type { Meta, StoryObj } from "@storybook/react";
import { InputKeyword } from "./index";

const meta = {
  component: InputKeyword,
  parameters: {
    layout: "centered",
  },

  args: {
    keyword: "検索キーワード",
    onChange: () => {},
  },
} satisfies Meta<typeof InputKeyword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomKeyword: Story = {
  args: {
    keyword: "カスタムキーワード",
  },
};
