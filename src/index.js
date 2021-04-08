import express from 'express';
import dotenv from 'dotenv';
import router from './services/router.js'
import records from './controllers/recordController.js'

dotenv.config();
const app = express();
app.use(express.json());

app.use(router);
app.use('/records', records);


app.listen(process.env.SERVER_PORT);