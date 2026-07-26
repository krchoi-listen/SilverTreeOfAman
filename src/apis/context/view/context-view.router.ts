import { Request, Response, Router } from "express";
import { ContextViewService } from "./context-view.service";

export class ContextViewRouter {
  public readonly router: Router;

  constructor(private readonly service: ContextViewService = new ContextViewService()) {
    this.router = Router();
    this.router.get("/", this.handle.bind(this));
  }

  /**
   * @openapi
   * /context/view:
   *   get:
   *     tags:
   *       - context
   *     summary: View machine context
   *     responses:
   *       200:
   *         description: Context data
   */
  private handle(_req: Request, res: Response): void {
    const result = this.service.execute();
    res.status(200).json(result);
  }
}
