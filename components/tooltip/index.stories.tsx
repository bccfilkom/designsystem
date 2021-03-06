import * as React from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import Button from '../button/component/Button'
import Tooltip from './component/Tooltip'
import styled from "styled-components";
import './component/Tooltip.css'

export default {
  title: "Component|Tooltip",
  decorators: [SystemWrapper, withKnobs],
};

const Styles = styled.div`
    .wrapper {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    }
`;

export const TopCenter = () => {
  return (
    <>
      <SystemBlock title="BCC Design System - Tooltip">
        <Stack spacing="xl">
          <Styles>
            <div className="wrapper">

              <Tooltip.Wrapper>
                <Tooltip.Box position="top center" width="300">
                  This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed.
                  <Tooltip.OtherOptions>
                    <div onMouseEnter={() => {console.log("masuk")}}></div>
                    <Button className="clear-bg" type="text">BUTTON TEXT</Button>
                    <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                  </Tooltip.OtherOptions>
                </Tooltip.Box>
                <Tooltip.Trigger>
                  <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                </Tooltip.Trigger>
              </Tooltip.Wrapper>

              <Tooltip.Wrapper>
                <Tooltip.Box position="top center" width="300">
                  This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed.
                </Tooltip.Box>
                <Tooltip.Trigger>
                  <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                </Tooltip.Trigger>
              </Tooltip.Wrapper>

            </div>
          </Styles>

        </Stack>
      </SystemBlock>
    </>
  )
}

export const TopLeft = () => {
  return (
    <>
      <SystemBlock title="BCC Design System - Tooltip">
        <Stack spacing="xl">
          <Styles>
            <div className="wrapper">

              <Tooltip.Wrapper>
                <Tooltip.Box position="top left" width="300">
                  This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed.
                  <Tooltip.OtherOptions>
                    <Button className="clear-bg" type="text">BUTTON TEXT</Button>
                    <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                  </Tooltip.OtherOptions>
                </Tooltip.Box>
                <Tooltip.Trigger>
                  <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                </Tooltip.Trigger>
              </Tooltip.Wrapper>

              <Tooltip.Wrapper>
                <Tooltip.Box position="top left" width="300">
                  This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed.
                </Tooltip.Box>
                <Tooltip.Trigger>
                  <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                </Tooltip.Trigger>
              </Tooltip.Wrapper>

            </div>
          </Styles>
        

        </Stack>
      </SystemBlock>
    </>
  )
}

export const TopRight = () => {
  return (
    <>
      <SystemBlock title="BCC Design System - Tooltip">
        <Stack spacing="xl">
          <Styles>
            <div className="wrapper">

              <Tooltip.Wrapper>
                <Tooltip.Box position="top right" width="300">
                  This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed.
                  <Tooltip.OtherOptions>
                    <Button className="clear-bg" type="text">BUTTON TEXT</Button>
                    <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                  </Tooltip.OtherOptions>
                </Tooltip.Box>
                <Tooltip.Trigger>
                  <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                </Tooltip.Trigger>
              </Tooltip.Wrapper>

              <Tooltip.Wrapper>
                <Tooltip.Box position="top right" width="300">
                  This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed.
                </Tooltip.Box>
                <Tooltip.Trigger>
                  <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                </Tooltip.Trigger>
              </Tooltip.Wrapper>

            </div>
          </Styles>

        </Stack>
      </SystemBlock>
    </>
  )
}

export const BottomCenter = () => {
  return (
    <>
      <SystemBlock title="BCC Design System - Tooltip">
        <Stack spacing="xl">
          <Styles>
            <div className="wrapper">

              <Tooltip.Wrapper>
                <Tooltip.Box position="bottom center" width="300">
                  This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed.
                  <Tooltip.OtherOptions>
                    <Button className="clear-bg" type="text">BUTTON TEXT</Button>
                    <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                  </Tooltip.OtherOptions>
                </Tooltip.Box>
                <Tooltip.Trigger>
                  <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                </Tooltip.Trigger>
              </Tooltip.Wrapper>

              <Tooltip.Wrapper>
                <Tooltip.Box position="bottom center" width="300">
                  This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed.
                </Tooltip.Box>
                <Tooltip.Trigger>
                  <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                </Tooltip.Trigger>
              </Tooltip.Wrapper>

            </div>
          </Styles>

        </Stack>
      </SystemBlock>
    </>
  )
}

export const BottomLeft = () => {
  return (
    <>
      <SystemBlock title="BCC Design System - Tooltip">
        <Stack spacing="xl">
          <Styles>
            <div className="wrapper">

              <Tooltip.Wrapper>
                <Tooltip.Box position="bottom left" width="300">
                  This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed.
                  <Tooltip.OtherOptions>
                    <Button className="clear-bg" type="text">BUTTON TEXT</Button>
                    <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                  </Tooltip.OtherOptions>
                </Tooltip.Box>
                <Tooltip.Trigger>
                  <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                </Tooltip.Trigger>
              </Tooltip.Wrapper>

              <Tooltip.Wrapper>
                <Tooltip.Box position="bottom left" width="300">
                  This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed.
                </Tooltip.Box>
                <Tooltip.Trigger>
                  <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                </Tooltip.Trigger>
              </Tooltip.Wrapper>

            </div>
          </Styles>

        </Stack>
      </SystemBlock>
    </>
  )
}

export const BottomRight = () => {
  return (
    <>
      <SystemBlock title="BCC Design System - Tooltip">
        <Stack spacing="xl">
          <Styles>
            <div className="wrapper">

              <Tooltip.Wrapper>
                <Tooltip.Box position="bottom right" width="300">
                  This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed.
                  <Tooltip.OtherOptions>
                    <Button className="clear-bg" type="text">BUTTON TEXT</Button>
                    <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                  </Tooltip.OtherOptions>
                </Tooltip.Box>
                <Tooltip.Trigger>
                  <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                </Tooltip.Trigger>
              </Tooltip.Wrapper>

              <Tooltip.Wrapper>
                <Tooltip.Box position="bottom right" width="300">
                  This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed.
                </Tooltip.Box>
                <Tooltip.Trigger>
                  <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                </Tooltip.Trigger>
              </Tooltip.Wrapper>
              
            </div>
          </Styles>

        </Stack>
      </SystemBlock>
    </>
  )
}