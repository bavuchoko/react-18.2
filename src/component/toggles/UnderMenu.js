import React,{useState} from 'react';
import {Link} from "react-router-dom";
import { useEffect } from 'react';

const UnderMenu = ({list}) => {

    useEffect(() => {
    }, [list]);


    const [menus, setMenus] = useState(list);

    return(
        <div className="undermenu-div">
            <div className="undermenu-inner-div">
                <table>
                    <tbody>
                        <tr>
                            <td><Link to="/"><button  className="manu-name">COLLECTION</button></Link></td>
                            <td><Link to="/"><button className="manu-name">API</button></Link></td>
                            <td><Link to="/"><button className="manu-name">THREAD</button></Link></td>
                            <td><Link to="/"><button className="manu-name">COLLECTION</button></Link></td>
                            <td><Link to="/"><button className="manu-name">API</button></Link></td>
                        </tr>
                        <tr>
                            <td><Link to="/"><button className="manu-name">COLLECTION</button></Link></td>
                            <td><Link to="/"><button className="manu-name">API</button></Link></td>
                            <td><Link to="/"><button className="manu-name">THREAD</button></Link></td>
                            <td><Link to="/"><button className="manu-name">COLLECTION</button></Link></td>
                            <td><Link to="/"><button className="manu-name">API</button></Link></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )





}
export default UnderMenu