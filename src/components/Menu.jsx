import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item.jsx';

function Menu() {
    const menu = useSelector((state) => state.menu);

    // menu가 배열인지 확인하고, 아니면 빈 배열을 사용합니다.
    const coffeeMenu = Array.isArray(menu) ? menu.filter(item => item.type === 'coffee') : [];
    const nonCoffeeMenu = Array.isArray(menu) ? menu.filter(item => item.type === 'non-coffee') : [];

    return (
        <div>
            <h2>메뉴</h2>
            <div className="menu-category">
                <h3>커피</h3>
                <div className="menu-list">
                    {coffeeMenu.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </div>
            </div>

            <div className="menu-category">
                <h3>논커피</h3>
                <div className="menu-list">
                    {nonCoffeeMenu.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Menu;
