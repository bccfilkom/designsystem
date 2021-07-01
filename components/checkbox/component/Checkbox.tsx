import * as React from "react";
import styled from "styled-components";
import CheckIcon from "../../_foundations/icon/check.svg";
import HypenIcon from "../../_foundations/icon/hypen.svg";
import { useState } from "react";
import { colors } from "../../_utils";

export interface CheckboxProps {
  disabled?: boolean;
  indeterminated?: boolean;
  style?: React.CSSProperties;
  value?: string;
  id?: string;
  checked?: boolean;
}

const Label = styled("label")`
  position: relative;
  display: flex;
  margin: 8px 0;
  z-index: 1;
`;

const MyCheckBox = styled("input")`
  position: absolute;
  opacity: 0;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const SpanCheckMark = styled("span")`
  height: 18px;
  width: 18px;
  border: 1.5px solid #888888;
  border-color: ${(props) =>
    (props.disabled && props.checked) ||
    (props.disabled && props.indeterminated) ||
    props.checked ||
    props.indeterminated
      ? "#fff"
      : props.disabled
      ? "#D8D8D8"
      : "#888888"};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.disabled ? props.checked || props.indeterminated ? "#D8D8D8": "#FBFBFB" : props.checked || props.indeterminated 
    ? colors.biru03 : "#fff"};
`;

const CheckMarkFill = styled("div")`
  margin-left: 16px;
`;

const Shadow = styled("div")`
  position: absolute;
  left: 9px;
  top: 50%;
  bottom: auto;
  right: auto;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  background-color: ${(props) => (props.isChecked ? "#E4F4FF" : "#F1F1F1")};
  z-index: -1;
  border-radius: 3px;
`;

const Checkbox: React.FC<CheckboxProps> = ({
  indeterminated,
  disabled,
  value,
  id,
  checked,
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const [isIndeterminated, setIsIndeterminated] = useState(indeterminated);
  const [shadow, setShadow] = useState(false);
  const styledIcon = { width: "12px", height: "12px", color: "#fff" };
  return (
    <>
      <Label
        onClick={() => {
          if (disabled) {
            return;
          }
          setIsIndeterminated(false);
          setIsChecked(!isChecked);
        }}
      >
        <div >
          <SpanCheckMark
            checked={isChecked}
            disabled={disabled}
            indeterminated={isIndeterminated}
            onMouseEnter = {()=>setShadow(true)} onMouseLeave={()=>setShadow(false)}
          >
            {isChecked ? (
              <img src={CheckIcon} alt='check' style={styledIcon} />
            ) : (
              indeterminated && <img src={HypenIcon} alt='hypen' style={styledIcon} />
            )}
          </SpanCheckMark>
          {shadow && !disabled && <Shadow isChecked={isChecked} />}
        </div>

        <MyCheckBox
          value={value}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          id={id}
          ref={(el) => el && (el.indeterminate = isIndeterminated)}
          onMouseEnter = {()=>setShadow(true)} onMouseLeave={()=>setShadow(false)}
        />
        <CheckMarkFill>{value}</CheckMarkFill>
      </Label>
    </>
  );
};

Checkbox.defaultProps = {
  indeterminated: false,
  disabled: false,
  checked: false,
};

export default Checkbox;