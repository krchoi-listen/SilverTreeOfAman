import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";
import { MachineStartRouter } from "./apis/machine/start/machine-start.router";
import { MachineShutdownRouter } from "./apis/machine/shutdown/machine-shutdown.router";
import { ExecuteInstructionRouter } from "./apis/execute/instruction/execute-instruction.router";
import { ExecuteProgramRouter } from "./apis/execute/program/execute-program.router";
import { MemoryViewRouter } from "./apis/memory/view/memory-view.router";
import { ContextViewRouter } from "./apis/context/view/context-view.router";
import { DeviceTbdRouter } from "./apis/device/tbd/device-tbd.router";

export const app = express();

app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
  res.json({ success: true, message: "ok" });
});

app.use("/machine/start", new MachineStartRouter().router);
app.use("/machine/shutdown", new MachineShutdownRouter().router);
app.use("/execute/instruction", new ExecuteInstructionRouter().router);
app.use("/execute/program", new ExecuteProgramRouter().router);
app.use("/memory/view", new MemoryViewRouter().router);
app.use("/context/view", new ContextViewRouter().router);
app.use("/device", new DeviceTbdRouter().router);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
