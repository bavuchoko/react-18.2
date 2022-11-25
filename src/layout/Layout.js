import { Outlet } from 'react-router-dom';
import Header from "../component/layout/Header";
const Layout = () => {
    return (
        <div>
           <Header/>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;