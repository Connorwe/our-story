import { Link } from "react-router-dom";
import "./history.css"
import earlyBronzeAgeImage from "../assets/early-bronze-age.jpg";
import bronzeAgeImage from "../assets/bronze-age.jpg";
import ironAgeImage from "../assets/iron-age.jpg";
import classicalAgeImage from "../assets/classical-age.jpg";
import middleAgesImage from "../assets/middle-ages.jpg";
import modernAgeImage from "../assets/modern-age.jpg";
import Footer from "./Footer/footer";
function History() {
    return (
        <body className="history-background">
            <div className="container">
                <h1>History of mankind</h1>
                <div className="box-container">
                    <Link to="/Early-Bronze-Age">
                        <div className="box"
                            style={{ backgroundImage: `url(${earlyBronzeAgeImage})` }}
                        >
                            <div className="history-header">Early-Bronze-Age</div>
                            <p className="history-p"> 3300BCE-2100BCE
                                (tomb painting)</p>
                        </div>
                    </Link>
                    <Link to="/Bronze-Age">
                        <div className="box"
                            style={{ backgroundImage: `url(${bronzeAgeImage})` }}
                        >
                            <div className="history-header">Bronze-Age</div>
                            <p className="history-p">2100BCE-1200BCE
                                (palace of knossos)</p>
                        </div>
                    </Link>
                    <Link to="/Iron-Age">
                        <div className="box"
                            style={{ backgroundImage: `url(${ironAgeImage})` }}
                        >
                            <div className="history-header">Iron-Age</div>
                            <p className="history-p">1200BCE-600BCE
                                (Greek Dark Ages)</p>
                        </div>
                    </Link>
                    <Link to="/Classical-Age">
                        <div className="box"
                            style={{ backgroundImage: `url(${classicalAgeImage})` }}
                        >
                            <div className="history-header">Classical-Age</div>
                            <p className="history-p">600BCE-500CE
                                (Augustus)</p>
                        </div>
                    </Link>
                    <Link to="/Middle-Ages">
                        <div className="box"
                            style={{ backgroundImage: `url(${middleAgesImage})` }}
                        >
                            <div className="history-header">Middle-Ages</div>
                            <p className="history-p">500CE-1500CE
                                (Knight on Horseback)</p>
                        </div>
                    </Link>
                    <Link to="/Modern-Period">
                        <div className="box"
                            style={{ backgroundImage: `url(${modernAgeImage})` }}
                        >
                            <div className="history-header">Modern-Period</div>
                            <p className="history-p">1500CE-Present
                                (Rocket Takeoff)</p>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </body>
    );
}

export default History;