import React, { useState } from "react";
import "../historyHeader.css";
import "./earlyBronzeAge.css";
import EarlyBronzeAgeFooter from "../Footer/earlyBronzeAgeFooter";
import egyptImage from '../assets/upper-lower-egypt.jpg';
import egyptImage2 from "../assets/Old-Kingdom.jpg";

function EarlyBronzeAge() {
    const [selectedSection, setSelectedSection] = useState("");

    const handleSectionChange = (event) => {
        setSelectedSection(event.target.value);
        const section = document.querySelector(`#${event.target.value}`);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const sections = [
        { name: "Sumerians", value: "sumer" },
        { name: "Egyptians", value: "egypt" },
        { name: "Other section", value: "other" },
    ];

    return (
        <div>
            <div className="dropdown-container">
                <label htmlFor="section-select">Select a civilization:</label>
                <select
                    id="section-select"
                    value={selectedSection}
                    onChange={handleSectionChange}
                >
                    {sections.map((section) => (
                        <option key={section.value} value={section.value}>
                            {section.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="sumer-container" id="sumer">
                <h1 className="agesheader">Early-Bronze-Age/Ancient-Age</h1>
                <div className="content-wrapper">
                    <div className="left-content">
                        <h2>Sumerians:</h2>
                        <p>
                            I'll start the bronze age with the earliest civilization in
                            recorded history. The Sumerians. They were the first to develop
                            many things that would change the world. Sumerians lived in
                            southern Mesopotamia during the period 5000-1750 BCE but I will
                            focus on 3300 BCE and on. They started the bronze age by creating
                            bronze from copper and tin and then using this metal to create
                            stronger tools and weapons.
                            <br />
                            The advancement of copper saw greater crop yields and easier
                            hunting creating population growth. People were now able to do new
                            things now that they didn't have to focus on surviving. The first
                            cities were made by construction workers, artisans, and craftsmen.
                            Tens of thousands of people lived in these cities developing
                            things like the wheel, math, and writing. Uruk was a city in Sumer
                            that is known as the birthplace of writing and the first stone
                            structure buildings in 3300 BCE. Uruk was the most influential
                            city in Mesopotamia through to 3000 BCE.
                            <br />
                            Sumerians were divided into the upper class and plebs depending on
                            who you were or what you did in your life you could jump between
                            the two groups. There were a wide array of professions and people
                            were encouraged to pursue academic professions.
                        </p>
                    </div>
                    <div className="right-content">
                        <img
                            src="https://www.worldhistory.org/uploads/images/1352.jpg"
                            alt="Sumer"
                        />
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            <div className="egypt-container" id="egypt">
                <div className="content-wrapper">
                    <div className="left-content">
                        <h2>Egyptians:</h2>
                        <p>
                            Egypt was once divided into upper and lower Egypt, the lower being above upper because of the direction the Nile River flows.
                            Both regions had their own king and fought with each other often. Eventually, the two regions united around 3100 BC.
                            This unification created an era known as the Early Dynastic Period of Egypt (3000–2686 BCE). The person who unified the lands and became Pharoh is believed to be named either
                            Narmer or Menes. It is argued who the Pharoh was but widely believed that these names belonged to the same person.
                            <br /> This period consisted of the First and Second Dynasties.
                            These Dynasties ruled from the city of Memphis with the firsts kings being buried in Abydos and the seconds being buried in
                            Saqqara or Abydos. There was a rise in urbanism and more power was brought towards the pharohs of Egypt. Limited use of writing was developed
                            and document collection was used to keep track of state revenues. The Early Dynastic Period set the ground work for the periods to follow such as the
                            Old Kingdom that lasted from 2686 BC to 2025 BC.
                        </p>
                    </div>
                    <div className="right-content">
                        <img src={egyptImage} alt="Upper and Lower Egypt" />
                    </div>

                </div>
                <div className="content-wrapper">
                    <div className="left-content">
                        <h4 className="egypt-header-2">Old Kingdom (2613-2181BCE):</h4>
                        <p>
                            The Old Kingdom consisted of Dynasties 3 through 6. Memphis remained the capital of Egypt during this time and the kings ruled from there. The Third Dynasty saw
                            the first construction of pyramids with stone in Egypt, prior to this they were built with mud brick. Almost all the pyramids in Egypt were built
                            during the Old Kingdom, this was possible because of the strong centralized government during the 3rd through 4th dynasties rein. With the 5th and 6th dynasties,
                            priesthood became popular because of their mortuary practices with the great pyramids. Because of this the Old Kingdom began to fall as local governors rose to
                            power in regions across Egypt. Central government was lost and Memphis's power was diminished.
                            <br />  The Old Kingdom was the golden age of Egypt. Feats of unimaginable difficulty were accomplished by extreme organization of power. During the 4th dynasty
                            Khufu saw to the construction of the Great Pyramid of Giza. This ancient wonder of the world is 146 meters high, 230 meters at the base, contains 2,300,000
                            blocks of stone with an average weight of 2 and 3/4 tons. This pyramid was constructed in 23 years (the length of Khufu's rule) so that would mean 1 every
                            2 minutes a block of stone would have to be quarried, transported, chiseled, and placed. The pyramid was flawless and lined up exactly with the cardinal directions.
                            This is only one of the structures made during this time with many more to talk about. It is amazing what these people accomplished and the culture they brought
                            to this period and the world.
                        </p>
                    </div>
                    <div className="right-content">
                        <p>Khephren Pyramid and Sphinx</p>
                        <img src={egyptImage2} alt="Step Pyramid Saqqara" />
                    </div>
                </div>
            </div>
            <EarlyBronzeAgeFooter />
        </div>
    );
}

export default EarlyBronzeAge;
