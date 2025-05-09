import { MongoClient } from "mongodb";

import MeetupList from "@/components/meetups/MeetupList";

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:oYkZrwsZqlZWUoBu@cluster0.ajzk4bz.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        image:meetup.image,
        title:meetup.title,
        address:meetup.address,
        id:meetup._id.toString()
      })),
      revalidate: 100,
    },
  };
}
