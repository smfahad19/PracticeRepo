import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import "./config/db.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRoutes);

app.listen(5000, () => {
  console.log("Server Running on port 5000");
});
