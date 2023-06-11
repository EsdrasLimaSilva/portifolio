import me from "@/app/assets/me-gray.png";
import Image from "next/image";

export default function Icon(){
    return <div id="icon" className="rounded-[40px] w-40 h-40 bg-orange-500 relative  overflow-hidden rotate-[9deg]">
        <Image src={me} alt="me" className="absolute -bottom-4 -right-2 -rotate-[9deg]" />
    </div>
}