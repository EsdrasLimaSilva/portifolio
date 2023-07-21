import { ReactNode, useEffect, useRef, useState } from "react";

export default function Skill({
    title,
    icon,
}: {
    title: string;
    icon: ReactNode;
}) {
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
            className={`w-full flex flex-row gap-2 items-center text-blue-700  p-4 bg-white shadow-sm font-bold transition-all hover:bg-blue-600 hover:text-white ${
                visible
                    ? " translate-y-0 opacity-100"
                    : " translate-y-24 opacity-0"
            }`}
        >
            <span className="text-2xl">{icon}</span>
            {title}
        </li>
    );
}
