import * as React from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { Heading, Box } from "../../_foundations";
import { colors } from "../variables";

interface SystemSubheadingProps {
  children?:React.ReactNode;
}

const HorizontalRule = styled("hr")<SpaceProps>`
  ${space}
  border: none;
  border-top: 1px solid ${themeGet("colors.hitam04", colors.hitam04)};
`;

const SystemSubheading= ({ children, ...rest }:SystemSubheadingProps) => (
  <Box {...rest}>
    <Heading scale={600}>{children}</Heading>
    <HorizontalRule mt="sm" mb={0} />
  </Box>
);

SystemSubheading.displayName = "SystemSubheading";

export default SystemSubheading;
