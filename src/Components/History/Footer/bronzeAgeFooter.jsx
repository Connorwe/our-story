import React from "react";
import "./historyPagesFooter.css"
import "../Bronze-Age/bronzeAge"

function BronzeAgeFooter() {
    return (
        <footer className="footer-2">
            <div className="container-2">
                <div className="credit-box-2">
                    <p>Credits: <a className="credits-link" href="https://www.worldhistory.org/image/1352/map-of-sumer/" target="_blank" rel="noopener noreferrer">@worldhistory</a> </p>
                    <p> <a className="credits-link" href="https://www.greecehighdefinition.com/blog/2021/3/18/rise-and-fall-of-the-mighty-minoans" target="_blank" rel="noopener noreferrer">@greecehighdefinition</a> </p>
                    <p> <a className="credits-link" href="https://www.metmuseum.org/art/collection/search/548212" target="_blank" rel="noopener noreferrer">@metmuseum</a> </p>
                    <p> <a className="credits-link" href="https://www.britannica.com/place/ancient-Egypt/The-Middle-Kingdom-1938-c-1630-bce-and-the-Second-Intermediate-period-c-1630-1540-bce" target="_blank" rel="noopener noreferrer">@britannica</a> </p>
                    <p> <a className="credits-link" href="https://www.history.com/news/8-things-you-may-not-know-about-hammurabis-code" target="_blank" rel="noopener noreferrer">@history</a> </p>
                </div>
            </div>
        </footer>
    );
}

export default BronzeAgeFooter;