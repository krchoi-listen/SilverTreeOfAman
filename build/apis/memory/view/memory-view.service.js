"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryViewService = void 0;
class MemoryViewService {
    execute(request) {
        const startAddress = request.startAddress ?? 0;
        const length = request.length ?? 16;
        return {
            success: true,
            message: "Memory view generated",
            data: {
                startAddress,
                length,
                values: Array.from({ length }, (_, i) => (startAddress + i) % 256)
            }
        };
    }
}
exports.MemoryViewService = MemoryViewService;
