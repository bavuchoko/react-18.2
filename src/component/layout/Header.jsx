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
            <nav id="#header" className="width-100per back-color-white fixed zindex-100 height-80px flex">
                <div className="float-left width-240px  padding-15-0-0-30 flex">
                    <Link className="text-deco-none color-black" to="/" >
                        <img className="width-50px height-50px border-radius-50per object-fit-none boer-solid-1px" src={pepe}/>
                    </Link>
                    <div className="margin-top-5px margin-left-15px max-width-148px hover-pointer inline-block"  onClick={toggleMenu}>
                        <button className="bold font-size-16px font-color-646464 family-noto-sans">老人과 JAVA</button>
                        <button className="font-size-13px font-color-7a7a7a family-noto-sans">mood</button>
                    </div>
                    <div className="width-20px margin-left-10px margin-top-5px font-size-16px " onClick={toggleMenu}>
                        {
                            !isMenu ?
                                <FontAwesomeIcon icon={faAngleRight}  className="fas-play"/>
                                :
                                <FontAwesomeIcon icon={faAngleDown}  className="fas-play"/>
                        }

                    </div>
                </div>

                <div className="fixed right-30px margin-top-15px">
                </div>
            </nav>
            <div className="margin-bottom-80px"></div>
        </header>
    )
}
export default Header;