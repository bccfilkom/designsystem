import React, { useState } from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import Drawer from "./component/Drawer";
import Button from "@material-ui/core/Button";
import User from "@material-ui/icons/SupervisedUserCircle";
import Settings from "@material-ui/icons/Settings";
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default {
  title: "Component|Drawer",
  // component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => {
  const [password, setPassord] = useState("");
  const [isShow, setIsShow] = useState(false);
  return (
    <SystemBlock title="BCC Design System - Drawer">
      <Stack spacing="xl">
        <Button onClick={()=>setIsShow(!isShow)}>dq</Button>
        <Drawer isOpened={isShow}>
          <Drawer.Head isOp={isShow}></Drawer.Head>
          <Drawer.Body>
            <Drawer.Menu name="Menu 1" isOp={isShow}>
              <Drawer.Item iconDesc={isShow} icon={<User /> } name="Account"></Drawer.Item>
              <Drawer.Item iconDesc={isShow} icon={<NotificationsIcon />} name="Notification"></Drawer.Item>
              <Drawer.Item iconDesc={isShow} icon={<MessageIcon />} name="Message">

              </Drawer.Item>
            </Drawer.Menu>
            <Drawer.Menu name="Menu 2" isOp={isShow}>
              <Drawer.Item iconDesc={isShow} icon={<Settings />} name="Settings">
                <Drawer.SubItem>Security and account</Drawer.SubItem>
                <Drawer.SubItem>Privacy</Drawer.SubItem>
              </Drawer.Item>
              <Drawer.Item iconDesc={isShow} icon={<ExitToAppIcon />} name="Exit"></Drawer.Item>
            </Drawer.Menu>
          </Drawer.Body>  
        </Drawer>
      </Stack>
    </SystemBlock>
  );
};