import React from "react";
import "./footer.css";
import "../history"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="credit-box">
          <p>Picture Credits: <a className="credits-link" href="https://unsplash.com/@britishlibrary" target="_blank" rel="noopener noreferrer">@britishlibrary</a></p>
          <p> <a className="credits-link" href="https://unsplash.com/@vonshnauzer" target="_blank" rel="noopener noreferrer">@EgorMyznik</a></p>
          <p> <a className="credits-link" href="https://www.pinterest.com/ridill/" target="_blank" rel="noopener noreferrer">@ridill</a></p>
          <p> <a className="credits-link" href="https://www.baamboozle.com/game/924514" target="_blank" rel="noopener noreferrer">@baamboozle</a></p>
          <p> <a className="credits-link" href="https://creator.nightcafe.studio/creation/sV9UK524FB1IBOctB5XS" target="_blank" rel="noopener noreferrer">@NightCafe</a></p>
          <p> <a className="credits-link" href="https://www.pexels.com/photo/rocket-nasa-liftoff-royalty-free-87089/" target="_blank" rel="noopener noreferrer">@pexels</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
