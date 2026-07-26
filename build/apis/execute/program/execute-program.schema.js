"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteProgramSchema = void 0;
class ExecuteProgramSchema {
    static parseRequest(body) {
        if (!body || typeof body !== "object") {
            return null;
        }
        const parsed = body;
        if (!Array.isArray(parsed.program) || parsed.program.some((line) => typeof line !== "string")) {
            return null;
        }
        return { program: parsed.program };
    }
}
exports.ExecuteProgramSchema = ExecuteProgramSchema;
