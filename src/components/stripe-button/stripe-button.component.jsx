import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KB4gUAm1jnRaaFt4i1mIx1Bq9BrKxf2F27WZPNrGyhRssQvP9RGH6dhdiUMaPQCWQ9gHGLov8ezXYCFSPOF28at00plGZUWLu";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRW Clothing Ltd."
      billingAddress
      shippingAddress
      image="../../assets/crown.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
