"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
const path_1 = __importDefault(require("path"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
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
    apis: [path_1.default.join(__dirname, "./apis/**/*.router.{ts,js}")]
};
exports.swaggerSpec = (0, swagger_jsdoc_1.default)(options);
