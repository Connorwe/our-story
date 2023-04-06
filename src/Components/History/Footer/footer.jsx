import React from "react";
import "./footer.css";
import "../history"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="credit-box">
          <p>Picture Credits: <a href="https://unsplash.com/@britishlibrary" target="_blank" rel="noopener noreferrer">@britishlibrary</a></p>
          <p> <a href="https://unsplash.com/@vonshnauzer" target="_blank" rel="noopener noreferrer">@EgorMyznik</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
