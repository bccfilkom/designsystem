import * as React from "react";

import { Heading, Text, Paragraph } from ".";
import {
  ComponentBlock,
  SystemWrapper,
  SystemBlock,
} from "../../_utils/storybook";
import { Box } from "../../_foundations";
import { Stack } from "../common";

const readme = require("./README.md");

export default {
  title: "Core|Typography",
  component: [Text, Heading, Paragraph],
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const Example = () => (
  <SystemBlock
    title="Typography"
    subtitle="Open sans, Roboto (Android), San Francisco UI (IOS)"
  >
    <Stack spacing="xl">
      <Box display="grid" gridTemplateColumns="2fr 1fr">
        <Stack spacing="sm">
          <Paragraph scale={300}>
            Open sans merupakan humanist sans-serif typeface didesign oleh Steve
            Matteson setela diberi tugas oleh google dan dirilis pada tahun
            2011. Font ini merupakan font sebelumnya yaitu Droid sans, yang
            didesign untuk digunakan pada android
          </Paragraph>
          <Paragraph scale={300}>
            Open sans umum digunakan pada halaman web, browser (digunakan
            mozilla sampai tahun 2019), dekstop app (Telegram). Penggunaan open
            sans dioptimalkan untuk bacaan dengan blbalbala
          </Paragraph>
          <Paragraph scale={300}>
            Open sans sebagai sans-serif dengan sifat tegas dan moern dipilih
            sesuai dari init dari hasil research yang didapatkan yaitu
            kekeluargaan dan visioner segabagai ciri khas dan pandangan orang
            lain terpadahp BCC FILKOM.
          </Paragraph>
          <Paragraph>
            Pros
            <br />
            -tersedia banyak variasi
            <br />
            -mudah dibaca bagi berbagai kalangan (modern but ortu suruh baca ok)
            <br />
            -umum dan sering dipakai media, website, cetak, design, dll
            <br />
            -bcc sans serif
          </Paragraph>
          <Paragraph>
            Cons
            <br />
            -tidak tersedia versi thin and book?
            <br />
            -karena umum dan sering dipakai tadi jdnya malah kyk mainstream?
          </Paragraph>
        </Stack>
      </Box>
      <ComponentBlock title="" withBackground pd="0">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Stack spacing="md">
            <Heading scale={900}>BCC FILKOM BCC FILKOM BCC FILKOM</Heading>
            <Heading scale={800}>BCC FILKOM BCC FILKOM BCC FILKOM</Heading>
            <Heading scale={700}>BCC FILKOM BCC FILKOM BCC FILKOM</Heading>
            <Heading scale={600}>BCC FILKOM BCC FILKOM BCC FILKOM</Heading>
            <Heading scale={500}>BCC FILKOM BCC FILKOM BCC FILKOM</Heading>
          </Stack>
        </Box>
      </ComponentBlock>
      <Stack spacing="xl">
        <ComponentBlock title="" withBackground pd="0">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Stack spacing="md">
              <Heading scale={900} fontWeight="800">
                Typeface
              </Heading>
            </Stack>
          </Box>
        </ComponentBlock>
        <ComponentBlock title="" withBackground pd="0">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="baseline"
            spacing="md"
          >
            <Heading fontWeight="300" mx={15}>
              Ligth
            </Heading>
            <Heading fontWeight="400" mx={15}>
              Regular
            </Heading>
            <Heading fontWeight="600" mx={15}>
              Semibold
            </Heading>
            <Heading fontWeight="700" mx={15}>
              Bold
            </Heading>
            <Heading fontWeight="800" mx={15}>
              Extrabold
            </Heading>
          </Box>
        </ComponentBlock>
      </Stack>
    </Stack>
  </SystemBlock>
);

export const Skelaton = () => (
  <SystemBlock title="" subtitle="">
    <Stack spacing="xl">
      <Box display="grid" gridTemplateColumns="2fr 1fr">
        <Stack spacing="sm">
          <Paragraph scale={300} className="skeleton w15">
            Open sans merupakan humanist sans-serif typeface didesign oleh Steve
            Matteson setela diberi tugas oleh google dan dirilis pada tahun
            2011. Font ini merupakan font sebelumnya yaitu Droid sans, yang
            didesign untuk digunakan pada android
          </Paragraph>
          <Paragraph scale={300} className="skeleton">
            Open sans umum digunakan pada halaman web, browser (digunakan
            mozilla sampai tahun 2019), dekstop app (Telegram). Penggunaan open
            sans dioptimalkan untuk bacaan dengan blbalbala
          </Paragraph>
          <Paragraph scale={300} className="skeleton">
            Open sans sebagai sans-serif dengan sifat tegas dan moern dipilih
            sesuai dari init dari hasil research yang didapatkan yaitu
            kekeluargaan dan visioner segabagai ciri khas dan pandangan orang
            lain terpadahp BCC FILKOM.
          </Paragraph>
          <Paragraph className="skeleton">
            Pros
            <br />
            -tersedia banyak variasi
            <br />
            -mudah dibaca bagi berbagai kalangan (modern but ortu suruh baca ok)
            <br />
            -umum dan sering dipakai media, website, cetak, design, dll
            <br />
            -bcc sans serif
          </Paragraph>
          <Paragraph className="skeleton">
            Cons
            <br />
            -tidak tersedia versi thin and book?
            <br />
            -karena umum dan sering dipakai tadi jdnya malah kyk mainstream?
          </Paragraph>
        </Stack>
      </Box>
    </Stack>
  </SystemBlock>
);
Skelaton.story = {
  parameters: {
    notes: { markdown: false },
    jsx: { disable: true },
  },
};
