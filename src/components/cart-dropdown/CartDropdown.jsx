import React from "react";
import CustomButton from "../custom-button/CustomButton";
import "./cart-dropdown.scss";
import CartItem from "../cart-item/CartItem";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((el) => (
          <CartItem key={el.id} item={el} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems: cartItems });

export default connect(mapStateToProps)(CartDropdown);
