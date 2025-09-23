const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// ✅ CORS Config (Netlify + Localhost)
const corsOptions = {
  origin: [
    "http://localhost:5173",               // Local dev (Vite default)
    "https://zenovastays.netlify.app"   // Production frontend
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // include OPTIONS
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

// ✅ Routes
const entryRoutes = require("./routes/entryRoutes");
app.use("/api/entries", entryRoutes);

const adminRoutes = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);

// ✅ Database
const connectDB = require("./config/db");
connectDB();

// ✅ Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
