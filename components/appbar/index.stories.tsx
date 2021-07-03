import * as React from "react";
import { Stack } from "../_foundations/common";
import { withKnobs } from "@storybook/addon-knobs";
import { SystemWrapper, SystemBlock } from "../_utils/storybook";
import Appbar from "./component/Appbar";

const LikeIcon = require("../_foundations/icon/like.svg") as string;
const MenuDotIcon = require("../_foundations/icon/menu-dot.svg") as string;
const SearchIcon = require("../_foundations/icon/search.svg") as string;
const ShareIcon = require("../_foundations/icon/share.svg") as string;
const TrashIcon = require("../_foundations/icon/trash.svg") as string;

export default {
  title: "Component|Appbar",
  decorators: [SystemWrapper, withKnobs],
};

export const Reguler = () => {
  return (
    <SystemBlock title="BCC Design System - Appbar - Reguler">
      <Stack spacing="xl">
        <Appbar
          width={360}
          title="Title"
          icons={[
            {
              icon: LikeIcon,
              onClick: () => {
                console.log("clicked");
              },
            },
            {
              icon: MenuDotIcon,
              onClick: () => {
                console.log("clicked");
              },
            },
          ]}
        />
        <br />
        <Appbar
          width={360}
          title="Title"
          icons={[
            {
              icon: MenuDotIcon,
              onClick: () => {
                console.log("clicked");
              },
            },
          ]}
        />
        <br />
        <Appbar
          width={360}
          title="Title"
          icons={[
            {
              icon: ShareIcon,
              onClick: () => {
                console.log("clicked");
              },
            },
            ,
            {
              icon: MenuDotIcon,
              onClick: () => {
                console.log("clicked");
              },
            },
          ]}
        />
        <br />
        <Appbar
          width={360}
          title="Title"
          icons={[
            {
              icon: MenuDotIcon,
              onClick: () => {
                console.log("clicked");
              },
            },
          ]}
        />
        <br />
      </Stack>
    </SystemBlock>
  );
};

export const WithoutNavigationItem = () => {
  return (
    <SystemBlock title="BCC Design System - Appbar - Without Navigation Item">
      <Stack spacing="xl">
        <Appbar
          width={360}
          title="Title"
          navItem={false}
          icons={[{ icon: MenuDotIcon, onClick: () => console.log("clicked") }]}
        />
        <br />
        <Appbar
          width={360}
          title="Title"
          navItem={false}
          icons={[
            { icon: SearchIcon, onClick: () => console.log("clicked") },
            { icon: MenuDotIcon, onClick: () => console.log("clicked") },
          ]}
        />
        <br />
      </Stack>
    </SystemBlock>
  );
};

export const Back = () => {
  return (
    <SystemBlock title="BCC Design System - Appbar - Back">
      <Stack spacing="xl">
        <Appbar
          width={360}
          title="Title"
          back
          icons={[{ icon: MenuDotIcon, onClick: () => console.log("clicked") }]}
        />
        <br />
      </Stack>
    </SystemBlock>
  );
};

export const Close = () => {
  return (
    <SystemBlock title="BCC Design System - Appbar - Close">
      <Stack spacing="xl">
        <Appbar
          width={360}
          title="Title"
          close
          icons={[
            { icon: TrashIcon, onClick: () => console.log("clicked") },
            { icon: MenuDotIcon, onClick: () => console.log("clicked") },
          ]}
        />
        <br />
      </Stack>
    </SystemBlock>
  );
};

export const WidthGreaterThan360 = () => {
  return (
    <SystemBlock title="BCC Design System - Appbar - Without Navigation Item">
      <Stack spacing="xl">
        <Appbar
          title="Title"
          icons={[
            { icon: ShareIcon, onClick: () => console.log("clicked") },
            { icon: SearchIcon, onClick: () => console.log("clicked") },
            { icon: MenuDotIcon, onClick: () => console.log("clicked") },
          ]}
        />
        <br />
      </Stack>
    </SystemBlock>
  );
};

export const Extended = () => {
  return (
    <SystemBlock title="BCC Design System - Appbar - Extended">
      <Stack spacing="xl">
        <Appbar
          width={360}
          title="Title"
          icons={[
            { icon: ShareIcon, onClick: () => console.log("clicked") },
            { icon: SearchIcon, onClick: () => console.log("clicked") },
            { icon: MenuDotIcon, onClick: () => console.log("clicked") },
          ]}
          extended
        />
        <br />
      </Stack>
    </SystemBlock>
  );
};
