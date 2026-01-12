import { createServerFn } from "@tanstack/react-start"
import { encrypt, generatePin, hash } from "../utils/encryption"


export const requestConsultationPin = createServerFn({
  method: "POST"
})
.inputValidator((email: string)=>{
  // console.log({input})
  return email
})
.handler(async ({ data }) => { 
  console.log({data})
  // const userEmail = data.toLowerCase()
  // const emailHash = hash(userEmail)
  // const emailEncrypted = encrypt(userEmail)

  // const pin = generatePin()
  // const pinEncrypted = encrypt(pin)
  // const expires = new Date(Date.now() + 10 * 60 * 1000)

  // let user = await db.users.findUnique({ where: { email_hash: emailHash } })

  // if (!user) {
  //   user = await db.users.create({
  //     data: {
  //       email_hash: emailHash,
  //       email_encrypted: emailEncrypted,
  //       pin_encrypted: pinEncrypted,
  //       pin_expires_at: expires,
  //     },
  //   })
  // } 
  // else {
  //   await db.users.update({
  //     where: { id: user.id },
  //     data: {
  //       pin_encrypted: pinEncrypted,
  //       pin_expires_at: expires,
  //     },
  //   })
  // }

  // await sendEmail({
  //   to: userEmail,
  //   subject: "Your Consultation Verification Code",
  //   html: `<p>Your verification code is:</p><h2>${pin}</h2><p>Expires in 10 minutes.</p>`
  // })

  return { success: true }
})



export const verifyPin = createServerFn({
  method: "POST"
}).inputValidator((input: {email: string, pin: string})=>input).handler(async ({ data }) => {
  const { email, pin } = data;

  const emailHash = hash(email)
  // const user = await db.users.findUnique({ where: { email_hash: emailHash } })

  // if (!user) throw new Error("User not found")
  // if (!user.pin_expires_at || new Date() > user.pin_expires_at) {
  //   throw new Error("PIN expired")
  // }

  // const isValid = decrypt(user.pin_encrypted) === pin
  // if (!isValid) throw new Error("Invalid PIN")

  // await db.users.update({
  //   where: { id: user.id },
  //   data: {
  //     is_confirmed: true,
  //     pin_encrypted: null,
  //     pin_expires_at: null,
  //   },
  // })

  return { verified: true  }
})
 