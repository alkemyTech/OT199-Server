const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.1',
        info: {
            title: "Somos Mas API",
            version: '1.1.1'
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    basePath: "/",
    apis: ["routes/*.js"],
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            scheme: 'bearer',
            in: 'header',
        },
    },
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;