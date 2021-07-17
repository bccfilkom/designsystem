import React from "react";
import styled from "styled-components";
import { colors } from "../../_utils/variables";

import NavItemIcon from "../../_foundations/icon/menu.svg"
import CloseIcon from "../../_foundations/icon/close.svg"
import BackIcon from "../../_foundations/icon/back.svg"

export type AppbarIcon = {
  icon?: string;
  onClick?();
};

export interface AppbarProps {
  icons?: AppbarIcon[];
  navItem?: boolean;
  back?: boolean;
  close?: boolean;
  extended?: boolean;
  width?: number | string;
  title?: string;
}

const AppbarWrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.extended ? "2" : "3")},
    1fr
  );
`;

const IconWrapper = styled("div")`
  padding: 16px
    ${(props) => (props.index == props.length - 1 ? "16px" : "12px")} 16px
    ${(props) => (props.leftIcon ? "16px" : props.index == 0 ? "0px" : "12px")};
  img {
    height: 24px;
    width: 24px;
  }
  cursor: pointer;
`;

const AppbarLeft = styled("div")``;

const AppbarOuter = styled("div")`
  max-width: ${(props) =>
    typeof props.width === "number" ? props.width + "px" : props.width};
  background-color: ${(props) => (props.close ? "#143045" : colors.biru)};
  color: white;
`;

const AppbarCenter = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppbarExtended = styled("div")`
  padding: 24px 60px 24px;
`;

const AppbarRight = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 0 0 33.33%;
  @media (max-width: 360px) {
    div:nth-child(3) {
      display: none;
    }
  }
`;

const Appbar = (props: AppbarProps) => {
  const { icons, navItem, back, close, extended, width, title } = props;

  return (
    <AppbarOuter width={width} close={close}>
      <AppbarWrapper extended={extended}>
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
        {!extended && <AppbarCenter extended={extended}>{title}</AppbarCenter>}
        <AppbarRight extended={extended}>
          {icons.slice(0, 3).map((icon, idx) => (
            <IconWrapper index={idx} key={idx} length={icons.length}>
              <img src={icon.icon} alt="icon" onClick={icon.onClick} />
            </IconWrapper>
          ))}
        </AppbarRight>
      </AppbarWrapper>
      {extended && <AppbarExtended>{title}</AppbarExtended>}
    </AppbarOuter>
  );
};

Appbar.defaultProps = {
  width: "100%",
  back: false,
  close: false,
  navItem: true,
  extended: false,
  icons: [],
};

export default Appbar;
