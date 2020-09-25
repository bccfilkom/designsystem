import React, { useState } from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import PasswordField from "./component/PasswordField";

export default {
  title: "Component|Password Field",
  // component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => {
  const [password, setPassord] = useState("");
  const [isShow, setIsShow] = useState(false);
  return (
    <SystemBlock title="BCC Design System - Password Field">
      <Stack spacing="xl">
        <PasswordField
          value={password}
          visibilityEye={isShow}
          handleChange={(e) => setPassord(e.target.value)}
          handleShow={() => setIsShow(!isShow)}
        />
      </Stack>
    </SystemBlock>
  );
};

export const Disabled = () => (
  <SystemBlock title="BCC Design System - Password Field">
    <Stack spacing="xl">
      <PasswordField />
    </Stack>
  </SystemBlock>
);
