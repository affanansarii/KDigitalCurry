import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
        // Initial dummy data
        { id: 1, product: 'Pipe', material: 'Stainless Steel', grade: '304', details: {} },
        { id: 2, product: 'Sheet', material: 'Aluminium', grade: 'F12', details: {} },
    ],
    filter: {
        product: '',
        material: '',
    },
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct(state, action) {
            state.products.push(action.payload);
        },
        updateProductDetails(state, action) {
            const { id, details } = action.payload;
            const product = state.products.find(prod => prod.id === id);
            if (product) {
                product.details = details;
            }
        },
        setFilter(state, action) {
            state.filter = { ...state.filter, ...action.payload };
        },
    },
});

export const { addProduct, updateProductDetails, setFilter } = productSlice.actions;
export default productSlice.reducer;
