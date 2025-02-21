import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { errorHandler, routeNotFound } from "./middlewares/errorMiddlewaves.js";
import routes from "./routes/index.js";
import { dbConnection } from "./utils/index.js";

dotenv.config();

// Validate Environment Variables
if (!process.env.DB_URI) {
  console.error("Error: DB_URI is not defined in .env file");
  process.exit(1);
}

dbConnection();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
}

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api", routes);

app.use(routeNotFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
