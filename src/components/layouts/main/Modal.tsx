import { PropsWithChildren, useEffect, useRef, useState } from "react"
import { useModalClose } from "../../../hooks/useModal";

type ModalProps = PropsWithChildren & {
    onClose: () => void,
    open: boolean
}


export const Modal = ({onClose, open, children}: ModalProps) => {
    const modalRef = useRef<HTMLDivElement|null>(null)
    useModalClose(modalRef, open, onClose);
    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
            <div 
                ref={modalRef} 
                className="min-w-[80%] max-h-[80vh] bg-white rounded-2xl shadow-lg p-5 md:p-20 relative flex flex-col overflow-y-auto"
            >
                {children}
            </div>
        </div>
    )
  
}
