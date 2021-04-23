import React from "react";
import styled from "styled-components";
import { colors } from "../../_utils/variables";

const NavItemIcon = require("../../_foundations/icon/menu.svg") as string;
const CloseIcon = require("../../_foundations/icon/close.svg") as string;
const BackIcon = require("../../_foundations/icon/back.svg") as string;

export interface AppbarProps {
  icons?: string[];
  navItem?: boolean;
  back?: boolean;
  close?: boolean;
  extended?: boolean;
  width?: number;
  title?: string;
}

const AppbarWrapper = styled("div")`
  max-width: ${props=>props.width}px;
  background-color: ${colors.biru};
  display: flex;
  flex-direction: row;
  color: white;
`;

const IconWrapper = styled("div")`
  padding: 16px
    ${(props) => (props.index == props.length - 1 ? "16px" : "12px")} 16px
    ${(props) => (props.leftIcon ? "16px" : (props.index == 0) ? "0px" : "12px")};
  img {
    height: 24px;
    width: 24px;
  }
`;

const AppbarLeft = styled("div")`
  flex: 0 1 ${(props) => (!props.extended ? "33.33%" : "20%")};
`;

const AppbarCenter = styled("div")`
  flex: 0 1 ${(props) => (!props.extended ? "33.33%" : "auto")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppbarRight = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 1 0 ${(props) => (!props.extended ? "33.33%" : "auto")};
  @media(max-width : 360px){
    div:nth-child(3){
      display : none;
    }
  }
`;

const Appbar = (props: AppbarProps) => {
  const { icons, navItem, back, close, extended, width, title } = props;

  return (
    <AppbarWrapper width = {width} close = {close}>
      <AppbarLeft extended={extended}>
        <IconWrapper leftIcon={true}>
          {navItem &&
            (back ? (
              <img src={BackIcon} alt="back" />
            ) : close ? (
              <img src={CloseIcon} alt="close" />
            ) : (
              <img src={NavItemIcon} alt="navitem" />
            ))}
        </IconWrapper>
      </AppbarLeft>
      <AppbarCenter extended={extended}>{title}</AppbarCenter>
      <AppbarRight extended={extended}>
        {icons.slice(0,3).map((icon, idx) => (
          <IconWrapper index={idx} key={idx} length={icons.length}>
            <img src={icon} alt="icon" />
          </IconWrapper>
        ))}
      </AppbarRight>
    </AppbarWrapper>
  );
};

Appbar.defaultProps = {
  width: 360,
  back: false,
  close: false,
  navItem: true,
  extended: false,
  icons: [],
};

export default Appbar;
