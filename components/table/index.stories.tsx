import * as React from "react";

import { Table } from "./component/Table";
import { TableSkeleton } from "./component/TableSkeleton";
import { SystemWrapper, SystemBlock } from "../_utils/storybook";
import { Stack } from "../_foundations/common";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Component|Table",
  component: [Table],
  decorators: [SystemWrapper, withKnobs],
};

const dataDummy = {
  header: [
    {
      key: "name",
      name: "Name",
    },
    {
      key: "address",
      name: "Address",
    },
    {
      key: "date",
      name: "Date",
    },
    {
      key: "price",
      name: "Price",
    },
  ],
  body: [
    {
      name: "Jane Cooper",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      phone: "(406) 555-0120",
      date: "8/16/13",
      price: "$946.55",
    },
    {
      name: "Wade Warren",
      address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      phone: "(480) 555-0103",
      date: "5/7/16",
      price: "$328.85",
    },
    {
      name: "Esther Howard",
      address: "4140 Parker Rd. Allentown, New Mexico 31134",
      phone: "(603) 555-0123",
      date: "10/28/12",
      price: "$446.61",
    },
    {
      name: "Cameron Williamson",
      address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
      phone: "(704) 555-0127",
      date: "9/18/16",
      price: "$778.35",
    },
    {
      name: "Brooklyn Simmons",
      address: "4517 Washington Ave. Manchester, Kentucky 39495",
      phone: "(239) 555-0108",
      date: "8/15/17",
      price: "$202.87",
    },
    {
      name: "Leslie Alexander",
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      phone: "(316) 555-0116",
      date: "1/15/12",
      price: "$106.58",
    },
  ],
};

export const Regular = () => {
  return (
    <SystemBlock title="BCC Design System - Table">
      <Stack spacing="xl">
        <br />
        <h2>Regular</h2>
        <br />
        <Table data={dataDummy}></Table>
      </Stack>

      <Stack spacing="xl">
        <br />
        <h2>Regular Horizontal Line</h2>
        <br />
        <Table data={dataDummy} horizontalLine></Table>
      </Stack>

      <Stack spacing="xl">
        <br />
        <h2>Regular Stripe</h2>
        <br />
        <Table data={dataDummy} stripe></Table>
      </Stack>
    </SystemBlock>
  );
};

export const Condensed = () => {
  return (
    <SystemBlock title="BCC Design System - Table">
      <Stack spacing="xl">
        <br />
        <h2>Condensed</h2>
        <br />
        <Table data={dataDummy} condensed></Table>
      </Stack>
      <Stack spacing="xl">
        <br />
        <h2>Condensed Horizontal Line</h2>
        <br />
        <Table data={dataDummy} condensed horizontalLine></Table>
      </Stack>
      <Stack spacing="xl">
        <br />
        <h2>Condensed Stripe</h2>
        <br />
        <Table data={dataDummy} condensed stripe></Table>
      </Stack>
    </SystemBlock>
  );
};

export const Relaxed = () => {
  return (
    <SystemBlock title="BCC Design System - Table">
      <Stack spacing="xl">
        <br />
        <h2>Relaxed</h2>
        <br />
        <Table data={dataDummy} relaxed></Table>
      </Stack>
      <Stack spacing="xl">
        <br />
        <h2>Relaxed Horizontal Line</h2>
        <br />
        <Table data={dataDummy} relaxed horizontalLine></Table>
      </Stack>
      <Stack spacing="xl">
        <br />
        <h2>Relaxed Stripe</h2>
        <br />
        <Table data={dataDummy} relaxed stripe></Table>
      </Stack>
    </SystemBlock>
  );
};

export const Skeleton = () => {
  return (
    <SystemBlock title="BCC Design System - Table">
      <Stack spacing="xl">
        <br />
        <h2>Skeleton</h2>
        <br />
        <TableSkeleton header={dataDummy.header} ></TableSkeleton>
      </Stack>
      <Stack spacing="xl">
        <br />
        <h2>Skeleton Horizontal Line</h2>
        <br />
        <TableSkeleton header={dataDummy.header} horizontalLine></TableSkeleton>
      </Stack>
      <Stack spacing="xl">
        <br />
        <h2>Skeleton Stripe</h2>
        <br />
        <TableSkeleton header={dataDummy.header} stripe></TableSkeleton>
      </Stack>
    </SystemBlock>
  );
};
