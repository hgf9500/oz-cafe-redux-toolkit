import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';
import Cart from './components/Cart.jsx';
import OrderModal from './components/OrderModal.jsx';
import './index.css'; // 전역 CSS 임포트

function App() {
    const cart = useSelector((state) => state.cart);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    const totalAmount = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const openOrderModalHandler = () => {
        setIsOrderModalOpen(true);
    };

    const closeOrderModalHandler = () => {
        setIsOrderModalOpen(false);
    };

    return (
        <div className="App">
            <Header />

            <main className="container">
                <section className="menu-section">
                    <Menu />
                </section>

                <section className="cart-section">
                    <Cart totalAmount={totalAmount} onOrder={openOrderModalHandler} />
                </section>
            </main>

            {isOrderModalOpen && <OrderModal onClose={closeOrderModalHandler} totalAmount={totalAmount} />}
        </div>
    );
}

export default App;