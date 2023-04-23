import "../historyHeader.css";
import "./earlyBronzeAge.css";
import EarlyBronzeAgeFooter from "../Footer/earlyBronzeAgeFooter";
import egyptImage from '../assets/upper-lower-egypt.jpg';

function EarlyBronzeAge() {
    return (
        <div>
            <div className="sumer-container">
                <h1 className="agesheader">Early-Bronze-Age/Ancient-Age</h1>
                <div className="content-wrapper">
                    <div className="left-content">
                        <h2>Sumerians:</h2>
                        <p>I'll start the bronze age with the earliest civilization in recorded history. The Sumerians.
                            They were the first to develop many things that would change the world.
                            Sumerians lived in southern Mesopotamia during the period 5000-1750 BCE but I will focus on 3300 BCE and on. They started the bronze age by creating bronze from copper and tin and then
                            using this metal to create stronger tools and weapons.
                            <br />
                            The advancement of copper saw greater crop yields and easier hunting creating population growth. People were now able to do new things now that they didn't have
                            to focus on surviving. The first cities were made by construction workers, artisans, and craftsmen. Tens of thousands of people lived in these cities developing
                            things like the wheel, math, and writing. Uruk was a city in Sumer that is known as the birthplace of writing and the first stone structure buildings in 3300 BCE. Uruk was the most influential city in Mesopotamia
                            through to 3000 BCE.
                            <br />
                            Sumerians were divided into the upper class and plebs depending on who you were or what you did in your life you could jump between the two groups.
                            There were a wide array of professions and people were encouraged to pursue academic professions.
                        </p>
                    </div>
                    <div className="right-content">
                        <img src="https://www.worldhistory.org/uploads/images/1352.jpg" alt="Sumer" />
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            <div className="egypt-container">
                <div className="content-wrapper">
                    <div className="left-content">
                        <h2>Egyptians</h2>
                        <p>
                            blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
                        </p>
                    </div>
                    <div className="right-content">
                        <img src={egyptImage} alt="Upper and Lower Egypt" />
                    </div>

                </div>
            </div>
            <EarlyBronzeAgeFooter />
        </div>
    );
}

export default EarlyBronzeAge;
