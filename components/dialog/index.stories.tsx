import React, { useState } from "react";
import { Stack } from "../_foundations/common";
import { withKnobs } from "@storybook/addon-knobs";
import { Button } from "../button";
import { Input } from "../text-field";
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          cursus fermentum risus, sit amet fringilla nunc pellentesque quis.
          Duis quis odio ultrices, cursus lacus ac, posuere felis.
        </Dialog>
      </Stack>
    </SystemBlock>
  );
};

export const InputDialog = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");

  return (
    <SystemBlock title="BCC Design System - List Dialog">
      <Stack spacing="xl">
        <Button onClick={() => setVisible(true)}>Show Dialog</Button>
        <Dialog
          type="input"
          title="Title"
          visible={visible}
          onCancel={() => setVisible(false)}
          primaryButton={{
            text: "Primary",
            onClick: () => setVisible(false),
          }}
          secondaryButton={{
            text: "Secondary",
            onClick: () => console.log("Nope."),
          }}
        >
          <Input
            placeholder="Placeholder text"
            value={value}
            handleChange={(e) => setValue(e.target.value)}
            style={{ width: "100%" }}
          />
        </Dialog>
      </Stack>
    </SystemBlock>
  );
};

export const ListDialog = () => {
  const [visible, setVisible] = useState(false);
  const listItem1 = Array(10).map(
    (_, index: number) => `List item ${index + 1}`
  );

  return (
    <SystemBlock title="BCC Design System - List Dialog">
      <Stack spacing="xl">
        <Button onClick={() => setVisible(true)}>Show Dialog</Button>
        <Dialog
          type="list"
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          cursus fermentum risus, sit amet fringilla nunc pellentesque quis.
          Duis quis odio ultrices, cursus lacus ac, posuere felis.
        </Dialog>
      </Stack>
    </SystemBlock>
  );
};
