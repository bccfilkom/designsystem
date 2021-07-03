import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

export interface DrawerProps {
  style?: React.CSSProperties;
  isOpened?: boolean;
  children?:React.ReactNode;
}

export interface DrawerMenuProps {
  style?: React.CSSProperties;
  name?: string;
  isOp?: boolean;
  children?:React.ReactNode;
}

export interface DrawerItemProps {
  style?: React.CSSProperties;
  name?: string;
  icon?: any;
  isOp?: boolean;
  isOpened?: boolean;
  iconDesc?: boolean;
  children?:React.ReactNode;
}

const DrawerContainer = styled("div")`
  background: white;
  width: 250px;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.16);
  
`;

const DrawerMinContainer = styled("div")`
  background: white;
  width: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.16);
`;

const DrawerHeadSection = styled("div")`
  margin-bottom: 10px;
  display:flex;

`;

const ImageProfile = styled("img")`
  border-radius:50%;
  height:32px;
  width:32px;
  margin:18px auto;
`;

const ImageBanner = styled("div")`
  background: #c4c4c4;
  width: 100%;
  height: 80px;
`;

const DrawerBodySection = styled("div")`
  /* padding-left: 24px; */
  width:100%;
  & div:last-child {
    margin-bottom: 100px;
  }
`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const Drawer= ({ children, isOpened }:DrawerProps, props) => {
  const [min, setMin] = React.useState(isOpened);
  if(isOpened){
    const newChild = React.Children.map(children, child=>{
      if(React.isValidElement(child)){
        return React.cloneElement(child, { isOp: isOpened, ...props });
      };
      return child;
    })
    return <DrawerContainer>{newChild}</DrawerContainer>;
  } else {
    const newChild = React.Children.map(children, child=>{
      if(React.isValidElement(child)){
        return React.cloneElement(child, { isOp: isOpened, ...props });
      };
      return child;
    })
    return <DrawerMinContainer>{newChild}</DrawerMinContainer>
  }
};

const DrawerHead = ({isOp}) => {
  return (
    <DrawerHeadSection>
      {isOp?<ImageBanner />:<ImageProfile src="https://www.gravatar.com/avatar/bccdesignsystem" alt="profile"/>}
    
    </DrawerHeadSection>
  );
};

const DrawerBody = ({ children }) => {
  return <DrawerBodySection>{children}</DrawerBodySection>;
};

const MenuContainer = styled("div")`
  margin-top: 32px;
  width:100%;
`;

const MenuTitle = styled("div")`
  margin-left:24px;
`;

const MenuUl = styled("ul")`
  margin: 32px 0 0;
  padding: 0;
  user-select: none;
  list-style-type: none;
  & li:first-child {
  }
  & li {
    padding: 16px 0;
  }
`;

const MenuItem = styled("li")`
  display: flex;
  align-items: center;
  width:100%;
  &:hover {
    cursor: pointer;
    ${({ disabled }) => disabled && "cursor:default;background:transparent"}
    background-color:#f5f5f5;
  }
`;

const IconList = styled("span")`
  /* margin-right: 16px; */
`;

const MenuSubItem = styled("li")`
  margin: 0;
  margin-right: 24px;
  padding: 0;
  list-style-type: none;
`;

const DrawerMenu= ({ name, children, isOp }:DrawerMenuProps,props) => {
  return (
    <MenuContainer >
      <MenuTitle style={{visibility:!isOp&&"hidden",fontSize:16}}>{name}</MenuTitle>
      <MenuUl>{children}</MenuUl>
    </MenuContainer>
  );
};
// disabled={disabled} onClick={onClick} style={style}
const DrawerItem = ({
  children,
  icon,
  name,
  isOpened,
  iconDesc
}: DrawerItemProps) => {
  const [toggleMenu, setToggleMenu] = useState(isOpened);
  return (
    <>
      <MenuItem style={{justifyContent: !iconDesc&&"center", paddingRight:iconDesc&&"24px",paddingLeft:iconDesc&&"24px"}} onClick={() => setToggleMenu(!toggleMenu)}>
        {icon ? <IconList >{icon}</IconList> : ""}
        <span style={{marginLeft: iconDesc&&16}}>{iconDesc && name}</span>
        {(iconDesc && children) ? (
          <span style={{ marginLeft: "auto" }}>
            <ArrowDropDownIcon />
          </span>
        ) : (
          <span></span>
        )}
      </MenuItem>
      {toggleMenu ? <ul>{children}</ul> : <ul></ul>}
    </>
  );
};

const DrawerSubItem = ({ children }) => {
  return <MenuSubItem>{children}</MenuSubItem>;
};

DrawerItem.defaultProps = {
  isOpened: false,
};

Drawer.Head = DrawerHead;
Drawer.Body = DrawerBody;
Drawer.Menu = DrawerMenu;
Drawer.Item = DrawerItem;
Drawer.SubItem = DrawerSubItem;

export default Drawer;
// export {Drawer as default,DrawerHead, DrawerMenu, DrawerMenu};