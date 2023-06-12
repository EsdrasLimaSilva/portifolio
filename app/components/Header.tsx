"use client";
import { FiMenu } from "react-icons/fi";
import Modal from "./Modal";
import { useState } from "react";

export default function Header() {
    const [visibleModal, setVisibleModal] = useState(false);

    const showModal = () => setVisibleModal(true);
    const hideModal = () => setVisibleModal(false);

    return (
        <header className="pb-16 text-2xl fixed z-10 md:absolute">
            <Modal visible={visibleModal} hideModal={hideModal} />
            <button
                type="button"
                className="text-blue-500 absolute top-4 left-0 md:hidden"
                onClick={showModal}
            >
                <FiMenu />
            </button>
        </header>
    );
}
