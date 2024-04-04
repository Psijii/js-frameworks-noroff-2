

import { useState } from "react";

/**
 * Payment component for handling form submission and displaying success/error messages.
 *
 * @returns {JSX.Element} The Payment component.
 */
export default function Payment() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  /**
   * Handles form submission.
   *
   * @param {Event} event - The form submit event.
   */
  function onFormSubmit(event) {
    event.preventDefault();

    // Basic form validation
    if (!fullName || !email || !address || !city || !cardNumber) {
      alert("Please fill out all fields.");
      return;
    }

    const body = {
      fullName,
      email,
      address,
      city,
      cardNumber,
    };

    fetch("", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit form.");
        }
        setSubmitSuccess(true);
      })
      .catch((error) => {
        setSubmitError(error.message);
      });
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          id="fullName"
          value={fullName}
          placeholder="Full name:"
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          id="address"
          value={address}
          placeholder="Address:"
          onChange={(e) => setAddress(e.target.value)}
          autoComplete="street-address"
        />
        <input
          id="email"
          value={email}
          placeholder="E-mail:"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <input
          id="city"
          value={city}
          placeholder="Postcode and city:"
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          id="cardNumber"
          value={cardNumber}
          placeholder="Card number:"
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </form>
      {submitSuccess && <p>Success!</p>}
      {submitError && <p>Error: {submitError}</p>}
    </div>
  );
}
