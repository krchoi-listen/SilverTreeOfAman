"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteInstructionRouter = void 0;
const express_1 = require("express");
const execute_instruction_schema_1 = require("./execute-instruction.schema");
const execute_instruction_service_1 = require("./execute-instruction.service");
class ExecuteInstructionRouter {
    constructor(service = new execute_instruction_service_1.ExecuteInstructionService()) {
        this.service = service;
        this.router = (0, express_1.Router)();
        this.router.post("/", this.handle.bind(this));
    }
    /**
     * @openapi
     * /execute/instruction:
     *   post:
     *     tags:
     *       - execute
     *     summary: Execute a single instruction
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required: [instruction]
     *             properties:
     *               instruction:
     *                 type: string
     *     responses:
     *       200:
     *         description: Execution result
     *       400:
     *         description: Invalid request
     */
    handle(req, res) {
        const request = execute_instruction_schema_1.ExecuteInstructionSchema.parseRequest(req.body);
        if (!request) {
            res.status(400).json({
                success: false,
                message: "Invalid request body. 'instruction' is required."
            });
            return;
        }
        const result = this.service.execute(request);
        res.status(200).json(result);
    }
}
exports.ExecuteInstructionRouter = ExecuteInstructionRouter;
