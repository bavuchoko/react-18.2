import React, {useState} from "react";

function Login(props) {

    const[Username, setUsername] = useState("" );

    const[Password, setPassword] = useState("" );

    const onUsernameHandler = (e) => {
        setUsername(e.currentTarget.value);
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(Username);
        console.log(Password);
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>username</label>
                <input type="text" value={Username} onChange={onUsernameHandler} />

                <label>password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <button type="submit">login</button>
            </form>

        </div>
    )


}
export default Login