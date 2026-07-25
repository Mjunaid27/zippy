require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Start Server (Allow mobile devices on same WiFi to connect)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`
====================================
🚀 Zippy Backend Started Successfully
🌐 Server Running On Port : ${PORT}
📱 Mobile Access: http://192.168.31.247:${PORT}
====================================
  `);
});