/**
 * @swagger
 * components:
 *   schemas:
 *     NewSchema:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - date
 *         - content
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the new
 *         title:
 *           type: string
 *           description: The title of the new
 *         description:
 *           type: string
 *           description: The description of the new
 *         date:
 *           type: string
 *           format: date
 *           description: The date when was published the new
 *         content:
 *           type: string
 *           description: The content of the new
 *         author:
 *           type: string
 *           description: The new author
 *         archiveDate:
 *           type: string
 *           format: date
 *           description: The date the book was archived
 *       example:
 *         id: d5fE_asz
 *         title: La importancia de la lectura
 *         description: La lectura es una actividad fundamental para el desarrollo de las personas
 *         date: 2020-03-10T04:05:06.157Z
 *         content: La lectura es una actividad fundamental para el desarrollo de las personas. Nos permite conocer el mundo que nos rodea, aprender de la historia y mejorar nuestra capacidad de comprensión y análisis.
 *         author: Alexander K. Dewdney
 *         createdAt: 2020-03-10T04:05:06.157Z
 */
/**
 * @swagger
 * tags:
 *   name: News
 *   description: The news managing API
 */
import { Router } from "express";
import { News } from "../utils/news.schema.js";

const newsRouter = Router();

/**
 * @swagger
 * /api/news:
 *   get:
 *     summary: Lists all the news
 *     tags: [News]
 *     responses:
 *       200:
 *         description: The list of the news
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NewSchema'
 *
 */
newsRouter.get("/", async (req, res) => {
  // const news = await News.find().sort({ date: -1 });
  // res.json(news);
  res.json({ message: "Hello World 3" });
});

/**
 * @swagger
 * /api/news/archived:
 *   get:
 *     summary: Lists all the news archived
 *     tags: [News]
 *     responses:
 *       200:
 *         description: The list of the news archived
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NewSchema'
 *
 */
newsRouter.get("/archived", async (req, res) => {
  const archivedNews = await News.find({ archiveDate: { $ne: null } }).sort({
    archiveDate: -1,
  });
  res.json(archivedNews);
});

/**
 * @swagger
 * /api/news/{id}/archive:
 *   put:
 *     summary: Archive the new by id
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The new id
 *     responses:
 *       200:
 *         description: The new was archived
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NewSchema'
 *       404:
 *         description: The new was not found
 *       500:
 *         description: Some error happened
 *
 */
newsRouter.put("/:id/archive", async (req, res) => {
  const news = await News.findByIdAndUpdate(
    req.params.id,
    { archiveDate: new Date() },
    { new: true }
  );
  res.json(news);
});

/**
 * @swagger
 * /api/news/{id}:
 *   get:
 *     summary: Remove the new by id
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The new id
 *     responses:
 *       200:
 *         description: The new was removed
 *       404:
 *         description: The new was not found
 *
 */
newsRouter.delete("/:id", async (req, res) => {
  await News.findByIdAndDelete(req.params.id);
  res.status(204).send("Item removed").end();
});

export { newsRouter };
