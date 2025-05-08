import MeetupList from "@/components/meetups/MeetupList";

const DUMMY = [
  {
    id: 1,
    title: "My 1st meetup",
    image:
      "https://imgs.search.brave.com/sPw7U2zcMOOZUlaHMefinvBFsBatF1ochTUouTCCxpA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjEy/NjMwNDc4L3Bob3Rv/L2hvbmcta29uZy1u/aWdodC1zY2VuZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/TGFxWlc2YU5WRFpt/bDgyc29nRFlfSklz/WmZsY0tvWklYTzh5/ZWljczVCQT0",
    address: "HongKong",
  },
  {
    id: 2,
    title: "2nd meet up",
    image:
      "https://imgs.search.brave.com/sPw7U2zcMOOZUlaHMefinvBFsBatF1ochTUouTCCxpA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjEy/NjMwNDc4L3Bob3Rv/L2hvbmcta29uZy1u/aWdodC1zY2VuZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/TGFxWlc2YU5WRFpt/bDgyc29nRFlfSklz/WmZsY0tvWklYTzh5/ZWljczVCQT0",
    address: "Honh long kong",
  },
];

export default function HomePage() {
  return <MeetupList meetups={DUMMY} />;
}
