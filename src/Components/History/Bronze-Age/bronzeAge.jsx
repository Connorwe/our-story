import React, { useState } from "react";
import "../historyHeader.css";
import "./bronzeAge.css";
import BronzeAgeFooter from "../Footer/bronzeAgeFooter";
import "../historyPages.css"
import Minoan1 from "../assets/minoan-1.jpg"
import Minoan2 from "../assets/minoan-2.jpg"
import Mentuhotep from "../assets/Mentuhotep Nebhepetre.jpeg"
import SesostrisIII from "../assets/Sesostris-III.jpg"
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
                            Around 1700 BCE a series of earthquakes hit Crete and destroyed many of the palaces and cities causing
                            deaths and could have been the downfall of the civilization. But the Minoans came back stronger and rebuilt their palaces even bigger than before. Knossos
                            which was built during the Neo Palatial Period covered 260,000 square feet and had more than 1,000 rooms, some areas were 5 stories tall, plumbing, workshops, and
                            theatres. Women played a key role in society and most art depicts them as high-status figures while the men are shown as very tan working people. The Mycenaeans of
                            mainland Greece emerged in the 18th century as a vassal of the Minoans. After the trading center of the Minoans, Thera exploded by a massive volcanic eruption causing
                            tsunamis to hit northern Crete destroying many buildings and killing people. While the Minoans were rebuilding the Mycenaeans started taking their islands, during this a
                            series of earthquakes struck Crete leaving the Minoans in a desperate state. Then around 1450 BCE the Mycenaeans arrived and conquered Crete to start the Post-Palatial
                            Period.
                        </p>
                    </div>
                    <div className="right-content">
                        <img src={Minoan2} alt="Minoan map" />
                    </div>
                </div>
            </div>
            <div className="egypt-container" id="egypt">
                <div className="content-wrapper">
                    <div className="left-content">
                        <h2>Egypt:</h2> <h4 className="egypt-header-2">(Middle Kingdom 2030-1650BCE)</h4>
                        <p>
                            After the Intermediate period of civil disorder that lasted 150 years came the Middle Kingdom. The Middle Kingdom restored Pharoh rule but the new rulers
                            were from Nubia south of Egypt. These new rulers had a different set of Gods, with the main God being called Ammun. Ammun then merged with Ra to create a
                            God called Ammun-Ra. This God was praised in Middle Kingdom Egypt as the best God and temples were built for him. This period covered Dynasties 11-13 starting
                            with Mentuhotep Nebhepetre, the first ruler of the Middle Kingdom. He overthrew the Heracleoploitan kings of the 9th and 10th dynasties reuniting Egypt. Egypt became a prospering
                            nation again under him. The 11th dynasty came to an end with Mentuhotep IV with his vizier Amenemhet succeeding the throne and founding the 12th dynasty.
                            Amenemhet I moved the capital back to the Memphis area and created a place called Itjet-towy, a royal residence situated between Memphis and the pyramids of
                            Amenemhet I. Old Kingdom artistic styles saw a resurgence rather than the local styles of the 11th dynasty. Amenemhets son Sesostris I was brought up
                            to rule jointly with his father to smooth the transition of leaders. More on Sesostris I in the next section.
                        </p>
                    </div>
                    <div className="right-content">
                        <p> Mentuhotep Nebhepetre</p>
                        <img src={Mentuhotep} alt=" Mentuhotep Nebhepetre" />
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="left-content">
                        <h4 className="egypt-header-2">(Middle Kingdom 12th and 13th dynasties):</h4>
                        <p>
                            Amenemhet I was murdered while Sesostris was on a campaign in Libya. Sesostris kept the throne but had much internal unrest, he campaigned to Syria and
                            Palestine and in turn broke the traditional view that the Middle Kingdom didn't advance toward the Middle East. Not much is known of the reigns of Amenemhet II and
                            Sesostris II other than that they built their pyramids at the entrance to Al-Fayyum. Sesostris III continued the conquests to Semna and the Second Cataract,
                            he acquired a chain of fortresses and was worshiped like a God in later Egypt. Sesostris III reorganized Egypt in a more bureaucratic sense and Egypt prospered
                            from agricultural development and its conquests in the past. Reigns of Amenemhet III and the IVth were peaceful along with Sebeknefru the first female monarch.
                            A woman taking the throne would be the end of the 12th dynastic line. The 13th dynasty saw a change in leadership with around 70 kings taking the throne in just
                            over a century. Even though the constant change in leadership the prosperity of the official class remained and lower Nubia was kept. Immigration from Asia became
                            more widespread and new Palestinian cultures came to Egypt. This shows that the Egyptian government was weakening by letting this infiltration happen. Egypt lost control
                            of Lower Nubia to Karmah and Medjay tribesmen started to settle in the Nile valley. This all led to the Second Intermediate period of increased competition over power
                            in Egypt and Nubia.
                        </p>
                    </div>
                    <div className="right-content">
                        <p>Sesostris III</p>
                        <img src={SesostrisIII} alt="Sesostris III" />
                    </div>
                </div>
            </div>
            <BronzeAgeFooter />
        </div>
    );
}

export default BronzeAge;