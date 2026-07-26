"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextViewRouter = void 0;
const express_1 = require("express");
const context_view_service_1 = require("./context-view.service");
class ContextViewRouter {
    constructor(service = new context_view_service_1.ContextViewService()) {
        this.service = service;
        this.router = (0, express_1.Router)();
        this.router.get("/", this.handle.bind(this));
    }
    /**
     * @openapi
     * /context/view:
     *   get:
     *     tags:
     *       - context
     *     summary: View machine context
     *     responses:
     *       200:
     *         description: Context data
     */
    handle(_req, res) {
        const result = this.service.execute();
        res.status(200).json(result);
    }
}
exports.ContextViewRouter = ContextViewRouter;
