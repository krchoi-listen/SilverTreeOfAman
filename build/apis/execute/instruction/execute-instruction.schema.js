"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteInstructionSchema = void 0;
class ExecuteInstructionSchema {
    static parseRequest(body) {
        if (!body || typeof body !== "object") {
            return null;
        }
        const parsed = body;
        if (typeof parsed.instruction !== "string" || parsed.instruction.trim().length === 0) {
            return null;
        }
        return { instruction: parsed.instruction };
    }
}
exports.ExecuteInstructionSchema = ExecuteInstructionSchema;
