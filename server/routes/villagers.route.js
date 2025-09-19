import express from "express";
import path from 'path';
import { fileURLToPath } from "url";
import villagerData from "../data/villagers.data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(villagerData);
});

router.get('/:villagerName', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/villager.html'))
});

export default router;