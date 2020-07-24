import * as React from "react";
import { SystemWrapper, SystemBlock } from "../_utils/storybook";
import { Stack } from "../_foundations/common";
import { Tabs } from ".";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

const readme = require("./README.md");

export default {
  title: "Component|Tabs",
  component: [Tabs],
  decorators: [SystemWrapper, withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const groupItem = "Item";
const groupLastItem = "Last Item";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
export const Example = () => (
  <SystemBlock title="Breadcrumbs">
    <Stack spacing="xl">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </Stack>
  </SystemBlock>
);
