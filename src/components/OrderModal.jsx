import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/redux.js';

function OrderModal({ onClose, totalAmount }) {
    const dispatch = useDispatch();

    const handleConfirmOrder = () => {
        alert(`총 ${totalAmount}원의 주문이 완료되었습니다!`); // 실제 앱에서는 더 멋진 UI로 대체
        dispatch(cartActions.clearCart());
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close-button" onClick={onClose}>
                    &times;
                </button>
                <h2>주문 확인</h2>
                <p>총 주문 금액: <strong>{totalAmount}원</strong></p>
                <p>주문을 확정하시겠습니까?</p>
                <div className="modal-actions">
                    <button className="cancel-btn" onClick={onClose}>
                        취소
                    </button>
                    <button className="confirm-btn" onClick={handleConfirmOrder}>
                        주문 확정
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OrderModal;