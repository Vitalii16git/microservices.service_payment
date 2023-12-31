import { Router } from "express";
import routes from "./payment.routes.object";

const router = Router();

routes.forEach((route) => {
  const { method, url, validator, middleware, controller } = route;

  (router.route(url) as any)[method](validator, middleware, controller);
});

export default router;
