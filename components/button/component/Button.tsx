import React from "react";
import styled, { css } from "styled-components";
import { colors, radiuss, space } from "../../_utils/variables";

export interface ButtonProps {
  secondary?: boolean;
  children?: string;
  condensed?: boolean;
}

const ButtonElement = styled.button(
  (props: ButtonProps) => css`
    min-width: ${props.condensed ? 96 : 112} px;
    padding: 12px 24px;
    ${props.condensed &&
      css`
        padding: 6px 16px;
      `}
    color: ${props.secondary ? colors.biru : colors.putih};
    font-weight: 600;
    background-color: ${props.secondary ? colors.putih : colors.biru};
    border-radius: ${radiuss.md}px;
    border: 1.5px solid ${colors.biru};
    &:focus{
      outline: 0;
    }
  `
);

const Button: React.FC<ButtonProps> = (props) => {
  const { secondary, condensed, children } = props;
  console.log(condensed);
  return (
    <ButtonElement secondary={secondary} condensed={condensed}>
      {children}
    </ButtonElement>
  );
};

Button.defaultProps = {
  secondary: false,
  condensed: false,
};

export default Button;
