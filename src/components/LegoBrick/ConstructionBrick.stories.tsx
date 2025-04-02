import type { Meta, StoryObj } from "@storybook/react";
import { ConstructionBrick } from "./ConstructionBrick";
import { ConstructionBrickColor, ConstructionBrickVariant } from "./ConstructionBrick.types";

const meta: Meta<typeof ConstructionBrick> = {
  title: "Components/ConstructionBrick",
  component: ConstructionBrick,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: Object.values(ConstructionBrickColor),
    },
    variant: {
      control: "select",
      options: Object.values(ConstructionBrickVariant),
    },
    badgeNrOfDots: {
      control: "number",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ConstructionBrick>;

const defaultContent = (
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula justo, dapibus nec rutrum finibus, blandit at massa. Integer et laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce aliquam ullamcorper lectus sit amet lobortis. Quisque ut quam molestie, lacinia nibh quis, consequat sapien.</p>
);

export const VariantARed: Story = {
  args: {
    color: ConstructionBrickColor.RED,
    variant: ConstructionBrickVariant.A,
    children: defaultContent,
  },
};

export const VariantAGreen: Story = {
  args: {
    color: ConstructionBrickColor.GREEN,
    variant: ConstructionBrickVariant.A,
    children: defaultContent,
  },
};

export const VariantAViolet: Story = {
  args: {
    color: ConstructionBrickColor.VIOLET,
    variant: ConstructionBrickVariant.A,
    children: defaultContent,
  },
};

export const VariantBRed: Story = {
  args: {
    color: ConstructionBrickColor.RED,
    variant: ConstructionBrickVariant.B,
    children: defaultContent,
  },
};

export const VariantBGreen: Story = {
  args: {
    color: ConstructionBrickColor.GREEN,
    variant: ConstructionBrickVariant.B,
    children: defaultContent,
  },
};

export const VariantBViolet: Story = {
  args: {
    color: ConstructionBrickColor.VIOLET,
    variant: ConstructionBrickVariant.B,
    children: defaultContent,
  },
};

export const VariantCRed: Story = {
  args: {
    color: ConstructionBrickColor.RED,
    variant: ConstructionBrickVariant.C,
    children: defaultContent,
  },
};

export const VariantCGreen: Story = {
  args: {
    color: ConstructionBrickColor.GREEN,
    variant: ConstructionBrickVariant.C,
    children: defaultContent,
  },
};

export const VariantCViolet: Story = {
  args: {
    color: ConstructionBrickColor.VIOLET,
    variant: ConstructionBrickVariant.C,
    children: defaultContent,
  },
};
