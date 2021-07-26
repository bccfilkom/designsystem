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


export const iconTopCenter = () => {
    return(
        <>
            <SystemBlock title="BCC Design System - Tooltip Without Other Button">
                <Stack spacing="xl">
                    <Tooltip text="Nofath Zukhrufi Haideal adwasd adwasd a asdwa sda" position="bottom right"> {/*Jika tidak ditampilkan width nya, maka ukuran tooltip akan hampir mirip dengan ukuran komponen nya */}
                        <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                    </Tooltip>
                </Stack>
            </SystemBlock>
            <SystemBlock title="BCC Design System - Tooltip With Other Button">
                <Stack spacing="xl">
                    <Tooltip text="Nofath Zukhrufi Haideal adwasd adwasd a asdwa sda" position="bottom left" otherOption width="300">
                        <Button onClick={() => console.log("Hello world")}>BUTTON</Button>
                    </Tooltip>
                </Stack>
            </SystemBlock>
        </>
    )
}