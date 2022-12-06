import React,{useState} from 'react';
import {Link} from "react-router-dom";
import { useEffect,useLayoutEffect } from 'react';

const UnderMenu = ({list}) => {
    useLayoutEffect(() => {
            setMenus(list)
            setLength(list.length)

    }, [list]);



    const [isShow, setIsShow] =useState(false)
    const [menus, setMenus] = useState(list);
    const [length, setLength] = useState(0);
    return(<>
        <div className="undermenu-div boder-b-rgb  absolute">
            <div className="width-100per back-color-white"></div>
            <div className="undermenu-inner-div">
                <table>
                    <tbody>
                    {length < 5 &&
                        <tr>
                            {menus.map((list, index) => (
                                <td className="td-submenu" className="td-submenu" key={index}><Link to="/">
                                    <button className="manu-name">{list}</button>
                                </Link></td>
                            ))}
                        </tr>
                    }
                    {length >= 5 &&
                        <>
                            <tr>
                                {menus.map((list, index) => (
                                    index < 5 ?
                                        <td className="td-submenu" key={index}><Link to="/">
                                            <button className="manu-name">{list}</button>
                                        </Link></td>
                                        : <></>
                                ))}
                            </tr>
                            <tr>
                                {menus.map((list, index) => (
                                    index >= 5 ?
                                        <td className="td-submenu" key={index}><Link to="/">
                                            <button className="manu-name">{list}</button>
                                        </Link></td>
                                        : <></>
                                ))}
                            </tr>
                        </>
                    }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )





}
export default UnderMenu