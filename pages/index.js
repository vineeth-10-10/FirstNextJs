import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import MeetupList from "@/components/meetups/MeetupList";

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React meetups</title>
        <meta name="description" content="enjoy high quality meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
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
      meetups: meetups.map((meetup) => ({
        image: meetup.image,
        title: meetup.title,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
      revalidate: 100,
    },
  };
}
