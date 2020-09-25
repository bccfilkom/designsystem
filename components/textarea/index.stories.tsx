import React, { useState } from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import TextArea from "./component/TextArea";

export default {
  title: "Component|Text Area",
  // component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => {
  const [search, setSearch] = useState("");
  return (
    <SystemBlock title="BCC Design System - Default">
      <Stack spacing="xl">
        <TextArea
          value={search}
          handleChange={(e) => setSearch(e.target.value)}
        />
      </Stack>
    </SystemBlock>
  );
};

export const Disabled = () => {
  const [search, setSearch] = useState("");
  return (
    <SystemBlock title="BCC Design System - Default">
      <Stack spacing="xl">
        <TextArea
          value={search}
          handleChange={(e) => setSearch(e.target.value)}
          disabled
        />
      </Stack>
    </SystemBlock>
  );
};
