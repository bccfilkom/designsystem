import React, { useState, useRef } from 'react';
import { Stack } from '../_foundations/common';
import { withKnobs } from '@storybook/addon-knobs';
import { SystemWrapper, SystemBlock } from '../_utils/storybook';
import Search from '../search/component/Search';
import logo from './assets/BCC-Logo-White.svg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Navbar from './component/Navbar';
import Menu from '../menu/component/Menu';
import { useOutsideClick } from '../../shared/hooks';

export default {
	title: 'Component|Navbar',
	// component: [Tabs, TabPane],
	decorators: [SystemWrapper, withKnobs]
};

export const Default = () => {
	const [search, setSearch] = useState('');
	const [Active, setActive] = useState({
		activeItem: null,
		items: []
	});
	const [visibleSearch, setVisibleSearch] = useState(false);

	return (
		<SystemBlock title="BCC Design System - Navbar with logo - Social Media Icon">
			<Stack spacing="xl">
				<Navbar>
					<Navbar.Bars>
						<MenuIcon />
					</Navbar.Bars>
					<Navbar.Menu>
						<Navbar.Logo>
							<img src={logo} alt="logo" style={{ height: '20px' }} />
						</Navbar.Logo>
						<Navbar.Item
							active={'NavItem1' === Active.activeItem}
							onClick={() => setActive({ ...Active, activeItem: 'NavItem1' })}
						>
							NavItem1
						</Navbar.Item>
						<Navbar.Item
							active={'NavItem2' === Active.activeItem}
							onClick={() => setActive({ ...Active, activeItem: 'NavItem2' })}
						>
							NavItem2
						</Navbar.Item>
						<Navbar.Item
							active={'NavItem3' === Active.activeItem}
							onClick={() => setActive({ ...Active, activeItem: 'NavItem3' })}
						>
							Navitem3
						</Navbar.Item>
					</Navbar.Menu>
					<Navbar.Icons>
						<Navbar.Search open={visibleSearch}>
              <div>
                <Search
                  value={search}
                  placeholder="Search here"
                  clearValue
                  handleChange={(e) => setSearch(e.target.value)}
                  handleClear={() => setSearch('')}
                />
              </div>
						</Navbar.Search>
						<Navbar.Icon onClick={() => setVisibleSearch(!visibleSearch)}>
							<SearchIcon />
						</Navbar.Icon>
						<Navbar.Menu>
							<Navbar.Icon href="https://instagram.com">
								<InstagramIcon />
							</Navbar.Icon>
							<Navbar.Icon href="https://twitter.com">
								<TwitterIcon />
							</Navbar.Icon>
							<Navbar.Icon href="https://linked.in">
								<LinkedInIcon />
							</Navbar.Icon>
						</Navbar.Menu>
					</Navbar.Icons>
				</Navbar>
			</Stack>
		</SystemBlock>
	);
};

export const OnlySearchIcon = () => {
	const [search, setSearch] = useState('');
	const [Active, setActive] = useState({
		activeItem: null,
		items: []
	});
	const [visibleSearch, setVisibleSearch] = useState(false);
	return (
		<SystemBlock title="BCC Design System - Navbar with logo - Only Search Icon">
			<Stack spacing="xl">
				<Navbar>
					<Navbar.Bars>
						<MenuIcon />
					</Navbar.Bars>
					<Navbar.Menu>
						<Navbar.Logo>
							<img src={logo} alt="logo" style={{ height: '20px' }} />
						</Navbar.Logo>
						<Navbar.Item
							active={'NavItem1' === Active.activeItem}
							onClick={() => setActive({ ...Active, activeItem: 'NavItem1' })}
						>
							NavItem1
						</Navbar.Item>
						<Navbar.Item
							active={'NavItem2' === Active.activeItem}
							onClick={() => setActive({ ...Active, activeItem: 'NavItem2' })}
						>
							NavItem2
						</Navbar.Item>
						<Navbar.Item
							active={'NavItem3' === Active.activeItem}
							onClick={() => setActive({ ...Active, activeItem: 'NavItem3' })}
						>
							Navitem3
						</Navbar.Item>
					</Navbar.Menu>
					<Navbar.Icons>
						<Navbar.Search open={visibleSearch}>
              <div>
                <Search
                  value={search}
                  placeholder="Search here"
                  clearValue
                  handleChange={(e) => setSearch(e.target.value)}
                  handleClear={() => setSearch('')}
                />
              </div>
						</Navbar.Search>
						<Navbar.Icon onClick={() => setVisibleSearch(!visibleSearch)}>
							<SearchIcon />
						</Navbar.Icon>
					</Navbar.Icons>
				</Navbar>
			</Stack>
		</SystemBlock>
	);
};

