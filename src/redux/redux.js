import { configureStore, createSlice } from '@reduxjs/toolkit';
import data from '../assets/data.js'; // 'data.js'에서 'data' 객체 임포트

// data.js의 메뉴 구조를 Redux 상태에 맞게 평면화합니다.
const initialMenuState = [
    // ⭐️ 'type' 속성을 명시적으로 추가하여 Menu.jsx에서 필터링 가능하도록 함
    ...data.menu.커피.map(item => ({ ...item, type: 'coffee' })),
    ...data.menu.논커피.map(item => ({ ...item, type: 'non-coffee' })),
];

// Cart Slice 정의 (이전과 동일)
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItemToCart(state, action) {
            const { item, quantity, options } = action.payload;
            const existingItem = state.find(
                (cartItem) =>
                    cartItem.id === item.id &&
                    cartItem.options.temperature === options.temperature &&
                    cartItem.options.syrup === options.syrup &&
                    cartItem.options.size === options.size
            );

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.push({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: quantity,
                    options: options,
                });
            }
        },
        incrementItemQuantity(state, action) {
            const { id, temperature, syrup, size } = action.payload;
            const existingItem = state.find(
                (cartItem) =>
                    cartItem.id === id &&
                    cartItem.options.temperature === temperature &&
                    cartItem.options.syrup === syrup &&
                    cartItem.options.size === size
            );
            if (existingItem) {
                existingItem.quantity++;
            }
        },
        decrementItemQuantity(state, action) {
            const { id, temperature, syrup, size } = action.payload;
            const existingItem = state.find(
                (cartItem) =>
                    cartItem.id === id &&
                    cartItem.options.temperature === temperature &&
                    cartItem.options.syrup === syrup &&
                    cartItem.options.size === size
            );
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity--;
            } else if (existingItem && existingItem.quantity === 1) {
                return state.filter(
                    (cartItem) =>
                        !(
                            cartItem.id === id &&
                            cartItem.options.temperature === temperature &&
                            cartItem.options.syrup === syrup &&
                            cartItem.options.size === size
                        )
                );
            }
        },
        removeItemFromCart(state, action) {
            const { id, temperature, syrup, size } = action.payload;
            return state.filter(
                (cartItem) =>
                    !(
                        cartItem.id === id &&
                        cartItem.options.temperature === temperature &&
                        cartItem.options.syrup === syrup &&
                        cartItem.options.size === size
                    )
            );
        },
        clearCart(state) {
            return [];
        },
    },
});

// Menu Slice 정의
const menuSlice = createSlice({
    name: 'menu',
    initialState: initialMenuState, // 평면화된 메뉴 상태 사용
    reducers: {
        // 이 곳에 setMenu 등의 액션을 추가하여 동적으로 메뉴를 업데이트할 수 있습니다.
    },
});

export const cartActions = cartSlice.actions;

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        menu: menuSlice.reducer,
    },
});

export default store;
