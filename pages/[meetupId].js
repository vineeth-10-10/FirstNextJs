import MeetUpDetails from "@/components/meetups/MeetUpDetails";


export default function DetailsPage() {
  return (
    <MeetUpDetails
      image="https://imgs.search.brave.com/sPw7U2zcMOOZUlaHMefinvBFsBatF1ochTUouTCCxpA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjEy/NjMwNDc4L3Bob3Rv/L2hvbmcta29uZy1u/aWdodC1zY2VuZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/TGFxWlc2YU5WRFpt/bDgyc29nRFlfSklz/WmZsY0tvWklYTzh5/ZWljczVCQT0"
      title=" title"
      address="Somewhwer in hong kong"
      description="1st meetup like this"
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
    console.log(meetupId);

    return{
        props:{
            meetupData:{
                image:"https://imgs.search.brave.com/sPw7U2zcMOOZUlaHMefinvBFsBatF1ochTUouTCCxpA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjEy/NjMwNDc4L3Bob3Rv/L2hvbmcta29uZy1u/aWdodC1zY2VuZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/TGFxWlc2YU5WRFpt/bDgyc29nRFlfSklz/WmZsY0tvWklYTzh5/ZWljczVCQT0",
                id:meetupId,
                title:"Some title",
                address:"Somewhwer in hong kong",
                description:"1st meetup like this"
            }
        }
    }

}