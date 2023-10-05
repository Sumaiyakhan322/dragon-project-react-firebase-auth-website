
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex items-center my-4">
           <button className="btn btn-secondary">Breaking News</button>
           <Marquee pauseOnHover={true}>
         <Link to='/' className="mr-12">  I can be a React component, multiple React component....</Link>
         <Link to='/' className="mr-12">  I can be a React component, multiple React component....</Link>
         <Link to='/' className="mr-12">  I can be a React component, multiple React component....</Link>
</Marquee>
        </div>
    );
};

export default BreakingNews;