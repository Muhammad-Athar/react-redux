import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: {},
};

export const fetchProductsFromAPI = createAsyncThunk(
    "products/fetchProducts",
    async (id) => {
        try {
            const response = await fetch(`https://dummyjson.com/quotes/${id}`);
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            const data = await response.json();
            // console.log(data);
            return data;
        } catch (error) {
            throw new Error("Error fetching products: " + error.message);
        }
    }
);

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsFromAPI.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProductsFromAPI.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchProductsFromAPI.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export default productSlice.reducer;


// post
// get 
// pagination
// invalidate tags 
// update qury data
