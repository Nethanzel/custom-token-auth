const { decryptWithAES, encryptWithAES } = require("./Utils/hashModule.js");
const { isDatePassed } = require("./Utils/dateModule.js");

function generateToken(authData) {
    let startingDate = new Date();
    let endingDate = new Date(new Date().getTime() + (8.64e+7 * Number(process.env.TOKEN_VALIDITY)));

    let tokenData = {
        startingDate,
        endingDate,
        user: authData.username
    }
    return encryptWithAES(JSON.stringify(tokenData));
}

function revertGeneratedToken(hash) {
    try {
        let unhashedToken = decryptWithAES(hash.token);
        return JSON.parse(unhashedToken);
    } catch (error) {
        return false;
    }   
}

function validateToken(req, res, next) {
    if(!req.headers.token) return res.status(401).send();
    let unhashedToken = revertGeneratedToken(req.headers);
    if(!unhashedToken) return res.status(401).send();
    if(isDatePassed(unhashedToken.endingDate)) return res.status(401).send();
    //validate username
    next();
}

module.exports.generateToken = generateToken;
module.exports.revertGeneratedToken = revertGeneratedToken;
module.exports.validateToken = validateToken;