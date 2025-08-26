import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="logo">OZ Cafe ☕️</div>
            {/* nav-buttons가 필요하다면 여기에 추가하세요 */}
            {/* <div className="nav-buttons">
                <button className="nav-button">메뉴</button>
                <button className="nav-button">장바구니</button>
            </div> */}
        </header>
    );
}

export default Header;
