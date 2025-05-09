//domain-name/new-meetup
import { useRouter } from "next/router";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";

export default function NewMeetUpPage() {
    const router = useRouter();
  async function receivedData(enteredMeetUpData) {
    try {
      const response = await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(enteredMeetUpData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);
      router.push('/');
    } catch (error) {
      console.error("Frontend error:", err.message);
    }
  }
  return <NewMeetupForm onAddMeetup={receivedData} />;
}
