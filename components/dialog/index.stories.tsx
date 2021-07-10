import React, { useState } from "react";
import { Stack } from "../_foundations/common";
import { withKnobs } from "@storybook/addon-knobs";
import { Button } from "../button";
import Dialog from "./components/Dialog";
import { SystemWrapper, SystemBlock } from "../_utils/storybook";

export default {
  title: "Component|Dialog",
  decorators: [SystemWrapper, withKnobs],
};

export const Primary = () => {
  const [visible, setVisible] = useState(false);
  return (
    <SystemBlock title="BCC Design System - Dialog">
      <Stack spacing="xl">
        <Button onClick={() => setVisible(true)}>Show Dialog</Button>
        <Dialog
          title="Title"
          visible={visible}
          onCancel={() => setVisible(false)}
          primaryButton={{
            text: "Lanjut",
            onClick: () => setVisible(false),
          }}
          secondaryButton={{
            text: "Hapus",
            onClick: () => console.log("Nope."),
          }}
        >
          Check check check
        </Dialog>
      </Stack>
    </SystemBlock>
  );
};
