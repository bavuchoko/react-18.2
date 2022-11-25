import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>

            <h1>홈</h1>
            <p>가장 먼저 보여지는 페이지입니다.</p>
            <ul>
                <li>
                    <Link to="/test">소개</Link>
                </li>
                <li>
                    <Link to="/contents">게시글 리스트</Link>
                </li>
                <li>
                    <Link to="/user">로그인</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;