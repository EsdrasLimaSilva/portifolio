import { ReactNode } from "react";

export default function Skill({title, icon}: {title: string, icon: ReactNode}){
    return <li className="w-full flex flex-row gap-2 items-center text-blue-700  p-4 bg-white shadow-sm font-bold transition-all hover:bg-blue-600 hover:text-white">
        <span className="text-2xl">{icon}</span>
        {title}
    </li>
}