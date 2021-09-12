const Crypto = require("crypto");
const algorithm = "aes-256-ctr";
const initVector = Crypto.randomBytes(16);
const passphrase = process.env.HASHING_KEY; /* hashing key must have exactly 32 characters */


function encryptWithAES(text) {
  const cipher = Crypto.createCipheriv(algorithm, passphrase, initVector);
  let encryptedData = cipher.update(text, "utf-8", "hex") + cipher.final("hex");
  return encryptedData;
};

function decryptWithAES (ciphertext) {
  const decipher = Crypto.createDecipheriv(algorithm, passphrase, initVector);
  let decryptedData = decipher.update(ciphertext, "hex", "utf-8") + decipher.final("utf8");
  return decryptedData;
};

module.exports.decryptWithAES = decryptWithAES;
module.exports.encryptWithAES = encryptWithAES;