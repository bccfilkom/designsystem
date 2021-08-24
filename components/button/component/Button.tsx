import React from "react";
import styled, { css } from "styled-components";
import style from "./ButtonStyle";

export interface ButtonProps {
  style?: React.CSSProperties;
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
    min-width: ${condensed ? 96 : 112}px;
    padding: ${condensed ? "6px 16px" : "12px 24px"};
    ${style.baseButtonStyle}
    ${icon && style.icon}
    ${skeleton && style.skeleton}
    ${!skeleton && style.primary}
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
  `;
});

const Button = (props: ButtonProps) => {
  const { children, icon, style } = props;
  return (
    <ButtonElement {...props} style={style}>
      {icon && <img src={icon} className="icon" alt="button-icon"/>}
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
