import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.routes.js";
import medicineRoutes from "./routes/medicine.routes.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();
// Store environment variables
const DATABASE_URL = process.env.DATABASE_URL;
const port = process.env.PORT || 5002;

// Create an instance of the Express application
const app = express();

// CORS options
const corsOptions = {
  origin: ["frontEndUrl"],
  methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE"],
  credentials: true,
};

// Enables CORS for requests
app.use(cors(corsOptions));
// Parse requests of content-type - application/json
app.use(express.json());
// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// Set Allowed HTTP headers for cross-origin requests
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/** Mongo db connection */
mongoose
  .connect(`${DATABASE_URL}`)
  .then(() => console.log("Connected to the Database"))
  .catch((error) => console.log("Failed to connect Database", error));

app.get("/", (req, res) => {
  res.json({ message: "Hi, I'm alive!" });
});

/** routes */
authRoutes(app);
medicineRoutes(app);

/** listen to requests */
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
