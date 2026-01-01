const express = require("express");
const app = express();

// middleware
app.use(express.json());

// health check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "hatyaisafe-backend",
    time: new Date().toISOString()
  });
});

// root
app.get("/", (req, res) => {
  res.json({
    message: "HatyaiSafe Backend is running",
    status: "online"
  });
});

// port (สำคัญมากสำหรับ Hostinger)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

