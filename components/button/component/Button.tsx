import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { colors, radiuss } from "../../_utils/variables";

export interface ButtonProps {
  type?: "secondary" | "text";
  icon?: ReactNode;
  condensed?: boolean;
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
    background-color: ${type === "secondary" ? colors.putih : colors.biru};
    border-radius: ${radiuss.md}px;
    border: 1.5px solid ${colors.biru};
    ${icon &&
      css`
        .icon {
          width: 12px;
          object-fit: contain;
          font-size: 12px;
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
  const { children, icon } = props;
  return (
    <ButtonElement {...props}>
      {icon && <span className="icon">{icon}</span>}
      {children}
    </ButtonElement>
  );
};

Button.defaultProps = {
  type: null,
  condensed: false,
};

export default Button;
