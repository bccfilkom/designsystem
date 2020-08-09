import * as React from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import Checkbox from "./component/Checkbox";

export default {
  title: "Component|Checkbox",
  // component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
};

export const Example = () => (
  <SystemBlock title="BCC Design System - Checkbox">
    <Stack spacing="xl">
      <Checkbox />
    </Stack>
  </SystemBlock>
);
