import React from "react";
import CheckoutForm from "./component/checkoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const StripePromise = loadStripe("pk_test_2zDNMKETBDw5qkdtRu2SGBdc00lOXvF9dD");
function App() {
  return (
    <div className="App">
      <div>
        <div>
          <Elements stripe={StripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
}

export default App;
