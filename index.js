require("dotenv").config();

const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");

const authRoutes = require("./src/api/auth.js");
const apiRoutes = require("./src/api/api.js");

const service = express();
service.set("PORT", process.env.PORT || 80);

if(process.env.MODE == "development") {
    const cors = require("cors");
    service.use(cors({ origin: "*", exposedHeaders: "*" }));
    console.log("DEV MODE");
}
const { options } = require("./docs.js");
const specs = swaggerJsdoc(options);

service.use("/auth", authRoutes);
service.use("/api", apiRoutes);
service.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

service.listen(service.get("PORT"), () => console.log(`Server is running on port ${service.get("PORT")}`));