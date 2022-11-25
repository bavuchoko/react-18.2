import React,{useState} from 'react';
import ClickOutside from "react-click-outsider";

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
                    <li><button>메뉴1</button></li>
                    <li><button>메뉴2</button></li>
                    <li><button>메뉴3</button></li>
                    <li><button>메뉴4</button></li>
                    <div className="liner line-color"></div>
                    <li><button>메뉴5</button></li>
                </ul>
            </div>
        </ClickOutside>
    )





}
export default Category