import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.routes.js";
import medicineRoutes from "./routes/medicine.routes.js";

const app = express();

/** server configuration */
const config = {
  serverPort: "5001",
};

// CORS options
const corsOptions = {
  origin: [config.frontEndUrl],
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
  .connect("mongodb://127.0.0.1:27017/MedElderDB")
  .then(() => console.log("connect to the DB"))
  .catch((error) => console.log("failed to connect mongo db", error));

app.get("/", (req, res) => {
  res.json({ message: "Hello from Server" });
});

/** routes */
authRoutes(app);
medicineRoutes(app);

/** set port, listen to requests */
const PORT = config.serverPort || 5001;
app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
