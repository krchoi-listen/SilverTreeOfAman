import { MemoryViewRequest, MemoryViewResponse } from "./memory-view.schema";

export class MemoryViewService {
  execute(request: MemoryViewRequest): MemoryViewResponse {
    const startAddress = request.startAddress ?? 0;
    const length = request.length ?? 16;

    return {
      success: true,
      message: "Memory view generated",
      data: {
        startAddress,
        length,
        values: Array.from({ length }, (_, i) => (startAddress + i) % 256)
      }
    };
  }
}
