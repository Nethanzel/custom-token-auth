const CryptoJS = require("crypto-js");
const passphrase = process.env.HASHING_KEY;

function encryptWithAES(text) {
  return CryptoJS.AES.encrypt(text, passphrase).toString();
};

function decryptWithAES (ciphertext) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

module.exports.decryptWithAES = decryptWithAES;
module.exports.encryptWithAES = encryptWithAES;