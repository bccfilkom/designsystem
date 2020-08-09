import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "./checkbox.css";

export interface CheckboxProps {
  disabled?: boolean;
  checked?: boolean;
  style?: React.CSSProperties;
}

const Wrapper = styled("span")``;

const Input = styled("input")``;

const Text = styled("label")``;

const Checkbox: React.FC<CheckboxProps> = ({}) => {
  return (
    <>
      <label className="checkbox" htmlFor="checkbox">
        <input
          id="checkbox"
          className="check"
          name="checkbox"
          type="checkbox"
        />
        <span className="box"></span>
        Check me :)
      </label>
    </>
  );
};

export default Checkbox;
