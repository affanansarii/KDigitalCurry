import React, { useState } from 'react';
import '../styles/QuickEditForm.css';

const QuickEditForm = ({ product, onSave }) => {
    const [details, setDetails] = useState(product.details);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <h3>Quick Edit {product.product}</h3>
            <label>
                Shape:
                <input
                    type="text"
                    name="shape"
                    value={details.shape || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                Length:
                <input
                    type="text"
                    name="length"
                    value={details.length || ''}
                    onChange={handleChange}
                />
            </label>
            <button onClick={() => onSave(product.id, details)}>
                Save
            </button>
        </div>
    );
};

export default QuickEditForm;
