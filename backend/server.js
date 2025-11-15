import express from 'express';
import cors from 'cors';
import universityRoutes from './routes/universityRoutes.js'; // ✅ IMPORTANT

const app = express();
app.use(cors());
app.use(express.json());

// APIs
app.use("/api/universities", universityRoutes);

// Root
app.get("/", (req, res) => {
  res.send("MERN API Working");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
