import { createSelector } from 'reselect';

//imput selector koji ne koristi createSelector vec samo vracaju deo state-a
//output selector koristi imput selectore i createSelector da bi se napravili

const selectCart = state => state.cart

//posto koristim createSelector sada je ovo memoized selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, el) => acc + el.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartPrice => cartPrice.reduce((acc, el) => acc + el.quantity * el.price, 0)
)