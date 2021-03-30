import * as React from "react";
import { Stack } from "../_foundations/common";
import { withKnobs } from "@storybook/addon-knobs";
import AndroidOutlinedIcon from "@material-ui/icons/AndroidOutlined";
import { SystemWrapper, SystemBlock } from "../_utils/storybook";
import Button from "./component/Button";

export default {
  title: "Component|Button",
  decorators: [SystemWrapper, withKnobs],
};

export const Primary = () => {
  return (
    <SystemBlock title="BCC Design System - Button">
      <Stack spacing="xl">
        <Button>BUTTON</Button>
      </Stack>
    </SystemBlock>
  );
};

export const Text = () => {
  return (
    <SystemBlock title="BCC Design System - Button">
      <Stack spacing="xl">
        <Button type="text">BUTTON TEXT</Button>
      </Stack>
    </SystemBlock>
  );
};

export const Secondary = () => {
  return (
    <SystemBlock title="BCC Design System - Button">
      <Stack spacing="xl">
        <Button type="secondary">BUTTON SECONDARY</Button>
      </Stack>
    </SystemBlock>
  );
};

export const Condensed = () => {
  return (
    <SystemBlock title="BCC Design System - Button">
      <Stack spacing="xl">
        <Button condensed>BUTTON CONDENSED</Button>
      </Stack>
    </SystemBlock>
  );
};
