"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceTbdRouter = void 0;
const express_1 = require("express");
const device_tbd_service_1 = require("./device-tbd.service");
class DeviceTbdRouter {
    constructor(service = new device_tbd_service_1.DeviceTbdService()) {
        this.service = service;
        this.router = (0, express_1.Router)();
        this.router.get("/", this.handle.bind(this));
    }
    /**
     * @openapi
     * /device:
     *   get:
     *     tags:
     *       - device
     *     summary: Placeholder endpoint for device APIs
     *     responses:
     *       200:
     *         description: Device API placeholder result
     */
    handle(_req, res) {
        const result = this.service.execute();
        res.status(200).json(result);
    }
}
exports.DeviceTbdRouter = DeviceTbdRouter;
