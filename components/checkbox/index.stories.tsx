import * as React from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import Checkbox from "./component/Checkbox";
import { useState } from "react";

export default {
  title: "Component|Checkbox",
  // component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
};

export const Example = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SystemBlock title="BCC Design System - Checkbox">
      <Stack spacing="xl">
        <label>
          <Checkbox
            checked={isChecked}
            handleChange={() => setIsChecked(!isChecked)}
          />
        </label>
      </Stack>
    </SystemBlock>
  );
};
