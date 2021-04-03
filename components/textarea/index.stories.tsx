import React, { useState } from "react";
import { Stack } from "../_foundations/common";
import { withKnobs } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
} from "../_utils/storybook";
import TextArea from "./component/TextArea";


export default {
  title: "Component|Text Area",
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => {
  const [textArea, setTextArea] = useState("");
  return (
    <SystemBlock title="BCC Design System - Text Area">
      <Stack spacing="xl">
        <TextArea
          value={textArea}
          handleChange={(e) => setTextArea(e.target.value)}
        />
      </Stack>
    </SystemBlock>
  );
};

export const HintText = () => {
  const [textArea, setTextArea] = useState("");
  return (
    <SystemBlock title="BCC Design System - Text Area Hint Text">
      <Stack spacing="xl">
        <TextArea
          value={textArea}
          handleChange={(e) => setTextArea(e.target.value)}
          hintText="Hint Text"
        />
      </Stack>
    </SystemBlock>
  );
};

export const Warning = () => {
  const [textArea, setTextArea] = useState("");
  return (
    <SystemBlock title="BCC Design System - Text Area Warning">
      <Stack spacing="xl">
        <TextArea
          value={textArea}
          handleChange={(e) => setTextArea(e.target.value)}
          hintText="Hint Text"
          isWarning={true}
        />
      </Stack>
    </SystemBlock>
  );
};

export const Example = () => {
  const [textArea, setTextArea] = useState("");
  const [warning, setWarning] = useState(false);

  const handleChangeException = (e) => {
    setTextArea(e.target.value);
    textArea.length >= 20 ? setWarning(true) : setWarning(false);
  };
  return (
    <SystemBlock title="BCC Design System - Text Area Warning Example">
      <Stack spacing="xl">
        <TextArea
          value={textArea}
          handleChange={handleChangeException}
          hintText="Maximal 20 Character"
          isWarning={warning}
        />
      </Stack>
    </SystemBlock>
  );
};

export const Disabled = () => {
  const [textArea, setTextArea] = useState("");
  return (
    <SystemBlock title="BCC Design System - Text Area Disable">
      <Stack spacing="xl">
        <TextArea
          value={textArea}
          handleChange={(e) => setTextArea(e.target.value)}
          disabled
        />
      </Stack>
    </SystemBlock>
  );
};


export const Skeleton = () => {
  const [textArea, setTextArea] = useState("");
  return (
    <SystemBlock title="BCC Design System - Text Area Skeleton">
      <Stack spacing="xl">
        <TextArea
          value={textArea}
          className = "skeleton"
          hintText="Loading ..."
          handleChange={(e) => setTextArea(e.target.value)}
        />
      </Stack>
    </SystemBlock>
  );
};