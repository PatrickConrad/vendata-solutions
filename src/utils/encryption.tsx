import crypto from "crypto"

const KEY = Buffer.from(process.env.ENCRYPTION_KEY!, "hex")

export function encrypt(text: string) {
  const iv = crypto.randomBytes(16)
  const cipher = crypto.createCipheriv("aes-256-gcm", KEY, iv)

  let encrypted = cipher.update(text, "utf8", "hex")
  encrypted += cipher.final("hex")

  return `${iv.toString("hex")}:${encrypted}`
}

export function hash(text: string) {
  return crypto.createHash("sha256").update(text).digest("hex")
}

export function generatePin() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}
