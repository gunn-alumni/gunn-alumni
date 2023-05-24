/* eslint-disable @typescript-eslint/no-non-null-assertion */
import crypto from "crypto"

const algorithm = 'aes-256-cbc'; //Using AES encryption
const key = process.env.VERIFY_SECRET_KEY! // crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

export interface EncryptedData {
    iv: string;
    encryptedData: string
}

//Encrypting text
export function encrypt(text: string) {
   console.log("Encrypt: " + key.toString())
   const cipher = crypto.createCipheriv(algorithm, Buffer.from(key, "hex"), iv);
   let encrypted = cipher.update(text);
   encrypted = Buffer.concat([encrypted, cipher.final()]);
   return { iv: iv.toString("hex"), encryptedData: encrypted.toString('hex') };
}

// Decrypting text
export function decrypt(data: EncryptedData) {
   console.log("Decrypt: " + key.toString())
   const iv = Buffer.from(data.iv, 'hex');
   const encryptedText = Buffer.from(data.encryptedData, 'hex');
   const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key, "hex"), iv);
   let decrypted = decipher.update(encryptedText);
   decrypted = Buffer.concat([decrypted, decipher.final()]);
   return decrypted.toString();
}
