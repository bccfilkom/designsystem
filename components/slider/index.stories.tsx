import * as React from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
SystemWrapper,
SystemBlock,
ComponentBlock,
} from "../_utils/storybook";
import { useState } from "react";
import Slider from './components/Slider'

import styled from "styled-components";

export default {
title: "Component|Slider",
// component: [Tabs, TabPane],
decorators: [SystemWrapper, withKnobs],
};

const Styles = styled.div`
  .wrapper {
    width: 50%;
  }
`;


export const iconTopCenter = () => {
    return(
        <>
          <SystemBlock title="BCC Design System - Slider">
            <Stack spacing="xl">
              <Styles>
                <div className="wrapper">
                  <Slider min="0" max="100" value="50"/>
                </div>
              </Styles>
            </Stack>
          </SystemBlock>
          <SystemBlock title="BCC Design System - Slider Disabled">
            <Stack spacing="xl">
              <Styles>
                <div className="wrapper">
                  <Slider min="0" max="100" value="50" disabled/>
                </div>
              </Styles>
            </Stack>
          </SystemBlock>
        </>
    )
}