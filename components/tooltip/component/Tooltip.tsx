import * as React from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";
import { colors } from "../../_utils";
import Warning from "@material-ui/icons/Warning";
import './Tooltip.css'
import Button from '../..//button/component/Button'

const TooltipContainer = styled('div')`
    display: inline-flex;
    font-family: 'Work-Sans', sans-serif;
    font-size: 14px;
`

const Box = styled('div')`
    position: absolute;
    font-family: 'Work Sans', sans-serif;
    ${props => {
    let posOne = props.position.split(" ")[0];

    if (posOne == "bottom") {
      return "top: calc(100% + 15px);"
    }
    else {
      return "bottom: calc(100% + 15px);"
    }
  }}
    background: #143045;
    ${props => props.width ? "width:" + props.width + "px" : "display: block"};
    color: white;
    font-family: 'Work Sans', sans-serif;
    font-size: 14px;

    ${props => {
    let posTwo = props.position.split(" ")[1];

    if (posTwo == "left") {
      return "transform: translateX(calc(-50% + 20px));";
    }
    else if (posTwo == "right") {
      return "transform: translateX(calc(50% - 20px));";
    }
  }}

    text-align: justify;
    word-spacing: 0;
    padding: 20px 18px;
    border-radius: 10px;
    box-shadow: 0 10px 10px rgba(0,0,0,0.1);
    opacity: 0;
    visibility: hidden;
    z-index: 2000;
    transition: 0.2s;

    &::before {
        content: "";
        position: absolute;
        z-index: 1;
        height: 15px;
        width: 15px;
        background: #143045;

        ${props => {
    let [posOne, posTwo] = props.position.split(" ");
    let style = "";
    if (posOne == "bottom") {
      style += "top: -4px;";
    }
    else {
      style += "bottom: -4px;";
    }

    if (posTwo == "right") {
      style += "left: calc(0% + 20px);";
    }
    else if (posTwo == "left") {
      style += "left: calc(100% - 20px);";
    }
    else {
      style += "left: 50%;";
    }

    return style;
  }}
        
        transform: translateX(-50%) rotate(45deg);
    }
`

const Icon = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 2;
    cursor: default;

    &:hover ${Box}{
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transition: .1s;
    }
`

const Trigger = styled('span')`
    position: relative;
    background: #fff;
    text-align: center;
    z-index: 2;
`

const OtherOptions = styled('div')`
  margin-top: 10px;
  position: relative;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > * {
    cursor: pointer;
  }
`

const ButtonMoreInfo = styled('span')`
  color: #3598DB;
`

const Wrapper = (props) => {
  return (
    <>
      <TooltipContainer>
        <Icon style={{ color: "red" }}>
          {props.children}
        </Icon>
      </TooltipContainer>
    </>
  );
};

export default { Wrapper, Box, Trigger, OtherOptions, ButtonMoreInfo }