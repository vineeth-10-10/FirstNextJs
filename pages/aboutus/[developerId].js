import { useRouter } from "next/router";

const details = [
  { id: 1, name: "Vaibhav", role: "Backend DEV" },
  { id: 2, name: "Vineeth", role: "Frontend DEV" },
  { id: 3, name: "Crazy", role: "WordPress DEV" },
];
function Devoloper() {
  const router = useRouter();
  const developerId = Number(router.query.developerId) ;
  const item= details.find(dev => dev.id === developerId);
  console.log(item);  
 
if(!item) return <h2>Developer not found..</h2>

  return (
    <><h1>dummy</h1>
      <h1>My name is {item.name}</h1>
      <p>I am a {item.role} devoloper</p>
    </>
  );
}

export default Devoloper;
