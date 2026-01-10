import { PropsWithChildren, useEffect, useRef, useState } from "react"

type ModalProps = PropsWithChildren & {
    closeModal: () => void,
}


export const Modal = (props: ModalProps) => {
    const modalRef = useRef<HTMLDivElement|null>(null)
    const handleClickOutside = (event) => {
        // Check if the modalRef exists and if the clicked element is NOT inside the modal
        console.log(event.target);
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            console.log('workin')
            props.closeModal(); // Close the modal
        }
    }
    useEffect(()=>{
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, [])
    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
            <div ref={modalRef}>
                {props.children}
            </div>
        </div>
    )
  
}
