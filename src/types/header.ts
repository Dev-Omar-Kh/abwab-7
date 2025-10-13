import type { IconType } from "react-icons";

export type LinksData = {
    id: number;
    icon: IconType;
    title: string;
    href: string;
}

export type NavLinkProps = {
    href: string;
    children: React.ReactNode;
    activeClassName?: string;
    className?: string;
}