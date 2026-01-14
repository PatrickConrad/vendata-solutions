import { createServerFn } from "@tanstack/react-start"
import { getConsultationPinServer, requestConsultationPinServer, verifyPinServer } from "../../src/utils/email.server";


type Payload = {
  email: string;
  captcha: string;
};

export const getConsultationPin = createServerFn({ method: "POST" })
  .inputValidator((data: Payload) => data)
  .handler(async ({ data }) => {
    const { email, captcha } = data;
    return getConsultationPinServer(email, captcha)
    
  });





export const requestConsultationPin = createServerFn({
  method: "POST"
})
.inputValidator((email: string)=>{
  // console.log({input})
  return email
})
.handler(async ({ data }) => { 
  return requestConsultationPinServer(data)
})



export const verifyPin = createServerFn({
  method: "POST"
}).inputValidator((input: {email: string, pin: string})=>input).handler(async ({ data }) => {
  const { email, pin } = data;
  return verifyPinServer(email, pin)
})
 