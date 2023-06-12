"use client";

import { IoIosArrowDropupCircle } from "react-icons/io"
import Brazil from "@/app/assets/brazil.png"
import Usa from "@/app/assets/usa.png"
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import ModalButton from "./ModalButton";


export default function Modal({visible, hideModal}: {visible: boolean; hideModal: () => void}){
    const { t, lang } = useTranslation("client");

    return <div className={`w-screen fixed top-0 left-0 text-[1rem] h-64 z-20 bg-[#ffffff70] backdrop-blur-lg flex flex-col justify-around items-center font-bold text-blue-700 py-8 rounded-b-xl shadow-md transition-all ease-out ${visible ? "translate-y-0" : "-translate-y-full"} md:fex md:flex-row md:translate-y-0 md:h-[56px] md:justify-center md:gap-8`}>
        <button type="button" className="absolute top-4 left-8 text-2xl md:hidden" onClick={hideModal}>
            <IoIosArrowDropupCircle />
        </button>

        <div className="flex flex-col absolute right-8 top-4 gap-2 md:flex md:flex-row">
            <a href="/?lang=pt"><Image src={Brazil} alt="brazil flag" width={36} className={lang === "pt" ? "opacity-100" : "opacity-30"}/></a>
            <a href="/?lang=en"><Image src={Usa} alt="usa flag" width={36} className={lang === "en" ? "opacity-100" : "opacity-30"}/></a>
        </div>

        <ModalButton text={t('initial')} targetId="home" hideModal={hideModal} />
        <ModalButton text={t('about')} targetId="about" hideModal={hideModal} />
        <ModalButton text={t('skills')} targetId="skills" hideModal={hideModal} />
        <ModalButton text={t('projects')} targetId="projects" hideModal={hideModal} />
    </div>
}