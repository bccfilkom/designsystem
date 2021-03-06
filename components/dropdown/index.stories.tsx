import React, { useState } from 'react';
import { Stack } from '../_foundations/common';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import {
  SystemWrapper,
  SystemBlock,
} from '../_utils/storybook';
import Dropdown, { DropdownItem } from './component/Dropdown';

const readme = require("./README.md");

export default {
  title: 'Component|Dropdown',
  decorators: [SystemWrapper, withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

export const Default = () => {
  const placeholder = text('placeholder', 'This is placeholder text');
  const [data] = useState([
    { value: 'FE', name: 'Frontend Developer' },
    { value: 'BE', name: 'Backend Developer' },
    { value: 'PM', name: 'Product Management' },
    { value: 'PD', name: 'Product Design' },
  ]);
  const [value, setValue] = useState('');
  return (
    <SystemBlock title="BCC Design System - Dropdown">
      <Stack spacing="xl">
        <div style={{ width: '300px' }}>
          <Dropdown value={value} placeholder={placeholder}>
            {data.map((item) => (
              <DropdownItem
                key={item.value}
                onClick={() => setValue(item.name)}
              >
                {item.name}
              </DropdownItem>
            ))}
          </Dropdown>
        </div>
      </Stack>
    </SystemBlock>
  );
};

export const Scrollable = () => {
  const placeholder = text('placeholder', 'This is placeholder text');
  const [data] = useState([
    { value: 'FE', name: 'Frontend Developer' },
    { value: 'BE', name: 'Backend Developer' },
    { value: 'PM', name: 'Product Management' },
    { value: 'PD', name: 'Product Design' },
    { value: 'DS', name: 'Data Science' },
    { value: 'DO', name: 'DevOps Engineer' },
    { value: 'ME', name: 'Mobile Engineer' },
  ]);
  const [value, setValue] = useState('');
  return (
    <SystemBlock title="BCC Design System - Dropdown">
      <Stack spacing="xl">
        <div style={{ width: '300px' }}>
          <Dropdown type="scrollable" value={value} placeholder={placeholder}>
            {data.map((item) => (
              <DropdownItem
                key={item.value}
                onClick={() => setValue(item.name)}
              >
                {item.name}
              </DropdownItem>
            ))}
          </Dropdown>
        </div>
      </Stack>
    </SystemBlock>
  );
};
