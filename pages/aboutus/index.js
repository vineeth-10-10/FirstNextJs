import Link from "next/link";

function AboutUs() {
  return (
    <>
      <ul>
        <li>
          <Link href="aboutus/1">Take me to Vaibhav</Link>
        </li>
        <li>
          <Link href="aboutus/2">Take me to Vineeth</Link>
        </li>
        <li><Link href="aboutus/3">Take me to Crazy</Link></li>
      </ul>
    </>
  );
}

export default AboutUs;
