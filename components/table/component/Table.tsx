import * as React from "react";
import styled from "styled-components";
import { fonts } from "../../_utils/index";

interface TableProps {
  data: Data;
  type?: boolean;
  condensed?: boolean;
  relaxed?: boolean;
  grid?: boolean;
  horizontalLine?: boolean;
  stripe?: boolean;
}

interface Data {
  header: HeaderItem[];
  body: object[];
}

interface HeaderItem {
  key: string | number;
  name: string;
}

export const Table: React.FC<TableProps> = ({
  data,
  condensed,
  relaxed,
  horizontalLine,
  stripe,
}) => {
  const keys = [];
  data.header.map(({ key }) => keys.push(key));
  return (
    <Container>
      <thead>
        <tr>
          {data.header.map((e) => {
            return (
              <Th horizontalLine={horizontalLine} key={e.key}>
                {e.name}
              </Th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.body.map((e) => {
          return (
            <Tr stripe={stripe}>
              {keys.map((name, index) => {
                return (
                  <Td
                    horizontalLine={horizontalLine}
                    condensed={condensed}
                    relaxed={relaxed}
                    key={index}
                  >
                    {e[name]}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </tbody>
    </Container>
  );
};

const Container = styled.table`
  font-family: ${fonts};
  min-width: 400px;
  border-collapse: separate;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  border-spacing: 0;
  border: 0.5px solid rgba(20, 48, 69, 0.05);
`;

const Th = styled.th`
  ${(props) =>
    props.horizontalLine
      ? ""
      : "border-left: 1px solid rgba(20, 48, 69, 0.05);"}
  border-bottom: 1px solid rgba(20, 48, 69, 0.08);
  text-align: left;
  padding-top: 23px;
  padding: 8px 16px;
  box-sizing: border-box;
`;

const Tr = styled.tr`
  &:nth-child(odd) {
    ${(props) =>
      props.stripe ? "background-color: rgba(185, 228, 251, 0.08);" : ""}
  }
`;

const Td = styled.td`
${(props) =>
  props.horizontalLine
    ? ""
    : " border-left: 1px solid rgba(20, 48, 69, 0.05);"}
  padding: ${(props) =>
    props.condensed
      ? "10px 16px 10px 16px"
      : props.relaxed
      ? "18px 16px 18px 16px"
      : "14px 16px 14px 16px"};
  box-sizing: border-box;
  border-bottom: 1px solid rgba(20, 48, 69, 0.08);
`;
