import * as React from "react";
import { Box } from "../../_foundations";
import StoryContainer from "./StoryContainer";

interface SystemContainerProps {
  noBackground?: boolean;
}

const SystemContainer: React.FC<SystemContainerProps> = ({
  children,
  noBackground = false,
}) => (
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
