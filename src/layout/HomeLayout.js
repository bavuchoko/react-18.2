import { Outlet } from 'react-router-dom';
import Header from "../component/layout/Header";
const Layout = () => {
    return (
        <div>
           <Header/>

                <Outlet />

        </div>
    );
};

export default Layout;