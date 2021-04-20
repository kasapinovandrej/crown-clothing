export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(el => el.id === cartItemToRemove.id)

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(el => el.id !== cartItemToRemove.id)
    }
    return cartItems.map(el => el.id === cartItemToRemove.id ? { ...el, quantity: el.quantity - 1 } : el)
}