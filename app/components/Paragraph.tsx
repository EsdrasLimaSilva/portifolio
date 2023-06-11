import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode;
    classes?: string;
}

export default function Paragraph({children, classes, ...rest}: Props){
    return <p {...rest} className={`text-md my-6 text-stone-950 ${classes}`}>{children}</p>
}