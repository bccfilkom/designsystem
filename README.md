<b><h1 align="center">🤖 BCC - Design System</h1></b>
<p align="center">Design System is a set of components that have been standardized by a guideline to reduce redundancy and make all components consistent both in language and visually.</p>


## Installation
BCC-Design System is available at [npmjs: @bccfilkom/designsystem](https://www.npmjs.com/package/@bccfilkom/designsystem)

```bash
# with NPM
npm install @bccfilkom/designsystem

# with YARN
yarn add @bccfilkom/designsystem
```

## Documentation
Check out our [official documentation website](https://designsystem.bccfilkom.net/)

## Usage
This is a quick example of using BCC - Design System component

```jsx
import * as React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '@bccfilkom/designsystem';


function App() {
  return (
    <Button onClick={() => console.log("Hello world")}>Hello World</Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```


## Contributing

Please read our [Contributing Guidelines](CONTRIBUTING.md) to get started on developing.

This project is bound by a [Code of Conduct](CODE_OF_CONDUCT.md).


## License

Copyright (c) 2021 bccdesignsystem and/or contributors. All rights reserved.