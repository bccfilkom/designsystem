import React, { Fragment } from "react";
import {
  ComponentBlock,
  SystemWrapper,
  SystemBlock,
} from "../../_utils/storybook";
import { Box } from "../../_foundations";
import { Stack } from "../common";
import { colors } from "../../_utils";
import { Paragraph, Heading } from "../typography";

export default {
  title: "Core|color",
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: false },
    jsx: { disable: true },
  },
};

export const Example = () => (
  <SystemBlock>
    <Stack spacing="xl">
      <ComponentBlock title="Primary colors" scaleTitle="600" withBackground>
        <Box
          display="grid"
          gridGap="20px"
          gridTemplateRows="340px"
          gridTemplateColumns="600px"
        >
          <Box display="flex">
            <Box
              flex="1"
              width="100%"
              position="relative"
              display="flex"
              alignItems="stretch"
              boxShadow="0px 5px 20px rgba(128, 128, 128, 0.1)"
              color={colors.white}
            >
              <Box
                display="flex"
                flex="1"
                flexDirection="column"
                width="100%"
                p="20px"
                background={colors.biru}
              >
                <Heading color={colors.white} scale="400">
                  Biru
                </Heading>
                <Paragraph scale="300">HEX : {colors.biru}</Paragraph>
                <Paragraph scale="300">RGB : {colors.biru}</Paragraph>
              </Box>
              <Box
                flex="0 0 40%"
                display="flex"
                flexDirection="column"
                overflow="hidden"
              >
                <Box
                  flex="1 1 auto"
                  background={colors.hitam}
                  display="flex"
                  position="relative"
                  overflow="hidden"
                  flexDirection="column"
                  p="20px"
                >
                  <Heading color={colors.white} scale="400">
                    Hitam
                  </Heading>
                  <Paragraph scale="300">HEX : {colors.hitam}</Paragraph>
                  <Paragraph scale="300">RGB : {colors.hitam}</Paragraph>
                </Box>
                <Box
                  flex="1 1 auto"
                  background={colors.putih}
                  display="flex"
                  position="relative"
                  overflow="hidden"
                  flexDirection="column"
                  p="20px"
                  color={colors.black}
                >
                  <Heading color={colors.black} scale="400">
                    Putih
                  </Heading>
                  <Paragraph scale="300">HEX : {colors.putih}</Paragraph>
                  <Paragraph scale="300">RGB : {colors.putih}</Paragraph>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </ComponentBlock>
      <ComponentBlock title="Secondary colors" scaleTitle="600" withBackground>
        <Box mb={24}>
          <Box
            backgroundColor={colors.orange}
            display="inline-block"
            verticalAlign="top"
            width="120px"
            height="120px"
          ></Box>
          <Box ml={12} display="inline-block" verticalAlign="top">
            <Heading color={colors.black} scale="400">
              Orange
            </Heading>
            <Paragraph scale="300">HEX : {colors.orange}</Paragraph>
            <Paragraph scale="300">RGB : {colors.orange}</Paragraph>
          </Box>
        </Box>
        <Box mb={24}>
          <Box
            backgroundColor={colors.merah}
            display="inline-block"
            verticalAlign="top"
            width="120px"
            height="120px"
          ></Box>
          <Box ml={12} display="inline-block" verticalAlign="top">
            <Heading color={colors.black} scale="400">
              Merah
            </Heading>
            <Paragraph scale="300">HEX : {colors.merah}</Paragraph>
            <Paragraph scale="300">RGB : {colors.merah}</Paragraph>
          </Box>
        </Box>
        <Box mb={24}>
          <Box
            backgroundColor={colors.hijau}
            display="inline-block"
            verticalAlign="top"
            width="120px"
            height="120px"
          ></Box>
          <Box ml={12} display="inline-block" verticalAlign="top">
            <Heading color={colors.black} scale="400">
              Hijau
            </Heading>
            <Paragraph scale="300">HEX : {colors.hijau}</Paragraph>
            <Paragraph scale="300">RGB : {colors.hijau}</Paragraph>
          </Box>
        </Box>
      </ComponentBlock>
      <ComponentBlock
        title="Saturation dan Shade"
        scaleTitle="600"
        withBackground
      >
        <Box
          display="grid"
          width="75%"
          gridGap="5%"
          gridTemplateColumns="repeat(3,1fr)"
          mb="calc(3px + 5%)"
          mx="auto"
        >
          <Box display="flex" flexDirection="column" width="100%" height="50%">
            <Heading color={colors.black} scale="400" my={15}>
              Biru
            </Heading>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.biru01}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.biru02}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.biru03}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.biru04}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.biru05}
            ></Box>
          </Box>
          <Box display="flex" flexDirection="column" width="100%" height="50%">
            <Heading color={colors.black} scale="400" my={15}>
              Hitam
            </Heading>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.hitam01}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.hitam02}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.hitam03}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.hitam04}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.hitam05}
            ></Box>
          </Box>
          <Box display="flex" flexDirection="column" width="100%" height="50%">
            <Heading color={colors.black} scale="400" my={15}>
              Putih
            </Heading>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.putih01}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.putih02}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.putih03}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.putih04}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.putih05}
            ></Box>
          </Box>
          <Box display="flex" flexDirection="column" width="100%" height="50%">
            <Heading color={colors.black} scale="400" my={15}>
              Orange
            </Heading>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.orange01}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.orange02}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.orange03}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.orange04}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.orange05}
            ></Box>
          </Box>
          <Box display="flex" flexDirection="column" width="100%" height="50%">
            <Heading color={colors.black} scale="400" my={15}>
              Merah
            </Heading>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.merah01}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.merah02}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.merah03}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.merah04}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.merah05}
            ></Box>
          </Box>
          <Box display="flex" flexDirection="column" width="100%" height="50%">
            <Heading color={colors.black} scale="400" my={15}>
              Hijau
            </Heading>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.hijau01}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.hijau02}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.hijau03}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.hijau04}
            ></Box>
            <Box
              width="100%"
              height="100%"
              p={25}
              backgroundColor={colors.hijau05}
            ></Box>
          </Box>
        </Box>
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);
