import * as mongoose from "mongoose";

export class Mongoose {
  constructor() {
    (mongoose as any).Promise = global.Promise;

    const host = process.env.MONGO_HOST;
    const port = process.env.MONGO_PORT;
    const database = process.env.MONGO_DATABASE;
    const url = `mongodb://${host}:${port}/${database}`;

    if (mongoose.connection.readyState !== 1) {
      mongoose.connect(url, (err) => {
        if (err) throw err;

        if (process.env.NODE_ENV !== "test") {
          console.log("Mongoose connection successful.");
        }
      });
    }
  }
}