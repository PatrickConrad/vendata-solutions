import { z as createServerRpc, v as createServerFn } from "./worker-entry-Cwlb-ZXt.js";
import crypto from "crypto";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
function generateJWT() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");
  console.log({ clientEmail, privateKey });
  const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
  const now = Math.floor(Date.now() / 1e3);
  const payload = Buffer.from(JSON.stringify({
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now
  })).toString("base64url");
  const signature = crypto.createSign("RSA-SHA256").update(`${header}.${payload}`).sign(privateKey, "base64url");
  return `${header}.${payload}.${signature}`;
}
async function submitToSheet(formData) {
  const authResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: generateJWT()
    })
  });
  const { access_token } = await authResponse.json();
  const sheetId = process.env.GOOGLE_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEET_NAME;
  console.log({ sheetId, sheetName });
  const rowData = [
    formData.email,
    (/* @__PURE__ */ new Date()).toISOString(),
    formData.name,
    formData.businessName,
    formData.website || "",
    formData.services,
    formData.message,
    formData.subscribe ? "true" : "false"
  ];
  return fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!A1:append?valueInputOption=USER_ENTERED`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${access_token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ values: [rowData] })
    }
  );
}
const varifyCloudflare = async (cfToken) => {
  try {
    const verifyUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    const result = await fetch(verifyUrl, {
      method: "POST",
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${cfToken}`,
      headers: { "content-type": "application/x-www-form-urlencoded" }
    });
    const outcome = await result.json();
    return outcome.success;
  } catch (err) {
    console.log({ err });
    return false;
  }
};
const addEmailUser_createServerFn_handler = createServerRpc("aed5074db655da91215f09f7f9fe1852eb513595fd1ada9d8406111e91ab3210", (opts, signal) => addEmailUser.__executeServer(opts, signal));
const addEmailUser = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(addEmailUser_createServerFn_handler, async ({
  data
}) => {
  console.log({
    data
  });
  const passesTurnStile = await varifyCloudflare(data.turnstileToken);
  console.log({
    passesTurnStile
  });
  if (!passesTurnStile) {
    return {
      status: 500,
      message: "Cloudflare failed"
    };
  }
  await submitToSheet(data.formData);
  return {
    status: 200,
    message: "success"
  };
});
export {
  addEmailUser_createServerFn_handler
};
