import "../historyHeader.css";
import "./earlyBronzeAge.css"
import EarlyBronzeAgeFooter from "../Footer/earlyBronzeAgeFooter"

function EarlyBronzeAge() {
    return (
        <div>
            <div className="container1">
                <h1 className="agesheader">Early-Bronze-Age/Ancient-Age</h1>
                <div className="content-wrapper">
                    <div className="left-content">
                        <h2>Sumerians:</h2>
                        <p>I'll start the bronze age with the earliest civilization in recorded history. The Sumerians.
                            They were the first to develop many things that would change the world.
                            Sumerians lived in southern Mesopotamia during the period 5000-1750 BCE but I will focus on 3300 BCE and on. They started the bronze age by creating bronze from copper and tin then
                            using this metal to create stronger tools and weapons.
                            <br />
                            The advancement of copper saw greater crop yields and easier hunting creating population growth. People were now able to do new things now that they didn't have
                            to focus on surviving. The first cities were made by construction workers, artisans, and craftsmen. Tens of thousands of people lived in these cities developing
                            things like the wheel, math, and writing. Uruk was a city in Sumer that is known as the birthplace of writing in 3300 BCE.
                        </p>
                    </div>
                    <div className="right-content">
                        <img src="https://www.worldhistory.org/uploads/images/1352.jpg" alt="Sumer" />
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            <EarlyBronzeAgeFooter />
        </div>
    );
}

export default EarlyBronzeAge;
