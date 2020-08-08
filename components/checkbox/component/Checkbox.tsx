import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export interface CheckboxProps {
  disabled?: boolean;
  checked?: boolean;
  style?: React.CSSProperties;
}

const Checkbox: React.FC<CheckboxProps> = ({}) => {
  return (
    <>
      <input type="checkbox" defaultChecked={false} />
    </>
  );
};

export default Checkbox;
