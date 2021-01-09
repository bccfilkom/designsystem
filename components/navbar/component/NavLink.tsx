import React from 'react';
import {
    NavItem
} from "./Navbar";

export type NavLinkProps = {
    name: string;
    href?: string;
    active?: boolean;
    onClick?();
    subitems?: [];
};

function NavLink(props: NavLinkProps): JSX.Element {
    return (
        <NavItem href={props.href} onClick={() => props.onClick()} style={{ fontWeight: (props.active ? "bold" : "normal") }} >{props.name}</NavItem>
    );
}

export default NavLink;