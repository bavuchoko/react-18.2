import { Outlet } from 'react-router-dom';
import Header from "../component/layout/Header";
import {useState} from "react";
import java from "../assets/images/java.png"

const Layout = () => {

    const [title, setTitle] = useState("awd");
    return (
        <div>
           <Header/>
            <div className="introduce">
                <img src={java}/>
                <h2>{title}</h2>
            </div>
            <main id="top-container">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;