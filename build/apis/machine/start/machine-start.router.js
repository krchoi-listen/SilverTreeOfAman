"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineStartRouter = void 0;
const express_1 = require("express");
const machine_start_schema_1 = require("./machine-start.schema");
const machine_start_service_1 = require("./machine-start.service");
class MachineStartRouter {
    constructor(service = new machine_start_service_1.MachineStartService()) {
        this.service = service;
        this.router = (0, express_1.Router)();
        this.router.post("/", this.handle.bind(this));
    }
    /**
     * @openapi
     * /machine/start:
     *   post:
     *     tags:
     *       - machine
     *     summary: Start the machine
     *     requestBody:
     *       required: false
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               bootMode:
     *                 type: string
     *                 enum: [cold, warm]
     *     responses:
     *       200:
     *         description: Machine start result
     */
    handle(req, res) {
        const request = machine_start_schema_1.MachineStartSchema.parseRequest(req.body);
        const result = this.service.execute(request);
        res.status(200).json(result);
    }
}
exports.MachineStartRouter = MachineStartRouter;
