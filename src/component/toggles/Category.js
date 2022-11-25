import React,{useState} from 'react';
import ClickOutside from "react-click-outsider";
import {Link} from "react-router-dom";

const Category = ({setIsCategory}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [signIn, setSignIn] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }


    return(
        <ClickOutside onClickOutside={() => setIsCategory(false)}>
            <div className="custom-categoryMenu">
                <ul className="custom-categoryMenu-list">
                    <li><Link to="/"><button>메뉴1</button></Link></li>
                    <li><Link to="/"><button>메뉴2</button></Link></li>
                    <li><Link to="/"><button>메뉴3</button></Link></li>
                    <li><Link to="/"><button>메뉴4</button></Link></li>
                    <div className="liner line-color"></div>
                    <li><Link to="/"><button>메뉴5</button></Link></li>
                </ul>
            </div>
        </ClickOutside>
    )





}
export default Category