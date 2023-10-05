import BreakingNews from "./Shared/BreakingNews";
import Header from "./Shared/Header";
import LeftSideNav from "./Shared/LeftSideNav";
import Navbar from "./Shared/Navbar";
import RightSideNav from "./Shared/RightSideNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           
            <div className="grid md:grid-cols-4 gap-4 grid-cols-1">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                    </div>
                <div className="md:col-span-2 border">
                    <h2>news commig</h2>
                    </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                    </div>
            </div>
        </div>
    );
};

export default Home;