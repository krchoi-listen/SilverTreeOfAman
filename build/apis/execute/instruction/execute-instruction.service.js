"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteInstructionService = void 0;
class ExecuteInstructionService {
    execute(request) {
        return {
            success: true,
            message: "Instruction executed",
            data: {
                executedInstruction: request.instruction,
                executedOperand1: request.op1 ? request.op1 : "",
                executedOperand2: request.op2 ? request.op2 : "",
            }
        };
    }
}
exports.ExecuteInstructionService = ExecuteInstructionService;
