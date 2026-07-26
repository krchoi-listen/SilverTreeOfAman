import { Request, Response, Router } from "express";
import { DeviceTbdService } from "./device-tbd.service";

export class DeviceTbdRouter {
  public readonly router: Router;

  constructor(private readonly service: DeviceTbdService = new DeviceTbdService()) {
    this.router = Router();
    this.router.get("/", this.handle.bind(this));
  }

  /**
   * @openapi
   * /device:
   *   get:
   *     tags:
   *       - device
   *     summary: Placeholder endpoint for device APIs
   *     responses:
   *       200:
   *         description: Device API placeholder result
   */
  private handle(_req: Request, res: Response): void {
    const result = this.service.execute();
    res.status(200).json(result);
  }
}
