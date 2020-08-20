import React from "react";
import { CardElement, ElementsConsumer } from "@stripe/react-stripe-js";
import axios from "axios";
import "./checkoutForm.css";
class CheckoutForm extends React.Component {
  handleSumbit = async (e) => {
    e.preventDefault();
    let { stripe, elements } = this.props;
    let card = elements.getElement(CardElement);
    let token = await stripe.createToken(card);
    console.log(token);
    let body = {
      token,
      amount: 999,
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
        <h3 className="product-title">handwatch</h3>
        <h4 className="product-price">$9.99</h4>
        <form onSubmit={this.handleSumbit}>
          <CardElement />

          <button>buy</button>
        </form>
      </div>
    );
  }
}

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}
