import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { runGemini } from './geminiApi.js';
import cors from 'cors'; // Import the cors middleware

dotenv.config();
import titansRoutes from "./routes/titans.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all origins
app.use(express.json());
app.use("/api/aot", titansRoutes);

app.get('/', (req, res) => {
  res.send("Backend Server Running");
});

app.post('/gemini', async (req, res) => {
  try {
    const prompt = req.body.prompt;
    if (!prompt) {
      return res.status(400).send("A prompt must be provided");
    }
    const result = await runGemini(prompt);
    res.send({ response: result });
  } catch (error) {
    console.error("Error during Gemini API call", error);
    res.status(500).send("Error during processing");
  }
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Eren is going titan mode! at http://localhost:${PORT}`);
});