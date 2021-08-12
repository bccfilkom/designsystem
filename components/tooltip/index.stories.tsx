import * as React from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
SystemWrapper,
SystemBlock,
ComponentBlock,
} from "../_utils/storybook";
import { useState } from "react";
import Button from '../button/component/Button'
// import './component/tooltip.css';
import Tooltip from './component/Tooltip'

import styled from "styled-components";

export default {
title: "Component|Tooltip",
// component: [Tabs, TabPane],
decorators: [SystemWrapper, withKnobs],
};

const Styles = styled.div`
    .wrapper {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;


export const TopCenter = () => {
    return(
        <>
            <SystemBlock title="BCC Design System - Tooltip">
                <Stack spacing="xl">
                    <Styles>
                        <div className="wrapper">
                            <Tooltip text="This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed." position="top center" otherOption width="300">
                                <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                            </Tooltip>
                        </div>
                    </Styles>
                </Stack>
                <Stack spacing="xl">
                    <Styles>
                        <div className="wrapper">
                            <Tooltip text="This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed." position="top center" width="300">
                                <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                            </Tooltip>
                        </div>
                    </Styles>
                </Stack>
            </SystemBlock>
        </>
    )
}

export const TopLeft = () => {
    return(
        <>
            <SystemBlock title="BCC Design System - Tooltip">
                <Stack spacing="xl">
                    <Styles>
                        <div className="wrapper">
                            <Tooltip text="This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed." position="top left" otherOption width="300">
                                <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                            </Tooltip>
                        </div>
                    </Styles>
                </Stack>
                <Stack spacing="xl">
                    <Styles>
                        <div className="wrapper">
                            <Tooltip text="This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed." position="top left" width="300">
                                <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                            </Tooltip>
                        </div>
                    </Styles>
                </Stack>
            </SystemBlock>
        </>
    )
}

export const TopRight = () => {
    return(
        <>
            <SystemBlock title="BCC Design System - Tooltip">
                <Stack spacing="xl">
                    <Styles>
                        <div className="wrapper">
                            <Tooltip text="This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed." position="top right" otherOption width="300">
                                <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                            </Tooltip>
                        </div>
                    </Styles>
                </Stack>
                <Stack spacing="xl">
                    <Styles>
                        <div className="wrapper">
                            <Tooltip text="This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed." position="top right" width="300">
                                <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                            </Tooltip>
                        </div>
                    </Styles>
                </Stack>
            </SystemBlock>
        </>
    )
}

export const BottomCenter = () => {
    return(
        <>
            <SystemBlock title="BCC Design System - Tooltip">
                <Stack spacing="xl">
                    <Styles>
                        <div className="wrapper">
                            <Tooltip text="This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed." position="bottom center" otherOption width="300">
                                <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                            </Tooltip>
                        </div>
                    </Styles>
                </Stack>
                <Stack spacing="xl">
                    <Styles>
                        <div className="wrapper">
                            <Tooltip text="This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed." position="bottom center" width="300">
                                <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                            </Tooltip>
                        </div>
                    </Styles>
                </Stack>
            </SystemBlock>
        </>
    )
}

export const BottomLeft = () => {
    return(
        <>
            <SystemBlock title="BCC Design System - Tooltip">
                <Stack spacing="xl">
                    <Styles>
                        <div className="wrapper">
                            <Tooltip text="This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed." position="bottom left" otherOption width="300">
                                <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                            </Tooltip>
                        </div>
                    </Styles>
                </Stack>
                <Stack spacing="xl">
                    <Styles>
                        <div className="wrapper">
                            <Tooltip text="This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed." position="bottom left" width="300">
                                <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                            </Tooltip>
                        </div>
                    </Styles>
                </Stack>
            </SystemBlock>
        </>
    )
}

export const BottomRight = () => {
    return(
        <>
            <SystemBlock title="BCC Design System - Tooltip">
                <Stack spacing="xl">
                    <Styles>
                        <div className="wrapper">
                            <Tooltip text="This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed." position="bottom right" otherOption width="300">
                                <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                            </Tooltip>
                        </div>
                    </Styles>
                </Stack>
                <Stack spacing="xl">
                    <Styles>
                        <div className="wrapper">
                            <Tooltip text="This tooltip shows the maximum amount of messages that should appear inside. Use a modal if more space is needed." position="bottom right" width="300">
                                <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                            </Tooltip>
                        </div>
                    </Styles>
                </Stack>
            </SystemBlock>
        </>
    )
}