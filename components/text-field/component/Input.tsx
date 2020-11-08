import * as React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";
import { colors } from "../../_utils";

export interface InputProps {
  disabled?: boolean;
  checked?: boolean;
  placeholder?: string;
  type?: string;
  value?: string;
  action?: string;
  handleChange?: Function;
  hintText?: string;
  style?: React.CSSProperties;
}

const ContainerInput = styled("div")`
  display: inline-flex;
  flex-direction: column;
`;

const InputField = styled("input")`
  display: inline-block;
  padding: 16px;
  border: 1.5px solid #d8d8d8;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 14px;
  background-color: white;
  outline: none;
  min-width: 280px;

  &::placeholder {
    color: rgba(20, 48, 69, 0.5);
  }

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }

  &:active,
  &:focus {
    border-color: ${(props) => {
      switch (props.action) {
        case "normal":
          return "#3598DB";
        case "warning":
          return "#fb9e2e";
        case "error":
          return "#E84C3D";
      }
    }};
    color: #143045;
  }

  &:disabled {
    cursor: not-allowed;
    border-color: #d8d8d8;
    background-color: #fbfbfb;

    &::placeholder {
      color: #d8d8d8;
    }
  }
`;

const HintText = styled("span")`
  margin-top: 8px;
  font-size: 12px;
  color: ${(props) => {
    switch (props.action) {
      case "normal":
        return "#143045";
      case "warning":
        return "#fb9e2e";
      case "error":
        return "#E84C3D";
    }
  }};
};
  line-height: 14px;
`;

const Input: React.FC<InputProps> = ({
  checked,
  disabled,
  placeholder,
  hintText,
  value,
  handleChange,
  action,
  type,
  ...rest
}) => {
  return (
    <ContainerInput>
      <InputField
        placeholder={placeholder}
        disabled={disabled}
        action={action}
        value={value}
        onChange={handleChange}
        type={type}
      />
      {hintText.length > 0 ? (
        <HintText action={action}>{hintText}</HintText>
      ) : null}
    </ContainerInput>
  );
};

Input.defaultProps = {
  checked: false,
  disabled: false,
  placeholder: "Placeholder Text",
  hintText: "",
  action: "normal",
  type: "text",
};

export default Input;
