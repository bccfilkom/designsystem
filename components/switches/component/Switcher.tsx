import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export interface SwitcherProps {
  disabled?: boolean;
  checked?: boolean;
  style?: React.CSSProperties;
}

const Switch = styled("label")`
  position: relative;
  display: inline-block;
  width: 110px;
  height: 60px;
  margin: 0 10px;
`;

const Slider = styled("span")`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  cursor: pointer;
  background-color: #ccc;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 50px;
    width: 50px;
    left: 5px;
    bottom: 5px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50px;
  }
`;

const Input = styled("input")`
  display: none;

  &:checked {
    ::after {
      background-color: #ff278c;
    }
  }

  &:checked + Slider:before {
    transform: translateX(40px);
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
