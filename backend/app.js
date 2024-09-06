import express, { json } from "express";
import { connect, Schema, model } from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(json());

const mongoURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/allfunds";
connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

const NewsSchema = new Schema({
  title: String,
  description: String,
  date: { type: Date, default: Date.now },
  content: String,
  author: String,
  archiveDate: { type: Date, default: null },
});

const News = model("News", NewsSchema);

// Get all news
app.get("/api/news", async (req, res) => {
  // const news = await News.find().sort({ date: -1 });
  // res.json(news);
  res.json({ message: "Hello World 3" });
});

// Get archived news
app.get("/api/news/archived", async (req, res) => {
  const archivedNews = await News.find({ archiveDate: { $ne: null } }).sort({
    archiveDate: -1,
  });
  res.json(archivedNews);
});

// Archive a news item
app.put("/api/news/:id/archive", async (req, res) => {
  const news = await News.findByIdAndUpdate(
    req.params.id,
    { archiveDate: new Date() },
    { new: true }
  );
  res.json(news);
});

// Remove a news item
app.delete("/api/news/:id", async (req, res) => {
  await News.findByIdAndDelete(req.params.id);
  res.status(204).send("Item removed").end();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
