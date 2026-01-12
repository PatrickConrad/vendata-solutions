import { ReactNode, useState } from "react";
import { ServiceLayout } from "./ServiceLayout";
import { Modal } from "../layouts/main/Modal";

type ServiceProps = {
    title: string,
    tagLine: string|ReactNode,
    icon: ReactNode,
    modal: ReactNode
}

export const ServiceModal = (props: ServiceProps) => {
    const [openModal, setOpenModal] = useState(false);
    return(
         <>
            <div onClick={()=>setOpenModal(true)} className="bg-white p-10 rounded-3xl shadow-sm border-b-4 border-v-navy hover:shadow-xl transition-all cursor-pointer">
               <div className="w-14 h-14 bg-v-navy/5 rounded-2xl flex items-center justify-center mb-8">
                   {props.icon}
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
                    <>
                        <button
                            onClick={()=>setOpenModal(false)}
                            className="cursor-pointer absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                            aria-label="Close modal"
                        >
                        ✕
                        </button>
                        {
                            <ServiceLayout title={props.title} subtitle={props.tagLine} icon={props.icon} body={props.modal} />
                        }
                    </>
                </Modal>
            }
         </>
    )
}
