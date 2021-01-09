import React, { useState } from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import Search from '../search/component/Search';
import logo from "./assets/BCC-Logo-White.svg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import NavLink from "./component/NavLink";
import Navbar, {
  NavMenu,
  NavLogo,
  NavIcon,
  NavIcons,
  Bars
} from "./component/Navbar";


export default {
  title: "Component|Navbar",
  // component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => {
  const [search, setSearch] = useState("")
  const [Active, setActive] = useState({
    activeItem: null,
    items: [],
  });
  const [visibleSearch, setVisibleSearch] = useState(false);

  return (
    <SystemBlock title="BCC Design System - Navbar with logo - Social Media Icon">
      <Stack spacing="xl">
        <Navbar>
          <Bars>
            <MenuIcon />
          </Bars>
          <NavMenu>
            <NavLogo>
              <img src={logo} alt="logo" style={{ height: "20px" }} />
            </NavLogo>
            <NavLink
              name="NavItem1"
              active={"NavItem1" === Active.activeItem}
              onClick={() => setActive({ ...Active, activeItem: "NavItem1" })}
            />
            <NavLink
              name="NavItem2"
              active={"NavItem2" === Active.activeItem}
              onClick={() => setActive({ ...Active, activeItem: "NavItem2" })}
            />
            <NavLink
              name="NavItem3"
              active={"NavItem3" === Active.activeItem}
              onClick={() => setActive({ ...Active, activeItem: "NavItem3" })}
            />
          </NavMenu>
          <NavIcons>
            {visibleSearch && (
              <Search
                value={search}
                placeholder="Search here"
                clearValue
                handleChange={(e) => setSearch(e.target.value)}
                handleClear={() => setSearch("")}
              />
            )}
            <NavIcon onClick={() => setVisibleSearch(!visibleSearch)}>
              <SearchIcon />
            </NavIcon>
            <NavMenu>
              <NavIcon
                href="https://instagram.com"
              >
                <InstagramIcon />
              </NavIcon>
              <NavIcon
                href="https://twitter.com"
              >
                <TwitterIcon />
              </NavIcon>
              <NavIcon
                href="https://linked.in"
              >
                <LinkedInIcon />
              </NavIcon>
            </NavMenu>
          </NavIcons>
        </Navbar>
      </Stack>
    </SystemBlock>
  );
};

export const OnlySearchIcon = () => {
  const [search, setSearch] = useState("")
  const [Active, setActive] = useState({
    activeItem: null,
    items: [],
  });
  const [visibleSearch, setVisibleSearch] = useState(false);
  return (
    <SystemBlock title="BCC Design System - Navbar with logo - Only Search Icon">
      <Stack spacing="xl">
      <Navbar>
          <Bars>
            <MenuIcon />
          </Bars>
          <NavMenu>
            <NavLogo>
              <img src={logo} alt="logo" style={{ height: "20px" }} />
            </NavLogo>
            <NavLink
              name="NavItem1"
              active={"NavItem1" === Active.activeItem}
              onClick={() => setActive({ ...Active, activeItem: "NavItem1" })}
            />
            <NavLink
              name="NavItem2"
              active={"NavItem2" === Active.activeItem}
              onClick={() => setActive({ ...Active, activeItem: "NavItem2" })}
            />
            <NavLink
              name="NavItem3"
              active={"NavItem3" === Active.activeItem}
              onClick={() => setActive({ ...Active, activeItem: "NavItem3" })}
            />
          </NavMenu>
          <NavIcons>
            {visibleSearch && (
              <Search
                value={search}
                placeholder="Search here"
                clearValue
                handleChange={(e) => setSearch(e.target.value)}
                handleClear={() => setSearch("")}
              />
            )}
            <NavIcon onClick={() => setVisibleSearch(!visibleSearch)}>
              <SearchIcon />
            </NavIcon>
          </NavIcons>
        </Navbar>
      </Stack>
    </SystemBlock>
  );
};

export const WithoutLogo = () => {
  const [search, setSearch] = useState("")
  const [Active, setActive] = useState({
    activeItem: null,
    items: [],
  });
  const [visibleSearch, setVisibleSearch] = useState(false);
  return (
    <SystemBlock title="BCC Design System - Navbar without logo">
      <Stack spacing="xl">
      <Navbar>
          <Bars>
            <MenuIcon />
          </Bars>
          <NavMenu>
            <NavLink
              name="NavItem1"
              active={"NavItem1" === Active.activeItem}
              onClick={() => setActive({ ...Active, activeItem: "NavItem1" })}
            />
            <NavLink
              name="NavItem2"
              active={"NavItem2" === Active.activeItem}
              onClick={() => setActive({ ...Active, activeItem: "NavItem2" })}
            />
            <NavLink
              name="NavItem3"
              active={"NavItem3" === Active.activeItem}
              onClick={() => setActive({ ...Active, activeItem: "NavItem3" })}
            />
          </NavMenu>
          <NavIcons>
            {visibleSearch && (
              <Search
                value={search}
                placeholder="Search here"
                clearValue
                handleChange={(e) => setSearch(e.target.value)}
                handleClear={() => setSearch("")}
              />
            )}
            <NavIcon onClick={() => setVisibleSearch(!visibleSearch)}>
              <SearchIcon />
            </NavIcon>
            <NavMenu>
              <NavIcon
                href="https://instagram.com"
              >
                <InstagramIcon />
              </NavIcon>
              <NavIcon
                href="https://twitter.com"
              >
                <TwitterIcon />
              </NavIcon>
              <NavIcon
                href="https://linked.in"
              >
                <LinkedInIcon />
              </NavIcon>
            </NavMenu>
          </NavIcons>
        </Navbar>
      </Stack>
    </SystemBlock>
  );
};

