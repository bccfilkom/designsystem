import * as React from "react";
import { Box, Heading, Stack, StackProps } from "../../_foundations";

interface ComponentBlockProps extends Omit<StackProps, "spacing"> {
  title: string;
  withBackground?: boolean;
  scaleTitle?: string;
  pd?: string;
  children?:React.ReactNode
}

const ComponentBlock = ({
  children,
  title,
  withBackground,
  pd,
  scaleTitle,
  ...rest
}:ComponentBlockProps) => (
  <Stack spacing="md" {...rest}>
    <Heading color="hitam02" scale={scaleTitle} m={0}>
      {title}
    </Heading>
    <Box
      backgroundColor={withBackground ? "white" : undefined}
      padding={pd ? pd : undefined}
    >
      {children}
    </Box>
  </Stack>
);

export default ComponentBlock;
