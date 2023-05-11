import React, { useState } from "react";
import "../historyHeader.css";
import "./bronzeAge.css";
import BronzeAgeFooter from "../Footer/bronzeAgeFooter";
import "../historyPages.css"
import Minoan1 from "../assets/minoan-1.jpg"
function BronzeAge() {

    const [selectedSection, setSelectedSection] = useState("");

    const handleSectionChange = (event) => {
        setSelectedSection(event.target.value);
        const section = document.querySelector(`#${event.target.value}`);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const sections = [
        { name: "Minoans", value: "Minoan" },
        { name: "Egyptians", value: "egypt" },
        { name: "Indus", value: "Indus" },
        { name: "Norte-Chico", value: "Norte-Chico" },
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
            <div className="Minoans-container" id="Minoan">
                <h1 className="agesheader">Bronze-Age</h1>
                <div className="content-wrapper">
                    <div className="left-content">
                        <h2>Minoans:</h2>
                        <p>
                            The Minoans were masters of the sea and mainly lived on the island of Crete in the Mediterranean. They were the first European civilization and lived on Crete.
                            They traded with northerners of the Aegean Sea for Copper and Tin to make bronze. Around 2100-1900BCE the Minoans started to build bigger structures for the
                            ruling class, these structures soon turned into palaces during the Proto-Palatial Period (1900-1750BCE). After this, the Minoans occupied the Cyclades islands
                            making trade easier with the outside world. They traded with Cyprus to the east and many of the Amorite kingdoms. Trade made the Minoans wealthy especially trading
                            with Egypt for gold. Minoans had great metal workers and profited off of creating gold items and selling them. With all of this wealth, they needed a way to track it
                            so they decided to create a script. Their first script was Cretan hieroglyphs (2100-1700BCE) based on Egyptian hieroglyphs, their second script was called Linear A
                            (1800-1450BCE). These scripts are unfortunately undeciphered.
                        </p>
                    </div>
                    <div className="right-content">
                        <p>'Ladies In Blue' fresco</p>
                        <img src={Minoan1} alt="'Ladies In Blue' fresco" />
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="left-content">
                        <h4 className="minoan-header-2">Neo Platial Period (1750-1500BCE):</h4>
                        <p>
                            Around 1700BCE a series of earthquakes hit Crete and destroyed many of the palaces and cities causing
                            deaths and could have been the downfall of the civilization. But the Minoans came back stronger and rebuilt their palaces even bigger than before. Knossos
                            which was built during the Neo Palatial Period covered 260,000 square feet, had more than 1,000 rooms, some areas were 5 stories tall, indoor plumbing, workshops, and
                            theatres.
                        </p>
                    </div>
                    <div className="right-content">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            <BronzeAgeFooter />
        </div>
    );
}

export default BronzeAge;