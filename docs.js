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
    apis: ["./src/api/*.js"],
};

module.exports.options = options;