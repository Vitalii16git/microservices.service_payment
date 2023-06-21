import { Request, Response, NextFunction } from "express";
import paymentService from "../services/payment.service";

class PaymentController {
  async createPayment(req: Request, res: Response, next: NextFunction) {
    return paymentService.createPayment(req, res, next);
  }
  async getPayment(req: Request, res: Response, next: NextFunction) {
    return paymentService.getPayment(req, res, next);
  }
  async handleWebhook(req: Request, res: Response, next: NextFunction) {
    return paymentService.handleWebhook(req, res, next);
  }
}

export default new PaymentController();
