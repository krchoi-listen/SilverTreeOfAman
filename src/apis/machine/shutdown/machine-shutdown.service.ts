import {
  MachineShutdownRequest,
  MachineShutdownResponse
} from "./machine-shutdown.schema";

export class MachineShutdownService {
  execute(request: MachineShutdownRequest): MachineShutdownResponse {
    return {
      success: true,
      message: "Machine shutdown complete",
      data: {
        state: "stopped",
        forced: request.force ?? false
      }
    };
  }
}
