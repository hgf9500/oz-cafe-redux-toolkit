import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../redux/redux.js';

function Cart({ totalAmount, onOrder }) {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleIncrement = (item) => {
        dispatch(cartActions.incrementItemQuantity({
            id: item.id,
            temperature: item.options.temperature,
            syrup: item.options.syrup,
            size: item.options.size,
        }));
    };

    const handleDecrement = (item) => {
        dispatch(cartActions.decrementItemQuantity({
            id: item.id,
            temperature: item.options.temperature,
            syrup: item.options.syrup,
            size: item.options.size,
        }));
    };

    const handleRemove = (item) => {
        dispatch(cartActions.removeItemFromCart({
            id: item.id,
            temperature: item.options.temperature,
            syrup: item.options.syrup,
            size: item.options.size,
        }));
    };

    const handleClearCart = () => {
        dispatch(cartActions.clearCart());
    };

    return (
        <div className="cart-section">
            <h2>장바구니</h2>
            {cart.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#bdbdbd' }}>장바구니가 비어있습니다.</p>
            ) : (
                <ul className="cart-list">
                    {cart.map((item, index) => (
                        <li key={index} className="cart-item">
                            <div className="cart-item-details">
                                <h4>{item.name}</h4>
                                <p>
                                    {item.options.temperature} / {item.options.syrup} / {item.options.size}
                                </p>
                                <p>{item.price}원</p>
                            </div>
                            <div className="cart-item-controls">
                                <button className="quantity-btn" onClick={() => handleDecrement(item)}>-</button>
                                <span className="cart-item-quantity">{item.quantity}</span>
                                <button className="quantity-btn" onClick={() => handleIncrement(item)}>+</button>
                                <button className="remove-btn" onClick={() => handleRemove(item)}>삭제</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <div className="cart-total">
                <p>총 금액:</p>
                <span>{totalAmount}원</span>
            </div>
            <div className="cart-actions">
                {cart.length > 0 && (
                    <button className="clear-cart-btn" onClick={handleClearCart}>
                        장바구니 비우기
                    </button>
                )}
                <button className="order-btn" onClick={onOrder}>
                    주문하기
                </button>
            </div>
        </div>
    );
}

export default Cart;