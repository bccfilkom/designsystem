import * as React from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import Switcher from "./component/Switcher";
import { useState } from "react";

export default {
  title: "Component|Switcher",
  // component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => {
  const [isSwitch, setIsSwitch] = useState(false);
  return (
    <SystemBlock title="BCC Design System - Switcher">
      <Stack spacing="xl">
        <Switcher checked={isSwitch} onSlide={() => setIsSwitch(!isSwitch)} />
      </Stack>
    </SystemBlock>
  );
};

export const DefaultChecked = () => {
  const [isSwitch, setIsSwitch] = useState(true);
  return (
    <SystemBlock title="BCC Design System - Switcher">
      <Stack spacing="xl">
        <Switcher checked={isSwitch} onSlide={() => setIsSwitch(!isSwitch)} />
      </Stack>
    </SystemBlock>
  );
};

export const DefaultDisabled = () => (
  <SystemBlock title="BCC Design System - Switcher">
    <Stack spacing="xl">
      <Switcher disabled />
    </Stack>
  </SystemBlock>
);
