"use client";
import { FiMenu } from "react-icons/fi";
import Modal from "./Modal";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

//images
import Brazil from "@/app/assets/brazil.png";
import Usa from "@/app/assets/usa.png";
import useTranslation from "next-translate/useTranslation";
import ModalButton from "./ModalButton";

export default function Header(){
    const {t, lang} = useTranslation("client");
    const [visibleModal, setVisibleModal] = useState(false);

    const showModal = () => setVisibleModal(true);
    const hideModal = () => setVisibleModal(false);

    if(window && window.innerWidth >= 768){
        return <header className="fixed flex w-[760px] top-0 left-1/2 -translate-x-1/2 py-4 flex-row items-center gap-8 text-lg justify-center text-blue-800 bg-white rounded-b-lg shadow-sm z-10">
            <ModalButton text={t('initial')} targetId="home" />
            <ModalButton text={t('about')} targetId="about" />
            <ModalButton text={t('skills')} targetId="skills" />
            <ModalButton text={t('projects')} targetId="projects" />

            <div className="flex flex-row right-8 top-4 gap-2">
                <a href="/?lang=pt"><Image src={Brazil} alt="brazil flag" width={36} className={lang === "pt" ? "opacity-100" : "opacity-30"}/></a>
                <a href="/?lang=en"><Image src={Usa} alt="usa flag" width={36} className={lang === "en" ? "opacity-100" : "opacity-30"}/></a>
            </div>
        </header>
    }

    return <header className="pb-16 text-2xl fixed z-10 md:absolute">
        <Modal visible={visibleModal} hideModal={hideModal}/>
        <button type="button" className="text-blue-500 absolute top-4 left-0 md:hidden" onClick={showModal}>
            <FiMenu />
        </button>

      </header>
}