"use client";
import { FiMenu } from "react-icons/fi";
import Modal from "./Modal";
import { useState } from "react";

export default function Header(){
    const [visibleModal, setVisibleModal] = useState(true);

    const showModal = () => setVisibleModal(true);
    const hideModal = () => setVisibleModal(false);

    return <header className="pb-16 text-2xl relative">
        <Modal visible={visibleModal} hideModal={hideModal}/>
        <button type="button" className="text-orange-500 absolute top-4 left-0" onClick={showModal}>
            <FiMenu />
        </button>
      </header>
}