export interface ExecuteInstructionRequest {
  instruction: string;
}

export interface ExecuteInstructionResponse {
  success: boolean;
  message: string;
  data: {
    executedInstruction: string;
  };
}

export class ExecuteInstructionSchema {
  static parseRequest(body: unknown): ExecuteInstructionRequest | null {
    if (!body || typeof body !== "object") {
      return null;
    }

    const parsed = body as { instruction?: unknown };
    if (typeof parsed.instruction !== "string" || parsed.instruction.trim().length === 0) {
      return null;
    }

    return { instruction: parsed.instruction };
  }
}
