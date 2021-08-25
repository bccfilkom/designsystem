import React, { useState } from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import Password from "./component/Password";

export default {
  title: "Component|Password",
  // component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => {
  const [password, setPassord] = useState("");
  const [isShow, setIsShow] = useState(false);
  return (
    <SystemBlock title="BCC Design System - Password Field">
      <Stack spacing="xl">
        <Password
          required={true}
          value={password}
          visibilityEye={isShow}
          handleChange={(e) => setPassord(e.target.value)}
          handleShow={() => setIsShow(!isShow)}
        />
      </Stack>
    </SystemBlock>
  );
};

export const Placeholder = () => {
  const [password, setPassord] = useState("");
  const [isShow, setIsShow] = useState(false);
  return (
    <SystemBlock title="BCC Design System - Password Field">
      <Stack spacing="xl">
        <Password
          value={password}
          placeholder="Type your password here"
          visibilityEye={isShow}
          handleChange={(e) => setPassord(e.target.value)}
          handleShow={() => setIsShow(!isShow)}
        />
      </Stack>
    </SystemBlock>
  );
};

export const HintText = () => {
  const [password, setPassord] = useState("");
  const [isShow, setIsShow] = useState(false);
  return (
    <SystemBlock title="BCC Design System - Password Field">
      <Stack spacing="xl">
        <Password
          value={password}
          placeholder="Type your password here"
          hintText="Password need 8 - 24 Charachter"
          visibilityEye={isShow}
          handleChange={(e) => setPassord(e.target.value)}
          handleShow={() => setIsShow(!isShow)}
        />
      </Stack>
    </SystemBlock>
  );
};

export const Disabled = () => {
  const [password, setPassord] = useState("");
  const [isShow, setIsShow] = useState(false);
  return (
    <SystemBlock title="BCC Design System - Password Field">
      <Stack spacing="xl">
        <Password
          disabled
          value={password}
          visibilityEye={isShow}
          handleChange={(e) => setPassord(e.target.value)}
          handleShow={() => setIsShow(!isShow)}
        />
      </Stack>
    </SystemBlock>
  );
};

export const Action = () => {
  const [password, setPassord] = useState("");
  const [isShow, setIsShow] = useState(false);
  return (
    <SystemBlock title="BCC Design System - Password Field">
      <Stack spacing="xl">
        <Password
          value={password}
          placeholder="Password"
          action="error"
          visibilityEye={isShow}
          handleChange={(e) => setPassord(e.target.value)}
          handleShow={() => setIsShow(!isShow)}
        />
      </Stack>
    </SystemBlock>
  );
};
