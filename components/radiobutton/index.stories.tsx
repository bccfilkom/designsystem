import * as React from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import Radiobutton from "./component/Radiobutton";
import RadioGroup from "./component/RadioGroup";

export default {
  title: "Component|Radiobutton",
  // component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => (
  <SystemBlock title="BCC Design System - Radio Button">
    <Stack spacing="xl">
      <RadioGroup>
        <Radiobutton checked={true} label="BCC" name="options" />
        <Radiobutton label="Design" name="options" />
        <Radiobutton label="System" name="options" />
      </RadioGroup>
    </Stack>
  </SystemBlock>
);

export const Disabled = () => (
  <SystemBlock title="BCC Design System - Radio Button">
    <Stack spacing="xl">
      <RadioGroup>
        <Radiobutton checked={true} label="BCC" name="options" disabled />
        <Radiobutton label="Design" name="options" disabled />
        <Radiobutton label="System" name="options" disabled />
      </RadioGroup>
    </Stack>
  </SystemBlock>
);
