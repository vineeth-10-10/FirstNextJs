import {MongoClient} from 'mongodb';

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
    return{
        fallback:true,
        paths:[
            {
                params:{
                    meetupId:"m1"
                }
            },
            {
                params:{
                    meetupId:"m2"
                }
            },
            {
                params:{
                    meetupId:"m3"
                }
            }
        ]
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

      const meetups = await meetupCollection.find().toArray();

      const currentMeetup = meetups.find((meetup)=>meetup._id.toString() === meetupId);

      console.log(currentMeetup);

      client.close();

    return{
        props:{
            meetupData:{
                image:currentMeetup.image,
                id:meetupId,
                title:currentMeetup.title,
                address:currentMeetup.address,
                description:currentMeetup.description,
            }
        }
    }

}