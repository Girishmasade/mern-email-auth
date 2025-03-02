import dotenv from 'dotenv'
import {app} from './app.js'
import { connectDB } from "./config/mongodb.js";

dotenv.config({
    path: './.env'
})

const port = process.env.PORT || 4000

connectDB()

app.listen(port, () => {
console.log(`app running on port ${port}`);
})