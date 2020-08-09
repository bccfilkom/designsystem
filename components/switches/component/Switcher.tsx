import * as React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";
import { colors } from "../../_utils";

export interface SwitcherProps {
  disabled?: boolean;
  checked?: boolean;
  style?: React.CSSProperties;
}
// margin: 0 10px;

const Switch = styled("label")`
  position: relative;
  display: inline-block;
  min-width: 45px;
  min-height: 24px;
  box-sizing: content-box;
  border: 3px solid transparent;
  border-radius: 12px;
  transition: border 0.2s ease-in-out;
  &:hover {
    border: 3px solid #e4f4ff;
    border-radius: 12px;
  }
`;

const Slider = styled("span")`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  cursor: pointer;
  background-color: #afafaf;
  border-radius: 12px;
  transition: background-color 0.2s ease-in-out;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50px;
  }
`;

const Input = styled("input")`
  display: none;

  &:checked + * {
    background-color: ${themeGet("colors.biru", colors.biru)};
  }
  &:checked + * {
    &:before {
      transform: translateX(20px);
    }
  }
`;

const Switcher: React.FC<SwitcherProps> = ({}) => {
  return (
    <>
      <Switch>
        <Input type="checkbox" defaultChecked={false} />
        <Slider />
      </Switch>
    </>
  );
};

export default Switcher;
