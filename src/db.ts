import connect from '@databases/sqlite-sync';

const db = connect(process.env.DB_PATH);

export default db;
