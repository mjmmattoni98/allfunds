import { model, Schema } from "mongoose";

const NewsSchema = new Schema({
  title: String,
  description: String,
  date: { type: Date, default: Date.now },
  content: String,
  author: String,
  archiveDate: { type: Date, default: null },
});

const News = model("News", NewsSchema);

export { News };
