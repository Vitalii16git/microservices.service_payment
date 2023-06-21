import dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import cors from "cors";
import logger from "./utils/logger";
import router from "./routes/payment.route";

const app: Application = express();
const PORT = process.env.PORT || 5052;

app.use(express.json());
app.use(cors());
app.use("/payment", router);

app.listen(PORT, () => {
  logger.info(`Service is running on port ${PORT}`);
});
