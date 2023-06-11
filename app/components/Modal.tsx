"use client";

import { IoIosArrowDropupCircle } from "react-icons/io"
import Brazil from "@/app/assets/brazil.png"
import Usa from "@/app/assets/usa.png"
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const ModalButton = ({text, targetId}: {text: string; targetId: string}) => {
    return <button type="button" className="hover:translate-x-2 transition-all">{text}</button>
}

export default function Modal({visible, hideModal}: {visible: boolean; hideModal: () => void}){
    const { t, lang } = useTranslation("client");

    console.log(lang);

    return <div className={`w-screen fixed top-0 left-0 text-[1rem] h-64 z-10 bg-orange-500 flex flex-col justify-around items-center font-bold text-neutral-100 py-8 rounded-b-xl shadow-md transition-all ease-out ${visible ? "translate-y-0" : "-translate-y-full"}`}>
        <button type="button" className="absolute top-4 left-8 text-2xl" onClick={hideModal}>
            <IoIosArrowDropupCircle />
        </button>

        <div className="flex flex-col absolute right-8 top-4 gap-2">
            <a href="/?lang=pt"><Image src={Brazil} alt="brazil flag" width={36} className={lang === "pt" ? "opacity-100" : "opacity-30"}/></a>
            <a href="/?lang=en"><Image src={Usa} alt="usa flag" width={36} className={lang === "en" ? "opacity-100" : "opacity-30"}/></a>
        </div>

        <ModalButton text={t('initial')} targetId="home" />
        <ModalButton text={t('about')} targetId="about" />
        <ModalButton text={t('skills')} targetId="skills" />
        <ModalButton text={t('projects')} targetId="projects" />
    </div>
}