import * as React from "react";
import { Stack } from "../_foundations/common";
import { withKnobs } from "@storybook/addon-knobs";
import { SystemWrapper, SystemBlock } from "../_utils/storybook";
import Button from "./component/Button";

const androidWhiteIcon = require('../_foundations/icon/android_white.svg') as string
const androidBlueIcon = require('../_foundations/icon/android_blue.svg') as string

export default {
  title: "Component|Button",
  decorators: [SystemWrapper, withKnobs],
};

export const Primary = () => {
  return (
    <SystemBlock title="BCC Design System - Button">
      <Stack spacing="xl">
        <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
        <br/>
        <Button icon={androidWhiteIcon}>WITH ICON</Button>
      </Stack>
    </SystemBlock>
  );
};

export const Skeleton = () => {
  return (
    <SystemBlock title="BCC Design System - Button">
      <Stack spacing="xl">
        <Button className="skeleton">BUTTON</Button>
      </Stack>
    </SystemBlock>
  );
};

export const Text = () => {
  return (
    <SystemBlock title="BCC Design System - Button">
      <Stack spacing="xl">
        <Button type="text">BUTTON TEXT</Button>
        <br/>
        <Button type="text" icon={androidBlueIcon}>WITH ICON</Button>
      </Stack>
    </SystemBlock>
  );
};

export const Secondary = () => {
  return (
    <SystemBlock title="BCC Design System - Button">
      <Stack spacing="xl">
        <Button type="secondary">BUTTON SECONDARY</Button>
        <br/>
        <Button type="secondary" icon={androidBlueIcon}>WITH ICON</Button>
      </Stack>
    </SystemBlock>
  );
};

export const Condensed = () => {
  return (
    <SystemBlock title="BCC Design System - Button">
      <Stack spacing="xl">
        <Button condensed>BUTTON CONDENSED</Button>
        <br/>
        <Button condensed icon={androidWhiteIcon}>WITH ICON</Button>
      </Stack>
    </SystemBlock>
  );
};
