import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();
    var database;

    if (process.env.NODE_ENV !== undefined) {
        database = "./src/database/database.test.sqlite";
    } else {
        database = defaultOptions.database;
    }

    return createConnection(
        Object.assign(defaultOptions, {
            database: database,
        })
    );
}