import * as React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";
import { colors } from "../../_utils";

export interface TextFieldProps {
  disabled?: boolean;
  checked?: boolean;
  placeholder?: string;
  value?: string;
  isWarning?: boolean;
  isError?: boolean;
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
  }
`;

const HintText = styled("span")`
  margin-top: 8px;
  font-size: 12px;
  color: ${(props) => (props.isWarning ? "#FB9E2E" : "#143045")}
  color: ${(props) => (props.isError ? "##E84C3D" : "#143045")}
};
  line-height: 14px;
`;

const TextField: React.FC<TextFieldProps> = ({
  checked,
  disabled,
  placeholder,
  hintText,
  isWarning,
  isError,
  ...rest
}) => {
  return (
    <ContainerInput>
      <InputField
        placeholder={placeholder}
        disabled={disabled}
        isWarning={isWarning}
      />
      {HintText ? (
        <HintText isWarning={isWarning} isError={isError}>
          {hintText}
        </HintText>
      ) : null}
    </ContainerInput>
  );
};

TextField.defaultProps = {
  checked: false,
  disabled: false,
  placeholder: "Placeholder Text",
  hintText: "",
  isWarning: false,
  isError: false,
};

export default TextField;
