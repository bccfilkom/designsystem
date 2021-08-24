import * as React from "react";
import styled from "styled-components";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Lock from "@material-ui/icons/Lock";

export interface PasswordProps {
  disabled?: boolean;
  visibilityEye?: boolean;
  placeholder?: string;
  value?: string;
  hintText?: string;
  handleChange?: () => void;
  handleShow?: () => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  required?: Boolean;
}

const FieldContainer = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
`;

const EyeContainer = styled.div`
  cursor: pointer;
  align-self: center;
`;

const FieldInput = styled("input")`
  display: inline-block;
  padding: 16px 48px;
  border: 1.5px solid #d8d8d8;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 14px;
  background-color: white;
  outline: none;
  min-width: 280px;
  height: 48px;

  &::placeholder {
    color: rgba(20, 48, 69, 0.5);
  }

  &:active,
  &:focus {
    border-color: #3598db;
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

const HintText = styled("div")`
  width: inherit;
  margin-top: 8px;
  font-size: 12px;
  color: #143045;
  line-height: 14px;
`;

const Password = ({
  disabled,
  placeholder,
  hintText,
  handleChange,
  handleShow,
  value,
  required,
  visibilityEye,
  ...rest
}: PasswordProps) => {
  return (
    <>
      <FieldContainer>
        <Lock
          style={{ color: "#D8D8D8", position: "absolute", left: "16px" }}
        />
        {visibilityEye ? (
          <VisibilityOff
            onClick={handleShow}
            style={{ color: "#888888", position: "absolute", right: "16px" }}
          />
        ) : (
          <Visibility
            onClick={handleShow}
            style={{ color: "#888888", position: "absolute", right: "16px" }}
          />
        )}
        <FieldInput
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          type={`${visibilityEye ? "text" : "password"}`}
          onChange={handleChange}
        />
      </FieldContainer>
      {hintText.length > 0 ? <HintText>{hintText}</HintText> : null}
    </>
  );
};

Password.defaultProps = {
  disabled: false,
  visibilityEye: false,
  hintText: "",
  placeholder: "",
  value: "",
  required: false,
};

export default Password;
