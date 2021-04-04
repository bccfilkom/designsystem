import styled from "styled-components";
import { fonts } from "../../_utils/index";

export interface TableProps {
  data: Data;
  type?: boolean;
  condensed?: boolean;
  relaxed?: boolean;
  grid?: boolean;
  horizontalLine?: boolean;
  stripe?: boolean;
}

export interface TableSkeletonProps {
  header: HeaderItem[];
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

export const Container = styled.table`
  font-family: ${fonts};
  min-width: 600px;
  border-collapse: separate;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  border-spacing: 0;
  border: 0.5px solid rgba(20, 48, 69, 0.05);
`;

export const Th = styled.th`
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

export const Tr = styled.tr`
  &:nth-child(odd) {
    ${(props) =>
      props.stripe ? "background-color: rgba(185, 228, 251, 0.08);" : ""}
  }
`;

export const Td = styled.td`
${(props) =>
  props.horizontalLine ? "" : " border-left: 1px solid rgba(20, 48, 69, 0.05);"}
  padding: ${(props) =>
    props.condensed
      ? "10px 16px 10px 16px"
      : props.relaxed
      ? "18px 16px 18px 16px"
      : "14px 16px 14px 16px"};
  box-sizing: border-box;
  border-bottom: 1px solid rgba(20, 48, 69, 0.08);
`;
