const router = require("express").Router();
const userToken = require("../Auth/index.js");

router.get("/data", userToken.requestBearer, (req, res) => {
    res.status(200).send({
        message: "Hola"
    });
});

module.exports = router;