import React from "react";
import styled, { css } from "styled-components";
import { colors, radiuss } from "../../_utils/variables";

export interface ButtonProps {
  type?: "secondary" | "text";
  icon?: string;
  condensed?: boolean;
  skeleton?: boolean;
  onClick?: Function;
  className?: string;
  children?: string;
}

const ButtonElement = styled.button((props: ButtonProps) => {
  const { type, condensed, icon, skeleton } = props;
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
    ${skeleton &&
      css`
        border: none;
        cursor: inherit;
        color: transparent;
        background-color: #e2e5e7;
        background-image: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0.5),
          rgba(255, 255, 255, 0)
        );
        background-size: 40px 100%;
        background-repeat: no-repeat;
        background-position: left -40px top 0;
        animation: shine 1s ease infinite;

        @keyframes shine {
          to {
            background-position: right -40px top 0;
          }
        }
      `}
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
};

export default Button;
