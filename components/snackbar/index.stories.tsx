import React, { useState } from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import InfoIcon from "@material-ui/icons/Info";
import SnackBar from "./component/SnackBar";
import { SnackBarWrapper } from "./component/SnackBar";

export default {
  title: "Component|Snack Bar",
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => {
  const [arr, setArr] = useState([]);
  const generate = () => {
    setArr([...arr, <SnackBar text="Text" alignment="left" layout='mobile'/>]);
  };
  return (
    <SystemBlock title="BCC Design System - Snack Bar">
      <Stack spacing="xl">
        <button onClick={generate}>Snack Bar</button>
        <SnackBarWrapper>
          {arr.map((e) => {
            return e;
          })}
        </SnackBarWrapper>
      </Stack>
    </SystemBlock>
  );
};

export const DefaultTwoRows = () => {
  const [arr, setArr] = useState([]);
  const generate = () => {
    setArr([
      ...arr,
      <SnackBar
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, culpa."
        alignment="left"
        layout='mobile'
      />,
    ]);
  };
  return (
    <SystemBlock title="BCC Design System - Snack Bar">
      <button onClick={generate}>Snack Bar</button>
      <Stack spacing="xl">
        <SnackBarWrapper>
          {arr.map((e) => {
            return e;
          })}
        </SnackBarWrapper>
      </Stack>
    </SystemBlock>
  );
};

export const WithAction = () => {
  const [arr, setArr] = useState([]);
  const generate = () => {
    setArr([...arr, <SnackBar text="Text" action="action" layout='mobile'/>]);
  };
  return (
    <SystemBlock title="BCC Design System - Snack Bar">
      <button onClick={generate}>Snack Bar</button>
      <Stack spacing="xl" style={{ margin: "auto" }}>
        <SnackBarWrapper>
          {arr.map((e) => {
            return e;
          })}
        </SnackBarWrapper>
      </Stack>
    </SystemBlock>
  );
};

export const WithActionTwoRows = () => {
  const [arr, setArr] = useState([]);
  const generate = () => {
    setArr([
      ...arr,
      <SnackBar
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        action="action"
        layout='mobile'
      />,
    ]);
  };
  return (
    <SystemBlock title="BCC Design System - Snack Bar">
      {" "}
      <button onClick={generate}>Snack Bar</button>
      <Stack spacing="xl" style={{ margin: "auto" }}>
        <SnackBarWrapper>
          {arr.map((e) => {
            return e;
          })}
        </SnackBarWrapper>
      </Stack>
    </SystemBlock>
  );
};

export const WithIcon = () => {
  const [arr, setArr] = useState([]);
  const generate = () => {
    setArr([...arr, <SnackBar text="Text" icon={<InfoIcon />} layout='mobile' />]);
  };
  return (
    <SystemBlock title="BCC Design System - Snack Bar">
      {" "}
      <button onClick={generate}>Snack Bar</button>
      <Stack spacing="xl">
        <SnackBarWrapper>
          {arr.map((e) => {
            return e;
          })}
        </SnackBarWrapper>
      </Stack>
    </SystemBlock>
  );
};

export const WithIconAndAction = () => {
  const [arr, setArr] = useState([]);
  const generate = () => {
    setArr([
      ...arr,
      <SnackBar text="Text" action="action" icon={<InfoIcon />}  layout='mobile'/>,
    ]);
  };
  return (
    <SystemBlock title="BCC Design System - Snack Bar">
      {" "}
      <button onClick={generate}>Snack Bar</button>
      <Stack spacing="xl">
        <SnackBarWrapper>
          {arr.map((e) => {
            return e;
          })}
        </SnackBarWrapper>
      </Stack>
    </SystemBlock>
  );
};

export const WideLayout = () => {
  const [arr, setArr] = useState([]);
  const generate = () => {
    setArr([
      ...arr,
      <SnackBar
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        layout="desktop"
      />,
    ]);
  };
  return (
    <SystemBlock title="BCC Design System - Snack Bar">
      {" "}
      <button onClick={generate}>Snack Bar</button>
      <Stack spacing="xl">
        <SnackBarWrapper>
          {arr.map((e) => {
            return e;
          })}
        </SnackBarWrapper>
      </Stack>
    </SystemBlock>
  );
};

export const WideLayoutWithAction = () => {
  const [arr, setArr] = useState([]);
  const generate = () => {
    setArr([
      ...arr,
      <SnackBar
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        action="action"
        layout="desktop"
      />,
    ]);
  };
  return (
    <SystemBlock title="BCC Design System - Snack Bar">
      {" "}
      <button onClick={generate}>Snack Bar</button>
      <Stack spacing="xl">
        <SnackBarWrapper>
          {arr.map((e) => {
            return e;
          })}
        </SnackBarWrapper>
      </Stack>
    </SystemBlock>
  );
};

export const Alignment = () => {
  const [arr, setArr] = useState([]);
  const generateLeft = () => {
    setArr([...arr, <SnackBar text="Left-aligned" alignment="left" layout='mobile' />]);
  };
  const generateRight = () => {
    setArr([...arr, <SnackBar text="Right-aligned" alignment="right"  layout='mobile'/>]);
  };
  const generateCenter = () => {
    setArr([...arr, <SnackBar text="Center-aligned" alignment="center"  layout='mobile'/>]);
  };
  return (
    <SystemBlock title="BCC Design System - Snack Bar">
      {" "}
      <div>
        <button onClick={generateLeft}>Snack Bar Left</button>
        <button onClick={generateCenter}>Snack Bar Center</button>
        <button onClick={generateRight}>Snack Bar Right</button>
      </div>
      <Stack spacing="xl">
        <SnackBarWrapper>
          {arr.map((e) => {
            return e;
          })}
        </SnackBarWrapper>
      </Stack>
    </SystemBlock>
  );
};

export const Error = () => {
  const [arr, setArr] = useState([]);
  const generate = () => {
    setArr([
      ...arr,
      <SnackBar
        text="Error occured"
        error={true}
        action="action"
        icon={<InfoIcon />} layout='mobile'
      />,
    ]);
  };
  return (
    <SystemBlock title="BCC Design System - Snack Bar">
      {" "}
      <button onClick={generate}>Snack Bar</button>
      <Stack spacing="xl">
        <SnackBarWrapper>
          {arr.map((e) => {
            return e;
          })}
        </SnackBarWrapper>
      </Stack>
    </SystemBlock>
  );
};
