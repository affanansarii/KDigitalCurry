// src/features/products/productsSelectors.js
import { createSelector } from '@reduxjs/toolkit';

const selectProductsState = state => state.products;

export const selectFilteredProducts = createSelector(
    selectProductsState,
    ({ products, filter }) => {
        return products.filter(product =>
            (filter.product ? product.name.includes(filter.product) : true) &&
            (filter.material ? product.material.includes(filter.material) : true)
        );
    }
);
