import app from "./app.js";
import {sequelize} from "./database/database.js";
// import { Project } from "./models/Project.js";

const PORT = 3000;

async function main() {
    try {
        await sequelize.sync({force: false});
        console.log('Postgres DB is synced')
        await app.listen(PORT);
        console.log(`Server on port ${PORT}`);
    } catch (error) {
        console.log('Unable to connect to database', error);
    }
}

main();