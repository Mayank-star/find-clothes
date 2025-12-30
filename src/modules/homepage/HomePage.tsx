import NewArrivals from "./sections/arrivals/NewArrivals";
import TopSelling from "./sections/selling/TopSelling";
import Shopnow from "./sections/shopnow/Shopnow";

 export default function HomePage(){
    return (
        <div className="max-w-[1550px] mx-auto">
            <Shopnow/>
            <NewArrivals/>
            <TopSelling/>
        </div>
    )
 }