export const WithoutLogo = () => {
	const [search, setSearch] = useState('');
	const [Active, setActive] = useState({
		activeItem: null,
		items: []
	});
	const [visibleSearch, setVisibleSearch] = useState(false);
	return (
		<SystemBlock title="BCC Design System - Navbar without logo">
			<Stack spacing="xl">
				<Navbar>
					<Navbar.Bars>
						<MenuIcon />
					</Navbar.Bars>
					<Navbar.Menu>
						<Navbar.Item
							active={'NavItem1' === Active.activeItem}
							onClick={() => setActive({ ...Active, activeItem: 'NavItem1' })}
						>
							NavItem1
						</Navbar.Item>
						<Navbar.Item
							active={'NavItem2' === Active.activeItem}
							onClick={() => setActive({ ...Active, activeItem: 'NavItem2' })}
						>
							NavItem2
						</Navbar.Item>
						<Navbar.Item
							active={'NavItem3' === Active.activeItem}
							onClick={() => setActive({ ...Active, activeItem: 'NavItem3' })}
						>
							Navitem3
						</Navbar.Item>
					</Navbar.Menu>
					<Navbar.Icons>
						<Navbar.Search open={visibleSearch}>
							<div>
                <Search
                  value={search}
                  placeholder="Search here"
                  clearValue
                  handleChange={(e) => setSearch(e.target.value)}
                  handleClear={() => setSearch('')}
                />
              </div>
						</Navbar.Search>
						<Navbar.Icon onClick={() => setVisibleSearch(!visibleSearch)}>
							<SearchIcon />
						</Navbar.Icon>
						<Navbar.Menu>
							<Navbar.Icon href="https://instagram.com">
								<InstagramIcon />
							</Navbar.Icon>
							<Navbar.Icon href="https://twitter.com">
								<TwitterIcon />
							</Navbar.Icon>
							<Navbar.Icon href="https://linked.in">
								<LinkedInIcon />
							</Navbar.Icon>
						</Navbar.Menu>
					</Navbar.Icons>
				</Navbar>
			</Stack>
		</SystemBlock>
	);
};

export const NavbarDropdown = () => {
	const [search, setSearch] = useState('');
  const [isClosed, setIsClosed] = useState(true);
	const [Active, setActive] = useState({
		activeItem: null,
		items: []
	});
	const [visibleSearch, setVisibleSearch] = useState(false);
  const wrapperRef = useRef(null);

  useOutsideClick({ref:wrapperRef, fun:() => {
    setIsClosed(true);
    setActive({activeItem: null, items: []})
  }});

	return (
		<SystemBlock title="BCC Design System - Navbar with logo - Social Media Icon">
			<Stack spacing="xl">
				<Navbar>
					<Navbar.Bars>
						<MenuIcon />
					</Navbar.Bars>
					<Navbar.Menu>
						<Navbar.Logo>
							<img src={logo} alt="logo" style={{ height: '20px' }} />
						</Navbar.Logo>
            <div ref={wrapperRef}>
              <Navbar.Item
                active={'NavItem1' === Active.activeItem}
                onClick={() => {
                  setIsClosed(false);
                  setActive({ ...Active, activeItem: 'NavItem1' })
                }}
              >
                NavItem1
              </Navbar.Item>
              <Menu opened={isClosed}>
                <Menu.Item name="Text" onClick={() => setIsClosed(true)} />
                <Menu.Item name="Text">
                  <Menu.SubItem onClick={() => setIsClosed(true)}>
                    Text
                  </Menu.SubItem>
                  <Menu.SubItem onClick={() => setIsClosed(true)}>
                    Text
                  </Menu.SubItem>
                </Menu.Item>
                <Menu.Item name="Text">
                  <Menu.SubItem onClick={() => setIsClosed(true)}>
                    Text
                  </Menu.SubItem>
                  <Menu.SubItem onClick={() => setIsClosed(true)}>
                    Text
                  </Menu.SubItem>
                  <Menu.SubItem onClick={() => setIsClosed(true)}>
                    Text
                  </Menu.SubItem>
                  <Menu.SubItem onClick={() => setIsClosed(true)}>
                    Text
                  </Menu.SubItem>
                </Menu.Item>
                <Menu.Item name="Text" onClick={() => setIsClosed(true)} />
              </Menu>
            </div>
						<Navbar.Item
							active={'NavItem2' === Active.activeItem}
							onClick={() => setActive({ ...Active, activeItem: 'NavItem2' })}
						>
							NavItem2
						</Navbar.Item>
						<Navbar.Item
							active={'NavItem3' === Active.activeItem}
							onClick={() => setActive({ ...Active, activeItem: 'NavItem3' })}
						>
							Navitem3
						</Navbar.Item>
					</Navbar.Menu>
					<Navbar.Icons>
						<Navbar.Search open={visibleSearch}>
              <div>
                <Search
                  value={search}
                  placeholder="Search here"
                  clearValue
                  handleChange={(e) => setSearch(e.target.value)}
                  handleClear={() => setSearch('')}
                />
              </div>
						</Navbar.Search>
						<Navbar.Icon onClick={() => setVisibleSearch(!visibleSearch)}>
							<SearchIcon />
						</Navbar.Icon>
						<Navbar.Menu>
							<Navbar.Icon href="https://instagram.com">
								<InstagramIcon />
							</Navbar.Icon>
							<Navbar.Icon href="https://twitter.com">
								<TwitterIcon />
							</Navbar.Icon>
							<Navbar.Icon href="https://linked.in">
								<LinkedInIcon />
							</Navbar.Icon>
						</Navbar.Menu>
					</Navbar.Icons>
				</Navbar>
			</Stack>
		</SystemBlock>
	);
};