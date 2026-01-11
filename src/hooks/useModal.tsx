// import { PropsWithChildren, useEffect } from "react";
// import { BrandSoftwareProcessesChart, CustomProcessesChart, ManualProcessesChart } from "../svg/charts";

// const graphs = {
//   manual: {
//     title: "Manual Processes",
//     description:
//       "Manual effort works early, but time commitment increases while effectiveness drops as the business grows.",
//     svg: ''
//   },

//   brand: {
//     title: "Off-the-Shelf Software",
//     description:
//       "Brand software starts strong, but rising costs and workarounds reduce effectiveness over time.",
//     svg: `
      
//     `
//   },

//   custom: {
//     title: "Custom Software",
//     description:
//       "Custom systems improve with your business — reducing time, cost, and friction as you scale.",
//     svg: `
      
//     `
//   }
// };


// type PopupModalProps = PropsWithChildren & {
//     closeModal: () => void;
//     graph: string
// }

// function PopupModal(props: PopupModalProps) {
//     // useEffect(()=>{
//     //     if(document!=null){
//     //         const modalTitle = document.getElementById("modal-title")??null;
//     //         const modalDescription = document.getElementById("modal-description")??null;
//     //         const modalGraph = document.getElementById("modal-graph")??null;
//     //         const modal = document.getElementById("modal")??null

//     //         if(modalTitle!=null) modalTitle.innerText = graphs[type].title;
//     //         if(modalDescription!=null) modalDescription.innerText = graphs[type].description;
//     //         if(modalGraph!=null) modalGraph.innerHTML = graphs[type].svg;
//     //         if(modal!=null) modal.style.display = "flx";
            

//     //         return () => {
//     //             if(modalTitle!=null) modalTitle==
//     //             if(modalDescription!=null) modalDescription.innerText = graphs[type].description;
//     //             if(modalGraph!=null) modalGraph.innerHTML = graphs[type].svg;
//     //             if(modal!=null) modal.style.display = "flx";
//     //         }

//     // }, [type])

//     return (
//         <div className="modal">
//             <div className="innerModal">
//                 <div className="closeBtnRow">
//                     <button className="closeBtn" onClick={()=>props.closeModal()}>X</button>
//                 </div>
//                 <div className="modalContent">
//                     {
//                         props.graph === 'custom'
//                         ?
//                         <CustomProcessesChart />
//                         :
//                         props.graph === 'brandname'
//                         ?
//                         <BrandSoftwareProcessesChart />
//                         :
//                         <ManualProcessesChart />
//                     }
//                 </div>
//             </div>
//         </div>
//     )


// }