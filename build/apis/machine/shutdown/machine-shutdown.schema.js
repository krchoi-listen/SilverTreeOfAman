"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineShutdownSchema = void 0;
class MachineShutdownSchema {
    static parseRequest(body) {
        if (!body || typeof body !== "object") {
            return { force: false };
        }
        const parsed = body;
        return { force: parsed.force === true };
    }
}
exports.MachineShutdownSchema = MachineShutdownSchema;
