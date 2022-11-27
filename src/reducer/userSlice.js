import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "",
        nickname :"",
        accessToken: "",
        isLoading: false, // optional
        isLogin: null,
    },
    reducers: {
        // login 성공 시
        loginUser: (state, action) => {
            console.log(action.payload.username)
            console.log(state)
            // name, id에 API 값 받아오기
            state.username = action.payload.username;
            state.nickname = action.payload.nickname;
            state.accessToken = action.payload.accessToken;
            state.isLogin = true;
            // state 변화를 알림
            return state;
        },
        // login 실패 시
        clearUser: (state) => {
            // name, id 값을 비워줌.
            state.username = "";
            state.nickname = "";
            state.accessToken = "";
            state.isLogin = false;
            // state 변화를 알림
            return state;
        },
    },
});

export const { loginUser, clearUser } = userSlice.actions;
export default userSlice.reducer;