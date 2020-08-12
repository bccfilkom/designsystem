import * as React from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import Switcher from "./component/Switcher";

export default {
  title: "Component|Switcher",
  // component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
};

export const Example = () => (
  <SystemBlock title="BCC Design System - Switcher">
    <Stack spacing="xl">
      <Switcher />
    </Stack>
  </SystemBlock>
);

export const DefaultChecked = () => (
  <SystemBlock title="BCC Design System - Switcher">
    <Stack spacing="xl">
      <Switcher checked={true} />
    </Stack>
  </SystemBlock>
);

export const Disabled = () => (
  <SystemBlock title="BCC Design System - Switcher">
    <Stack spacing="xl">
      <Switcher disabled={true} />
    </Stack>
  </SystemBlock>
);
