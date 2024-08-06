import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProductDetails, setFilter } from '../redux/productSlice';
import QuickEditForm from './QuickEditForm';
import '../styles/ProductList.css';

const ProductList = () => {
    const products = useSelector(state => state.products.products);
    const filter = useSelector(state => state.products.filter);
    const dispatch = useDispatch();
    const [editProductId, setEditProductId] = useState(null);

    const handleQuickEdit = (id, details) => {
        dispatch(updateProductDetails({ id, details }));
        setEditProductId(null);
    };

    const filteredProducts = products.filter(product => {
        return (
            (!filter.product || product.product.includes(filter.product)) &&
            (!filter.material || product.material.includes(filter.material))
        );
    });

    return (
        <div>
            <h1>Product List</h1>
            <div className='filterProducts'>
                <label>
                    Filter by Product:
                    <input
                        type="text"
                        value={filter.product}
                        onChange={e => dispatch(setFilter({ product: e.target.value }))}
                    />
                </label>
                <label>
                    Filter by Material:
                    <input
                        type="text"
                        value={filter.material}
                        onChange={e => dispatch(setFilter({ material: e.target.value }))}
                    />
                </label>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Material</th>
                        <th>Grade</th>
                        <th>Details</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map(product => (
                        <tr key={product.id}>
                            <td>{product.product}</td>
                            <td>{product.material}</td>
                            <td>{product.grade}</td>
                            <td>
                                {product.details.shape || product.details.length ? (
                                    <div>
                                        <p>Shape: {product.details.shape}</p>
                                        <p>Length: {product.details.length}</p>
                                    </div>
                                ) : (
                                    'N/A'
                                )}
                            </td>
                            <td>
                                <button onClick={() => setEditProductId(product.id)}>
                                    Quick Edit
                                </button>
                            </td>
                            {editProductId === product.id && (
                                <QuickEditForm
                                    product={product}
                                    onSave={handleQuickEdit}
                                />
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
