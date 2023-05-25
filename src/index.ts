import express, { Request, Response, Application, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app: Application = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(bodyParser.json());

app.post("/payments", (req, res) => {
  // Handle payment processing

  res.status(200).send("Payment processed successfully");
});

app.listen(PORT, () => {
  console.log(`Service is running on port ${PORT}`);
});
