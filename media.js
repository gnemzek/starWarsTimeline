let mediaCollection = [
    {
        title: "Darth Maul",
        type: "comic",
        consumed: false,
        year: 2017,
        swYear: "32 BBY",
        imgSrc: "https://static.wikia.nocookie.net/starwars/images/1/1e/Star_Wars_Darth_Maul_1.png/revision/latest/scale-to-width-down/1000?cb=20190211005829",
        desc: "Collects Star Wars: Darth Maul #1-5. Raised on hate, fear and anger...steeped in the ways of darkness...and trained to kill! Darth Maul's time as apprentice to Darth Sidious has long been cloaked in shadows - now at last his tale of revenge is revealed! It's a story of rage unleashed as Darth Maul prepares for his first encounter with the hated Jedi. But when a Jedi Padawan is captured by sinister forces, why is Maul so determined to fi nd her? And what role will a band of bounty hunters, including Cad Bane and Aurra Sing, play? Get to know the galaxy's deadliest Zabrak like never before!",
        trilogy: false,
        trilogyPhase: ""
    },
    {
        title: "The Phantom Menace",
        type: "movie",
        consumed: true,
        year: 1999,
        swYear: "32 BBY",
        imgSrc: "https://static.wikia.nocookie.net/starwars/images/7/75/EPI_TPM_poster.png/revision/latest/scale-to-width-down/1000?cb=20130822171446",
        desc: "Obi-Wan Kenobi is a young apprentice Jedi knight under the tutelage of Qui-Gon Jinn; Anakin Skywalker, who will later father Luke Skywalker and become known as Darth Vader, is just a 9-year-old boy. When the Trade Federation cuts off all routes to the planet Naboo, Qui-Gon and Obi-Wan are assigned to settle the matter.",
        trilogy: true,
        trilogyPhase: "prequel"
    },
    {
        title: "Attack of the Clones",
        type: "movie",
        consumed: true,
        year: 2002,
        swYear: "22 BBY",
        imgSrc: "https://static.wikia.nocookie.net/starwars/images/d/dd/Attack-Clones-Poster.jpg/revision/latest?cb=20180318125654",
        desc: "Set ten years after the events of The Phantom Menace, the Republic continues to be mired in strife and chaos. A separatist movement encompassing hundreds of planets and powerful corporate alliances poses new threats to the galaxy that even the Jedi cannot stem. These moves, long planned by an as yet unrevealed and powerful force, lead to the beginning of the Clone Wars -- and the beginning of the end of the Republic.",
        trilogy: true,
        trilogyPhase: "prequel"
    },
    {
        title: "The Clone Wars",
        type: "movie",
        consumed: false,
        year: 2008,
        swYear: "22 BBY",
        imgSrc: "https://static.wikia.nocookie.net/starwars/images/f/ff/The_Clone_Wars_film_poster.jpg/revision/latest/scale-to-width-down/1000?cb=20090916003358",
        desc: "As more star systems get swept into the Clone Wars, the valiant Jedi knights struggle to maintain order. Anakin Skywalker and his Padawan learner Ahsoka Tano embark on a mission that brings them face-to-face with Jabba the Hutt. Plotting against them is evil Count Dooku and his agent, Asajj Ventress, who would ensure that the Jedis fail. Meanwhile, Yoda and Obi-Wan Kenobi lead the clone army against the forces of the Dark Side.",
        trilogy: false,
        trilogyPhase: ""
    },
    {
        title: "The Clone Wars",
        type: "tv",
        consumed: false,
        year: 2008,
        swYear: "22-19 BBY",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_EbKrjeTz2Zd9MeLwCStOhrf_rXYgbbleG8_FEl36tf8qcRS",
        desc: "The first weekly TV series from Lucasfilm Animation chronicles the adventures of Anakin Skywalker, Yoda, Obi-Wan Kenobi and other popular characters from the `Star Wars' universe during the violent Clone Wars, as dwindling numbers of Jedi knights struggle to restore peace.",
        trilogy: false,
        trilogyPhase: ""
    },
    {
        title: "Revenge of the Sith",
        type: "movie",
        consumed: true,
        year: 2008,
        swYear: "22-19 BBY",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_EbKrjeTz2Zd9MeLwCStOhrf_rXYgbbleG8_FEl36tf8qcRS",
        desc: "The first weekly TV series from Lucasfilm Animation chronicles the adventures of Anakin Skywalker, Yoda, Obi-Wan Kenobi and other popular characters from the `Star Wars' universe during the violent Clone Wars, as dwindling numbers of Jedi knights struggle to restore peace.",
        trilogy: true,
        trilogyPhase: "prequel"
    },
    {
        title: "The Bad Batch",
        type: "tv",
        consumed: true,
        year: 2021,
        swYear: "19 BBY",
        imgSrc: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQIYMW4h0Swh_NGflXsFV4J2CFpcg4imaRbSFAB4Rde8id3YRZv",
        desc: "Members of a unique squad of clones find their way in a changing galaxy in the aftermath of the Clone War.",
        trilogy: false,
        trilogyPhase: ""
    },
    {
        title: "Darth Vader: Dark Lord of the Sith: Vol 1",
        type: "comic",
        consumed: true,
        year: 2017,
        swYear: "19-12 BBY",
        imgSrc: "https://static.wikia.nocookie.net/starwars/images/8/8e/DarthVader-DLotS-Volume1.jpg/revision/latest/scale-to-width-down/1000?cb=20201120052220",
        desc: "Beginning during the events of Star Wars: Episode III Revenge of the Sith directly after Darth Vader discovers that his wife, Padmé Amidala, has died, the series chronicles Vader going on various missions across the galaxy, all the while hunting the few surviving Jedi alongside his band of dark side apprentices known as the Inquisitorius.",
        trilogy: false,
        trilogyPhase: ""
    },
    {
        title: "Darth Vader: Dark Lord of the Sith: Vol 2",
        type: "comic",
        consumed: false,
        year: 2018,
        swYear: "19-12 BBY",
        imgSrc: "https://static.wikia.nocookie.net/starwars/images/6/6e/SW_DV_DLotS_Vol2_Legacys_End.png/revision/latest/scale-to-width-down/1000?cb=20180429211229",
        desc: "Beginning during the events of Star Wars: Episode III Revenge of the Sith directly after Darth Vader discovers that his wife, Padmé Amidala, has died, the series chronicles Vader going on various missions across the galaxy, all the while hunting the few surviving Jedi alongside his band of dark side apprentices known as the Inquisitorius.",
        trilogy: false,
        trilogyPhase: ""
    },
    {
        title: "Darth Vader: Dark Lord of the Sith: Vol 3",
        type: "comic",
        consumed: false,
        year: 2018,
        swYear: "19-12 BBY",
        imgSrc: "https://static.wikia.nocookie.net/starwars/images/b/ba/DarthVader-DLOTS-Vol3-TheBurningSeas.jpg/revision/latest/scale-to-width-down/1000?cb=20180912161717",
        desc: "Beginning during the events of Star Wars: Episode III Revenge of the Sith directly after Darth Vader discovers that his wife, Padmé Amidala, has died, the series chronicles Vader going on various missions across the galaxy, all the while hunting the few surviving Jedi alongside his band of dark side apprentices known as the Inquisitorius.",
        trilogy: false,
        trilogyPhase: ""
    },
    {
        title: "Darth Vader: Dark Lord of the Sith: Vol 4",
        type: "comic",
        consumed: false,
        year: 2019,
        swYear: "19-12 BBY",
        imgSrc: "https://static.wikia.nocookie.net/starwars/images/f/f5/DarthVader-DLOTS-Vol4-FortressVader.jpg/revision/latest/scale-to-width-down/1000?cb=20201120051851",
        desc: "Beginning during the events of Star Wars: Episode III Revenge of the Sith directly after Darth Vader discovers that his wife, Padmé Amidala, has died, the series chronicles Vader going on various missions across the galaxy, all the while hunting the few surviving Jedi alongside his band of dark side apprentices known as the Inquisitorius.",
        trilogy: false,
        trilogyPhase: ""
    },
    {
        title: "Solo: A Star Wars Story",
        type: "movie",
        consumed: false,
        year: 2018,
        swYear: "10 BBY",
        imgSrc: "https://static.wikia.nocookie.net/starwars/images/a/a9/Solo_A_Star_Wars_Story_Theatrical_Poster.png/revision/latest/scale-to-width-down/1000?cb=20180409011120",
        desc: "Young Han Solo finds adventure when he joins forces with a gang of galactic smugglers and a 190-year-old Wookie named Chewbacca. Indebted to the gangster Dryden Vos, the crew devises a daring plan to travel to the mining planet Kessel to steal a batch of valuable coaxium. In need of a fast ship, Solo meets Lando Calrissian, the suave owner of the perfect vessel for the dangerous mission -- the Millennium Falcon.",
        trilogy: false,
        trilogyPhase: ""
    },
    {
        title: "Obi-Wan Kenobi",
        type: "tv",
        consumed: true,
        year: 2022,
        swYear: "9 BBY",
        imgSrc: "https://static.wikia.nocookie.net/starwars/images/2/20/Celebration2022-OWKposter.png/revision/latest?cb=20220615023517",
        desc: "The Jedi Master contends with the consequences of his greatest defeat -- the downfall and corruption of his one-time friend and apprentice, Anakin Skywalker, who turned to the dark side as evil Sith Lord Darth Vader.",
        trilogy: false,
        trilogyPhase: ""
    },
    {
        title: "Andor",
        type: "tv",
        consumed: false,
        year: 2022,
        swYear: "5-0 BBY",
        imgSrc: "https://static.wikia.nocookie.net/starwars/images/6/6e/AndorPosterFull.jpg/revision/latest/scale-to-width-down/1000?cb=20220802224227",
        desc: "The story of Rebel spy Cassian Andor's formative years of the Rebellion and his difficult missions for the cause.",
        trilogy: false,
        trilogyPhase: ""
    },
    {
        title: "Rogue One",
        type: "movie",
        consumed: true,
        year: 2016,
        swYear: "0 BBY",
        imgSrc: "https://static.wikia.nocookie.net/starwars/images/f/f5/Rogue_One_A_Star_Wars_Story_theatrical_poster.png/revision/latest/scale-to-width-down/1000?cb=20161012214043",
        desc: "Former scientist Galen Erso lives on a farm with his wife and young daughter, Jyn. His peaceful existence comes crashing down when the evil Orson Krennic takes him away from his beloved family. Many years later, Galen becomes the Empire's lead engineer for the most powerful weapon in the galaxy, the Death Star. Knowing that her father holds the key to its destruction, Jyn joins forces with a spy and other resistance fighters to steal the space station's plans for the Rebel Alliance.",
        trilogy: false,
        trilogyPhase: ""
    },
    {
        title: "A New Hope",
        type: "movie",
        consumed: true,
        year: 1977,
        swYear: "0 BBY",
        imgSrc: "https://static.wikia.nocookie.net/starwars/images/0/06/Star_Wars_Style_A_poster_1977.jpg/revision/latest/scale-to-width-down/1000?cb=20100708051712",
        desc: "The Imperial Forces -- under orders from cruel Darth Vader -- hold Princess Leia hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker and Han Solo, captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 and C-3PO to rescue the beautiful princess, help the Rebel Alliance, and restore freedom and justice to the Galaxy.",
        trilogy: true,
        trilogyPhase: "original"
    },
    {
        title: "The Empire Strikes Back",
        type: "movie",
        consumed: true,
        year: 1980,
        swYear: "3 ABY",
        imgSrc: "https://static.wikia.nocookie.net/starwars/images/e/e4/Empire_strikes_back_old.jpg/revision/latest/scale-to-width-down/1000?cb=20161114072554",
        desc: "The adventure continues in this Star Wars sequel. Luke Skywalker, Han Solo, Princess Leia and Chewbacca face attack by the Imperial forces and its AT-AT walkers on the ice planet Hoth. While Han and Leia escape in the Millennium Falcon, Luke travels to Dagobah in search of Yoda. Only with the Jedi master's help will Luke survive when the dark side of the Force beckons him into the ultimate duel with Darth Vader.",
        trilogy: true,
        trilogyPhase: "original"
    },
    {
        title: "Return of the Jedi",
        type: "movie",
        consumed: true,
        year: 1983,
        swYear: "4 ABY",
        imgSrc: "https://static.wikia.nocookie.net/starwars/images/b/b2/ReturnOfTheJediPoster1983.jpg/revision/latest/scale-to-width-down/1000?cb=20170926193831",
        desc: "Luke Skywalker battles horrible Jabba the Hut and cruel Darth Vader to save his comrades in the Rebel Alliance and triumph over the Galactic Empire. Han Solo and Princess Leia reaffirm their love and team with Chewbacca, Lando Calrissian, the Ewoks and the androids C-3PO and R2-D2 to aid in the disruption of the Dark Side and the defeat of the evil emperor.",
        trilogy: true,
        trilogyPhase: "original"
    },
    {
        title: "The Mandalorian",
        type: "tv",
        consumed: false,
        year: 2019,
        swYear: "9 ABY",
        imgSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR7GQ6ezssbwUU53xMM6irHjU_kCIPCVFoYnvLSKhaIKNLsvEqM",
        desc: "After the fall of the Galactic Empire, a lone gunfighter makes his way through the outer reaches of the lawless galaxy.",
        trilogy: false,
        trilogyPhase: ""
    },
    {
        title: "The Book of Boba Fett",
        type: "tv",
        consumed: false,
        year: 2021,
        swYear: "9 ABY",
        imgSrc: "https://static.wikia.nocookie.net/starwars/images/0/0c/BobaFettKeyArt.jpg/revision/latest/scale-to-width-down/1000?cb=20211103040609",
        desc: "On the sands of Tatooine, bounty hunter Boba Fett and mercenary Fennec Shand navigate the Galaxy's underworld and fight for Jabba the Hutt's old territory.",
        trilogy: false,
        trilogyPhase: ""
    },
    {
        title: "The Force Awakens",
        type: "movie",
        consumed: true,
        year: 2015,
        swYear: "34 ABY",
        imgSrc: "https://static.wikia.nocookie.net/starwars/images/f/fd/Star_Wars_Episode_VII_The_Force_Awakens.jpg/revision/latest/scale-to-width-down/1000?cb=20151018162823",
        desc: "Star Wars: The Force Awakens is a 2015 American epic space opera film produced, co-written, and directed by J. J. Abrams. The sequel to Return of the Jedi, it is the seventh film in the Skywalker Saga.",
        trilogy: true,
        trilogyPhase: "sequel"
    },
    {
        title: "The Last Jedi",
        type: "movie",
        consumed: true,
        year: 2017,
        swYear: "34 ABY",
        imgSrc: "https://static.wikia.nocookie.net/starwars/images/1/12/TheLastJediTheatricalPoster.jpg/revision/latest/scale-to-width-down/1000?cb=20171010002420",
        desc: "Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy.",
        trilogy: true,
        trilogyPhase: "sequel"
    },
    {
        title: "The Rise of Skywalker",
        type: "movie",
        consumed: true,
        year: 2019,
        swYear: "35 ABY",
        imgSrc: "https://static.wikia.nocookie.net/starwars/images/4/4c/TROSOneSheet.jpg/revision/latest/scale-to-width-down/1000?cb=20191022091806",
        desc: "When it's discovered that the evil Emperor Palpatine did not die at the hands of Darth Vader, the rebels must race against the clock to find out his whereabouts. Finn and Poe lead the Resistance to put a stop to the First Order's plans to form a new Empire, while Rey anticipates her inevitable confrontation with Kylo Ren. Warning: Some flashing-lights scenes in this film may affect photosensitive viewers.",
        trilogy: true,
        trilogyPhase: "sequel"
    }
]


export default mediaCollection;