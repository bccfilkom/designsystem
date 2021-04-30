import React, { useState } from 'react';
import { Stack } from '../_foundations/common';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from '../_utils/storybook';
import Dropdown, { DropdownItem } from './component/Dropdown';

export default {
  title: 'Component|Dropdown',
  // component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => {
  const [data] = useState([
    { value: 'FE', name: 'Frontend Developer' },
    { value: 'BE', name: 'Backend Developer' },
    { value: 'PM', name: 'Product Management' },
    { value: 'PD', name: 'Product Design' },
  ]);
  return (
    <SystemBlock title="BCC Design System - Dropdown">
      <Stack spacing="xl">
        <div style={{ width: '300px' }}>
          <Dropdown placeholder="Placeholder Text">
            {data.map((item) => (
              <DropdownItem>{item.name}</DropdownItem>
            ))}
          </Dropdown>
        </div>
      </Stack>
    </SystemBlock>
  );
};

export const Scrollable = () => {
  const [data] = useState([
    { value: 'FE', name: 'Frontend Developer' },
    { value: 'BE', name: 'Backend Developer' },
    { value: 'PM', name: 'Product Management' },
    { value: 'PD', name: 'Product Design' },
    { value: 'DS', name: 'Data Science' },
    { value: 'DO', name: 'DevOps Engineer' },
    { value: 'ME', name: 'Mobile Engineer' },
  ]);
  return (
    <SystemBlock title="BCC Design System - Dropdown">
      <Stack spacing="xl">
        <div style={{ width: '300px' }}>
          <Dropdown type="scrollable" placeholder="Placeholder Text">
            {data.map((item) => (
              <DropdownItem>{item.name}</DropdownItem>
            ))}
          </Dropdown>
        </div>
      </Stack>
    </SystemBlock>
  );
};
