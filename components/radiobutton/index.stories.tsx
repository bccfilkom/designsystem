import * as React from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import RadioButton from "./component/RadioButton";
import RadioGroup from "./component/RadioGroup";
import { useState } from "react";

export default {
  title: "Component|Radio",
  // component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => {
  const [option, setOption] = useState("BCC");

  const handleRadio = (e) => {
    setOption(e.target.value);
  };

  return (
    <SystemBlock title="BCC Design System - Radio">
      <Stack spacing="xl">
        <RadioGroup>
          <RadioButton
            id="option1"
            value="BCC"
            checked={option == "BCC"}
            handleChange={handleRadio}
          >
            BCC
          </RadioButton>
          <RadioButton
            id="option2"
            value="Design"
            checked={option == "Design"}
            handleChange={handleRadio}
          >
            Design
          </RadioButton>
          <RadioButton
            value="System"
            id="option3"
            checked={option == "System"}
            handleChange={handleRadio}
          >
            System
          </RadioButton>
        </RadioGroup>
      </Stack>
    </SystemBlock>
  );
};

export const Disable = () => {
  const [option, setOption] = useState("BCC");

  const handleRadio = (e) => {
    setOption(e.target.value);
  };

  return (
    <SystemBlock title="BCC Design System - Radio Disable">
      <Stack spacing="xl">
        <RadioGroup>
          <RadioButton
            id="option1"
            value="BCC"
            checked={option == "BCC"}
            handleChange={handleRadio}
            disabled
          >
            BCC
          </RadioButton>
          <RadioButton
            id="option2"
            value="Design"
            checked={option == "Design"}
            handleChange={handleRadio}
            disabled
          >
            Design
          </RadioButton>
          <RadioButton
            value="System"
            id="option3"
            checked={option == "System"}
            handleChange={handleRadio}
            disabled
          >
            System
          </RadioButton>
        </RadioGroup>
      </Stack>
    </SystemBlock>
  );
};
