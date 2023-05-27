import React, { useState } from "react";
import "../historyHeader.css";
import "./bronzeAge.css";
import BronzeAgeFooter from "../Footer/bronzeAgeFooter";
import "../historyPages.css";
import Minoan1 from "../assets/minoan-1.jpg";
import Minoan2 from "../assets/minoan-2.jpg";
import Mentuhotep from "../assets/Mentuhotep Nebhepetre.jpg";
import SesostrisIII from "../assets/Sesostris-III.jpg";
import SecondIntermediate from "../assets/SecondIntermediate.png";
import Hatshepsut from "../assets/hatshepsut.jpg";
import Nefertiti from "../assets/nefertiti.jpg";
import Ramessestemple from "../assets/Ramesses-temple.jpg";
import AmunRa from "../assets/Amun-Ra.jpg";
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
                        <h4 className="egypt-header-2">Middle Kingdom 12th and 13th dynasties:</h4>
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
                <div className="content-wrapper">
                    <div className="left-content">
                        <h4 className="egypt-header-2">Second Intermediate Period (1650-1550BCE):</h4>
                        <p>
                            This period of Egypt was very divided with the Hyksos in the North, the Egyptians in the center, and the Nubians in the south. The Hyksos people gained control of the
                            north because, during the 13th dynasty, the Egyptian rulers moved the capital south to Thebes. During the 13th dynasty, immigration brought Semitic people to Avaris founded
                            by King Amenemhat I. These people named Hyksos meaning (rulers of foreign lands) gained wealth and political status and influenced the country. The Nubians/ Kush to the
                            South continued to trade with Egyptians and remained on cordial terms with the Egyptians. This period was not nearly as chaotic and lawless as the first intermediate period was.
                            However Egyptian king Seqenenra Taa of the 17th dynasty led an expedition against the Hyksos because the Hyksos king Apepi insulted him which was received as a challenge. King
                            Seqenenra Taa took an army to Avaris and attacked the Hyksos but were defeated with Seqenenra dying in battle (according to his mummy). After his death, his son Kamose
                            ruled at Thebes and continued the war stating that he should not have to share his country with foreign powers. Kamose took an army on the Nile and released them on the city
                            of Avaris and destroyed it. The Hyksos people still held Memphis so Kamose fought them for another 3 years and may have captured it from them. His successor was his brother
                            Ahmose I who was the founder of the 18th Dynasty and the New Kingdom.
                        </p>
                    </div>
                    <div className="right-content">
                        <img src={SecondIntermediate} alt="Egypt Map" />
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="left-content">
                        <h4 className="egypt-header-2">New Kingdom(1550-1069BCE):</h4>
                        <p>
                            Egypt was much more literate during this time making this period very well documented by historians.
                            Ahmose I began to expand the borders of Egypt to ward off any other invasions. Pharaohs after him took the same approach eventually making Egypt into an Empire. This made
                            Egypt very powerful and known well across the world and increased diplomatic relations with other Powers. Hatshepsut the first female Pharoh of Egypt was very powerful
                            and ruled in peace with Nubia to the South unlike her father Thutmose I who killed the Nubian King before she became Pharoh. Hatshepsut had many building projects having
                            only fewer than Ramesses the Great. Her name was removed from a lot of her projects by her son in order to sustain gender roles in Egyptian society. Her son Thutmose III
                            created the Egyptian Empire which would be maintained by his successors. Thutmose went on many military campaigns gaining control of lands like Syria and Libya.
                            Amenhotep II inherited this strong kingdom and made it better. He made peace treaties started building projects and traded with other lands. After him
                            Thutmose IV kept his policies and is best known as the restorer of the Great Sphinx created during the Old Kingdom. His successor was Amenhotep III who ruled
                            Egypt at one of its highest points politically and economically. More below.
                        </p>
                    </div>
                    <div className="right-content">
                        <p>Mortuary Temple of Hatshepsut</p>
                        <img src={Hatshepsut} alt="Queen Hatshepsut temple" />
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="left-content">
                        <h4 className="egypt-header-2">New Kingdom (Continued):</h4>
                        <p>
                            Amenhotep III used his wealth to make other countries do what he desired. During his reign, the Amun priests gained more power and wealth. He tried to stop
                            their power by showing liking to the God Aten instead of Amun in an effort to discredit the Amun priests. This did not work however but did give more status to
                            the God Aten. Amenhotep IV denounced monotheism (old religion) and moved the capital to Amarna then changed his name to Akhenaten. He made Aten the only true God
                            and the Cult of Aten was the only religious group viewed as legitimate. Akhetaten's wife was Nefertiti known for her sculpture created by Thutmose. His son Tutankhaten
                            succeeded the throne and changed his name to Tutankhamun, then he reverted everything that his father did back to the way it was. He moved the capital to Memphis,
                            re-opened the temples, and brought back the old religion. After his death general Horemheb gained power then destroyed all traces of the Amarna Period of Kings before
                            him and tried to restore Egypt to its ancient ways. He mostly succeeded in doing this but died with no heir to the throne so the vizier Paramesse became King naming himself
                            Ramesses I starting the 19th dynasty.
                        </p>
                    </div>
                    <div className="right-content">
                        <p>Nefertiti</p>
                        <img src={Nefertiti} alt="Nefertiti" />
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="left-content">
                        <h4 className="egypt-header-2">New Kingdom 19th Dynasty:</h4>
                        <p>
                            Ramesses I was an old man when he took the throne and made sure to appoint his son Seti I as his successor immediately. He continued to build on Horemheb's
                            ideas while sending his son on military campaigns to take back the territory lost during Akhenaten's reign. When Ramesses died his son continued his work on
                            the temple of Amun at Karnak and the restoration of the Amun religion. Ramesses II also known as Ramesses the Great is the son of Seti I and one of the most
                            documented Pharaohs ever. He built monuments everywhere and spread his name throughout Egypt. He is shown as a great warrior who defeated the Hittites signing
                            the world's first peace treaty (Kadesh Peace Treaty 1269BCE). He built a new city in Avaris named Per-Ramesses that he divided into 4 sections dedicating
                            each to one God. Two Asiatic deities and two Egyptian. This may have been an attempt to integrate cultures with former enemies. The Cult of Amun in Thebes
                            grew stronger because of the capital move and allowed the priests to gain power parallel with the pharaohs. Ramesses II died at 90-96 years old causing
                            public alarm because he had been king for so long. His son Merenptah inherited the throne as his 13th son because his other sons died. Merenptah was much like
                            his father defeating Sea Peoples and Libyans and becoming a warrior. He was succeeded by a usurper named Amenmesse who took power from Seti II the rightful heir.
                            Seti II took power after Amenmesse and followed his father's ideals. Merenptah Siptah succeeded him at age 10 and died at age 16. He was succeeded by Setnakhte a usurper
                            who founded the 20th dynasty.
                        </p>
                    </div>
                    <div className="right-content">
                        <p>Ramesses Temple</p>
                        <img src={Ramessestemple} alt="Ramesses Temple" />
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="left-content">
                        <h4 className="egypt-header-2">New Kingdom Decline:</h4>
                        <p>
                            It is believed that Setnakhte was somehow related to Seti II because usurpers were not accepted as Egyptian kings. Sethakhte held Egypt in balance until his
                            successor Ramesses III. Ramesses III drove off the Sea Peoples for that last time and was the last strong leader of the New Kingdom. He held the country together
                            as long as he could but the Amun priests had gained more power than the king. Ramesses was killed by one of his wives and Ramesses IV inherited the throne.
                            As the empire was shrinking he died soon after he became pharaoh. Ramesses V through XI struggled to hold power from the priests and outside invaders. This marked the
                            decline of the monarchy. The priests now reigned as pharaohs from Thebes and divided the country creating the same turmoil as the 1st and 2nd intermediate periods.
                            When Ramesses XI died and was succeeded by Smendes I Egypt's central government had disappeared and the Egyptian Empire fell. During the 18th and 19th Dynasties Egypt was at its most
                            powerful with a strong centralized government with the Pharoh at the center. This started to come to an end during the 20th dynasty as priests of Amun started to
                            gain status at Thebes and divided Egypt between Pharoh and priests.
                        </p>
                    </div>
                    <div className="right-content">
                        <p>Amun-Ra</p>
                        <img src={AmunRa} alt="Amun-Ra" />
                    </div>
                </div>
            </div>
            <BronzeAgeFooter />
        </div>
    );
}

export default BronzeAge;