import React from "react";

/**
 * Footer component.
 * Renders a footer section with social links and contact information.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={contentContainer}>
        <div style={socialLinksContainer}>
          <p>Follow us on:</p>
          <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>&nbsp;
          <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>&nbsp;
          <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>&nbsp;
          <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>&nbsp;
          <a href="https://youtube.com"><i className="fab fa-youtube"></i></a>&nbsp;
          <a href="https://pinterest.com"><i className="fab fa-pinterest"></i></a>&nbsp;
        </div>
        <div style={contactContainer}>
          <p>Contact us: hello@ethernetshop.com</p>
        </div>
      </div>
      <div style={copyrightContainer}>
        <p>&copy; 2024 EthernetShop. All rights reserved.</p>
      </div>
    </footer>
  );
}

// Inline styles for footer and its elements

/**
 * Inline styles for the footer component.
 */
const footerStyle = {
  backgroundColor: "lightgrey",
  color: "#010101",
  padding: "5px",
  marginTop: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

/**
 * Inline styles for the content container within the footer component.
 */
const contentContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "5px",
};

/**
 * Inline styles for the social links container within the footer component.
 */
const socialLinksContainer = {
  fontSize: "24px",
  marginBottom: "5px",
  alignItems: "center",
};

/**
 * Inline styles for the contact container within the footer component.
 */
const contactContainer = {
  textAlign: "center",
};

/**
 * Inline styles for the copyright container within the footer component.
 */
const copyrightContainer = {
  textAlign: "center",
};

export default Footer;
