const swaggerJsDoc = require('swagger-jsdoc');
require('dotenv');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.1',
        info: {
            title: "Somos Mas API",
            version: '1.1.1'
        },
        servers: [
            {
                url: process.env.SWAGGER_PORT
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        }
    },
    basePath: "/",
    apis: ["documentation/*.js"],
    security: [{
        jwt: []
    }]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;