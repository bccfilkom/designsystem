import * as React from "react";
import styled from "styled-components";

interface StoryContainerProps {
  children?: React.ReactNode;
}

const StoryContainerRoot = styled("div")`
  margin: 0 auto;
  width: 100%;
  max-width: 1116px;
`;

const StoryContainer = ({ children }:StoryContainerProps) => (
  <StoryContainerRoot>{children}</StoryContainerRoot>
);

export default StoryContainer;
