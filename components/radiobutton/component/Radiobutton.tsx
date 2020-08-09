import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { themeGet } from "@styled-system/theme-get";
import { colors } from "../../_utils";

export interface RadiobuttonProps {
  disabled?: boolean;
  checked?: boolean;
  style?: React.CSSProperties;
}

const RadioContainer = styled("div")`
  margin: 10px 0;
  padding: 0;
  position: relative;
  box-sizing: content-box;
`;

const Radio = styled("input")`
  display: none;

  &:checked + label > span {
    border-color: ${themeGet("colors.biru", colors.biru03)};
    &::before {
      opacity: 1;
    }
  }
  &:hover + label > div {
    border: 3px solid red;
  }

  &:disabled + label {
    opacity: 0.5;
  }
  &:disabled + label,
  &:disabled + label span {
    cursor: not-allowed;
  }
`;

const Circle = styled("span")`
  position: relative;
  z-index: 2;
  box-sizing: content-box;
  display: inline-block;
  vertical-align: middle;
  margin-right: 16px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 50%;
  position: relative;
  border: 1.5px solid #888;

  &::before {
    content: "";
    opacity: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #2196f3;
    position: absolute;
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    transform: translate(-50%, -50%);
    transition: opacity 0.2s ease-in-out;
  }
`;

const Shadow = styled("div")`
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  border: 3px solid tranparent;
  box-sizing: content-box;
`;

const Label = styled("label")`
  cursor: pointer;
  font-size: 1rem;
  vertical-align: middle;
  box-sizing: border-box;
  line-height: 20px;
`;

const Radiobutton: React.FC<RadiobuttonProps> = ({}) => {
  return (
    <>
      <RadioContainer>
        <Radio type="radio" id="radio_1" name="my-radio" defaultChecked />
        <Label htmlFor="radio_1">
          <Circle />
          Radio Button
        </Label>
      </RadioContainer>
      <RadioContainer>
        <Radio type="radio" id="radio_2" name="my-radio" />
        <Label htmlFor="radio_2">
          <Circle />
          {/* <Shadow /> */}
          Radio Button
        </Label>
      </RadioContainer>
      <RadioContainer>
        <Radio type="radio" id="radio_3" name="my-radio" disabled />
        <Label htmlFor="radio_3">
          <Circle />
          Radio Button
        </Label>
      </RadioContainer>
      {/* <div className="form-group">
        <input
          className="custom-radio"
          type="radio"
          id="radio_4"
          name="my-radio"
          value="1"
          disabled
        />
        <label htmlFor="radio_4">
          <span className="radio"></span> Disabled radio button
        </label>
      </div> */}
    </>
  );
};

export default Radiobutton;
