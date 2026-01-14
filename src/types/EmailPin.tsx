import { createServerFn } from "@tanstack/react-start"
import { encrypt, generatePin, hash } from "../../utils/encryption"
import { sendEmail } from "../../utils/sendEmail";


type Payload = {
  email: string;
  captcha: string;
};

export const getConsultationPin = createServerFn({ method: "POST" })
  .inputValidator((data: Payload) => data)
  .handler(async ({ data }) => {
    const { email, captcha } = data;

    if (!email || !captcha) {
      throw new Error("Missing email or captcha token");
    }

    if (import.meta.env.DEV && captcha === "dev-bypass-token") {
      return { success: true };
    }

    const verifyRes = await verifyCaptcha(captcha);
    

    const result = await verifyRes.json();

    if (!result.success) {
      console.error("Turnstile failed:", result);
      throw new Error("Captcha verification failed");
    }

    // 2. Generate PIN
    const pin = Math.floor(100000 + Math.random() * 900000).toString();

    // TODO: Store PIN in DB / Redis with expiration
    console.log("Generated PIN:", pin);

    // 3. Send Email (example with Resend / Nodemailer)
    await sendEmail(email, `<div>Here is your verification pin code: ${pin}`, 'VenData Solutions - Verfication Pin');

    return { success: true};
  });





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
 