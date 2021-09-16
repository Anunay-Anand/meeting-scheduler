// Importing Required bundles
import { MongoClient } from "mongodb";

export const mongoConnect = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://anunay:nD8BXTO9SIjpshOh@cluster0.id530.mongodb.net/meetup?retryWrites=true&w=majority"
  );
  // Creating database
  const db = client.db();

  // Connecting to the database
  const meetupCollection = db.collection("meetup");
  return { meetupCollection, client };
};
