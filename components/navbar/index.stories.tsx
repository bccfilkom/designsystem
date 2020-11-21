import React, { useState } from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import Navbar from "./component/Navbar";
import logo from "./assets/BCC-Logo-White.svg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";


export default {
  title: "Component|Navbar",
  // component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => {
  return (
    <SystemBlock title="BCC Design System - Navbar with logo - Social Media Icon">
      <Stack spacing="xl">
      <Navbar
        items={[
          { name: "NavItem1", href: "#NavItem1" },
          { name: "NavItem2", href: "#NavItem2" },
          { name: "NavItem3", href: "#NavItem3" },
          { name: "NavItem4", href: "#NavItem4" },
        ]}
        logo={logo}
        icons={[
          { icon: <InstagramIcon />, href:"https://instagram.com"},
          { icon: <TwitterIcon />, href:"https://twitter.com"},
          { icon: <LinkedInIcon />, href:"https://linked.in"}
        ]}
       searchActive
      />
      </Stack>
    </SystemBlock>
  );
};

export const OnlySearchIcon = () => {
  return (
    <SystemBlock title="BCC Design System - Navbar with logo - Only Search Icon">
      <Stack spacing="xl">
      <Navbar
        items={[
          { name: "NavItem1", href: "#NavItem1" },
          { name: "NavItem2", href: "#NavItem2" },
          { name: "NavItem3", href: "#NavItem3" },
          { name: "NavItem4", href: "#NavItem4" },
        ]}
        logo={logo}
       searchActive
      />
      </Stack>
    </SystemBlock>
  );
};

export const WithoutLogo = () => {
  return (
    <SystemBlock title="BCC Design System - Navbar without logo">
      <Stack spacing="xl">
      <Navbar
        items={[
          { name: "NavItem1", href: "#NavItem1" },
          { name: "NavItem2", href: "#NavItem2" },
          { name: "NavItem3", href: "#NavItem3" },
          { name: "NavItem4", href: "#NavItem4" },
        ]}
        icons={[
          { icon: <InstagramIcon />, href:"https://instagram.com"},
          { icon: <TwitterIcon />, href:"https://twitter.com"},
          { icon: <LinkedInIcon />, href:"https://linked.in"}
        ]}
       searchActive
      />
      </Stack>
    </SystemBlock>
  );
};

