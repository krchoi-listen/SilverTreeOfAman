export interface MachineStartRequest {
  bootMode?: "cold" | "warm";
}

export interface MachineStartResponse {
  success: boolean;
  message: string;
  data: {
    state: "running";
    bootMode: "cold" | "warm";
  };
}

export class MachineStartSchema {
  static parseRequest(body: unknown): MachineStartRequest {
    if (!body || typeof body !== "object") {
      return { bootMode: "cold" };
    }

    const parsed = body as { bootMode?: unknown };
    if (parsed.bootMode === "cold" || parsed.bootMode === "warm") {
      return { bootMode: parsed.bootMode };
    }

    return { bootMode: "cold" };
  }
}
