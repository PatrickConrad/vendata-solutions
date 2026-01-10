import { Link } from "@tanstack/react-router"
import { ReactNode, useState } from "react";
import { Modal } from "./Modal";

type ServiceProps = {
    title: string,
    tagLine: string|ReactNode,
    modalText: string|ReactNode
}

export const Service = (props: ServiceProps) => {
    const [openModal, setOpenModal] = useState(false);
    return(
         <>
            <div onClick={()=>setOpenModal(true)} className="bg-white p-10 rounded-3xl shadow-sm border-b-4 border-v-navy hover:shadow-xl transition-all">
               <div className="w-14 h-14 bg-v-navy/5 rounded-2xl flex items-center justify-center mb-8">
                   <svg className="w-8 h-8 text-v-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
               </div>
               <h3 className="text-2xl font-bold text-v-navy mb-4">{props.title}</h3>
               <p className="text-slate-600 mb-4">
                   {props.tagLine}
               </p>
                
            </div>

            {
                openModal 
                && 
                <Modal closeModal={()=>setOpenModal(false)}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg w-full flex items-center justify-center relative">
                        <button
                            onClick={()=>setOpenModal(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                            aria-label="Close modal"
                        >
                        ✕
                        </button>
                        <>{props.modalText}</>
                    </div>
                </Modal>
            }
         </>
    )
}
