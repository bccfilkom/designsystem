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
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => {
  return (
    <SystemBlock title="BCC Design System - Checkbox">
      <Stack spacing="xl">
        <Checkbox value="BCC"/>
        <Checkbox value="Design"/>
        <Checkbox value="System"/>
      </Stack>
    </SystemBlock>
  );
};


export const Selected = () => {
  return (
    <SystemBlock title="BCC Design System - Checkbox (Selected)">
      <Stack spacing="xl">
        <Checkbox value="Option 1" checked/>  
      </Stack>
    </SystemBlock>
  );
};


export const Indetermined = () => {
  return (
    <SystemBlock title="BCC Design System - Checkbox (Indetermined)">
      <Stack spacing="xl">
        <Checkbox value="Option 1" indeterminated />  
      </Stack>
    </SystemBlock>
  );
};

export const Disabled = () => {
  return (
    <SystemBlock title="BCC Design System - Checkbox (Disabled)">
      <Stack spacing="xl">
        <Checkbox value="Option 1" disabled/>  
        <Checkbox value="Option 2" disabled checked/>  
        <Checkbox value="Option 3" disabled indeterminated/>  
      </Stack>
    </SystemBlock>
  );
};
