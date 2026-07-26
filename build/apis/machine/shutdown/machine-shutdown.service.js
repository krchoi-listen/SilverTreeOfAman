"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineShutdownService = void 0;
class MachineShutdownService {
    execute(request) {
        return {
            success: true,
            message: "Machine shutdown complete",
            data: {
                state: "stopped",
                forced: request.force ?? false
            }
        };
    }
}
exports.MachineShutdownService = MachineShutdownService;
