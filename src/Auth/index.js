const { decryptWithAES, encryptWithAES } = require("./Utils/hashModule.js");
const { isDatePassed } = require("./Utils/dateModule.js");

function generateToken(authData) {
    let startingDate = new Date();
    let endingDate = new Date(new Date().getTime() + (8.64e+7 * Number(process.env.TOKEN_VALIDITY)));

    let tokenData = {
        startingDate,
        endingDate,
        validation: authData
    }
    return encryptWithAES(JSON.stringify(tokenData));
}

function revertGeneratedToken(hash) {
    try {
        let unhashedToken = decryptWithAES(hash);
        return JSON.parse(unhashedToken);
    } catch (error) {
        return false;
    }   
}

function validateToken(headers, name) {
    if(!headers[name]) return { code: 401, statusText: "Denied", granted: false };
    let unhashedToken = revertGeneratedToken(headers[name]);
    if(!unhashedToken) return { code: 401, statusText: "Denied", granted: false };
    if(isDatePassed(unhashedToken.endingDate)) return { code: 401, statusText: "Denied", granted: false };
    return { code: 204, statusText: "Authorized", granted: true }
}

function requestBearer (req, res, next) {
    let sessionState = validateToken(req.headers, "token"); // "token" is the name of the header that should have the access token
    if(!sessionState.granted) {
        return res.status(sessionState.code).send(sessionState);
    }
    next();
}

module.exports.generateToken = generateToken;
module.exports.revertGeneratedToken = revertGeneratedToken;
module.exports.validateToken = validateToken;
module.exports.requestBearer = requestBearer;