import React, {useEffect, useRef, useState} from 'react';
import ClickOutside from "react-click-outsider";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearUser} from "../../reducer/userSlice";

const MainSetting = ({isLogin ,setIsMenu}) => {

    const [signIn, setSignIn] = useState(isLogin);

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const LogoutFunc = () => {
        dispatch(clearUser(user));
        setSignIn(false)
        alert(signIn)
    }

    return(
        <ClickOutside onClickOutside={() => setIsMenu(false)}>
        <div className="custom-mainSetting">
            <ul className="custom-mainSetting-list">
                {
                    signIn?
                    <>
                        <li><Link to="/"><button>글쓰기</button></Link></li>
                        <li><Link to="/"><button>테스트1</button></Link></li>
                        <li><Link to="/"><button>테스트2</button></Link></li>
                        <li><Link to="/"><button>내정보 보기</button></Link></li>
                        <div className="liner"></div>
                        <li onClick={() => LogoutFunc()}><Link to="#"><button>로그아웃</button></Link></li>

                    </>
                    :
                    <>
                        <li><Link to="/"><button>문의</button></Link></li>
                        <div className="liner"></div>
                        <li><Link to="/user"><button style={{fontSize:'12'}}>로그인</button></Link></li>
                        <li><Link to="/join"><button>등록하기</button></Link></li>
                    </>
                }

            </ul>
        </div>
        </ClickOutside>
    )




}
export default MainSetting