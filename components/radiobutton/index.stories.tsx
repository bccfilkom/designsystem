import * as React from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import Radiobutton from "./component/Radiobutton";

export default {
  title: "Component|Radiobutton",
  // component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
};

export const Example = () => (
  <SystemBlock title="BCC Design System - Radio Button">
    <Stack spacing="xl">
      <Radiobutton />
    </Stack>
  </SystemBlock>
);
