const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
const internshipRoutes = require(
  "./routes/internshipRoutes"
);
app.use(
  "/api/internships",
  internshipRoutes
);
const resourceRoutes = require("./routes/resourceRoutes");
app.use("/api/resources", resourceRoutes);
const postRoutes = require("./routes/postRoutes");
app.use("/api/posts", postRoutes);


app.get("/", (req, res) => {
    res.send("ConnectThruCampus Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});