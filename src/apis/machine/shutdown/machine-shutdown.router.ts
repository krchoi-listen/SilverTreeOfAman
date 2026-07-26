import { Request, Response, Router } from "express";
import { MachineShutdownSchema } from "./machine-shutdown.schema";
import { MachineShutdownService } from "./machine-shutdown.service";

export class MachineShutdownRouter {
  public readonly router: Router;

  constructor(
    private readonly service: MachineShutdownService = new MachineShutdownService()
  ) {
    this.router = Router();
    this.router.post("/", this.handle.bind(this));
  }

  /**
   * @openapi
   * /machine/shutdown:
   *   post:
   *     tags:
   *       - machine
   *     summary: Shutdown the machine
   *     requestBody:
   *       required: false
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               force:
   *                 type: boolean
   *     responses:
   *       200:
   *         description: Machine shutdown result
   */
  private handle(req: Request, res: Response): void {
    const request = MachineShutdownSchema.parseRequest(req.body);
    const result = this.service.execute(request);
    res.status(200).json(result);
  }
}
