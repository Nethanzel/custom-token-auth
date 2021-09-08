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
 */