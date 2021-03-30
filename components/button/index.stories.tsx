import * as React from "react";
import { Stack } from "../_foundations/common";
import { withKnobs} from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
} from "../_utils/storybook";
import Button from './component/Button'

export default {
  title: "Component|Button",
  decorators: [SystemWrapper, withKnobs],
};

export const ButtonPrimary = () => {
  return (
    <SystemBlock title="BCC Design System - Button">
      <Stack spacing="xl">
        <Button>BUTTON</Button>
      </Stack>
    </SystemBlock>
  );
};

export const ButtonSecondary = () => {
  return (
    <SystemBlock title="BCC Design System - Button">
      <Stack spacing="xl">
        <Button secondary>BUTTON SECONDARY</Button>
      </Stack>
    </SystemBlock>
  );
};

export const ButtonCondensed = () => {
  return (
    <SystemBlock title="BCC Design System - Button">
      <Stack spacing="xl">
        <Button secondary condensed>BUTTON CONDENSED</Button>
      </Stack>
    </SystemBlock>
  );
};