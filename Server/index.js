const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;


app.use(express.json());
app.use(cors());


const MONGODB_URI = "mongodb+srv://shriharshranjangupta:<Dfukav6QbTGGaXpR>@cluster0.hqrrl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Mongoose Schema
const cardSchema = new mongoose.Schema({
  title: String,
  buttonText: String,
  link: String,
});

const Card = mongoose.model("Card", cardSchema);

// Routes
app.get("/api/cards", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//Dfukav6QbTGGaXpR

//shriharshranjangupta