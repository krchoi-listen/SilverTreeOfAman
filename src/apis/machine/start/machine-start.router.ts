import { Request, Response, Router } from "express";
import { MachineStartSchema } from "./machine-start.schema";
import { MachineStartService } from "./machine-start.service";

export class MachineStartRouter {
  public readonly router: Router;

  constructor(private readonly service: MachineStartService = new MachineStartService()) {
    this.router = Router();
    this.router.post("/", this.handle.bind(this));
  }

  /**
   * @openapi
   * /machine/start:
   *   post:
   *     tags:
   *       - machine
   *     summary: Start the machine
   *     requestBody:
   *       required: false
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               bootMode:
   *                 type: string
   *                 enum: [cold, warm]
   *     responses:
   *       200:
   *         description: Machine start result
   */
  private handle(req: Request, res: Response): void {
    const request = MachineStartSchema.parseRequest(req.body);
    const result = this.service.execute(request);
    res.status(200).json(result);
  }
}
