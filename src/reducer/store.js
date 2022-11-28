import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import userSlice from "./userSlice";

const reducers = combineReducers({
    user : userSlice.reducer,
});

const persisConfig = {
    key : 'root',
    storage,
    whitelist: ['user']
}

const persistedReducer = persistReducer(persisConfig, reducers);

const store = configureStore({
    reducer : persistedReducer,
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;

// export default configureStore({
//     reducer: {
//         user: userSlice,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: false,
//         }),
// });