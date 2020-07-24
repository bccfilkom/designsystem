import * as React from "react";
import RcTabs, {
  TabPane,
  TabsProps as RcTabsProps,
  TabPaneProps,
} from "rc-tabs";
import classNames from "classnames";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Your css reset here */

  .app-title {
    font-size: 40px;
  }
`;

export type TabsType = "line" | "card" | "editable-card";
export type TabsPosition = "top" | "right" | "bottom" | "left";

export { TabPaneProps };

export interface TabsProps extends Omit<RcTabsProps, "editable"> {
  type?: TabsType;
  hideAdd?: boolean;
  centered?: boolean;
  addIcon?: React.ReactNode;
  onEdit?: (
    e: React.MouseEvent | React.KeyboardEvent | string,
    action: "add" | "remove"
  ) => void;
}

function Tabs({
  type,
  className,
  onEdit,
  hideAdd,
  centered,
  addIcon,
  ...props
}: TabsProps) {
  return (
    <RcTabs
      {...props}
      moreTransitionName="slide-up"
      className={classNames(className)}
    />
  );
}

Tabs.TabPane = TabPane;

export default Tabs;
