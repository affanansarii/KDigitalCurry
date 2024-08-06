// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { filterProducts } from '../redux/productSlice';

// const Filter = () => {
//     const [product, setProduct] = useState('');
//     const [material, setMaterial] = useState('');
//     const dispatch = useDispatch();

//     const handleFilter = () => {
//         dispatch(filterProducts({ product, material }));
//     };

//     return (
//         <div className="filter">
//             <h2>Filter Products</h2>
//             <select onChange={(e) => setProduct(e.target.value)}>
//                 <option value="">Select Product</option>
//                 {/* Add more options here */}
//             </select>
//             <select onChange={(e) => setMaterial(e.target.value)}>
//                 <option value="">Select Material</option>
//                 {/* Add more options here */}
//             </select>
//             <button onClick={handleFilter}>Filter</button>
//         </div>
//     );
// };

// export default Filter;
