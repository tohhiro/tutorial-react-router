import type { Meta, StoryObj } from "@storybook/react";
import { ClearButton } from "./index";

const meta = {
  title: "Feature/Search/ClearButton",
  component: ClearButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: { action: "clicked" },
    label: {
      control: "text",
      description: "ボタンに表示するテキスト",
    },
  },
  args: {
    onClick: () => {},
  },
} satisfies Meta<typeof ClearButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルトのStory
export const Default: Story = {
  args: {
    label: "クリア",
  },
};

// カスタムラベルのStory
export const CustomLabel: Story = {
  args: {
    label: "リセット",
  },
};
