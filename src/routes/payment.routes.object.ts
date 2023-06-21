import paymentController from "../controllers/payment.controller";

const routes = [
  {
    method: "post",
    routeName: "createPayment",
    url: "/create",
    validator: [],
    middleware: [],
    controller: paymentController.createPayment,
  },
  {
    method: "get",
    routeName: "getPayment",
    url: "/create",
    validator: [],
    middleware: [],
    controller: paymentController.getPayment,
  },
  {
    method: "post",
    routeName: "handleWebhook",
    url: "/create",
    validator: [],
    middleware: [],
    controller: paymentController.handleWebhook,
  },
];

export default routes;
