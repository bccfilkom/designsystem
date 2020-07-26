import * as React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Text } from "../../_foundations";
import { colors } from "../../_utils";

export interface BreadcrumbItemProps {
  id?: string;
  separator?: string;
  lastItem?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Entities = require('html-entities').XmlEntities;
const entities = new Entities();
const Comp = styled("li")`
  position: relative;
  border: 1px solid transparent;
  background-color: ${themeGet("colors.putih", colors.putih)};
  color: ${(props) =>
    props.lastItem
      ? themeGet("colors.primaryText", colors.primaryText)
      : themeGet("colors.primaryText01", colors.primaryText01)};
  cursor: ${(props) => (props.lastItem ? "default" : "pointer")};
  padding: 0 calc(8px + .25rem);
  text-decoration: none;
  transition: color .1s linear;

  &:hover,
  &.hover,
  &:focus,
  &.focus,
  &:active,
  &.active {
    color: ${themeGet("colors.primaryText", colors.primaryText)};
  }

  &:first-child,
  &.first-child {
    &:before,
    &.before {
      content: "";
    }
    padding-left: 0;
  }

  &:last-child,
  &.last-child {
    padding-right: 0;
  }

  &:before,
  &.before {
    content: "${(props) => props.separator == '&lt;' || '&gt;' ? entities.decode(props.separator) : props.separator}";
    color: ${themeGet("colors.primaryText", colors.primaryText)};
    position: absolute;
    left: -0.25rem;
  }
`;

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  id,
  children,
  ...rest
}) => {
  return (
    <Comp key={`breadcumb-item-${id}`} {...rest}>
      {typeof children === "string" ? (
        <Text scale={400}>{children}</Text>
      ) : (
        children
      )}
    </Comp>
  );
};

BreadcrumbItem.displayName = "BreadcrumbItem";
export default BreadcrumbItem;
