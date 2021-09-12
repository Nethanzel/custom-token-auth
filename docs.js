
/*
// crypto module
const crypto = require("crypto");

const algorithm = "aes-256-cbc"; 

// generate 16 bytes of random data
const initVector = crypto.randomBytes(16);

// protected data
const message = "This is a secret message";

// secret key generate 32 bytes of random data
const Securitykey = crypto.randomBytes(32);

// the cipher function
const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

// encrypt the message
// input encoding
// output encoding
let encryptedData = cipher.update(message, "utf-8", "hex");

encryptedData += cipher.final("hex");

console.log("Encrypted message: " + encryptedData);

// the decipher function
const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

decryptedData += decipher.final("utf8");

console.log("Decrypted message: " + decryptedData);

*/
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Custom Token Authentication Template",
            version: "1.0.0",
            description: "Authenticate using tokens but not JWT.",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Nethanzêl",
                url: "https://nethanzels-showroom.herokuapp.com",
                email: "natanaelabaad@gmail.com",
            },
        },
        servers: [
            {
                url: "http://127.0.0.1/",
            },
        ],
    },
    apis: ["./docs.js"],
};

module.exports.options = options;

/**
 * @swagger
 * /auth/login:
 *  post:
 *      parameters:
 *      - name: username
 *        in: query
 *        description: Your username
 *        required: true
 *        type: string
 *      - name: password
 *        in: query
 *        description: Your password
 *        required: true
 *        type: string
 *      description: Return your authorization token when given a valid username and password
 *      responses:
 *          '200':
 *              description: A successful response
 *          '401':
 *              description: Invalid authentication
 *


 * /auth/validate:
 *  get:
 *      parameters:
 *      - name: token
 *        in: header
 *        description: Your authorization token
 *        required: true
 *        type: string
 *      description: Return your decoded authorization token when given a valid one
 *      responses:
 *          '200':
 *              description: A successful response
 *          '401':
 *              description: Invalid token
 * 
 


 * /api/data:
 *  get:
 *      parameters:
 *      - name: token
 *        in: header
 *        description: Authorization id
 *        required: true
 *        type: string
 *      description: Return some testing data, only if you pass a valid token
 *      responses:
 *          '200':
 *              description: A successful response
 *          '401':
 *              description: Invalid authentication token
 *
 
 */