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
        <Appbar title='Title' icons={[LikeIcon, LikeIcon]}/>
      </Stack>
    </SystemBlock>
  );
};

