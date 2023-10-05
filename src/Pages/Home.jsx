import Header from "./Shared/Header";
import Navbar from "./Shared/Navbar";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-2xl ">This is home</h2>
        </div>
    );
};

export default Home;