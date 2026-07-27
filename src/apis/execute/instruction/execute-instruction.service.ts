import {
  ExecuteInstructionRequest,
  ExecuteInstructionResponse
} from "./execute-instruction.schema";

export class ExecuteInstructionService {
  execute(request: ExecuteInstructionRequest): ExecuteInstructionResponse {
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
