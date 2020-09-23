import React, { useState } from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import Search from "./component/Search";

export default {
  title: "Component|Search",
  // component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => {
  const [search, setSearch] = useState("");
  return (
    <SystemBlock title="BCC Design System - Search">
      <Stack spacing="xl">
        <Search
          value={search}
          handleChange={(e) => setSearch(e.target.value)}
          handleClear={() => setSearch("")}
        />
      </Stack>
    </SystemBlock>
  );
};

export const Disabled = () => (
  <SystemBlock title="BCC Design System - Search">
    <Stack spacing="xl">
      <Search />
    </Stack>
  </SystemBlock>
);
