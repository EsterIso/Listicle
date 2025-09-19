import express from 'express';
import dotenv from "dotenv";
import villagerRouter from './routes/villagers.route.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use('/public', express.static('./public'));

app.use('/scripts', express.static('./public/scripts'));

app.use('/villagers', villagerRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});