import type { IconType } from "react-icons";

export type RegularBtnProps = {
    id?: number
    title: string;
    icon?: IconType;
    className?: string;
    variants?: 'primary' | 'secondary' | 'danger';
}