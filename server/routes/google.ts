import { createServerFn } from "@tanstack/react-start"
import { getConsultationPinServer, requestConsultationPinServer, verifyPinServer } from "../../utils/email.server";
import { FormData } from "../../src/types/google";
import { submitToSheet } from "../../utils/google.server";
import { varifyCloudflare } from "../../utils/cloudflare.server";


  // Append data via fetch


export const addEmailUser = createServerFn({ method: "POST" })
  .inputValidator((data: {formData: FormData, turnstileToken: string}) => data)
  .handler(async ({ data }) => {
    const passesTurnStile = await varifyCloudflare(data.turnstileToken)
    console.log({passesTurnStile})
    if(!passesTurnStile){
      return {
        status: 500,
        message: 'Cloudflare failed'
      }
    }
  
    
    const response = await submitToSheet(data.formData);

    return {
      status: response.status,
      message: response.status===200?"success":'failed'
    }

  });

