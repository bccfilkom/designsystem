import * as React from "react";
import { TableSkeletonProps, Container, Td, Tr, Th } from "./components";

export const TableSkeleton= ({
  header,
  condensed,
  relaxed,
  horizontalLine,
  stripe,
}:TableSkeletonProps) => {
  const keys = [];
  header.map(({ key }) => keys.push(key));
  return (
    <Container>
      <thead>
        <tr>
          {header.map((e) => {
            return (
              <Th horizontalLine={horizontalLine} key={e.key}>
                {e.name}
              </Th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3].map((x) => {
          return (
            <Tr stripe={stripe}>
              {header.map((e) => {
                return (
                  <Td
                    horizontalLine={horizontalLine}
                    condensed={condensed}
                    relaxed={relaxed}
                    key={e.key}
                  >
                    <p className="skeleton">{e.name}</p>
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
