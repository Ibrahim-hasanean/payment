import React from "react";
import axios from "axios";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
} from "react-stripe-elements";

const labelStyle = {
  background: "gray",
  color: "balck",
};

class Checkout extends React.Component {
  handleSumbit = async (e) => {
    e.preventDefault();
    let token = await this.props.stripe.createToken();
    console.log(token.token);
    const body = {
      amount: 999,
      token: token.token,
    };
    axios
      .post("http://localhost:8000/payment", body)
      .then((response) => {
        console.log(response);
        alert("Payment Success");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };

  render() {
    return (
      <div>
        <p>payment</p>
        <form onSubmit={this.handleSumbit}>
          <label style={labelStyle}>
            card detils
            <CardNumberElement />
          </label>
          <label style={labelStyle}>
            expiration time
            <CardExpiryElement />
          </label>
          <label style={labelStyle}>
            CVC
            <CardCVCElement />
          </label>
          <button type="submit">pay</button>
        </form>
      </div>
    );
  }
}

export default injectStripe(Checkout);
