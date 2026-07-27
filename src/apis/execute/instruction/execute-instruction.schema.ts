export interface ExecuteInstructionRequest {
  instruction: string;
  op1?: string;
  op2?: string;
}

export interface ExecuteInstructionResponse {
  success: boolean;
  message: string;
  data: {
    executedInstruction: string;
    executedOperand1: string;
    executedOperand2: string;
  };
}

export class ExecuteInstructionSchema {
  static parseRequest(body: unknown): ExecuteInstructionRequest | null {
    if (!body || typeof body !== "object") {
      return null;
    }

    const parsed = body as { instruction?: string, op1?: string, op2?: string };
    if (typeof parsed.instruction !== "string" || parsed.instruction.trim().length === 0) {
      return null;
    }

    return { instruction: parsed.instruction, op1: parsed.op1, op2: parsed.op2 };
  }
}
