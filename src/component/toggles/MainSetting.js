import React, {useEffect, useRef, useState} from 'react';
import ClickOutside from "react-click-outsider";


const MainSetting = ({isLogin ,setIsMenu}) => {

    const [signIn, setSignIn] = useState(isLogin);



    return(
        <ClickOutside onClickOutside={() => setIsMenu(false)}>
        <div className="custom-mainSetting">
            <ul className="custom-mainSetting-list">
                {
                    signIn?
                    <>
                        <li><button>글쓰기</button></li>
                        <li><button>테스트1</button></li>
                        <li><button>테스트2</button></li>
                        <li><button>내정보 보기</button></li>
                        <div className="liner"></div>
                        <li><button>로그아웃</button></li>

                    </>
                    :
                    <>
                        <li><button>문의</button></li>
                        <div className="liner"></div>
                        <li><button>로그인</button></li>
                        <li><button>등록하기</button></li>
                    </>
                }

            </ul>
        </div>
        </ClickOutside>
    )




}
export default MainSetting