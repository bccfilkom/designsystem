import * as React from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import TextField from "./component/TextField";

export default {
  title: "Component|Text Field",
  // component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => (
  <SystemBlock title="BCC Design System - Text Field">
    <Stack spacing="xl">
      <TextField hintText="Hint Text" />
    </Stack>
  </SystemBlock>
);

export const Disabled = () => (
  <SystemBlock title="BCC Design System - Text Field">
    <Stack spacing="xl">
      <TextField disabled />
    </Stack>
  </SystemBlock>
);

export const Warning = () => (
  <SystemBlock title="BCC Design System - Text Field">
    <Stack spacing="xl">
      <TextField hintText="Warning Text" isWarning={true} />
    </Stack>
  </SystemBlock>
);

export const Error = () => (
  <SystemBlock title="BCC Design System - Text Field">
    <Stack spacing="xl">
      <TextField hintText="Warning Text" isError />
    </Stack>
  </SystemBlock>
);
