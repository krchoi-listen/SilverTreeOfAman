import { Request, Response, Router } from "express";
import { ExecuteInstructionSchema } from "./execute-instruction.schema";
import { ExecuteInstructionService } from "./execute-instruction.service";

export class ExecuteInstructionRouter {
  public readonly router: Router;

  constructor(
    private readonly service: ExecuteInstructionService = new ExecuteInstructionService()
  ) {
    this.router = Router();
    this.router.post("/", this.handle.bind(this));
  }

  /**
   * @openapi
   * /execute/instruction:
   *   post:
   *     tags:
   *       - execute
   *     summary: Execute a single instruction
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required: [instruction]
   *             properties:
   *               instruction:
   *                 type: string
   *     responses:
   *       200:
   *         description: Execution result
   *       400:
   *         description: Invalid request
   */
  private handle(req: Request, res: Response): void {
    const request = ExecuteInstructionSchema.parseRequest(req.body);

    if (!request) {
      res.status(400).json({
        success: false,
        message: "Invalid request body. 'instruction' is required."
      });
      return;
    }

    const result = this.service.execute(request);
    res.status(200).json(result);
  }
}
