import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
    classes?: string;
    children: ReactNode;
}

export default function Section({classes, children, ...rest}: Props){
    return <section {...rest} className={`px-4 min-h-screen md:h-fit md:min-h-0 md:pt-20 md:pb-8 ${classes}`}>{children}</section>
}