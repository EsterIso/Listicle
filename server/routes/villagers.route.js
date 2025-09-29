import express from "express";
import path from 'path';
import { fileURLToPath } from "url";
// import villagerData from "../data/villagers.data.js";
import { getVillagers } from '../controllers/villagers.controllers.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', getVillagers);

router.get('/:villagerName', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/villager.html'));
});

export default router;