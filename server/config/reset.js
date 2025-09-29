import { pool } from './database.js';
import './dotenv.js'
import villagerData from '../data/villagers.data.js'

const createVillagerTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS villagers;

        CREATE TABLE IF NOT EXISTS villagers (
            name VARCHAR(255) NOT NULL,
            gender VARCHAR(255) NOT NULL,
            personality VARCHAR(255) NOT NULL,
            species VARCHAR(255) NOT NULL,
            birthday VARCHAR(255) NOT NULL,
            catchphrase VARCHAR(255) NOT NULL,
            hobby VARCHAR(255) NOT NULL,
            photo VARCHAR(255) NOT NULL

        )
    `;

    try {
        const res = await pool.query(createTableQuery);
        console.log('Villager Table created Successfully');
    } catch (error) {
        console.error('Error creating Villager table', error);
    }
}

const seedVillagersTable = async () => {
    await createVillagerTable();
    
    villagerData.forEach((villager) => {
        const insertQuery = `
            INSERT INTO villagers (name, gender, personality, species, birthday, catchphrase, hobby, photo) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
        `;

        const values = [
            villager.name, 
            villager.gender, 
            villager.personality, 
            villager.species, 
            villager.birthday, 
            villager.catchphrase, 
            villager.hobby, 
            villager.photo
        ];

        pool.query(insertQuery, values, (err, res) => {
        if (err) {
            console.error('⚠️ error inserting villager', err);
            return;
        }
            console.log(`✅ ${villager.name} added successfully`);
        });
    })
}

seedVillagersTable();