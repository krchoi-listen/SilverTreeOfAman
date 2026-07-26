import { Request, Response, Router } from "express";
import { MemoryViewSchema } from "./memory-view.schema";
import { MemoryViewService } from "./memory-view.service";

export class MemoryViewRouter {
  public readonly router: Router;

  constructor(private readonly service: MemoryViewService = new MemoryViewService()) {
    this.router = Router();
    this.router.get("/", this.handle.bind(this));
  }

  /**
   * @openapi
   * /memory/view:
   *   get:
   *     tags:
   *       - memory
   *     summary: View memory data
   *     parameters:
   *       - in: query
   *         name: startAddress
   *         schema:
   *           type: integer
   *       - in: query
   *         name: length
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Memory data
   */
  private handle(req: Request, res: Response): void {
    const request = MemoryViewSchema.parseQuery(req.query);
    const result = this.service.execute(request);
    res.status(200).json(result);
  }
}
