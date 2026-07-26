export interface ExecuteProgramRequest {
  program: string[];
}

export interface ExecuteProgramResponse {
  success: boolean;
  message: string;
  data: {
    instructionCount: number;
  };
}

export class ExecuteProgramSchema {
  static parseRequest(body: unknown): ExecuteProgramRequest | null {
    if (!body || typeof body !== "object") {
      return null;
    }

    const parsed = body as { program?: unknown };
    if (!Array.isArray(parsed.program) || parsed.program.some((line) => typeof line !== "string")) {
      return null;
    }

    return { program: parsed.program };
  }
}
