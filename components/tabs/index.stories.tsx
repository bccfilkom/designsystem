import * as React from "react";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import { Stack } from "../_foundations/common";
import { Tabs, TabPane } from ".";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { Box } from "../_foundations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const readme = require("./README.md");

export default {
  title: "Component|Tabs",
  component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};
function callback(key) {
  console.log(key);
}

export const Example = () => (
  <SystemBlock title="BCC Design System - Tabs">
    <Stack spacing="xl">
      <ComponentBlock title="" withBackground pd="0">
        <Box
          display="grid"
          width="100%"
          gridGap="30px"
          gridTemplateColumns="repeat(3,1fr)"
        >
          <Tabs defaultActiveKey="1" onChange={callback} tabStyle="Primary">
            <TabPane tab="Tab 1" key="1"></TabPane>
            <TabPane tab="Tab 2" key="2"></TabPane>
            <TabPane tab="Tab 3" key="3" disabled></TabPane>
          </Tabs>
          <Tabs defaultActiveKey="1" onChange={callback} tabStyle="Ligth">
            <TabPane tab="Tab 1" key="1"></TabPane>
            <TabPane tab="Tab 2" key="2"></TabPane>
            <TabPane tab="Tab 3" key="3" disabled></TabPane>
          </Tabs>
          <Tabs defaultActiveKey="1" onChange={callback} tabStyle="Darkk">
            <TabPane tab="Tab 1" key="1"></TabPane>
            <TabPane tab="Tab 2" key="2"></TabPane>
            <TabPane tab="Tab 3" key="3" disabled></TabPane>
          </Tabs>
        </Box>
      </ComponentBlock>
      <ComponentBlock title="" withBackground pd="0">
        <Box
          display="grid"
          width="100%"
          gridGap="30px"
          gridTemplateColumns="auto 2fr"
        >
          <Tabs defaultActiveKey="1" onChange={callback} tabStyle="Darkk">
            <TabPane
              tab={<FontAwesomeIcon icon={faShoppingBag} />}
              key="1"
            ></TabPane>
            <TabPane tab={<FontAwesomeIcon icon={faHome} />} key="2"></TabPane>
            <TabPane
              tab={<FontAwesomeIcon icon={faUserCircle} />}
              key="3"
            ></TabPane>
          </Tabs>
          <Tabs defaultActiveKey="1" onChange={callback} tabStyle="Primary">
            <TabPane tab="Tab 1" key="1"></TabPane>
            <TabPane tab="Tab 2" key="2"></TabPane>
            <TabPane tab="Tab 3" key="3"></TabPane>
            <TabPane tab="Tab 4" key="4" disabled></TabPane>
          </Tabs>
        </Box>
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);
