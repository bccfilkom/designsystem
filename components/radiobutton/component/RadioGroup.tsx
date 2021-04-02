import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { themeGet } from "@styled-system/theme-get";
import { colors } from "../../_utils";

export interface RadioGroupProps {
  name?: String;
  checked?: boolean;
  style?: React.CSSProperties;
}

const RadioContainer = styled("div")`
  display: inline-block;
  margin: 10px 0;
  padding: 0;
  position: relative;
  box-sizing: content-box;
`;

const RadioGroup: React.FC<RadioGroupProps> = ({ children }) => {
  return (
    <>
      <RadioContainer>{children}</RadioContainer>
    </>
  );
};

export default RadioGroup;