import * as React from "react";
import styled from "styled-components";
// @ts-ignore
import Success from "../../_foundations/icon/success.svg";
export interface InputProps {
  disabled?: boolean;
  checked?: boolean;
  placeholder?: string;
  type?: string;
  value?: string;
  action?: string;
  handleChange?: Function;
  hintText?: string;
  success?: boolean;
  className?: string;
  icon?: string;
  style?: React.CSSProperties;
  skeleton?: boolean;
}

const ContainerInput = styled("div")`
  display: inline-flex;
  flex-direction: column;
  position: relative;
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
  line-height: 14px;
`;

const Input = ({
  disabled,
  placeholder,
  hintText,
  value,
  handleChange,
  action,
  type,
  icon,
  skeleton,
}: InputProps) => {
  return (
    <ContainerInput>
      <>
        {action === "success" && value.length > 0 ? (
          <img
            src={Success}
            style={{ position: "absolute", right: "16px", top: "18px" }}
          />
        ) : null}
        <span
          style={{
            color: "#D8D8D8",
            position: "absolute",
            left: "18px",
            top: "18px",
          }}
        >
          <img src={icon} />
        </span>
        <InputField
          placeholder={placeholder}
          disabled={disabled}
          action={value.length > 0 ? action : "normal"}
          value={value}
          onChange={handleChange}
          type={type}
          className={skeleton && "skeleton"}
          style={{
            paddingLeft: icon ? "48px" : "16px",
            paddingRight: action === "success" ? "48px" : "16px",
          }}
        ></InputField>
      </>
      {hintText.length > 0 ? (
        <HintText
          className={skeleton && "skeleton"}
          style={skeleton && { width: "30%" }}
          action={value.length > 0 ? action : "normal"}
        >
          {hintText}
        </HintText>
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
