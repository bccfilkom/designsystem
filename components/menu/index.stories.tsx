import React, { useState, useRef } from 'react';
import { Stack } from '../_foundations/common';
import { withKnobs } from '@storybook/addon-knobs';
import { SystemWrapper, SystemBlock } from '../_utils/storybook';
import Button from '@material-ui/core/Button';
import Menu from './component/Menu';
import Lock from '@material-ui/icons/Lock';
import User from '@material-ui/icons/SupervisedUserCircle';
import Settings from '@material-ui/icons/Settings';
import Exit from '@material-ui/icons/ExitToApp';
import { useOutsideClick } from '../../shared/hooks';

export default {
  title: 'Component|Menu',
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => {
  const [isClosed, setIsClosed] = useState(true);
  const wrapperRef = useRef(null);
  useOutsideClick({ref:wrapperRef,fun: () => {
    setIsClosed(true);
  }});
  return (
    <SystemBlock title="BCC Design System - Menu">
      <Stack spacing="xl">
        <div ref={wrapperRef} style={{ display: 'inline-block' }}>
          <Button onClick={() => setIsClosed(!isClosed)} variant="contained">
            {isClosed ? 'Open' : 'Close'}
          </Button>
          <Menu opened={isClosed}>
            <Menu.Item name="Profile" onClick={() => setIsClosed(true)} />
            <Menu.Item name="My account" onClick={() => setIsClosed(true)} />
            <Menu.Item name="Settings" onClick={() => setIsClosed(true)} />
            <Menu.Item
              name="Logout"
              onClick={() => setIsClosed(true)}
              hasDivider
            />
          </Menu>
        </div>
      </Stack>
    </SystemBlock>
  );
};

export const withSubItem = () => {
  const [isClosed, setIsClosed] = useState(true);
  const wrapperRef = useRef(null);
  useOutsideClick({ref:wrapperRef, fun:() => {
    setIsClosed(true);
  }});
  return (
    <SystemBlock title="BCC Design System - Menu">
      <Stack spacing="xl">
        <div ref={wrapperRef} style={{ display: 'inline-block' }}>
          <Button onClick={() => setIsClosed(!isClosed)} variant="contained">
            {isClosed ? 'Open' : 'Close'}
          </Button>
          <Menu opened={isClosed}>
            <Menu.Item name="Profile" onClick={() => setIsClosed(true)} />
            <Menu.Item name="My account">
              <Menu.SubItem onClick={() => setIsClosed(true)}>
                Stories
              </Menu.SubItem>
              <Menu.SubItem onClick={() => setIsClosed(true)}>
                Wallet
              </Menu.SubItem>
            </Menu.Item>
            <Menu.Item name="Settings">
              <Menu.SubItem onClick={() => setIsClosed(true)}>
                History
              </Menu.SubItem>
              <Menu.SubItem onClick={() => setIsClosed(true)}>
                Privacy
              </Menu.SubItem>
              <Menu.SubItem onClick={() => setIsClosed(true)}>
                Login Activity
              </Menu.SubItem>
              <Menu.SubItem onClick={() => setIsClosed(true)}>
                Push Notification
              </Menu.SubItem>
            </Menu.Item>
            <Menu.Item name="Logout" onClick={() => setIsClosed(true)} />
          </Menu>
        </div>
      </Stack>
    </SystemBlock>
  );
};

export const Disabled = () => {
  const [isClosed, setIsClosed] = useState(true);
  const wrapperRef = useRef(null);
  useOutsideClick({ref:wrapperRef, fun:() => {
    setIsClosed(true);
  }});
  return (
    <SystemBlock title="BCC Design System - Menu">
      <Stack spacing="xl">
        <div ref={wrapperRef} style={{ display: 'inline-block' }}>
          <Button onClick={(e) => setIsClosed(!isClosed)} variant="contained">
            {isClosed ? 'Open' : 'Close'}
          </Button>
          <Menu opened={isClosed}>
            <Menu.Item name="Profile" disabled />
            <Menu.Item name="My account" disabled />
            <Menu.Item name="Settings" onClick={() => setIsClosed(true)} />
            <Menu.Item name="Logout" onClick={() => setIsClosed(true)} />
          </Menu>
        </div>
      </Stack>
    </SystemBlock>
  );
};

export const withIcon = () => {
  const [isClosed, setIsClosed] = useState(true);
  const wrapperRef = useRef(null);
  useOutsideClick({ref:wrapperRef, fun:() => {
    setIsClosed(true);
  }});
  return (
    <SystemBlock title="BCC Design System - Menu">
      <Stack spacing="xl">
        <div ref={wrapperRef} style={{ display: 'inline-block' }}>
          <Button onClick={(e) => setIsClosed(!isClosed)} variant="contained">
            {isClosed ? 'Open' : 'Close'}
          </Button>
          <Menu opened={isClosed}>
            <Menu.Item
              logo={<Lock />}
              onClick={() => setIsClosed(true)}
              name="Profile"
            />
            <Menu.Item
              logo={<User />}
              onClick={() => setIsClosed(true)}
              name="My account"
            />
            <Menu.Item
              logo={<Settings />}
              onClick={() => setIsClosed(true)}
              name="Settings"
            />
            <Menu.Item
              logo={<Exit />}
              onClick={() => setIsClosed(true)}
              name="Logout"
            />
          </Menu>
        </div>
      </Stack>
    </SystemBlock>
  );
};

export const withIconAndSubItem = () => {
  const [isClosed, setIsClosed] = useState(true);
  const wrapperRef = useRef(null);
  useOutsideClick({ref:wrapperRef, fun:() => {
    setIsClosed(true);
  }});
  return (
    <SystemBlock title="BCC Design System - Menu">
      <Stack spacing="xl">
        <div ref={wrapperRef} style={{ display: 'inline-block' }}>
          <Button onClick={(e) => setIsClosed(!isClosed)} variant="contained">
            {isClosed ? 'Open' : 'Close'}
          </Button>
          <Menu opened={isClosed}>
            <Menu.Item
              logo={<Lock />}
              onClick={() => setIsClosed(true)}
              name="Profile"
            ></Menu.Item>
            <Menu.Item logo={<User />} name="My account">
              <Menu.SubItem onClick={() => setIsClosed(true)}>
                Stories
              </Menu.SubItem>
              <Menu.SubItem onClick={() => setIsClosed(true)}>
                Wallet
              </Menu.SubItem>
            </Menu.Item>
            <Menu.Item
              logo={<Settings />}
              onClick={() => setIsClosed(true)}
              name="Settings"
            ></Menu.Item>
            <Menu.Item
              logo={<Exit />}
              onClick={() => setIsClosed(true)}
              name="Logout"
            ></Menu.Item>
          </Menu>
        </div>
      </Stack>
    </SystemBlock>
  );
};
