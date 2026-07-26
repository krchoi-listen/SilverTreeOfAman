"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryViewSchema = void 0;
class MemoryViewSchema {
    static parseQuery(query) {
        const parsed = (query ?? {});
        const startAddress = typeof parsed.startAddress === "string" ? Number(parsed.startAddress) : undefined;
        const length = typeof parsed.length === "string" ? Number(parsed.length) : undefined;
        return {
            startAddress: Number.isFinite(startAddress) ? startAddress : 0,
            length: Number.isFinite(length) ? length : 16
        };
    }
}
exports.MemoryViewSchema = MemoryViewSchema;
