import * as React from 'react';
import { Box, Heading, Stack, StackProps } from '../../foundations';

interface ComponentBlockProps extends Omit<StackProps, 'spacing'> {
  title: string;
  withBackground?: boolean;
  pd : string;
}

const ComponentBlock: React.FC<ComponentBlockProps> = ({ children, title, withBackground,pd, ...rest }) => (
  <Stack spacing="sm" {...rest}>
    <Heading color="hitam02" scale={100} m={0}>
      {title}
    </Heading>
    <Box backgroundColor={withBackground ? 'white' : undefined} padding={pd ? pd : undefined}>
      {children}
    </Box>
  </Stack>
);

export default ComponentBlock;