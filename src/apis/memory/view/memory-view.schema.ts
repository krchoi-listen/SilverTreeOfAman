export interface MemoryViewRequest {
  startAddress?: number;
  length?: number;
}

export interface MemoryViewResponse {
  success: boolean;
  message: string;
  data: {
    startAddress: number;
    length: number;
    values: number[];
  };
}

export class MemoryViewSchema {
  static parseQuery(query: unknown): MemoryViewRequest {
    const parsed = (query ?? {}) as { startAddress?: unknown; length?: unknown };

    const startAddress =
      typeof parsed.startAddress === "string" ? Number(parsed.startAddress) : undefined;
    const length = typeof parsed.length === "string" ? Number(parsed.length) : undefined;

    return {
      startAddress: Number.isFinite(startAddress) ? startAddress : 0,
      length: Number.isFinite(length) ? length : 16
    };
  }
}
