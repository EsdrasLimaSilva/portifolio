import Link from "next/link";
import { SiGithub, SiSitepoint } from "react-icons/si";

interface Props {
    title: string;
    description: string;
    githublink: string;
    demolink: string;
}

export default function Project({ title, description, githublink, demolink }: Props){
    return <li className="w-full flex flex-col p-4 bg-white shadow-md">
        <h3 className="text-blue-600 font-semibold text-lg">{title}</h3>
        <p>{description}</p>
        
        <div className="flex w-full flex-row  justify-center mt-8 text-2xl gap-4">
            <Link href={githublink} className="text-blue-600 font-semibold underline" target="_blank" rel="norefer"><SiGithub /></Link>
            <Link href={demolink} className="text-blue-600 font-semibold underline" target="_blank" rel="norefer"><SiSitepoint /></Link>
        </div>
    </li>
}