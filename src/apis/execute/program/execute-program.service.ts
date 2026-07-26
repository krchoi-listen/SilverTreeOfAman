import {
  ExecuteProgramRequest,
  ExecuteProgramResponse
} from "./execute-program.schema";

export class ExecuteProgramService {
  execute(request: ExecuteProgramRequest): ExecuteProgramResponse {
    return {
      success: true,
      message: "Program executed",
      data: {
        instructionCount: request.program.length
      }
    };
  }
}
