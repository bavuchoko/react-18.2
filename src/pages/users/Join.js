import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { loginUser } from "../../reducer/userSlice.js";
import axios from "axios";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useNavigate  } from 'react-router-dom';
function JoinComponent() {
    const dispatch = useDispatch();
    let history = useNavigate ();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");
    const [errMng, setErrMng] = useState("");
    const [passErrMng, setPassErrMng] = useState("");
    const [pass2ErrMng, setPass2ErrMng] = useState("");
    const [nickErrMng, setNickErrMng] = useState("");


    const JoinFunc = (e) => {
        e.preventDefault();
        // Loading... 메세지 출력
        setMsg("Loading...");

        // API
        let body = {
            username,
            password
        }
        axios.post("apit", body)
            .then(res => {
                console.log(body)
                // 2순위 통신이 끝나야 작동. 통신 이후 클릭이 되도록.
                setLoading(false);
                // Loading... 메세지가 통신이 끝난 후 1.5초 이후 없어짐.
                setTimeout(() => setMsg(""), 1500);
                // code = 데이터 상태
                const code = res.data.code;
                if (code === 200) {
                    dispatch(loginUser(res.data.userInfo));
                } else {
                    alert("아이디 또는 비밀번호를 확인하세요.")
                }
            })
        // 1순위 로그인 버튼을 누르면 클릭이 안되도록.
        setLoading(true);
    }

    return (
        <>
            <div className="custom-loginfrm">
                <p className="custom-login-title">등록</p>
                <form
                    onSubmit={JoinFunc}
                    className="login-wrap"
                >
                    <input
                        type="text"
                        placeholder='아이디@email.com'
                        className='custom-login-input'
                        onChange={e => setUsername(e.target.value)}
                    />
                    <span className="custom-loginfrm-errMng">{errMng}</span>

                    <input
                        type="text"
                        placeholder='닉네임'
                        className='custom-login-input'
                        onChange={e => setUsername(e.target.value)}
                    />
                    <span className="custom-loginfrm-errMng">{nickErrMng}</span>

                    <input
                        type="password"
                        placeholder='비밀번호'
                        className='custom-login-input'
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span className="custom-loginfrm-errMng">{passErrMng}</span>
                    <input
                        type="password"
                        placeholder='비밀번호 확인'
                        className='custom-login-input'
                        onChange={e => setPassword2(e.target.value)}
                    />
                    <span className="custom-loginfrm-errMng">{pass2ErrMng}</span>
                    <br />
                    <button
                        disabled={loading}
                        type="submit"
                        className='custom-login-btn'
                    >
                        JOIN
                    </button>
                    <button  className="custom-loginfrm-arrowbtn" onClick={ () => {
                        history(-1);
                    } } >
                    <FontAwesomeIcon icon={faArrowLeft}  className="custom-loginfrm-arrow"/>
                        뒤로가기
                    </button>
                    <div
                        className='custom-msg'
                    >
                        {msg}
                    </div>
                </form>
            </div>
        </>
    )
}

export default JoinComponent