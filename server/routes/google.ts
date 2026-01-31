import { createServerFn } from "@tanstack/react-start"
import { getConsultationPinServer, requestConsultationPinServer, verifyPinServer } from "../../utils/email.server";
import { FormData } from "../../src/types/google";
import { submitToSheet } from "../../utils/google.server";
import { varifyCloudflare } from "../../utils/cloudflare.server";


  // Append data via fetch


export const addEmailUser = createServerFn({ method: "POST" })
  .inputValidator((data: {formData: FormData, turnstileToken: string}) => data)
  .handler(async ({ data }) => {
    console.log({data})
    const passesTurnStile = await varifyCloudflare(data.turnstileToken)
    console.log({passesTurnStile})
    if(!passesTurnStile){
      return {
        status: 500,
        message: 'Cloudflare failed'
      }
    }
  
    
    await submitToSheet(data.formData);

    return {
      status: 200,
      message: "success"
    }

  });

