import React, { useState } from 'react';
import {Link} from "react-router-dom";
import pepe from "../../assets/images/profile/pepe.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faAngleRight, faAngleDown} from "@fortawesome/free-solid-svg-icons";

const Header =(props) => {

    const [isMenu, setIsMenu] = useState(false);

    const toggleMenu = () => {
        setIsMenu(!isMenu);
    };

    return (
        <header className="header">
            <nav id="#header" className="width-100per back-color-white fixed zindex-100 height-80px flex" style={{borderBottom: '1px solid #f3f3f3'}}>
                {/*좌측 프로필, 로그인,설정 패널*/}
                <div className="float-left width-240px  padding-15-0-0-30 flex">
                    <Link className="text-deco-none color-black" to="/" >
                        <img className="width-50px height-50px border-radius-50per object-fit-none boer-solid-1px" src={pepe}/>
                    </Link>
                    <div className="margin-top-5px margin-left-10px max-width-148px hover-pointer inline-block"  onClick={toggleMenu}>
                        <button className="bold font-size-14px font-color-70706f family-noto-sans">老人과 JAVA</button>
                        <button className="font-size-12px font-color-ababab family-noto-sans weigh">mood</button>
                    </div>
                    <div className="width-20px margin-left-10px margin-top-5px font-size-16px " onClick={toggleMenu}>
                        {
                            !isMenu ?
                                <FontAwesomeIcon icon={faAngleRight}  className="fas-play font-color-70706f"/>
                                :
                                <FontAwesomeIcon icon={faAngleDown}  className="fas-play font-color-70706f"/>
                        }

                    </div>
                </div>

                {/*중앙 정보패널*/}
                <div style={{width : "calc(100%  - 540px)", textAlign:'center'}}>
                    <p>sefsef</p>
                </div>


                {/*우측 메뉴, 카테고리 영역*/}
                <div className="absolute right-30px width-240px height-80px">
                </div>
            </nav>
            <div className="margin-bottom-80px"></div>
        </header>
    )
}
export default Header;