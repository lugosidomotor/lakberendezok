// ===== LAKBERENDEZŐK ADATBÁZIS =====
const designers = [
    {
        id: "kovacs-anna",
        name: "Kovács Anna",
        specialty: "Modern Minimalizmus",
        shortBio: "10+ év tapasztalat a letisztult, funkcionális terek kialakításában. Díjnyertes lakberendező.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
        email: "anna@kovacs-design.hu",
        phone: "+36 30 123 4567",
        website: "https://kovacs-design.hu",
        instagram: "@kovacsanna.design",
        experience: 12,
        projectCount: 156,
        rating: 4.9,
        reviewCount: 89,
        featured: true,
        badges: ["Top Lakberendező", "Díjnyertes"],
        
        // Bemutatkozás - hosszabb, személyesebb
        intro: `Kovács Anna vagyok, és hiszem, hogy az otthon több mint négy fal – az a hely, ahol az életed történik. 
        
A Moholy-Nagy Művészeti Egyetemen végeztem belsőépítészet szakon 2012-ben, de az igazi iskolám a több mint 150 projekt volt, amit azóta megvalósítottam. Minden egyes otthon megtanított valamire.

A minimalizmus számomra nem a dolgok hiányát jelenti, hanem a tudatos választást. Azt, hogy minden tárgynak van helye és célja. Azt, hogy a tér szolgálja az életet, nem fordítva.

Ügyfeleim gyakran mondják, hogy "végre rend van a fejemben is, mióta rend van otthon". Ez a legnagyobb dicséret, amit kaphatok.`,

        // Munkamódszer
        approach: `Minden projektem egy beszélgetéssel kezdődik – nem a bútorokról, hanem rólad. Hogyan élsz? Mit szeretsz csinálni otthon? Mi zavar a jelenlegi térben? 

Ezután jön a tervezés: moodboard, alaprajz, 3D látványtervek. Nem kezdünk bontani, amíg nem látod pontosan, mi lesz a végeredmény.

A kivitelezés során végig ott vagyok – koordinálom a szakembereket, ellenőrzöm a minőséget, és kezelem a felmerülő problémákat. Te csak a kulcsot kapod meg a végén.`,

        // Munkamódszer lépései
        process: [
            { step: "1", title: "Konzultáció", desc: "Ingyenes, 60 perces személyes találkozó, ahol megismerlek és felmérjük az igényeidet." },
            { step: "2", title: "Koncepció", desc: "Moodboard és előzetes koncepció készítése, árajánlat a teljes projektre." },
            { step: "3", title: "Tervezés", desc: "Részletes alaprajzok, 3D látványtervek, anyag- és bútorválasztás." },
            { step: "4", title: "Kivitelezés", desc: "Szakemberek koordinálása, beszerzés, helyszíni felügyelet." },
            { step: "5", title: "Átadás", desc: "Kulcsrakész otthon, styling, és egy üveg pezsgő." }
        ],

        // Szolgáltatások
        services: [
            { icon: "🏠", name: "Teljes lakberendezés", desc: "Koncepciótól a kulcsrakész átadásig" },
            { icon: "📐", name: "Tervezés", desc: "Alaprajz, 3D látványterv, műszaki rajzok" },
            { icon: "🛋️", name: "Bútor kiválasztás", desc: "Személyre szabott javaslatok, beszerzés" },
            { icon: "🎨", name: "Színtanácsadás", desc: "Paletta tervezés, mintázás" },
            { icon: "💡", name: "Világítástervezés", desc: "Funkcionális és hangulati világítás" },
            { icon: "📦", name: "Projekt menedzsment", desc: "Szakemberek koordinálása, határidők" }
        ],

        // Árazás
        pricing: {
            type: "Négyzetméter alapú + fix díj",
            range: "Közepes-felső kategória",
            note: "Ingyenes konzultáció, részletes árajánlat a felmérés után",
            startingFrom: "15.000 Ft/m²"
        },

        // Földrajzi lefedettség
        location: {
            base: "Budapest",
            areas: ["Budapest és agglomeráció", "Balaton környéke", "Nagyobb vidéki városok"],
            remote: "Online konzultáció országszerte"
        },

        // Praktikus infók
        practicalInfo: {
            languages: ["Magyar", "Angol"],
            responseTime: "24 órán belül",
            minProjectSize: "30 m²",
            typicalDuration: "2-6 hónap"
        },

        awards: ["Év Lakberendezője 2021", "Design Without Borders díj 2020", "Best of Houzz 2019-2023"],
        
        references: [
            { 
                title: "Budai Penthouse", 
                location: "Budapest, II. kerület", 
                image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
                year: "2024",
                size: "180 m²",
                duration: "4 hónap",
                description: "Egy fiatal vállalkozó pár álomotthona a Rózsadomb tetején. A cél egy letisztult, modern tér volt, ami mégis meleg és otthonos. A panorámás kilátás volt a fő inspiráció – minden bútort és színt úgy választottunk, hogy ne vonja el a figyelmet a lenyűgöző városképről.",
                tags: ["Modern", "Penthouse", "Panoráma"],
                budget: "Prémium"
            },
            { 
                title: "Minimál Családi Ház", 
                location: "Szentendre", 
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
                year: "2023",
                size: "220 m²",
                duration: "6 hónap",
                description: "Négyfős család otthona, ahol a gyerekbarát megoldások és a design harmóniában vannak. A szülők szerették volna, ha a ház elegáns marad, de a két kisgyerek is szabadon mozoghat. Természetes anyagok, rejtett tárolók, mosható felületek – és rengeteg fény.",
                tags: ["Családi ház", "Minimál", "Gyerekbarát"],
                budget: "Közép-felső"
            },
            { 
                title: "Modern Loft", 
                location: "Budapest, IX. kerület", 
                image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
                year: "2023",
                size: "95 m²",
                duration: "3 hónap",
                description: "Egy régi gyárépület átalakítása modern loft lakássá. Az eredeti beton és tégla elemek megőrzése mellett kényelmes, élhető teret hoztunk létre. A tulajdonos egyedülálló kreatív szakember, aki otthon is dolgozik – a tér ezt a kettősséget tükrözi.",
                tags: ["Loft", "Ipari", "Átalakítás"],
                budget: "Közepes"
            }
        ],
        reviews: [
            { name: "Szabó Petra", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80", rating: 5, text: "Anna pontosan megértette, mit szeretnénk – néha jobban, mint mi magunk. A végeredmény felülmúlta minden várakozásunkat. Profi, precíz, és nagyon kellemes vele dolgozni. A kivitelezés alatt egyszer sem kellett aggódnunk semmi miatt.", project: "Budai Penthouse", date: "2024. március" },
            { name: "Kiss Tamás", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80", rating: 5, text: "Két gyerekkel nem egyszerű stílusos otthont kialakítani, de Anna megoldotta. Minden praktikus, könnyen tisztítható, és mégis gyönyörű. A gyerekek imádják a rejtett tárolókat – játék nekik bepakolni!", project: "Minimál Családi Ház", date: "2023. november" },
            { name: "Varga Dóra", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80", rating: 5, text: "A loft átalakítás álom volt. Anna kreatív megoldásai lenyűgöztek – dolgokat látott a térben, amiket én sosem vettem volna észre. Mindenkinek ajánlom, aki valami egyedit szeretne!", project: "Modern Loft", date: "2023. szeptember" }
        ]
    },

    {
        id: "nagy-peter",
        name: "Nagy Péter",
        specialty: "Skandináv Design",
        shortBio: "A skandináv stílus hazai nagykövete. Természetes anyagok, fény és hygge életérzés.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
        email: "peter@skandinav-otthon.hu",
        phone: "+36 20 234 5678",
        website: "https://skandinav-otthon.hu",
        instagram: "@skandinavotthon",
        experience: 9,
        projectCount: 98,
        rating: 4.8,
        reviewCount: 67,
        featured: true,
        badges: ["Skandináv Specialista"],
        
        intro: `Péter vagyok, és 2015 óta segítek embereknek megteremteni a saját hygge-jüket.

Koppenhágában tanultam a Royal Danish Academy-n, és ott értettem meg, hogy a skandináv design nem stílus – hanem életfilozófia. A dánok nem azért élnek szép otthonokban, mert gazdagok, hanem mert értik, hogy a környezetünk befolyásolja a közérzetünket.

Hazatérve azt láttam, hogy Magyarországon sokan vágynak erre az egyszerű, meleg, fénnyel teli életre, de nem tudják, hol kezdjék. Ezért alapítottam a stúdiómat.

A munkáimban a természetes anyagok dominálnak: fa, len, gyapjú, kő. Nem szeretem a műanyagot és a fast furniture-t. Inkább kevesebb, de jobb minőségű darab – ami generációkon át elkísér.`,

        approach: `A skandináv design titka a fény. Magyarországon kevesebb a napfény, mint Dániában, ezért még fontosabb, hogy maximálisan kihasználjuk.

Minden projektem a fény elemzésével kezdődik: merre vannak az ablakok, mikor süt be a nap, hol vannak árnyékos sarkok. Ezután jön a színpaletta – általában világos, de meleg tónusok – és a bútorok elhelyezése.

A hygge nem vásárolható meg – de megteremthető. Puha textíliák, gyertyák, növények, és olyan bútorok, amikhez öröm hozzáérni.`,

        process: [
            { step: "1", title: "Fényelemzés", desc: "Helyszíni felmérés, a természetes fény térképezése." },
            { step: "2", title: "Hygge konzultáció", desc: "Beszélgetés az életstílusodról, szokásaidról, vágyaidról." },
            { step: "3", title: "Moodboard", desc: "Vizuális koncepció: színek, anyagok, hangulat." },
            { step: "4", title: "Tervezés", desc: "Alaprajz, bútorlista, 3D vizualizáció." },
            { step: "5", title: "Megvalósítás", desc: "Beszerzés (sok dán és svéd márka), berendezés, styling." }
        ],

        services: [
            { icon: "🏠", name: "Teljes lakberendezés", desc: "Skandináv stílusban, A-tól Z-ig" },
            { icon: "☀️", name: "Fénytervezés", desc: "Természetes és mesterséges fény optimalizálása" },
            { icon: "🪵", name: "Anyagválasztás", desc: "Természetes, fenntartható anyagok" },
            { icon: "🛒", name: "Beszerzés", desc: "Dán, svéd, finn design márkák" },
            { icon: "🌿", name: "Növénytervezés", desc: "Zöld otthon kialakítása" },
            { icon: "🕯️", name: "Hygge styling", desc: "A végső simítások, amik otthonná teszik" }
        ],

        pricing: {
            type: "Projekt alapú",
            range: "Közepes kategória",
            note: "Első konzultáció ingyenes",
            startingFrom: "12.000 Ft/m²"
        },

        location: {
            base: "Budapest",
            areas: ["Budapest", "Balaton", "Dunakanyar"],
            remote: "Online konzultáció bárhol"
        },

        practicalInfo: {
            languages: ["Magyar", "Angol", "Dán"],
            responseTime: "24-48 óra",
            minProjectSize: "25 m²",
            typicalDuration: "2-4 hónap"
        },

        awards: ["Nordic Design Award 2022", "Best of Houzz Design 2021-2023"],
        
        references: [
            { 
                title: "Hygge Lakás", 
                location: "Budapest, XIII. kerület", 
                image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
                year: "2024",
                size: "75 m²",
                duration: "2.5 hónap",
                description: "Egy fiatal pár első közös otthona. Azt kérték, hogy 'olyan legyen, mint egy dán lakás a Pinteresten'. Világos falak, tölgyfa padló, bouclé kanapé, és rengeteg növény. A kedvencük a leolvasósarok az ablak mellett.",
                tags: ["Skandináv", "Hygge", "Lakás"],
                budget: "Közepes"
            },
            { 
                title: "Balatoni Nyaraló", 
                location: "Tihany", 
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
                year: "2023",
                size: "120 m²",
                duration: "3 hónap",
                description: "Modern skandináv nyaraló a Balaton partján. A tulajdonosok sokat utaznak Skandináviában, és azt az érzést akarták hazahozni. Fehér falak, natúr fa, len textíliák – és egy hatalmas terasz a naplementéhez.",
                tags: ["Nyaraló", "Balaton", "Modern"],
                budget: "Közép-felső"
            },
            { 
                title: "Családi Fészek", 
                location: "Budaörs", 
                image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
                year: "2023",
                size: "160 m²",
                duration: "4 hónap",
                description: "Háromgenerációs családi ház, ahol a nagyszülők és unokák egyaránt otthon érzik magukat. A kihívás az volt, hogy a skandináv letisztultság találkozzon a magyar család melegségével. Szerintem sikerült.",
                tags: ["Családi ház", "Többgenerációs", "Meleg"],
                budget: "Közepes"
            }
        ],
        reviews: [
            { name: "Horváth Lilla", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80", rating: 5, text: "Péter tökéletesen megértette a skandináv álmunkat. Az otthonunk most olyan, mint egy dán magazinból – de élhető és meleg. Minden nap örülünk, hogy hazajövünk.", project: "Hygge Lakás", date: "2024. február" },
            { name: "Molnár Gergő", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80", rating: 5, text: "A nyaralónk lett a kedvenc helyünk a világon. Péter zseniális érzékkel dolgozik a fénnyel – a nappali egész nap világos, de sosem túl meleg.", project: "Balatoni Nyaraló", date: "2023. augusztus" }
        ]
    },

    {
        id: "szabo-eszter",
        name: "Szabó Eszter",
        specialty: "Luxus Enteriőrök",
        shortBio: "Prémium projektek specialistája. Milánói képzés, nemzetközi tapasztalat, időtlen elegancia.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
        email: "eszter@luxus-interior.hu",
        phone: "+36 70 345 6789",
        website: "https://luxus-interior.hu",
        instagram: "@szaboeszter.interiors",
        experience: 11,
        projectCount: 72,
        rating: 5.0,
        reviewCount: 45,
        featured: true,
        badges: ["Prémium", "Nemzetközi"],
        
        intro: `Szabó Eszter vagyok, és a szépség megszállottja vagyok – de nem a felszínes, hanem a mély, időtálló szépségé.

Milánóban tanultam a Politecnico di Milano-n, majd öt évet dolgoztam Londonban, ahol a világ legigényesebb ügyfeleit szolgáltam ki. Diplomaták, üzletemberek, művészek – olyan emberek, akik megszokták a legjobbat.

2018-ban tértem haza, mert úgy éreztem, Magyarországon is van igény erre a szintre. És igazam volt.

A luxus számomra nem a drága tárgyak halmozását jelenti. A luxus az, amikor minden részlet tökéletes. Amikor a kilincs súlya pont megfelelő. Amikor a fény úgy esik a márványra, ahogy kell. Amikor belépsz egy térbe, és azonnal érzed: itt minden a helyén van.`,

        approach: `A prémium projektek más megközelítést igényelnek. Az ügyfeleim elfoglalt emberek, akiknek nincs idejük minden döntésben részt venni – de elvárják, hogy a végeredmény tökéletes legyen.

Ezért én "full service" modellben dolgozom. Az első konzultáción megértem az ízlésed, az életstílusod, a vágyaid. Utána átveszem az irányítást.

Nemzetközi beszállítói hálózatom van: olasz bútorgyártók, francia textilházak, brit világítástechnikai cégek. Olyan darabokat tudok szerezni, amiket Magyarországon nem kapsz meg.

A kivitelezés során én vagyok a "rossz zsaru" – én követelem meg a tökéletes minőséget a szakemberektől, hogy neked ne kelljen.`,

        process: [
            { step: "1", title: "Discovery", desc: "Mélyinterjú az életstílusodról, referenciák elemzése." },
            { step: "2", title: "Koncepció", desc: "Vizuális koncepció, anyagminták, előzetes költségvetés." },
            { step: "3", title: "Design Development", desc: "Részletes tervek, egyedi bútorok tervezése, beszállítók kiválasztása." },
            { step: "4", title: "Procurement", desc: "Nemzetközi beszerzés, gyártás koordinálása." },
            { step: "5", title: "Installation", desc: "Helyszíni felügyelet, styling, tökéletesítés." }
        ],

        services: [
            { icon: "🏛️", name: "Luxus lakberendezés", desc: "High-end rezidenciák, penthouse-ok" },
            { icon: "🎨", name: "Art consulting", desc: "Műtárgy beszerzés, gyűjtemény kezelés" },
            { icon: "✨", name: "Egyedi bútorok", desc: "Méretre tervezés, olasz gyártás" },
            { icon: "🌍", name: "Nemzetközi beszerzés", desc: "Exkluzív európai márkák" },
            { icon: "🏨", name: "Hospitality design", desc: "Boutique hotelek, éttermek" },
            { icon: "🔑", name: "Kulcsrakész projekt", desc: "Teljes menedzsment, fehér kesztyűs szolgáltatás" }
        ],

        pricing: {
            type: "Projekt alapú, egyedi árazás",
            range: "Prémium kategória",
            note: "Minimum projekt érték: 15M Ft",
            startingFrom: "Egyedi kalkuláció"
        },

        location: {
            base: "Budapest",
            areas: ["Budapest", "Balaton prémium övezet", "Bécs", "Nemzetközi projektek"],
            remote: "Nemzetközi projektek vállalása"
        },

        practicalInfo: {
            languages: ["Magyar", "Angol", "Olasz", "Német"],
            responseTime: "48 órán belül",
            minProjectSize: "80 m²",
            typicalDuration: "6-12 hónap"
        },

        awards: ["Elle Decoration Award 2023", "Architectural Digest Top 50 2022", "Luxury Lifestyle Award 2021"],
        
        references: [
            { 
                title: "Villa a Rózsadombon", 
                location: "Budapest, II. kerület", 
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
                year: "2024",
                size: "450 m²",
                duration: "10 hónap",
                description: "Egy diplomata család reprezentatív otthona. A kihívás: klasszikus elegancia, ami alkalmas hivatalos fogadásokra, de mégis otthonos a család számára. Egyedi tervezésű bútorok Olaszországból, válogatott műtárgyak, és egy pince, ami egyszerre borospince és szivarszoba.",
                tags: ["Villa", "Luxus", "Klasszikus"],
                budget: "Prémium"
            },
            { 
                title: "Penthouse Suite", 
                location: "Budapest, V. kerület", 
                image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
                year: "2023",
                size: "200 m²",
                duration: "6 hónap",
                description: "Panorámás penthouse a Duna felett. A tulajdonos egy tech vállalkozó, aki a kortárs luxust kereste. Olasz designer bútorok, egyedi világítástechnika, és egy okosotthon rendszer, ami szinte láthatatlan.",
                tags: ["Penthouse", "Kortárs", "Smart home"],
                budget: "Prémium"
            },
            { 
                title: "Boutique Hotel Lobby", 
                location: "Budapest, VII. kerület", 
                image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
                year: "2023",
                size: "150 m²",
                duration: "4 hónap",
                description: "Egy új boutique hotel közösségi tereinek tervezése. Art deco inspiráció modern interpretációban. A cél az volt, hogy a vendégek már a lobbiban érezzék: ez nem egy átlagos szálloda.",
                tags: ["Hotel", "Közösségi tér", "Art deco"],
                budget: "Prémium"
            }
        ],
        reviews: [
            { name: "Dr. Fekete András", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80", rating: 5, text: "Eszter nemzetközi szinten gondolkodik és dolgozik. A villánk minden részlete tökéletes – a vendégeink mindig elámulnak. Ami a legfontosabb: a család is szereti, nem csak 'szép', hanem élhető is.", project: "Villa a Rózsadombon", date: "2024. január" },
            { name: "Németh Katalin", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80", rating: 5, text: "Profi, precíz, és van ízlése. Eszter olyan dolgokat szerzett be nekünk, amiket mi sosem találtunk volna meg. A penthouse-unk olyan lett, amilyenről álmodtunk – csak jobb.", project: "Penthouse Suite", date: "2023. október" }
        ]
    },

    {
        id: "toth-gabor",
        name: "Tóth Gábor",
        specialty: "Ipari Loft Stílus",
        shortBio: "Az ipari és raw design mestere. Régi gyárépületek, loftok, karakteres terek specialistája.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
        email: "gabor@loft-design.hu",
        phone: "+36 30 456 7890",
        website: "https://loft-design.hu",
        instagram: "@loftdesign.hu",
        experience: 14,
        projectCount: 83,
        rating: 4.9,
        reviewCount: 52,
        featured: false,
        badges: ["Loft Specialista"],
        
        intro: `Tóth Gábor vagyok, és a régi épületek szerelmese.

Építészmérnökként kezdtem, 8 évet dolgoztam műemlékvédelemben. Ott tanultam meg tisztelni az épületek történetét – és ott jöttem rá, hogy a legjobb terek azok, ahol a múlt és a jelen találkozik.

2016-ban váltottam a belsőépítészetre, és azóta a loft lakások és ipari terek átalakítása a szakterületem. Budapesten rengeteg ilyen épület van – régi gyárak, raktárak, műhelyek – és én imádom életre kelteni őket.

Az ipari design nem arról szól, hogy mindent nyersen hagyunk. Arról szól, hogy megtaláljuk az egyensúlyt a raw és a kényelmes között. Egy látszóbeton fal mellé puha bőrkanapé. Acél lépcső, de meleg fa lépcsőfokok. Ipari lámpa, de dimmerrel.`,

        approach: `Minden projektem az épület megismerésével kezdődik. Mi volt itt régen? Milyen nyomokat hagyott a múlt? Ezeket a nyomokat nem eltüntetni akarom, hanem kiemelni.

Az anyagválasztás kulcsfontosságú: beton, acél, fa, tégla, üveg. Ezek az alapok. A színpaletta visszafogott – szürkék, barnák, feketék – de a textúrák gazdagok.

Szorosan együttműködöm lakatos- és asztalos mesterekkel, akik egyedi darabokat készítenek. Egy loft lakásban nincs helye az IKEA-nak – minden bútornak karaktere kell legyen.`,

        process: [
            { step: "1", title: "Épületfelmérés", desc: "Az épület történetének és szerkezetének megismerése." },
            { step: "2", title: "Koncepció", desc: "Mit őrzünk meg, mit bontunk, mit emelünk ki." },
            { step: "3", title: "Tervezés", desc: "Alaprajz, szerkezeti módosítások, 3D vizualizáció." },
            { step: "4", title: "Egyedi gyártás", desc: "Fém és fa bútorok, korlátok, lépcső tervezése és gyártása." },
            { step: "5", title: "Kivitelezés", desc: "Bontás, építés, szerelés – végig a helyszínen." }
        ],

        services: [
            { icon: "🏭", name: "Loft átalakítás", desc: "Ipari épületek lakóterré alakítása" },
            { icon: "📐", name: "Építészeti tervezés", desc: "Szerkezeti módosítások, engedélyek" },
            { icon: "🔧", name: "Egyedi fém bútorok", desc: "Lépcső, korlát, asztal, polc" },
            { icon: "🪵", name: "Egyedi fa bútorok", desc: "Visszanyert fa, rusztikus darabok" },
            { icon: "💡", name: "Ipari világítás", desc: "Vintage és modern ipari lámpák" },
            { icon: "📋", name: "Engedélyeztetés", desc: "Hatósági ügyintézés, műemléki egyeztetés" }
        ],

        pricing: {
            type: "Projekt alapú",
            range: "Közepes-felső kategória",
            note: "Az egyedi gyártás költsége külön",
            startingFrom: "18.000 Ft/m²"
        },

        location: {
            base: "Budapest",
            areas: ["Budapest – különösen VIII., IX., XIII. kerület", "Ipari műemlékek országszerte"],
            remote: "Csak helyszíni munka"
        },

        practicalInfo: {
            languages: ["Magyar", "Angol"],
            responseTime: "48 óra",
            minProjectSize: "50 m²",
            typicalDuration: "3-6 hónap"
        },

        awards: [],
        
        references: [
            { 
                title: "Gyár Loft", 
                location: "Budapest, VIII. kerület", 
                image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
                year: "2024",
                size: "140 m²",
                duration: "5 hónap",
                description: "Egy 1920-as évekbeli textilgyár átalakítása. Az eredeti acélszerkezetet és téglafalakat megőriztük, a régi gyári ablakokat felújítottuk. Az új elemek – konyha, fürdő, háló – modern kontrasztot adnak. A tulajdonos azt mondta: 'Olyan, mintha egy New York-i loftban laknék.'",
                tags: ["Loft", "Gyár", "Műemlék"],
                budget: "Közép-felső"
            },
            { 
                title: "Industrial Studio", 
                location: "Budapest, IX. kerület", 
                image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
                year: "2023",
                size: "85 m²",
                duration: "3 hónap",
                description: "Kreatív stúdió és lakótér egyben egy fotós számára. A kihívás: olyan tér, ami nappal stúdióként működik, este pedig otthon. Megoldás: mobil válaszfalak, rejtett ágy, és egy galéria, ami egyszerre tárolóhely és hálószoba.",
                tags: ["Stúdió", "Galéria", "Multifunkcionális"],
                budget: "Közepes"
            },
            { 
                title: "Raw Penthouse", 
                location: "Budapest, XIII. kerület", 
                image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
                year: "2023",
                size: "110 m²",
                duration: "4 hónap",
                description: "Tetőtéri loft egy régi irodaházban. Látszóbeton mennyezet, acél nyílászárók, és lenyűgöző városi panoráma. A tulajdonos egyedülálló férfi, aki 'férfibarlangot' akart – de olyat, ami elegáns is.",
                tags: ["Penthouse", "Raw", "Tetőtér"],
                budget: "Közép-felső"
            }
        ],
        reviews: [
            { name: "Balogh Márk", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80", rating: 5, text: "Gábor érti az ipari tereket, mint senki más. A loftunk karakteres és egyedi lett – minden vendégünk azt kérdezi, ki tervezte. És ami fontos: praktikus is, nem csak szép.", project: "Gyár Loft", date: "2024. április" },
            { name: "Takács Réka", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80", rating: 5, text: "A stúdiónk tökéletes lett munkára és lakásra is. Gábor kreatív megoldásai zseniálisak – a mobil fal ötlete megmentette a projektet. Nagyon ajánlom!", project: "Industrial Studio", date: "2023. december" }
        ]
    },

    {
        id: "kiss-maria",
        name: "Kiss Mária",
        specialty: "Eklektikus & Bohém",
        shortBio: "Színes, egyedi terek alkotója. Művészeti háttér, merész színek, személyiséget tükröző otthonok.",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80",
        email: "maria@bohem-otthon.hu",
        phone: "+36 20 567 8901",
        website: "https://bohem-otthon.hu",
        instagram: "@bohemotthon",
        experience: 8,
        projectCount: 64,
        rating: 4.9,
        reviewCount: 41,
        featured: false,
        badges: ["Művész", "Színszakértő"],
        
        intro: `Mária vagyok, és színekben gondolkodom.

A Képzőművészeti Egyetemen festőnek tanultam, de hamar rájöttem, hogy a vászon túl kicsi nekem – egész tereket akarok "festeni". Így lettem lakberendező.

Nem hiszek a szabályokban. Nem hiszek abban, hogy a kanapénak szürkének kell lennie, mert az "biztonságos". Nem hiszek abban, hogy a vintage és a modern nem fér meg egymás mellett. És főleg nem hiszek abban, hogy az otthonodnak olyannak kell lennie, mint a szomszédé.

Az én munkáim színesek, merészek, és néha kicsit őrültek. De mindig személyesek. Mert az otthon nem showroom – az otthon TE vagy.

Ha szereted a rendet és a minimalizmust, valószínűleg nem én vagyok a terveződ. De ha szereted a színeket, a történeteket, a karaktert – beszéljünk!`,

        approach: `Minden projektem egy "személyiség-feltárással" kezdődik. Nem azt kérdezem, milyen stílust szeretsz – azt kérdezem, milyen ember vagy. Mit gyűjtesz? Hova utaztál? Mi a kedvenc filmed? Milyen zenét hallgatsz?

Ezekből a válaszokból építem fel a koncepciót. Lehet, hogy a marokkói utazásod inspirálja a nappali színeit. Lehet, hogy a nagymamád szekrénye lesz a hálószoba központja. Lehet, hogy a kedvenc festményed határozza meg az egész palettát.

Nem félek keverni a stílusokat és a korokat. Egy art deco fotel simán megférhet egy mid-century asztal mellett, ha a színek és az arányok stimmelnek.`,

        process: [
            { step: "1", title: "Személyiség-feltárás", desc: "Hosszú beszélgetés rólad, az életedről, a vágyaidról." },
            { step: "2", title: "Inspirációs moodboard", desc: "Színek, textúrák, hangulatok – vizuális koncepció." },
            { step: "3", title: "Kincsvadászat", desc: "Vintage boltok, antikváriumok, online piacterek – egyedi darabok keresése." },
            { step: "4", title: "Tervezés", desc: "Alaprajz, színterv, bútorelrendezés." },
            { step: "5", title: "Styling", desc: "A végső varázslat – könyvek, növények, emlékek elrendezése." }
        ],

        services: [
            { icon: "🎨", name: "Színtanácsadás", desc: "Merész, egyedi palettákkal" },
            { icon: "🖼️", name: "Art styling", desc: "Műtárgyak, képek elrendezése" },
            { icon: "🏠", name: "Teljes lakberendezés", desc: "Eklektikus, személyes stílusban" },
            { icon: "🛋️", name: "Vintage beszerzés", desc: "Egyedi, karakteres darabok keresése" },
            { icon: "🪴", name: "Növénystyling", desc: "Zöld oázis kialakítása" },
            { icon: "📚", name: "DIY workshop", desc: "Csináld magad tanácsadás" }
        ],

        pricing: {
            type: "Óradíj vagy projekt alapú",
            range: "Közepes kategória",
            note: "Rugalmas, a költségvetéshez igazítható",
            startingFrom: "8.000 Ft/óra vagy 10.000 Ft/m²"
        },

        location: {
            base: "Budapest",
            areas: ["Budapest", "Vidéki projektek egyedi egyeztetéssel"],
            remote: "Online konzultáció, DIY támogatás"
        },

        practicalInfo: {
            languages: ["Magyar", "Angol"],
            responseTime: "24-48 óra",
            minProjectSize: "Nincs minimum",
            typicalDuration: "1-4 hónap"
        },

        awards: [],
        
        references: [
            { 
                title: "Művész Műterem", 
                location: "Budapest, VII. kerület", 
                image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=800&q=80",
                year: "2024",
                size: "90 m²",
                duration: "2 hónap",
                description: "Egy festőművész otthona és műterme a bulinegyedben. A tulajdonos azt kérte: 'Olyan legyen, mint én – színes, kicsit kaotikus, de működő.' Vibráló színek, rengeteg növény, és egy hatalmas festőállvány a nappali közepén. A kedvencem a vintage fotel, amit egy lomtalanításon találtunk.",
                tags: ["Műterem", "Művész", "Színes"],
                budget: "Közepes"
            },
            { 
                title: "Színes Családi Ház", 
                location: "Visegrád", 
                image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
                year: "2023",
                size: "180 m²",
                duration: "4 hónap",
                description: "Egy kreatív család otthona a Dunakanyarban. Minden szoba más színvilág – a gyerekszoba türkiz, a hálószoba mélybordó, a nappali meleg sárga – mégis harmonikus egész. A család azt mondta: 'Végre olyan otthonunk van, ami tükrözi, kik vagyunk.'",
                tags: ["Családi ház", "Vidék", "Színes"],
                budget: "Közepes"
            },
            { 
                title: "Bohém Garzon", 
                location: "Budapest, VI. kerület", 
                image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80",
                year: "2023",
                size: "38 m²",
                duration: "1.5 hónap",
                description: "Kis tér, nagy személyiség. A tulajdonos sokat utazik, és minden útról hoz haza valamit. A kihívás: hogyan mutassuk be ezeket az emlékeket anélkül, hogy zsúfolt lenne. Megoldás: galéria fal, vintage vitrin, és egy 'utazós sarok' a legjobb daraboknak.",
                tags: ["Garzon", "Bohém", "Vintage"],
                budget: "Alacsony-közepes"
            }
        ],
        reviews: [
            { name: "Farkas Júlia", avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&q=80", rating: 5, text: "Mária megértette a lelkemet! A műtermem most inspiráló és funkcionális egyszerre. Imádom a színeket, a növényeket, és azt a vintage fotelt, amit együtt találtunk. Minden nap boldoggá tesz ez a tér.", project: "Művész Műterem", date: "2024. március" },
            { name: "Papp Bence", avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&q=80", rating: 5, text: "A garzonunk egyedi lett, tele személyiséggel. Mária kreatív ötletei fantasztikusak – olyan dolgokat látott a térben, amiket én sosem. És ami fontos: a költségvetést is tartottuk!", project: "Bohém Garzon", date: "2023. október" }
        ]
    }
];

// ===== TESTIMONIALS =====
const testimonials = [
    { name: "Kovács Réka", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80", text: "A Lakberendezők.com-on találtam meg álmaim tervezőjét. A referenciák és értékelések alapján könnyű volt választani, és nem csalódtam.", role: "Lakástulajdonos, Budapest" },
    { name: "Dr. Tóth Balázs", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80", text: "Profi platform, megbízható szakemberek. Az irodánk átalakítása zökkenőmentesen zajlott. Mindenkinek ajánlom, aki komolyat keres.", role: "Ügyvezető, Tech startup" },
    { name: "Németh Anna", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80", text: "Végre egy hely, ahol összehasonlíthatod a lakberendezőket. Látod a munkáikat, olvasod a véleményeket – és tudsz dönteni.", role: "Lakberendezést kereső" }
];


// ===== BLOG POSZTOK =====
const blogPosts = [
    { id: "2024-12-skandinav-trendek", title: "2025-ös Skandináv Lakberendezési Trendek", excerpt: "Fedezd fel a jövő év legizgalmasabb skandináv design trendjeit, a warm minimalism-tól a japandi stílusig.", category: "Trendek", date: "2024-12-15", author: "Nagy Péter", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80", path: "blog/2024/12/skandinav-trendek.html" },
    { id: "2024-12-kis-terek", title: "Kis Terek, Nagy Lehetőségek", excerpt: "Praktikus tippek és trükkök, hogyan hozd ki a maximumot a kisebb alapterületű lakásokból.", category: "Tippek", date: "2024-12-10", author: "Kovács Anna", image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&q=80", path: "blog/2024/12/kis-terek.html" },
    { id: "2024-12-fenntarthato-design", title: "Fenntartható Lakberendezés: Útmutató", excerpt: "Hogyan alakíts ki környezettudatos otthont anélkül, hogy lemondanál a stílusról?", category: "Fenntarthatóság", date: "2024-12-05", author: "Szabó Eszter", image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80", path: "blog/2024/12/fenntarthato-design.html" },
    { id: "2024-11-szinek-pszichologiaja", title: "A Színek Pszichológiája az Otthonban", excerpt: "Ismerd meg, hogyan hatnak a különböző színek a hangulatodra és válaszd ki a tökéletes palettát.", category: "Design", date: "2024-11-28", author: "Kiss Mária", image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80", path: "blog/2024/11/szinek-pszichologiaja.html" },
    { id: "2024-11-loft-lakas", title: "Loft Lakás Kialakítása: A-tól Z-ig", excerpt: "Minden, amit tudnod kell az ipari stílusú loft lakások tervezéséről és berendezéséről.", category: "Stílusok", date: "2024-11-20", author: "Tóth Gábor", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", path: "blog/2024/11/loft-lakas.html" },
    { id: "2024-11-home-office", title: "Tökéletes Home Office Kialakítása", excerpt: "Ergonomikus és inspiráló otthoni munkakörnyezet tervezése a produktivitás maximalizálásáért.", category: "Tippek", date: "2024-11-15", author: "Kovács Anna", image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80", path: "blog/2024/11/home-office.html" },
    { id: "2024-11-vilagitas", title: "Világítástervezés: A Hangulat Kulcsa", excerpt: "Fedezd fel a rétegzett világítás titkait és hogyan változtathatod meg teljesen a teret fénnyel.", category: "Design", date: "2024-11-08", author: "Nagy Péter", image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80", path: "blog/2024/11/vilagitas.html" },
    { id: "2024-10-luxus-anyagok", title: "Luxus Anyagok a Modern Otthonban", excerpt: "Márvány, bársony, réz - hogyan használd a prémium anyagokat elegánsan és mértékkel.", category: "Luxus", date: "2024-10-25", author: "Szabó Eszter", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", path: "blog/2024/10/luxus-anyagok.html" },
    { id: "2024-10-novenyek", title: "Szobanövények a Lakberendezésben", excerpt: "A zöld növények nem csak szépek, de javítják a levegő minőségét is. Íme a legjobb választások.", category: "Tippek", date: "2024-10-18", author: "Kiss Mária", image: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=800&q=80", path: "blog/2024/10/novenyek.html" },
    { id: "2024-10-elso-lakas", title: "Első Lakás Berendezése: Kezdő Útmutató", excerpt: "Minden, amit tudnod kell az első saját otthonod berendezéséről - költségvetéstől a stílusig.", category: "Útmutató", date: "2024-10-10", author: "Kovács Anna", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", path: "blog/2024/10/elso-lakas.html" }
];