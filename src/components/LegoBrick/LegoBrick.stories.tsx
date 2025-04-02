import type { Meta, StoryObj } from "@storybook/react";
import { LegoBrick } from "./LegoBrick";
import { LegoBrickColor, LegoBrickVariant, LegoBrickBadgePosition } from "./LegoBrick.types";

const meta: Meta<typeof LegoBrick> = {
  title: "Components/LegoBrick",
  component: LegoBrick,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: Object.values(LegoBrickColor),
    },
    variant: {
      control: "select",
      options: Object.values(LegoBrickVariant),
    },
    badgePosition: {
      control: "select",
      options: Object.values(LegoBrickBadgePosition),
    },
    badgeNrOfDots: {
      control: "number",
    },
  },
};

export default meta;

type Story = StoryObj<typeof LegoBrick>;

const defaultContent = (
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula justo, dapibus nec rutrum finibus, blandit at massa. Integer et laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce aliquam ullamcorper lectus sit amet lobortis. Quisque ut quam molestie, lacinia nibh quis, consequat sapien.</p>
);

export const VariantARed: Story = {
  args: {
    color: LegoBrickColor.RED,
    variant: LegoBrickVariant.A,
    children: defaultContent,
  },
};

export const VariantAGreen: Story = {
  args: {
    color: LegoBrickColor.GREEN,
    variant: LegoBrickVariant.A,
    children: defaultContent,
  },
};

export const VariantAViolet: Story = {
  args: {
    color: LegoBrickColor.VIOLET,
    variant: LegoBrickVariant.A,
    children: defaultContent,
  },
};

export const VariantBRed: Story = {
  args: {
    color: LegoBrickColor.RED,
    variant: LegoBrickVariant.B,
    children: defaultContent,
  },
};

export const VariantBGreen: Story = {
  args: {
    color: LegoBrickColor.GREEN,
    variant: LegoBrickVariant.B,
    children: defaultContent,
  },
};

export const VariantBViolet: Story = {
  args: {
    color: LegoBrickColor.VIOLET,
    variant: LegoBrickVariant.B,
    children: defaultContent,
  },
};

export const VariantCRed: Story = {
  args: {
    color: LegoBrickColor.RED,
    variant: LegoBrickVariant.C,
    children: defaultContent,
  },
};

export const VariantCGreen: Story = {
  args: {
    color: LegoBrickColor.GREEN,
    variant: LegoBrickVariant.C,
    children: defaultContent,
  },
};

export const VariantCViolet: Story = {
  args: {
    color: LegoBrickColor.VIOLET,
    variant: LegoBrickVariant.C,
    children: defaultContent,
  },
};
