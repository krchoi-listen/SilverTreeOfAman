"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineStartSchema = void 0;
class MachineStartSchema {
    static parseRequest(body) {
        if (!body || typeof body !== "object") {
            return { bootMode: "cold" };
        }
        const parsed = body;
        if (parsed.bootMode === "cold" || parsed.bootMode === "warm") {
            return { bootMode: parsed.bootMode };
        }
        return { bootMode: "cold" };
    }
}
exports.MachineStartSchema = MachineStartSchema;
