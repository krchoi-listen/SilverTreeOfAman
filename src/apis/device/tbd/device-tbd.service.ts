import { DeviceTbdResponse } from "./device-tbd.schema";

export class DeviceTbdService {
  execute(): DeviceTbdResponse {
    return {
      success: true,
      message: "Device API is TBD",
      data: {
        status: "tbd"
      }
    };
  }
}
