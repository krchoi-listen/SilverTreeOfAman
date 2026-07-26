"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineStartService = void 0;
class MachineStartService {
    execute(request) {
        return {
            success: true,
            message: "Machine started",
            data: {
                state: "running",
                bootMode: request.bootMode ?? "cold"
            }
        };
    }
}
exports.MachineStartService = MachineStartService;
