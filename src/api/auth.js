const router = require("express").Router();
const userToken = require("../Auth/index.js");

/* Testing users */
let users = [
    {
        username: "User1",
        password: "pass01"
    },
    {
        username: "User2",
        password: "pass02"
    },
    {
        username: "User3",
        password: "pass03"
    },
    {
        username: "User4",
        password: "pass04"
    }
];

router.get("/validate", userToken.validateToken, (req, res) => {
     let authUserData = req.headers;
    let tokenData = userToken.revertGeneratedToken(authUserData);
    res.status(200).send({ tokenData });
});

router.post("/login", (req, res) => {
    let authUserData = req.query;
    let token = userToken.generateToken(authUserData);

//===============< Remove this code for your user validation >==================================================
    for(let i = 0; i < users.length; i++) {
        if(users[i].username === authUserData.username && users[i].password === authUserData.password) {
            return res.status(200).send({"username": authUserData.username, token});
        }
    }
//===============< Remove until here >=========================================================================
    res.status(401).send();
});

module.exports = router;

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
 */

/**
 * @swagger
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
 */