import { createConnection } from 'typeorm'; 

createConnection()
    .then(() => console.log('Successufuly connected with database.'));
