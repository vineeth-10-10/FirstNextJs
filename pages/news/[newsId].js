import { useRouter } from "next/router";

function DetailsPage (){

    const router = useRouter();
    console.log(router.query.newsId);
    return <h1>this is inside news as a nested route ..../news/something</h1>
}

export default DetailsPage;