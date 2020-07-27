# Typography

Typography primitives for BCC Design System.

## Usage

All typography components contain the following styled-system hooks:

- layout
- space
- color
- typography

Read the [`styled-system` reference table](https://styled-system.com/table) for more information about these hooks and how they work.

### Scale props

We also provided a special `scale` prop on all components to automatically scale fonts based on their respective type scales.

```jsx
import { Heading } from './components';

export default function Component() {
  return <Heading scale={500}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Heading>;
}
```

### `Heading` component

The heading component is used for all headings.

```jsx
import { AksaraReset, Heading } from '@aksara/ui-kit';

export default function MyApp({ children }) {
  return (
    <AksaraReset>
      <Heading scale={900}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Heading>
      <Heading scale={800}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Heading>
      <Heading scale={700}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Heading>
      <Heading scale={600}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Heading>
      <Heading scale={500}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Heading>
      <Heading scale={400}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Heading>
      <Heading scale={300}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Heading>
      <Heading scale={200}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Heading>
      <Heading scale={100}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Heading>
    </AksaraReset>
  );
}
```

Heading renders a `h2` by default. If you would like to determine which HTML element it renders, you can use the `as` prop.

```jsx
<AksaraReset>
  <Heading as="h3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Heading>
</AksaraReset>
```

### `Text` component

The text component is used for single line text.

```jsx
import { AksaraReset, Text } from '@aksara/ui-kit';

export default function MyApp({ children }) {
  return (
    <AksaraReset>
      <Text scale={500}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      <Text scale={400}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      <Text scale={300}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      <Text scale={200}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
    </AksaraReset>
  );
}
```

Text renders a `span` by default. If you would like to determine which HTML element it renders, you can use the `as` prop.

```jsx
import { AksaraReset, Text } from '@aksara/ui-kit';

export default function MyApp({ children }) {
  return (
    <AksaraReset>
      <Text scale={400} as="p">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Text>
    </AksaraReset>
  );
}
```

### `Paragraph` component

Similar to `text`, but with `<p>` as the default element and has a font weight of `300`.

```jsx
import { Paragraph } from '@aksara-ui/core';

export default function Component() {
  return (
    <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
        has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book. It has 
        survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of 
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </Paragraph>
  );
}
```

As with all other components, you can use the `scale` prop to use different type scales for the paragraph. For example:

```jsx
import { Paragraph } from '@aksara-ui/core';

export default function Component() {
  return (
    <Paragraph scale={300}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
        has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book. It has 
        survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of 
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </Paragraph>
  );
}
```