import * as React from "react";
import { DecoratorFn } from "@storybook/react";

import { Provider, GlobalStyles } from "../../_foundations/theme";

const SystemWrapper: DecoratorFn = (storyFn) => (
  <Provider>
    <GlobalStyles />
    {storyFn()}
  </Provider>
);

export default SystemWrapper;
