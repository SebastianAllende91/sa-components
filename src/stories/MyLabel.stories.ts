import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
  title: "MyLabel",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "inline-radio",
    },
    fontColor: {
      control: "color",
    },
  },
  component: MyLabel,
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic Label",
  },
};
export const AllCaps: Story = {
  args: {
    label: "All Caps Label",
    allCaps: true,
  },
};
export const secondary: Story = {
  args: {
    label: "Secondary Label",
    color: "text-secondary",
  },
};
export const CustomColor: Story = {
  args: {
    label: "Custom Color Label",
    fontColor: "#5517ac",
  },
};
