import express from 'express';
import mongoose from 'mongoose';
import User from './src/models/users.model.js';

// Initialize Express app
const app = express();
app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://prakhar:spforzae5@cluster0.gjhursf.mongodb.net/mongomaster?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

// Routes
app.get("/api", (req, res) => {
  res.send("hi");
});

app.post("/api/register", async (req, res) => {
  try {
    const { username, email } = req.body;
    // Create user
    const user = await User.create({ username, email });
    // Find user by ID
    const createdUser = await User.findById(user._id);
    // Check if user is created
    if (createdUser) {
      res.send("User created");
    } else {
      res.send("User not created");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// Start server after connecting to DB
connectDB().then(() => {
  app.listen(3000, () => {
    console.log("App is running on port 3000");
  });
});
