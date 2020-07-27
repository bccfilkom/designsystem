import * as React from "react";
import { Box, Heading, Text } from "../../_foundations";
import StoryContainer from "./StoryContainer";

export interface SystemHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
}

const SystemHeader: React.FC<SystemHeaderProps> = ({ title, subtitle }) => (
  <Box bg="blue09" px="lg" py="xl" color="black">
    <StoryContainer>
      <Heading
        as="h1"
        scale={600}
        color="black"
        fontWeight={500}
        maxWidth={500}
        mb={0}
      >
        {title}
      </Heading>
      {typeof subtitle === "string" ? (
        <Text
          as="p"
          mb={0}
          mt="xs"
          scale={100}
          fontWeight={100}
          maxWidth={500}
          color="hitam04"
        >
          {subtitle}
        </Text>
      ) : (
        subtitle
      )}
    </StoryContainer>
  </Box>
);

SystemHeader.displayName = "SystemHeader";

export default SystemHeader;
