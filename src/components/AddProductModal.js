import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productSlice';
import '../styles/AddProductModal.css';

const AddProductModal = ({ onClose }) => {
    const [product, setProduct] = useState('');
    const [material, setMaterial] = useState('');
    const [grade, setGrade] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addProduct({ id: Date.now(), product, material, grade, details: {} }));
        onClose();
    };

    return (
        <div className="modal">
            <h2>Add Product</h2>
            <label>
                Product:
                <input
                    type="text"
                    value={product}
                    onChange={e => setProduct(e.target.value)}
                />
            </label>
            <label>
                Material:
                <input
                    type="text"
                    value={material}
                    onChange={e => setMaterial(e.target.value)}
                />
            </label>
            <label>
                Grade:
                <input
                    type="text"
                    value={grade}
                    onChange={e => setGrade(e.target.value)}
                />
            </label>
            <button onClick={handleSubmit}>Add</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    );
};

export default AddProductModal;
