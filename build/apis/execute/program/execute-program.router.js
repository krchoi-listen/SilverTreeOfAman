"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteProgramRouter = void 0;
const express_1 = require("express");
const execute_program_schema_1 = require("./execute-program.schema");
const execute_program_service_1 = require("./execute-program.service");
class ExecuteProgramRouter {
    constructor(service = new execute_program_service_1.ExecuteProgramService()) {
        this.service = service;
        this.router = (0, express_1.Router)();
        this.router.post("/", this.handle.bind(this));
    }
    /**
     * @openapi
     * /execute/program:
     *   post:
     *     tags:
     *       - execute
     *     summary: Execute a program
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required: [program]
     *             properties:
     *               program:
     *                 type: array
     *                 items:
     *                   type: string
     *     responses:
     *       200:
     *         description: Program execution result
     *       400:
     *         description: Invalid request
     */
    handle(req, res) {
        const request = execute_program_schema_1.ExecuteProgramSchema.parseRequest(req.body);
        if (!request) {
            res.status(400).json({
                success: false,
                message: "Invalid request body. 'program' must be an array of instruction strings."
            });
            return;
        }
        const result = this.service.execute(request);
        res.status(200).json(result);
    }
}
exports.ExecuteProgramRouter = ExecuteProgramRouter;
