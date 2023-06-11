import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
    classes?: string;
    children: ReactNode;
}

export default function Section({classes, children, ...rest}: Props){
    return <section {...rest} className={`px-4 min-h-screen ${classes}`}>{children}</section>
}