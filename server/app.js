import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
dotenv.config();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
import eventRoutes from "./routes/event.js";

app.use("/events", eventRoutes);

export const CONNECTION_URL =
  "mongodb+srv://username:brainhub@cluster0.52c91lq.mongodb.net/brainhubTask?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*"),
    (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    };
} else {
  app.get("/", (req, res) => {
    res.send("Api running");
  });
}

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Connection is established and running on port:${PORT}`)
    )
  )
  .catch((err) => console.log(err.message));

// module.exports = app;
export default app;
