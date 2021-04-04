import * as React from "react";
import {TableProps, Container, Td, Tr, Th} from "./components"

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

