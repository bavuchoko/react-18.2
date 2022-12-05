import { Outlet } from 'react-router-dom';
import Header from "../component/layout/Header";
const Layout = () => {
    return (
        <div>
           <Header/>
            <main id="top-container">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;