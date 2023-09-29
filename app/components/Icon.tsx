import me from "@/app/assets/profile-me.png";
import Image from "next/image";
import { useRef } from "react";

export default function Icon() {
    const iconRef = useRef<HTMLDivElement>(null);

    const showIcon = () => {
        const icon = iconRef.current;

        if (icon) {
            icon.classList.remove("hidden-icon");
        }
    };

    return (
        <div
            ref={iconRef}
            id="icon"
            className="hidden-icon rounded-[40px] w-40 h-40 bg-blue-500 relative shadow-md overflow-hidden rotate-[9deg] md:w-72 md:h-72"
        >
            <Image
                src={me}
                alt="me"
                className="absolute -bottom-4 -right-2 -rotate-[9deg]"
                onLoad={showIcon}
            />
        </div>
    );
}
