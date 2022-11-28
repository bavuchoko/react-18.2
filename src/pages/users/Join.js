import React, {useEffect, useState} from "react"
import {useDispatch} from "react-redux";
import {loginUser} from "../../reducer/userSlice.js";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import {noAuhApi} from "../../api/instance/Instance";
import Button from "../../component/Button"
import * as fnc from "../../component/validTester/Test"
import {checkPasswordSame} from "../../component/validTester/Test";

function JoinComponent() {
    const dispatch = useDispatch();
    let history = useNavigate ();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [password2, setPassword2] = useState("");

    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");
    const [errMng, setErrMng] = useState("");
    const [passErrMng, setPassErrMng] = useState("");
    const [pass2ErrMng, setPass2ErrMng] = useState("");
    const [nickErrMng, setNickErrMng] = useState("");

    const [isGo, setIsGo] = useState(false);
    const [usernameValid, setUsernameValid] = useState(false);
    const [passVailid, setPassVailid] = useState(false);
    const [passSameVailid, setPassSameVailid] = useState(false);

    function mayISubmit() {
        if (usernameValid && passVailid && passSameVailid) {
            setIsGo(true);
        }else{
            setIsGo(false);
        }

    }


    const validateUsername = (value) => {
        setUsernameValid(false);
        if(fnc.checkEmail(value)){
            setErrMng("")
            setUsername(value)
            setUsernameValid(true);
        }else {
            setUsernameValid(false);
            setErrMng("아이디는 이메일 형식이어야 합니다.")
        }
    }

    const validatePassword = (value) => {
        setPassSameVailid(false);
        if(fnc.checkPassword(value)){
            setPassword(value);
            setPassErrMng("")
            setPassVailid(true)
        }else{
            setPassVailid(false);
            setPassErrMng("비밀번호는 공백없이 4글자 이상이어야 합니다.")
        }
    }
    useEffect(()=>{
        mayISubmit();
    },[usernameValid,passVailid,passSameVailid])


    const validateSamePassword = (value) => {
        var result =fnc.checkPasswordSame(password, value);
        if(result){
            setPassword2(value)
            setPassSameVailid(true)
            setPass2ErrMng("")
        }else{
            setPassSameVailid(false);
            setPass2ErrMng("비밀번호를 확인하세요")
        }
    }

    const JoinFunc = (e) => {
        e.preventDefault();
        // Loading... 메세지 출력
        setMsg("Loading...");

        // API
        let body = {
            username,
            password,
            nickname,
        }
        setLoading(true);
        try {
            noAuhApi.post(
                '/user/join',body
            ).then(res => {
                console.log(res)
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
                <p className="custom-login-title">등록</p>
                <form
                    onSubmit={JoinFunc}
                    className="login-wrap"
                >
                    <input
                        type="text"
                        placeholder='아이디@email.com'
                        className='custom-login-input'
                        onChange={e => validateUsername(e.target.value)}
                    />
                    <span className="custom-loginfrm-errMng">{errMng}</span>

                    <input
                        type="text"
                        placeholder='닉네임'
                        className='custom-login-input'
                        onChange={e => setNickname(e.target.value)}
                    />
                    <span className="custom-loginfrm-errMng">{nickErrMng}</span>

                    <input
                        type="password"
                        placeholder='비밀번호'
                        className='custom-login-input'
                        onChange={e => validatePassword(e.target.value)}
                    />
                    <span className="custom-loginfrm-errMng custom-loginfrm-errMng-pass">{passErrMng}</span>
                    <input
                        type="password"
                        placeholder='비밀번호 확인'
                        className='custom-login-input'
                        onChange={e => validateSamePassword(e.target.value)}
                    />
                    <span className="custom-loginfrm-errMng custom-loginfrm-errMng-pass2">{pass2ErrMng}</span>
                    <br />
                    <Button
                        disabled={!isGo}
                        type="submit"
                        className='custom-login-btn'
                    >
                        JOIN
                    </Button>
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