// /api/new-meetup
// POST /api/new-meetup

import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      const client = await MongoClient.connect(
        "mongodb+srv://admin:oYkZrwsZqlZWUoBu@cluster0.ajzk4bz.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
      );
      const db = client.db();
      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({ message: "Meetup inserted!!" });
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
      res.status(500).json({ message: "Server error. Could not save meetup." });
    }
    
  }
  else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
