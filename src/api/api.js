const router = require("express").Router();
const userToken = require("../Auth/index.js");

router.get("/data", userToken.validateToken, (req, res) => {
    res.status(200).send({
        message: "Hola"
    });
});

module.exports = router;

/**
 * @swagger
 * api/data:
 *  get:
 *      description: Return some testing data, only if you pass a valid token
 *      responses:
 *          '200':
 *              description: A successful response
 *          '401':
 *              description: You've passed a invalid authentication token
 */