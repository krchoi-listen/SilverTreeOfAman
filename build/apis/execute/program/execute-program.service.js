"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteProgramService = void 0;
class ExecuteProgramService {
    execute(request) {
        return {
            success: true,
            message: "Program executed",
            data: {
                instructionCount: request.program.length
            }
        };
    }
}
exports.ExecuteProgramService = ExecuteProgramService;
