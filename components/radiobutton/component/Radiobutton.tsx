import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export interface RadiobuttonProps {
  disabled?: boolean;
  checked?: boolean;
  style?: React.CSSProperties;
}

const Radiobutton: React.FC<RadiobuttonProps> = ({}) => {
  return (
    <>
      <input type="radio" defaultChecked={false} />
    </>
  );
};

export default Radiobutton;
