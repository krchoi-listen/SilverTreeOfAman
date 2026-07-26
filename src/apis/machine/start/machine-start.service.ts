import {
  MachineStartRequest,
  MachineStartResponse
} from "./machine-start.schema";

export class MachineStartService {
  execute(request: MachineStartRequest): MachineStartResponse {
    return {
      success: true,
      message: "Machine started",
      data: {
        state: "running",
        bootMode: request.bootMode ?? "cold"
      }
    };
  }
}
