import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import pepe from "../../assets/images/profile/pepe.jpg";
import anonymous from "../../assets/images/profile/anonymous-logo.jpg";
import GitHub from "../../assets/images/github.png";
import MainSetting from "../toggles/MainSetting";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleRight, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";
import UnderMenu from "../toggles/UnderMenu";


const Header =(props) => {

    const user = useSelector(state => state.user)

    const [isMenu, setIsMenu] = useState(false);
    const [isCategory, setIsCategory] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [isInput, setIsInput] = useState(false);
    const [list, setList] = useState(false);
    const [subShow, setSubShow] = useState(false);
    const [topMenu, setTopMenu] = useState("");

    const tm =["API DOCS", "JAVA","SPRING","DATABASE"]
    const arr =["COLLECTION","JAVA","THREAD"];
    const arr2 =["C12e1awdaw","12awd","THREAD", "aseiojawd","seghdgr","awghtrht","123fsb","adasdfe"];

    const mouseOverMenu = (tms, idx) => {
            setTopMenu(idx.index)
            setSubShow(true)
            setList(arr2)
    };


    const mouseOutMenu = () => {
        setSubShow(false)
    };

    const toggleMain = () => {
        setIsMenu(!isMenu);
    };

    const toggleCategory = () => {
        setIsCategory(!isCategory);
    };
    const toggleSearchInput = () => {
        setIsInput(!isInput);
        const inpuClassName = "search-box border-solid-r4-1px padding-5px width-31px height-31px coustom-search-inputOut relative";

    };


    useEffect(() => {
        setIsLogin(user.isLogin);
    }, [user]);



    return (
        <header className="header">

            <nav id="header" className="width-100per fixed zindex-100 height-70px flex" >
                {
                    isMenu &&
                        <MainSetting isLogin={isLogin} setIsMenu={setIsMenu} setIsLogin={setIsLogin}/>
                }

                {/*좌측 프로필, 로그인,설정 패널*/}
                <div className="float-left width-240px  padding-15-0-0-60 flex">
                        {
                            isLogin ?
                        <>
                            <Link className="text-deco-none color-black" to="/" >
                                <img className="width-40px height-40px border-radius-50per object-fit-none border-solid-1px" src={pepe}/>
                            </Link>
                            <div className="margin-top-5px margin-left-10px max-width-148px hover-pointer inline-block"  onClick={toggleMain}>
                                <button className="bold font-size-12px font-color-70706f family-noto-sans">老人과 JAVA</button>
                                <button className="font-size-11px font-color-ababab family-noto-sans weigh-400 margin-top-5px">mood</button>
                            </div>
                        </>
                        :
                        <>
                            <Link className="text-deco-none color-black" to="/" >
                                <img className="width-50px height-50px border-radius-50per object-fit-none border-solid-1px" src={anonymous}/>
                            </Link>
                            <div className="margin-top-5px margin-left-10px max-width-148px hover-pointer inline-block"  onClick={toggleMain}>
                                <button className="bold font-size-12px font-color-70706f family-noto-sans">ANONYMOUS</button>
                                <button className="font-size-11px font-color-ababab family-noto-sans weigh-400 margin-top-5px">mood</button>
                            </div>
                        </>
                    }
                    <div className="width-20px margin-left-10px margin-top-3px font-size-16px " onClick={toggleMain}>
                        {
                            !isMenu ?
                                <FontAwesomeIcon icon={faAngleRight}  className="fas-play font-color-70706f "/>
                                :
                                <FontAwesomeIcon icon={faAngleDown}  className="fas-play font-color-70706f "/>
                        }

                    </div>
                </div>

                {/*중앙 정보패널*/}
                <div style={{width : "calc(100%  - 540px)", textAlign:'left'}}>
                    <ul style={{display:"flex"}} className="main-nav-list">
                        {tm.map((tms, index) => (
                            <li className="relative"  onMouseOver={e => mouseOverMenu({tms},{index})}
                                // onMouseOut={e=>mouseOutMenu(e)}
                            ><Link to="/"><button >{tms}</button> </Link>
                                    {(subShow && (index==topMenu)) && <UnderMenu list={list} subShow={subShow}/>}
                            </li>
                        ))}
                    </ul>
                </div>
                {/*<div className="width-100per back-color-white"></div>*/}






                {/*우측 메뉴, 카테고리 영역*/}
                <div className="absolute right-30px width-220px height-80px padding-top-20px flex">
                    <img className="width-35px height-35px absolute top-23px left-minus-60px hover-pointer" onClick={() => window.open('https://github.com/bavuchoko', '_blank')} src={GitHub}/>


                    <button  onClick={toggleSearchInput}>
                        <div className="search-box border-solid-r4-1px padding-5px width-31px height-31px coustom-search-inputOut relative" >
                                <FontAwesomeIcon icon={faMagnifyingGlass}  className="font-size-12px font-color-70706f magnifier" />
                        </div>
                    </button>

                         {/*<ClickOutside onClickOutside={() => setIsInput(false)}>*/}
                         {/*    <div className="search-box border-solid-r4-1px padding-5px  width-31px height-31px coustom-search-inputIn">*/}
                         {/*        <button>*/}
                         {/*            <input className="custom-search-input" />*/}
                         {/*            <FontAwesomeIcon icon={faMagnifyingGlass}  className="font-size-12px font-color-70706f magnifier" />*/}
                         {/*        </button>*/}
                         {/*    </div>*/}
                         {/*</ClickOutside>*/}

                </div>
            </nav>

            <div className="margin-bottom-70px"></div>


        </header>
    )
}
export default Header;