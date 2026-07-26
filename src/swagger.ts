import path from "path";
import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "SilverTreeOfAman API",
      version: "1.0.0",
      description: "HTTP API for the Y86 simulator backend"
    },
    servers: [
      {
        url: "http://localhost:3333"
      }
    ]
  },
  apis: [path.join(__dirname, "./apis/**/*.router.{ts,js}")]
};

export const swaggerSpec = swaggerJSDoc(options);
