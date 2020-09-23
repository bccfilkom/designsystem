import * as React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";
import { colors } from "../../_utils";
import SearchIcon from "@material-ui/icons/Search";
import CancelIcon from "@material-ui/icons/Cancel";

export interface SearchProps {
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  hintText?: string;
  handleChange?: Function;
  handleClear?: Function;
  style?: React.CSSProperties;
}

const FieldContainer = styled("div")`
  display: inline-flex;
  align-items: center;
  padding: 16px;
  border: 1.5px solid #d8d8d8;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 14px;
  background-color: white;
  outline: none;
  min-width: 280px;
  height: 48px;
`;

const CloseContainer = styled("div")`
  cursor: pointer;
  align-self: center;
`;

const FieldInput = styled("input")`
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  margin-left: 8px;
  font-size: 14px;
  outline: none;
  width: 180px;

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
  }
`;

const Search: React.FC<SearchProps> = ({
  disabled,
  placeholder,
  hintText,
  handleChange,
  handleClear,
  value,
  ...rest
}) => {
  return (
    <FieldContainer>
      <SearchIcon />
      <FieldInput
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {value.length > 0 ? (
        <CloseContainer>
          <CancelIcon onClick={handleClear} />{" "}
        </CloseContainer>
      ) : null}
    </FieldContainer>
  );
};

Search.defaultProps = {
  disabled: false,
  placeholder: "Placeholder Text",
  hintText: "",
  value: "",
};

export default Search;
