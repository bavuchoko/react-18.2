import axios from 'axios'


// const BASE_URL = 'https://pjs.or.kr:8080';
const BASE_URL = 'http://localhost:8080/api';


// 단순 get요청으로 인증값이 필요없는 경우
const axiosApi = (url, options) => {
    const instance = axios.create({ baseURL: url, ...options })
    return instance
}
// post, delete등 api요청 시 인증값이 필요한 경우
const axiosAuthApi  = (url, options) => {
    const token = '토큰 값'
    const instance = axios.create({
        baseURL: url,
        headers: { Authorization: 'Bearer ' + token },
        ...options,
    })
    return instance
}

let isTokenRefreshing = false;
let refreshSubscribers = [];

const onTokenRefreshed = (accessToken) => {
    refreshSubscribers.map((callback) => callback(accessToken));
    refreshSubscribers = [];
};

const addRefreshSubscriber = (callback) => {
    refreshSubscribers.push(callback);
};

//
// //응답 인터셉터
// instance.interceptors.response.use(
//     (response) => {
//
//         return response;
//     },
//     async (error) => {
//         const {
//             config,
//             response: { status },
//         } = error;
//         const originalRequest = config;
//         if (status === 401) {
//             if (!isTokenRefreshing) {
//                 // token refresh 요청
//                 const response = await axios.get(
//                     '/api/user/refreshtoken', // token refresh api
//                 );
//                 // 기존 스토리지 비우고 새로운 토큰 저장
//                 storage.remove("token");
//                 storage.remove("username");
//                 storage.remove("loggedInfo");
//                 storage.set("token", response.data["token"])
//                 storage.set("username", response.data["username"])
//                 storage.set('loggedInfo', response.data);
//                 console.log(response.data)
//                 // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
//                 isTokenRefreshing = false;
//                 onTokenRefreshed(response.data["token"]);
//             }
//             // token이 재발급 되는 동안의 요청은 refreshSubscribers에 저장
//             const retryOriginalRequest = new Promise((resolve) => {
//                 addRefreshSubscriber((accessToken) => {
//                     originalRequest.headers.Authorization = "Bearer " + accessToken;
//                     resolve(axios(originalRequest));
//                 });
//             });
//             return retryOriginalRequest;
//         }
//         return Promise.reject(error);
//     }
// );





//권한이 필요한 api 호출 인터셉터
export const noAuhApi = axiosApi(BASE_URL)
//권한이 필요없는 api 호출 인터셉터
export const needAuthApi = axiosAuthApi (BASE_URL)
