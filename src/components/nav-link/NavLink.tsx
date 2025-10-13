"use client";
import { NavLinkProps } from "@/types/header";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({href, children, activeClassName = "", className = "",}: NavLinkProps) {

    const pathname = usePathname();
    const isActive = pathname === href;

    return <React.Fragment>

        <Link href={href} className={`${className} ${isActive ? activeClassName : ""}`}>

            {children}

        </Link>

    </React.Fragment>

}
