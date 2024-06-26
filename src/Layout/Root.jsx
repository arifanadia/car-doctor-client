import { Outlet } from "react-router-dom";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";



const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Header></Header>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;