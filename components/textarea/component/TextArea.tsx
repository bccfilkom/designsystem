import * as React from "react";
import styled from "styled-components";
import Warning from "../../_foundations/icon/warning.svg";
import User from "../../_foundations/icon/user.svg";
export interface TextAreaProps {
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  isWarning?: boolean;
  hintText?: string;
  handleChange?: Function;
  className?: string;
  style?: React.CSSProperties;
  skeleton?: boolean;
}

const InputContainer = styled("div")`
  display: inline-block;
  position: relative;
`;

const FieldInput = styled("textarea")`
display: inline-block;
padding: 16px;
padding-right : ${(props) => props.isWarning && "28px"};
border: 1.5px solid #d8d8d8;
box-sizing: border-box;
font-size: 14px;
border-radius: 14px;
background-color: white;
outline: none;
min-width: 440px;
height: 120px;
animation: none!important;

&::placeholder {
  color: rgba(20, 48, 69, 0.5);
}

&::-webkit-scrollbar {
  width: 14px;
}

&::-webkit-scrollbar-thumb {
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  border-radius: 7px;
  background-color: rgba(0, 0, 0, 0.15);
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
  className,
  skeleton,
  ...rest
}) => {
  return (
    <>
      <InputContainer>
        {isWarning && value.length > 0 ? (
          <img
            src={Warning}
            style={{
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
          isWarning={value.length > 0 && isWarning}
          className={className}
        />
      </InputContainer>
      {hintText.length > 0 ? (
        <HintText isWarning={value.length > 0 && isWarning}>
          {hintText}
        </HintText>
      ) : null}
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
