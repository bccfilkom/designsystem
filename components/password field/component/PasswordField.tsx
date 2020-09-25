import * as React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";
import { colors } from "../../_utils";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Lock from "@material-ui/icons/Lock";

export interface PasswordFieldProps {
  disabled?: boolean;
  visibilityEye?: boolean;
  placeholder?: string;
  value?: string;
  hintText?: string;
  handleChange?: Function;
  handleShow?: Function;
  style?: React.CSSProperties;
}

const FieldContainer = styled("div")`
  display: inline-flex;
  align-items: center;
  padding: 16px;
  border: 1.5px solid #d8d8d8;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 14px;
  background-color: white;
  outline: none;
  min-width: 280px;
  height: 48px;
`;

const EyeContainer = styled("div")`
  cursor: pointer;
  align-self: center;
`;

const FieldInput = styled("input")`
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  margin-left: 8px;
  font-size: 14px;
  outline: none;
  width: 180px;

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

const PasswordField: React.FC<PasswordFieldProps> = ({
  disabled,
  placeholder,
  hintText,
  handleChange,
  handleShow,
  value,
  visibilityEye,
  ...rest
}) => {
  return (
    <FieldContainer>
      <Lock style={{ color: "#D8D8D8" }} />
      <FieldInput
        placeholder={placeholder}
        value={value}
        type={`${visibilityEye ? "text" : "password"}`}
        onChange={handleChange}
      />
      <EyeContainer>
        {visibilityEye ? (
          <VisibilityOff onClick={handleShow} style={{ color: "#888888" }} />
        ) : (
          <Visibility onClick={handleShow} style={{ color: "#888888" }} />
        )}
      </EyeContainer>
    </FieldContainer>
  );
};

PasswordField.defaultProps = {
  disabled: false,
  visibilityEye: false,
  placeholder: "Password",
  hintText: "",
  value: "",
};

export default PasswordField;
