import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItens = cartCtx.items.length > 0;

  const cartItemRemoveHanlder = (id) => {};

  const cartItemAddHandler = (item) => {};

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemRemoveHanlder.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${totalAmount}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItens && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
