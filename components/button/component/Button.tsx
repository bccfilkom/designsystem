import React from "react";
import styled, { css } from "styled-components";
import { colors, radiuss } from "../../_utils/variables";
import style from "./ButtonStyle";
export interface ButtonProps {
  type?: "secondary" | "text" | "success" | "error";
  icon?: string;
  condensed?: boolean;
  skeleton?: boolean;
  onClick?: Function;
  disabled?: boolean;
  className?: string;
  children?: string;
}

const ButtonElement = styled.button((props: ButtonProps) => {
  const { type, condensed, icon, skeleton, disabled } = props;
  return css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: ${condensed ? 96 : 112}px;
    padding: ${condensed ? "6px 16px" : "12px 24px"};
    color: ${colors.putih};
    font-weight: 600;
    font-size: 14px;
    background-color: ${colors.biru};
    border-radius: ${radiuss.md}px;
    border: 1.5px solid ${colors.biru};
    ${skeleton && style.skeleton}
    ${icon && style.icon}
    ${style.baseButtonStyle}
    ${type === "text" && style.text}
    ${type === "text" && disabled && style.textDisabled}
    ${type === "secondary" && style.secondary}
    ${type === "secondary" && disabled && style.secondaryDisabled}
    ${type === "success" && style.success}
    ${type === "error" && style.error}
    ${disabled &&
      css`
        cursor: not-allowed;
      `}
    &:focus {
      outline: 0;
    }
  `;
});

const Button = (props: ButtonProps) => {
  const { children, icon } = props;
  return (
    <ButtonElement {...props}>
      {icon && <img src={icon} className="icon" />}
      {children}
    </ButtonElement>
  );
};

Button.defaultProps = {
  type: null,
  condensed: false,
  icon: null,
  skeleton: false,
  disabled: false,
};

export default Button;
