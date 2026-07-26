"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineShutdownRouter = void 0;
const express_1 = require("express");
const machine_shutdown_schema_1 = require("./machine-shutdown.schema");
const machine_shutdown_service_1 = require("./machine-shutdown.service");
class MachineShutdownRouter {
    constructor(service = new machine_shutdown_service_1.MachineShutdownService()) {
        this.service = service;
        this.router = (0, express_1.Router)();
        this.router.post("/", this.handle.bind(this));
    }
    /**
     * @openapi
     * /machine/shutdown:
     *   post:
     *     tags:
     *       - machine
     *     summary: Shutdown the machine
     *     requestBody:
     *       required: false
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               force:
     *                 type: boolean
     *     responses:
     *       200:
     *         description: Machine shutdown result
     */
    handle(req, res) {
        const request = machine_shutdown_schema_1.MachineShutdownSchema.parseRequest(req.body);
        const result = this.service.execute(request);
        res.status(200).json(result);
    }
}
exports.MachineShutdownRouter = MachineShutdownRouter;
