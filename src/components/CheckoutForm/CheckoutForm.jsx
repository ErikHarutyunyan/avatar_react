import {
  CardElement,
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import ApiService from "../../services/api2";

const CheckoutForm = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  // Handle real-time validation errors from the card Element.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  // Handle form submission.
  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });
    console.log(paymentMethod);

    if (error) {
      setError(error.response.data);
    } else {
      ApiService.saveStripeInfo({
        email,
        name,
        payment_method_id: paymentMethod.id,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="stripe-form">
      {/* <PaymentElement /> */}
      <div className="form-row">
        <label>
          Name
          <input
            name="name"
            type="text"
            placeholder="Jane Doe"
            required
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <label htmlFor="email">
          Email Address
          <input
            className="form-input"
            id="email"
            name="name"
            type="email"
            placeholder="jenny.rosen@example.com"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="form-row">
        <label htmlFor="card-element">Credit or debit card</label>

        <CardElement id="card-element" onChange={handleChange} />
        <div className="card-errors" role="alert">
          {error}
        </div>
      </div>
      <button type="submit" className="submit-btn">
        Submit Payment
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};
export default CheckoutForm;
