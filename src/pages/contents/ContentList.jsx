import {Link, Outlet} from 'react-router-dom';

const contentList = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/contents/1">게시글 1</Link>
                </li>
                <li>
                    <Link to="/contents/2">게시글 2</Link>
                </li>
                <li>
                    <Link to="/contents/3">게시글 3</Link>
                </li>
            </ul>
        </div>
    );
};

export default contentList;