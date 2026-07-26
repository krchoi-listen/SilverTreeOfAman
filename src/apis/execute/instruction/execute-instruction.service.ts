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
        executedInstruction: request.instruction
      }
    };
  }
}
