import * as React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";
import { colors } from "../../_utils";
import Warning from "@material-ui/icons/Warning";

export interface TextAreaProps {
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  isWarning?: false;
  hintText?: string;
  handleChange?: Function;
  style?: React.CSSProperties;
}

const InputContainer = styled("div")`
  display: inline-block;
  position: relative;
`;

const FieldInput = styled("textarea")`
display: inline-block;
padding: 16px;
border: 1.5px solid #d8d8d8;
box-sizing: border-box;
font-size: 14px;
border-radius: 14px;
background-color: white;
outline: none;
min-width: 440px;
height: 120px;

&::placeholder {
  color: rgba(20, 48, 69, 0.5);
}

&:active,
&:focus {
  border-color: ${(props) => (props.isWarning ? "#fb9e2e" : "#3598DB")};
  color: #143045;
}

&:disabled {
  cursor: not-allowed;
  border-color: #d8d8d8;
  background-color: #fbfbfb;

  &::placeholder {
    color: #d8d8d8;S
  }
}`;

const HintText = styled("div")`
  margin-top: 8px;
  font-size: 12px;
  color: ${(props) => (props.isWarning ? "#FB9E2E" : "#143045")}
};
  line-height: 14px;
`;

const TextArea: React.FC<TextAreaProps> = ({
  disabled,
  placeholder,
  hintText,
  isWarning,
  handleChange,
  value,
  ...rest
}) => {
  return (
    <>
      <InputContainer>
        {isWarning && value.length > 0 ? (
          <Warning
            style={{
              color: "#FB9E2E",
              position: "absolute",
              right: "8px",
              top: "8px",
            }}
          />
        ) : null}

        <FieldInput
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          isWarning={isWarning}
        />
      </InputContainer>
      {hintText.length > 0 ? <HintText>{hintText}</HintText> : null}
    </>
  );
};

TextArea.defaultProps = {
  disabled: false,
  isWarning: false,
  placeholder: "Placeholder Text Area",
  hintText: "",
  value: "",
};

export default TextArea;
