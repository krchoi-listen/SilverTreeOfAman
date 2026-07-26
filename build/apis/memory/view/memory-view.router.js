"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryViewRouter = void 0;
const express_1 = require("express");
const memory_view_schema_1 = require("./memory-view.schema");
const memory_view_service_1 = require("./memory-view.service");
class MemoryViewRouter {
    constructor(service = new memory_view_service_1.MemoryViewService()) {
        this.service = service;
        this.router = (0, express_1.Router)();
        this.router.get("/", this.handle.bind(this));
    }
    /**
     * @openapi
     * /memory/view:
     *   get:
     *     tags:
     *       - memory
     *     summary: View memory data
     *     parameters:
     *       - in: query
     *         name: startAddress
     *         schema:
     *           type: integer
     *       - in: query
     *         name: length
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Memory data
     */
    handle(req, res) {
        const request = memory_view_schema_1.MemoryViewSchema.parseQuery(req.query);
        const result = this.service.execute(request);
        res.status(200).json(result);
    }
}
exports.MemoryViewRouter = MemoryViewRouter;
