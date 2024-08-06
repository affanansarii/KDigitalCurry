import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import AddProductModal from './components/AddProductModal';
import './styles/App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <h1>Directory Listing</h1>
          <button onClick={() => setIsModalOpen(true)}>Add Product</button>
        </header>
        <ProductList />
        {isModalOpen && <AddProductModal onClose={() => setIsModalOpen(false)} />}
      </div>
    </Provider>
  );
};

export default App;
