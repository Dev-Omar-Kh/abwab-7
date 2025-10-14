import type { IconType } from "react-icons";

export type RegularCardProps = {
    id?: number;
    icon: IconType;
    title: string;
    description: string;
    className?: string;
}