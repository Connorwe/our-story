import { Link } from "react-router-dom";
import "./history.css"
function History() {
    return ( 
        <body>
        <div>
            <h1>History of mankind</h1>
            <div className="box-container">
                <Link to="/Early-Bronze-Age">
                    <div className="box">
                        <h3>Early-Bronze-Age</h3>
                        <p>3300BCE-2200BCE</p>
                    </div>
                </Link>
                <Link to="/Bronze-Age">
                    <div className="box">
                        <h3>Bronze-Age</h3>
                        <p>2100BCE-1200BCE</p>
                    </div>
                </Link>
                <Link to="/Iron-Age">
                    <div className="box">
                        <h3>Iron-Age</h3>
                        <p>1200BCE-600BCE</p>
                    </div>
                </Link>
                <Link to="/Classical-Age">
                    <div className="box">
                        <h3>Classical-Age</h3>
                        <p>600BCE-500CE</p>
                    </div>
                </Link>
                <Link to="/Middle-Ages">
                    <div className="box">
                        <h3>Middle-Ages</h3>
                        <p>500CE-1500CE</p>
                    </div>
                </Link>
                <Link to="/Modern-Period">
                    <div className="box">
                        <h3>Modern-Period</h3>
                        <p>1500CE-2000CE</p>
                    </div>
                </Link>
            </div>
        </div>
        </body>
    );
}

export default History;