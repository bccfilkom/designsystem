<Meta title="intro" />

# Get started

This guide will help you render components and applications with React Native for Web. 

If you're not familiar with setting up a new React web project, please refer to the [React documentation](https://reactjs.org/).

## Contributing

Please read our [Contributing Guidelines](CONTRIBUTING.md) to get started on developing.

This project is bound by a [Code of Conduct](CODE_OF_CONDUCT.md).

## Starter 
> Starter kit for React applications using [React](https://github.com/facebook/create-react-app).

A nodejs >= 8.0.0 setup with [yarn](https://yarnpkg.com/) is recommended.

```bash
# install dependencies
yarn

# ...or if you'd like to use npm instead
npm install

# serve with hot reload at localhost:9009
yarn storybook

# build for production
yarn build
```
### Example
```jsx
// Example for `<Button />` component.
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;
```

Read the [Storybook](https://github.com/storybookjs/design-system/) for more examples.

## License

Copyright (c) 2018 bccdesignsystem and/or contributors. All rights reserved.