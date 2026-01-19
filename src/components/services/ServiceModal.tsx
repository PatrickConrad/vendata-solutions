import { ReactNode } from "react";
import { ServiceLayout } from "./ServiceLayout";
import { Modal } from "../layouts/main/Modal";
import { useRouter, useSearch } from "@tanstack/react-router";
import { navigateWithHash } from "../reusable/ScrollLink";

type ServiceProps = {
    title: string,
    tagLine: string|ReactNode,
    icon: ReactNode,
    modal: ReactNode
}

export const ServiceModal = (props: ServiceProps) => {
    const {modal} = useSearch({ from: "/" })
    const router = useRouter()
    const open = modal === props.title
    const closeModal = () => router.history.back()
    const openModal = ()=>router.navigate({
        to: '/',
        search: (prev) => ({
            ...prev,
            modal: props.title
        })
    })
    return(
         <>
            <div 
                onClick={(e)=>{
                    e.preventDefault()
                    e.stopPropagation()
                    openModal();
                }} 
                className="bg-white p-10 rounded-3xl shadow-sm border-b-4 border-v-navy hover:shadow-xl transition-all cursor-pointer"
            >
               <div className="w-14 h-14 bg-v-navy/5 rounded-2xl flex items-center justify-center mb-8">
                   {props.icon}
               </div>
               <h3 className="text-2xl font-bold text-v-navy mb-4">{props.title}</h3>
               <p className="text-slate-600 text-md mb-4">
                   {props.tagLine}
               </p>
                
            </div>

            {
                open 
                && 
                <Modal onClose={()=>closeModal()} open={open}>
                    <>
                        <button
                            onClick={()=>closeModal()}
                            className="cursor-pointer absolute top-3 right-6 white hover:text-(--v-gold)"
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
