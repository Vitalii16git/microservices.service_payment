import { Request, Response, NextFunction } from "express";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});

class PaymentService {
  // Function to create a payment
  async createPayment(req: Request, res: Response, _next: NextFunction) {
    const { amount, currency, source } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: source, // Payment source, e.g., card token
      confirm: true, // Confirm the payment immediately
    });

    if (!paymentIntent) {
      return res.status(403).json({ message: "Payment error" });
    }

    res.status(200).json({ paymentIntent });
    return;
  }

  // Function to retrieve payment details
  async getPayment(req: Request, res: Response, _next: NextFunction) {
    const { paymentId } = req.params;

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentId);

    if (!paymentIntent) {
      return res.status(403).json({ message: "Event error" });
    }

    res.status(200).json({ paymentIntent });
    return;
  }

  // Function to handle webhook notifications
  async handleWebhook(req: Request, res: Response, _next: NextFunction) {
    const payload = req.body;
    const sig = req.headers["stripe-signature"] as string;

    const event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );

    if (!event) {
      return res.status(403).json({ message: "Event error" });
    }

    // Handle the event based on its type
    switch (event.type) {
      case "payment_intent.succeeded":
        // Payment succeeded, update your database or trigger further actions
        break;
      case "payment_intent.payment_failed":
        // Payment failed, handle the failure and notify the user
        break;
    }

    res.status(200).json({ message: "Operation success" });
    return;
  }
}

export default new PaymentService();
