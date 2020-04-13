import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "./../auth/index";

const Checkout = ({ products, setRun = (f) => f, run = undefined }) => {
  const getTotal = () => {
    return products.reduce((accumilator, currentValue) => {
      return accumilator + currentValue.count * currentValue.price;
    }, 0);
  };

  const showCheckout = () => {
    return isAuthenticated() ? (
      <button className="btn btn-success">Checkout</button>
    ) : (
      <Link to="/signin">
        <button className="btn btn-primary">Sign in to checkout</button>
      </Link>
    );
  };

  return (
    <div>
      <h2>Total: £{getTotal()}</h2>
      {showCheckout()}
    </div>
  );
};

export default Checkout;
