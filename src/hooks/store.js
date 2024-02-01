import { configureStore } from "@reduxjs/toolkit";

import userSlice from "../features/user/userSlice";
import productSlice from "../features/products/productSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        products: productSlice,
    },
});

export default store;
