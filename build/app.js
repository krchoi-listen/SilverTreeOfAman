"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("./swagger");
const machine_start_router_1 = require("./apis/machine/start/machine-start.router");
const machine_shutdown_router_1 = require("./apis/machine/shutdown/machine-shutdown.router");
const execute_instruction_router_1 = require("./apis/execute/instruction/execute-instruction.router");
const execute_program_router_1 = require("./apis/execute/program/execute-program.router");
const memory_view_router_1 = require("./apis/memory/view/memory-view.router");
const context_view_router_1 = require("./apis/context/view/context-view.router");
const device_tbd_router_1 = require("./apis/device/tbd/device-tbd.router");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.get("/health", (_req, res) => {
    res.json({ success: true, message: "ok" });
});
exports.app.use("/machine/start", new machine_start_router_1.MachineStartRouter().router);
exports.app.use("/machine/shutdown", new machine_shutdown_router_1.MachineShutdownRouter().router);
exports.app.use("/execute/instruction", new execute_instruction_router_1.ExecuteInstructionRouter().router);
exports.app.use("/execute/program", new execute_program_router_1.ExecuteProgramRouter().router);
exports.app.use("/memory/view", new memory_view_router_1.MemoryViewRouter().router);
exports.app.use("/context/view", new context_view_router_1.ContextViewRouter().router);
exports.app.use("/device", new device_tbd_router_1.DeviceTbdRouter().router);
exports.app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
