const Crypto = require("crypto");
const algorithm = "aes-256-ctr";
const initVector = Crypto.randomBytes(16);
const passphrase = process.env.HASHING_KEY; /* hashing key must have exactly 32 characters */

function encryptWithAES(text) {
  let cipher = Crypto.createCipheriv(algorithm, Buffer.from(passphrase), initVector);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return `${encrypted.toString('base64')}@${initVector.toString('base64')}`;
};

function decryptWithAES (ciphertext) {
  let preProcess = ciphertext.split("@");
  let iv = Buffer.from(preProcess[1], 'base64');
  let encryptedText = Buffer.from(preProcess[0], 'base64');
  let decipher = Crypto.createDecipheriv(algorithm, Buffer.from(passphrase), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};

module.exports.decryptWithAES = decryptWithAES;
module.exports.encryptWithAES = encryptWithAES;