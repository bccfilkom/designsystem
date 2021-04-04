import React from "react";
import styled, { css } from "styled-components";
import { colors, radiuss } from "../../_utils/variables";

export interface ButtonProps {
  type?: "secondary" | "text";
  icon?: string;
  condensed?: boolean;
  onClick?: Function;
  className?: string;
  children?: string;
}

const ButtonElement = styled.button((props: ButtonProps) => {
  const { type, condensed, icon } = props;
  return css`
    cursor: pointer;
    display: flex;
    align-items: center;
    min-width: ${condensed ? 96 : 112}px;
    padding: ${condensed ? "6px 16px" : "12px 24px"};
    color: ${type === "secondary" ? colors.biru : colors.putih};
    font-weight: 600;
    font-size: 14px;
    background-color: ${type === "secondary" ? colors.putih : colors.biru};
    border-radius: ${radiuss.md}px;
    border: 1.5px solid ${colors.biru};
    &.skeleton {
      border: none;
    }
    ${icon &&
      css`
        padding-left: 16px;
        .icon {
          width: 12px;
          color: ${colors.biru};
          margin-right: 8px;
        }
      `}
    ${type === "text" &&
      css`
        color: ${colors.biru};
        border-color: ${colors.white};
        background-color: ${colors.putih};
      `}

    &:focus {
      outline: 0;
    }
  `;
});

const Button: React.FC<ButtonProps> = (props) => {
  const { children, icon} = props;
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
};

export default Button;
