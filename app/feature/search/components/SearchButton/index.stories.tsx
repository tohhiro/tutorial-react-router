import type { Meta, StoryObj } from "@storybook/react";
import { SearchButton } from "./index";

const meta = {
  component: SearchButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SearchButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomLabel: Story = {
  args: {
    label: "サーチ",
  },
};
