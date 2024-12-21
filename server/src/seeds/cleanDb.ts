import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    let modelExists = await models[modelName]?.db?.db?.listCollections({
      name: collectionName
    }).toArray();

    if (modelExists && modelExists.length) {
      await db.dropCollection(collectionName);
    } else {
      console.error(`Model ${modelName} does not exist or could not be found.`);
    }
  } catch (err) {
    throw err;
  }
}