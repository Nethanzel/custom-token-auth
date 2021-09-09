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