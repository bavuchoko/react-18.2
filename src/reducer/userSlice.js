import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username : '',
    nickname : '',
    accessToken : '',
    isLogin : null
};

const userSlice = createSlice ({
    name : 'user',
    initialState,
    reducers : {
        //로그인 성공시
        loginUser: (state, action) => {
            state.username = action.payload.username;
            state.nickname = action.payload.nickname;
            state.accessToken = action.payload.token;
            state.isLogin = action.payload.success;
            return state;
        },
        //로그인 실패시
        clearUser: (state) => {
            // name, id 값을 비워줌.
            state.username = "";
            state.nickname = "";
            state.accessToken = "";
            state.isLogin = false;
            // state 변화를 알림
            return state;
        },
    }
});

export const { loginUser,clearUser } = userSlice.actions;

export const selectUsername = (state) => state.user.username;
export const selectNickname = (state) => state.user.nickname;
export const selectAccessToken = (state) => state.user.accessToken;
export const selectIsLogin = (state) => state.user.isLogin;

export  default userSlice;