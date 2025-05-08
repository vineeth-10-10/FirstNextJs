import NewMeetupForm from "@/components/meetups/NewMeetupForm"

export default function NewMeetUpPage () {

    function receivedData (enteredMeetUpData){
        console.log(enteredMeetUpData);
    } 
    return(<NewMeetupForm onAddMeetup={receivedData}/>)
}