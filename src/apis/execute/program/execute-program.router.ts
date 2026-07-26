import { Request, Response, Router } from "express";
import { ExecuteProgramSchema } from "./execute-program.schema";
import { ExecuteProgramService } from "./execute-program.service";

export class ExecuteProgramRouter {
  public readonly router: Router;

  constructor(private readonly service: ExecuteProgramService = new ExecuteProgramService()) {
    this.router = Router();
    this.router.post("/", this.handle.bind(this));
  }

  /**
   * @openapi
   * /execute/program:
   *   post:
   *     tags:
   *       - execute
   *     summary: Execute a program
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required: [program]
   *             properties:
   *               program:
   *                 type: array
   *                 items:
   *                   type: string
   *     responses:
   *       200:
   *         description: Program execution result
   *       400:
   *         description: Invalid request
   */
  private handle(req: Request, res: Response): void {
    const request = ExecuteProgramSchema.parseRequest(req.body);

    if (!request) {
      res.status(400).json({
        success: false,
        message: "Invalid request body. 'program' must be an array of instruction strings."
      });
      return;
    }

    const result = this.service.execute(request);
    res.status(200).json(result);
  }
}
