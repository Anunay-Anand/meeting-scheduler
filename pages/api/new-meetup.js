// Creating back end code (Using express or Node.js)
import { MongoClient } from "mongodb";

async function handler(req, res) {
  // check if methiod is post then only accept the request
  if (req.method === "POST") {
    // Extract the data out of body
    const data = req.body;

    // Connect to Mongo Server
    const client = await MongoClient.connect(
      "mongodb+srv://anunay:Awesomepapa@7@cluster0.id530.mongodb.net/meetup?retryWrites=true&w=majority"
    );
    // Creating database
    const db = client.db();

    // Fetching all collections
    const meetupCollections = db.collection("meetup");

    // Inserting the form submission
    const result = meetupCollections.insertOne(data);

    // Closing the client
    client.close();

    // Sending the response
    res.status(201).json({ message: "Meetup stored" });
  }
}

export default handler;
