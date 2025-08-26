import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/redux.js';
// ⭐️ 경로 수정: src/components에서 src/assets로 이동 (한 단계 위로, 그리고 assets 폴더로)
import data from '../assets/data.js';

function Item({ item }) {
    const dispatch = useDispatch();

    const [temperature, setTemperature] = useState(data.options.온도[0]);
    const [syrup, setSyrup] = useState(data.options.진하기[0]);
    const [size, setSize] = useState(data.options.사이즈[0]);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        dispatch(cartActions.addItemToCart({
            item: item,
            quantity: quantity,
            options: {
                temperature,
                syrup,
                size,
            },
        }));
        setQuantity(1);
    };

    return (
        <div className="menu-item">
            <div>
                <h3>{item.name}</h3>
                <p>{item.price}원</p>
                <div className="options-row">
                    <div className="option-group">
                        <label>온도:</label>
                        <select
                            value={temperature}
                            onChange={(e) => setTemperature(e.target.value)}
                        >
                            {data.options.온도.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    <div className="option-group">
                        <label>진하기:</label>
                        <select
                            value={syrup}
                            onChange={(e) => setSyrup(e.target.value)}
                        >
                            {data.options.진하기.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    <div className="option-group">
                        <label>사이즈:</label>
                        <select
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                        >
                            {data.options.사이즈.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                     <div className="option-group">
                        <label>수량:</label>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                    </div>
                </div>
            </div>
            <button onClick={handleAddToCart}>추가</button>
        </div>
    );
}

export default Item;