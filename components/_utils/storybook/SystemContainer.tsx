import * as React from "react";
import { Box } from "../../_foundations";
import StoryContainer from "./StoryContainer";

interface SystemContainerProps {
  noBackground?: boolean;
  children?: React.ReactNode
}

const SystemContainer= ({
  children,
  noBackground = false,
}:SystemContainerProps) => (
  <Box
    flex="1 1 auto"
    px="lg"
    py="x"
    backgroundColor={!noBackground ? "white" : undefined}
  >
    <StoryContainer>{children}</StoryContainer>
  </Box>
);

SystemContainer.displayName = "SystemContainer";

export default SystemContainer;
