import * as React from "react";
import styled from "styled-components";
import toArray from "rc-util/lib/Children/toArray";
import PropTypes from "prop-types";

export interface BreadcrumbsProps {
  separator?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Nav = styled("nav")`
  display: block;
`;
const Ol = styled("ol")`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Breadcrumbs= ({
  separator = "/",
  children,
  ...rest
}: BreadcrumbsProps) => {
  let crumbs;
  crumbs = toArray(children).map((element: any, index) => {
    return React.cloneElement(element, {
      separator,
      key: index,
      ...rest,
    });
  });
  return (
    <Nav>
      <Ol {...rest}> {crumbs} </Ol>
    </Nav>
  );
};

Breadcrumbs.propTypes = {
  separator: PropTypes.oneOf(["/", "|", ">"]).isRequired,
};

Breadcrumbs.displayName = "Breadcrumbs";

export default Breadcrumbs;
