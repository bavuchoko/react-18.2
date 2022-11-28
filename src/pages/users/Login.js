import React, {useState} from "react"
import {useDispatch} from "react-redux";
import {loginUser} from "../../reducer/userSlice.js";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {noAuhApi} from "../../api/instance/Instance";
import {useNavigate} from "react-router-dom";

function LoginComponent() {
    const dispatch = useDispatch();
    let history = useNavigate ();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");
    const [errMng, setErrMng] = useState("");


    const LoginFunc = (e) => {
        e.preventDefault();
        // Loading... 메세지 출력
        setMsg("Loading...");

        // API
        let body = {
            username,
            password
        }
        setLoading(true);
        try {
            noAuhApi.post(
                '/user/authenticate',body
            ).then(res => {
                // 2순위 통신이 끝나야 작동. 통신 이후 클릭이 되도록.
                setLoading(false);
                // Loading... 메세지가 통신이 끝난 후 1.5초 이후 없어짐.
                setTimeout(() => setMsg(""), 1500);
                // code = 데이터 상태
                const status = res.status;
                if (status === 200) {
                    dispatch(loginUser(res.data));
                    history(-1)
                } else {
                    alert("아이디 또는 비밀번호를 확인하세요.")
                }
            })
        }catch (error){
            console.log(error)
        }

    }


    return (
        <>
            <div className="custom-loginfrm">
                <p className="custom-login-title">로그인</p>
                <form
                    onSubmit={LoginFunc}
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
                        type="password"
                        placeholder='비밀번호'
                        className='custom-login-input'
                        onChange={e => setPassword(e.target.value)}
                    />
                    <br />
                    <button
                        disabled={loading}
                        type="submit"
                        className='custom-login-btn'
                    >
                        LOGIN
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

export default LoginComponent