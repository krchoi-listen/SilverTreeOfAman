export interface MachineShutdownRequest {
  force?: boolean;
}

export interface MachineShutdownResponse {
  success: boolean;
  message: string;
  data: {
    state: "stopped";
    forced: boolean;
  };
}

export class MachineShutdownSchema {
  static parseRequest(body: unknown): MachineShutdownRequest {
    if (!body || typeof body !== "object") {
      return { force: false };
    }

    const parsed = body as { force?: unknown };
    return { force: parsed.force === true };
  }
}
