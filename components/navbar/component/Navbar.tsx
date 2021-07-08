import * as React from "react";
import styled from "styled-components";
import { SearchProps } from "../../search/component/Search";

interface NavbarProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface NavItemProps {
  active?: boolean;
  children?: string;
}

const NavbarComp = styled.nav`
  background: #0081bf;
  height: 64px;
  display: flex;
  justify-content: space-between;
  padding: 0px 48px;
  z-index: 10;
  @media screen and (max-width: 768px) {
    padding: 0px 16px;
  }
`;

export const NavLogo = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  text-decoration: none;
  cursor: pointer;
  margin-right: 24px;
`;

export const NavItem = styled.a<NavItemProps>`
  position: relative;
	color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	text-decoration: none;
	cursor: pointer;
	padding: 0 8px;
  font-weight: normal;
	font-size: 14px;
	&:not(:last-child) {
		margin-right: 8px;
	}
	:hover {
		background-color: #5db7e6;
	}
  :before {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: block;
    content: '${(props) => props.children}';
    font-weight: ${(props) => (props.active ? "bold" : "normal")};
    overflow: hidden;
  }
`;

export const NavIcon = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  text-decoration: none;
  cursor: pointer;
  padding: 22px 0;
  margin-left: 16px;
`;

export const Bars = styled.div`
  display: none;
  color: #fff;
  /* visibility: hidden; */

  @media screen and (max-width: 768px) {
    display: grid;
    place-items: center;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  & > * {
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavIcons = styled.div`
  display: flex;
  align-items: center;
`;

export interface NavSearchProps extends SearchProps {
  open: boolean;
  children: React.ReactNode;
}

export const NavSearch = ({ children, open, ...rest }: NavSearchProps) => {
  return React.isValidElement(children) ? (
    React.cloneElement(children, {
      ...children.props,
      style: {
        transformOrigin: "right center",
        transition: "all 0.125s ease-in",
        transform: `scale(${open ? 1 : 0})`,
        opacity: open ? 1 : 0,
      },
      ...rest,
    })
  ) : (
    <>{children}</>
  );
};

const Navbar: React.FC<NavbarProps> & {
  Menu: typeof NavMenu;
  Logo: typeof NavLogo;
  Item: typeof NavItem;
  Icon: typeof NavIcon;
  Bars: typeof Bars;
  Icons: typeof NavIcons;
  Search: typeof NavSearch;
} = (props) => {
  return <NavbarComp {...props} />;
};

Navbar.Menu = NavMenu;
Navbar.Logo = NavLogo;
Navbar.Item = NavItem;
Navbar.Icon = NavIcon;
Navbar.Bars = Bars;
Navbar.Icons = NavIcons;
Navbar.Search = NavSearch;

export default Navbar;
