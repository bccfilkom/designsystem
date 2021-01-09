import * as React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";
import { colors } from "../../_utils";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import NavLink, { NavLinkProps } from './NavLink';
import Search from '../../search/component/Search';


export type NavIconProps = {
  icon: React.ReactNode;
  href: string;
};

export interface NavbarProps {
  children?: React.ReactNode;
  items?: NavLinkProps[];
  logo?: string;
  icons?: NavIconProps[];
  searchActive?: boolean;
  searchValue?: string;
  handleSearch?: Function; 
  handleSearchClear?: Function;
  style?: React.CSSProperties;
}

 const Nav = styled.nav`
  background: #0081bf;
  height: 64px;
  display: flex;
  justify-content: space-between;
  padding: 0px 48px;
  z-index: 10;
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

export const NavItem = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  text-decoration: none;
  cursor: pointer;
  padding: 22px 8px;
  margin-right: 8px;
  font-size:14px;
  :hover {
    background-color: #5db7e6;
    color: #fff;
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
    display: block;
    height: 100%;
    cursor: pointer;
    margin: 22px 0;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavIcons = styled.div`
  display: flex;
  align-items: center;

`;



const Navbar: React.FC<NavbarProps> = ({
  // items,
  // logo,
  // icons,
  // searchActive,
  // searchValue,
  // handleSearch,
  // handleSearchClear,
  children,
  ...rest
}) => {
  const [Active, setActive] = useState({
    activeItem: null,
    items: [],
  });
  const [search, setSearch] = useState("");
  const [visibleSearch, setVisibleSearch] = useState(false);
  return (
    <>
      <Nav {...rest}>
        {children}
      </Nav>
    </>
  );
};

Navbar.defaultProps = {

};

export default Navbar;


// <Bars>
// <MenuIcon />
// </Bars>
// <NavMenu>
// {logo && (
//   <NavLogo>
//     <img src={logo} alt="logo" style={{ height: "20px" }} />
//   </NavLogo>
// )}
// {items && (items.map((navbarItem: NavLinkProps) => (
//   <NavLink
//     key={navbarItem.name}
//     {...navbarItem}
//     active={navbarItem.name === Active.activeItem}
//     onClick={() => setActive({ ...Active, activeItem: navbarItem.name })}
//   />
// )))}
// </NavMenu>
// <NavIcons>
// {visibleSearch && (
// <Search
//   value={searchValue}
//   placeholder="Search here"
//   clearValue
//   handleChange={handleSearch}
//   handleClear={handleSearchClear}
// />
// )}
// {searchActive && (
// <NavIcon onClick={() => setVisibleSearch(!visibleSearch)}>
//   <SearchIcon />
// </NavIcon>
// )}
// <NavMenu>
// {icons && (icons.map((navbarIcon: NavIconProps) => (
//   <NavIcon
//     href={navbarIcon.href}
//   >
//     {navbarIcon.icon}
//   </NavIcon>
// )))}
// </NavMenu>
// </NavIcons>