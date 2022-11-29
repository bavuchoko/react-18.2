import React, {useEffect, useState} from 'react';
import ClickOutside from "react-click-outsider";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearUser, loginUser} from "../../reducer/userSlice";
import {noAuhApi} from "../../api/instance/Instance";

const MainSetting = ({isLogin ,setIsMenu,setIsLogin}) => {

    const [signIn, setSignIn] = useState(isLogin);

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const LogoutFunc = () => {
        dispatch(clearUser(user));
        setSignIn(false)
        setIsLogin(false)
        try {
            noAuhApi.get(
                '/user/logout'
            ).then(res => {
                console.log(res)
                // Loading... 메세지가 통신이 끝난 후 1.5초 이후 없어짐.
                setTimeout(() => 1500);
                // code = 데이터 상태
                const status = res.status;
                if (status === 200) {
                    dispatch(loginUser(res.data));
                } else {
                    alert("아이디 또는 비밀번호를 확인하세요.")
                }
            })
            setIsMenu(false);
        }catch (error){
            console.log(error)
        }

    }

    useEffect(() => {
        setIsLogin(user.isLogin);
    }, [user]);


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
                        <li><Link to="/join"><button>가입</button></Link></li>
                    </>
                }

            </ul>
        </div>
        </ClickOutside>
    )




}
export default MainSetting