import {MongoClient, ObjectId} from 'mongodb';

import MeetUpDetails from "@/components/meetups/MeetUpDetails";


export default function DetailsPage(props) {
  return (
    <MeetUpDetails
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}


export async function getStaticPaths(){
    const client = await MongoClient.connect(
        "mongodb+srv://admin:oYkZrwsZqlZWUoBu@cluster0.ajzk4bz.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
      );
      const db = client.db();
      const meetupCollection = db.collection('meetups');

      const meetups = await meetupCollection.find({}, {_id: 1}).toArray();

      client.close();

    return{
        fallback:true,
        paths:meetups.map(maatup => ({params:{meetupId: maatup._id.toString()}}))
    }
}

export async function getStaticProps(context){
    const meetupId = context.params.meetupId;
    // console.log(meetupId);

    const client = await MongoClient.connect(
        "mongodb+srv://admin:oYkZrwsZqlZWUoBu@cluster0.ajzk4bz.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
      );
      const db = client.db();
      const meetupCollection = db.collection('meetups');


      const currentMeetup =await  meetupCollection.findOne({_id: new ObjectId(meetupId)})


      client.close();

    return{
        props:{
            meetupData:{
                image:currentMeetup.image,
                id:currentMeetup._id.toString(),
                title:currentMeetup.title,
                address:currentMeetup.address,
                description:currentMeetup.description,
            }
        }
    }

}