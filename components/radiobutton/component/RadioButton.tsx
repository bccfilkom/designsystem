import * as React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { colors } from "../../_utils";
export interface RadioButtonProps {
  value?: String;
  disabled?: boolean;
  id?: String;
  checked?: boolean;
  handleChange?: Function;
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
    border-color: ${colors.biru};
    &::before {
      opacity: 1;
    }
  }
  &:disabled {
    &:checked + label > span {
      border: 1.5px solid #d8d8d8;
      &::before {
        background-color: #d8d8d8;
      }
    }
  }
  &:disabled + label,
  &:disabled + label span {
    cursor: not-allowed;
  }
  &:disabled + label > span {
    border: 1.5px solid #d8d8d8;
  }
`;

const Circle = styled("span")`
  position: relative;
  box-sizing: content-box;
  display: inline-block;
  vertical-align: middle;
  margin-right: 16px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 50%;
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
  &::after {
    content: "";
    width: 29.7px;
    height: 29.7px;
    border-radius: 50%;
    position: absolute;
    left: 50.4%;
    top: 50%;
    bottom: auto;
    right: auto;
    background-color: transparent;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: opacity 0.2s ease-in-out;
    transition: opacity 0.2s ease-in-out;
    border: 3.5px solid
      ${(props) =>
        props.shadow ? (props.checked ? "#E4F4FF" : "#F1F1F1") : colors.white};
  }
`;

const Label = styled("label")`
  cursor: pointer;
  font-size: 1rem;
  vertical-align: middle;
  box-sizing: border-box;
  line-height: 20px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  checked,
  children,
  disabled,
  handleChange,
  id,
  value,
}) => {
  const [shadow, setShadow] = React.useState(false);
  return (
    <>
      <RadioContainer
        onMouseEnter={() => setShadow(true)}
        onMouseLeave={() => setShadow(false)}
      >
        <Radio
          type="radio"
          id={id}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
        />
        <Label htmlFor={id}>
          <Circle shadow={!disabled && shadow} checked={checked}></Circle>
          {children}
        </Label>
      </RadioContainer>
    </>
  );
};

RadioButton.defaultProps = {
  checked: false,
  disabled: false,
};

export default RadioButton;