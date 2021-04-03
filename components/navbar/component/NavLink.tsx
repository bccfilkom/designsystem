import React, { useEffect, useRef, useState } from 'react';
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
    const ref = useRef<HTMLAnchorElement>(null);
    const [width, setWidth] = useState<number>();

    useEffect(() => {
        setWidth(ref.current.offsetWidth);
    }, [])

    return (
        <NavItem ref={ref} href={props.href} onClick={() => props.onClick()} style={{width, fontWeight: props.active ? 'bold': 'normal'}} >{props.name}</NavItem>
    );
}

export default NavLink;