import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SiGithub, SiSitepoint } from "react-icons/si";

interface Props {
    title: string;
    description: string;
    githublink: string;
    demolink: string;
}

export default function Project({
    title,
    description,
    githublink,
    demolink,
}: Props) {
    const [visible, setVisible] = useState(false);
    const liRef = useRef<HTMLLIElement>(null);

    const showComponent = (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
    ) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio === 1.0) {
                setVisible(true);
                observer.disconnect();
            }
        });
    };

    useEffect(() => {
        if (!liRef) return;

        const options: IntersectionObserverInit = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0,
        };
        const observer = new IntersectionObserver(showComponent, options);
        observer.observe(liRef.current as HTMLLIElement);

        return () => {
            observer.disconnect;
        };
    }, []);

    return (
        <li
            ref={liRef}
            className={`w-full flex flex-col p-4 bg-white shadow-md transition-all ${
                visible
                    ? " opacity-100 translate-x-0"
                    : " opacity-0 translate-x-36"
            }`}
        >
            <h3 className="text-blue-600 font-semibold text-lg">{title}</h3>
            <p>{description}</p>

            <div className="flex w-full flex-row  justify-center mt-8 text-2xl gap-4">
                <Link
                    href={githublink}
                    className="text-blue-600 font-semibold underline"
                    target="_blank"
                    rel="norefer"
                >
                    <SiGithub />
                </Link>
                <Link
                    href={demolink}
                    className="text-blue-600 font-semibold underline"
                    target="_blank"
                    rel="norefer"
                >
                    <SiSitepoint />
                </Link>
            </div>
        </li>
    );
}
