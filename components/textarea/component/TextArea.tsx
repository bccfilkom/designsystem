import * as React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";
import { colors } from "../../_utils";

export interface TextAreaProps {
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  hintText?: string;
  handleChange?: Function;
  style?: React.CSSProperties;
}

const FieldInput = styled("textarea")`
display: inline-block;
padding: 16px;
border: 1.5px solid #d8d8d8;
box-sizing: border-box;
font-size: 14px;
border-radius: 14px;
background-color: white;
outline: none;
min-width: 440px;
height: 120px;

&::placeholder {
  color: rgba(20, 48, 69, 0.5);
}

&:active,
&:focus {
  border-color: ${(props) => (props.isWarning ? "#fb9e2e" : "#3598DB")};
  color: #143045;
}

&:disabled {
  cursor: not-allowed;
  border-color: #d8d8d8;
  background-color: #fbfbfb;

  &::placeholder {
    color: #d8d8d8;S
  }
}`;

const TextArea: React.FC<TextAreaProps> = ({
  disabled,
  placeholder,
  hintText,
  handleChange,
  value,
  ...rest
}) => {
  return (
    <FieldInput
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};

TextArea.defaultProps = {
  disabled: false,
  placeholder: "Placeholder Text",
  hintText: "",
  value: "",
};

export default TextArea;
