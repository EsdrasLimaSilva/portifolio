"use client";

export default function ModalButton({text, targetId, hideModal}: {text: string; targetId: string; hideModal?: () => void}){
    const goTo = () => {
        document.getElementById(targetId)?.scrollIntoView();
        if(hideModal)
            hideModal();
    }

    return <button type="button" className="hover:-translate-y-2 transition-all" onClick={goTo}>{text}</button>
}