import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [catagories,setCatagories]=useState([])
    useEffect (()=>{
       fetch('../../../public/categories.json')
       .then(res=>res.json())
       .then(data=>setCatagories(data))
    },[])
    return (
        <div className="space-y-6">
            <h2 className="text-2xl">All categories</h2>
            {catagories.map((catagory)=>(
              <Link key={catagories.id} className="block m-4 text-xl font-semibold" to={`/category/${catagory.id}`}>{catagory.name}</Link>
            ))}
        </div>
    );
};

export default LeftSideNav;