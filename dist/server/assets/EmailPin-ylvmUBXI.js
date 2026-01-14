import { a as createServerRpc, c as createServerFn } from '../server.js';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import '@tanstack/history';
import '@tanstack/router-core/ssr/client';
import '@tanstack/router-core';
import 'node:async_hooks';
import '@tanstack/router-core/ssr/server';
import 'h3-v2';
import 'tiny-invariant';
import 'seroval';
import 'react/jsx-runtime';
import '@tanstack/react-router/ssr/server';
import '@tanstack/react-router';

Buffer.from(process.env.ENCRYPTION_KEY, "hex");
function hash(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

async function sendEmail(email, body, subject, from) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE != null && process.env.EMAIL_SECURE === "true" ? true : false,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  await transporter.sendMail({
    from: `${'"Patrick Conrad" <patrickoconrad@gmail.com>'}`,
    to: email,
    subject,
    html: body
  });
}

const getConsultationPin_createServerFn_handler = createServerRpc("8147475b68f8d7ce2daf0bc2cd3e8f06a8554b6e7ca57a9c105e8663e39f2959", (opts, signal) => getConsultationPin.__executeServer(opts, signal));
const getConsultationPin = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(getConsultationPin_createServerFn_handler, async ({
  data
}) => {
  const {
    email,
    captcha
  } = data;
  if (!email || !captcha) {
    throw new Error("Missing email or captcha token");
  }
  const verifyRes = await verifyCaptcha(captcha);
  const result = await verifyRes.json();
  if (!result.success) {
    console.error("Turnstile failed:", result);
    throw new Error("Captcha verification failed");
  }
  const pin = Math.floor(1e5 + Math.random() * 9e5).toString();
  console.log("Generated PIN:", pin);
  await sendEmail(email, `<div>Here is your verification pin code: ${pin}`, "VenData Solutions - Verfication Pin");
  return {
    success: true
  };
});
const requestConsultationPin_createServerFn_handler = createServerRpc("73197069f402ffc7bdc1f24cb5d29b5ec21bc2a7ffe2df0ff104e22689f8a713", (opts, signal) => requestConsultationPin.__executeServer(opts, signal));
const requestConsultationPin = createServerFn({
  method: "POST"
}).inputValidator((email) => {
  return email;
}).handler(requestConsultationPin_createServerFn_handler, async ({
  data
}) => {
  console.log({
    data
  });
  return {
    success: true
  };
});
const verifyPin_createServerFn_handler = createServerRpc("ce9bda8ad2507591b51649d15304cdd16e1c8af776d47b325fb76a928b769c66", (opts, signal) => verifyPin.__executeServer(opts, signal));
const verifyPin = createServerFn({
  method: "POST"
}).inputValidator((input) => input).handler(verifyPin_createServerFn_handler, async ({
  data
}) => {
  const {
    email,
    pin
  } = data;
  hash(email);
  return {
    verified: true
  };
});

export { getConsultationPin_createServerFn_handler, requestConsultationPin_createServerFn_handler, verifyPin_createServerFn_handler };
