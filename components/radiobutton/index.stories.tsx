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
        <Radiobutton name="option" checked={true}>
          BCC
        </Radiobutton>
        <Radiobutton name="option">Design</Radiobutton>
        <Radiobutton name="option">System</Radiobutton>
      </RadioGroup>
    </Stack>
  </SystemBlock>
);

export const Disabled = () => (
  <SystemBlock title="BCC Design System - Radio Button">
    <Stack spacing="xl">
      <RadioGroup>
        <Radiobutton name="option" checked={true} disabled>
          BCC
        </Radiobutton>
        <Radiobutton name="option" disabled>
          Design
        </Radiobutton>
        <Radiobutton name="option" disabled>
          System
        </Radiobutton>
      </RadioGroup>
    </Stack>
  </SystemBlock>
);
