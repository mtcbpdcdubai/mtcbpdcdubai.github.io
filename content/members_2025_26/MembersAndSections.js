// import coreVennelaVallabhaneni     from "./core_vennela_vallabhaneni.jpg";
// import coreSiddharathMalavalli     from "./core_siddharath_malavalli.jpg";
// import coreAmeiyaWankhede          from "./core_ameiya_wankhede.jpg";
// import coreSriHariSaiSubramaniam   from "./core_sri_hari_sai_subramaniam.jpg";
// import coreAnkitaMenon             from "./core_ankita_menon.jpg";
// import coreChhavi                  from "./core_chhavi.jpg";

// import techStellinJohn             from "./tech_stellin_john.jpg";
// import techAkshatSingh             from "./tech_akshat_singh.jpg";
// import techAsthaAdhikary           from "./tech_astha_adhikary.jpg";
// import techNishalAhmed             from "./tech_nishal_ahmed.jpg";
// import techRaghubirPrasad          from "./tech_raghubir_prasad.jpg";
// import techSachinPutlur            from "./tech_sachin_putlur.jpg";
// import techTarakeshwarK            from "./tech_tarakeshwar_k.jpg";
// import techNeilLaturkar            from "./tech_neil_laturkar.jpg";

// import devopsAdithyaNandakumar     from "./devops_adithya_nandakumar.jpg";
// import devopsSreenikethanIyer      from "./devops_sreenikethan_iyer.jpg";
// import devopsShanmukhaSrinanda     from "./devops_shanmukha_srinanda.jpg";

// import eventsShahnaShajahan        from "./events_shahna_shajahan.jpg";
// import eventsJahnaviAngiras        from "./events_jahnavi_angiras.jpg";
// import eventsManognaRaju           from "./events_manogna_raju.jpg";
// import eventsNirenjhenaVenkatesan  from "./events_nirenjhena_venkatesan.jpg";
// import eventsShauryaSrivastava     from "./events_shaurya_srivastava.jpg";

// import mediaSathvikSreeram         from "./media_sathvik_sreeram.jpg";
// import mediaSaadShafath            from "./media_saad_shafath.jpg";
// import mediaSmrithiGanesh          from "./media_smrithi_ganesh.jpg";

// import marketingKhyatiJetly        from "./marketing_khyati_jetly.jpg";
// import marketingSrinjitaRoy        from "./marketing_srinjita_roy.jpg";
// import marketingAmintaThomas       from "./marketing_aminta_thomas.jpg";
// import marketingPreranaSrikrishnan from "./marketing_prerana_srikrishnan.jpg";
// import marketingTanishaHanda       from "./marketing_tanisha_handa.jpg";

// import creativeDiyaVinu            from "./creative_diya_vinu.jpg";
// import creativeSmredhiShankar      from "./creative_smredhi_shankar.jpg";
// import creativeAravindRenjith      from "./creative_aravind_renjith.jpg";
// import creativeKhyaatiRungta       from "./creative_khyaati_rungta.jpg";
// import creativeTarunikkaSuresh     from "./creative_tarunikka_suresh.jpg";

// import outreachPrasannahRaman      from "./outreach_prasannah_raman.jpg";
// import outreachHiteshiRajkumar     from "./outreach_hiteshi_rajkumar.jpg";
// import outreachSaanviDutta         from "./outreach_saanvi_dutta.jpg";
// import outreachVaibavKrishnan      from "./outreach_vaibav_krishnan.jpg";

// import communityVaibhavVinilKumar  from "./community_vaibhav_vinil_kumar.jpg";
// import communityCrystalNazareth    from "./community_crystal_nazareth.jpg";
// import communityDiyaFreddy         from "./community_diya_freddy.jpg";
// import communityShristiSudeep      from "./community_shristi_sudeep.jpg";
// import communitySreeGouriMenon     from "./community_sree_gouri_menon.jpg";
// import communityAdhinarayanAshok   from "./community_adhinarayan_ashok.jpg";
// import communityMurtazaRangwala    from "./community_murtaza_rangwala.jpg";
// import communityReubenThomas       from "./community_reuben_thomas.jpg";

// import facultyDrElakkiyaR          from "./faculty_dr_elakkiya_r.jpg";



/** Type definition for a Member.
 * @typedef Member
 * @property {} image Image
 * @property {string} name Name of person
 * @property {string} position Position/Role of person
 * @property {string} [linkInstagram] (optional) Instagram link
 * @property {string} [linkLinkedIn] (optional) LinkedIn link
 * @property {string} [linkGitHub] (optional) GitHub link
 */

/** Type definition for a Section.
 * @typedef Section
 * @property {string} sectionTitle Title of section.
 * @property {Member[]} members List of members in this section.
 * @property {number} numCols Number of columns to display in the webpage.
 */

/** Generates the URL for a placeholder image.
 * @param {string} personName Name of person to display inside the image.
 * @param {number} size Size of the square image, in pixels.
 */
function generatePlaceholderURL(personName, size=150) {
  return `https://placehold.co/${size}/1E1E1E/FFFFFF/svg?text=${encodeURIComponent(personName)}&font=Montserrat`;
}



/** An array of members in the Core section @type {Member[]} */
const sectionCore = [
  {
    image: generatePlaceholderURL("Vennela Vallabhaneni"),//coreVennelaVallabhaneni,
    name: "Vennela Vallabhaneni",
    position: "Chair",
    linkInstagram: "https://instagram.com/venn.by",
    linkLinkedIn: "https://linkedin.com/in/venn-v",
    linkGitHub: "https://github.com/vennby",
  },
  {
    image: generatePlaceholderURL("Siddharath Malavalli"),//coreSiddharathMalavalli,
    name: "Siddharath Malavalli",
    position: "Co-Chair",
    linkInstagram: "https://instagram.com/siddharath_nagesh",
    linkLinkedIn: "https://linkedin.com/in/siddharath-malavalli-nagesh-270b571ba",
    linkGitHub: "https://github.com/SiddharathMN",
  },
  {
    image: generatePlaceholderURL("Ameiya Wankhede"),//coreAmeiyaWankhede,
    name: "Ameiya Wankhede",
    position: "Vice-Chair",
    linkInstagram: "https://instagram.com/ameiya.w",
    linkLinkedIn: "https://linkedin.com/in/ameiya-wankhede-7600912b1",
    linkGitHub: "https://github.com/aw2106",
  },
  {
    image: generatePlaceholderURL("Sri Hari Sai Subramaniam"),//coreSriHariSaiSubramaniam,
    name: "Sri Hari Sai Subramaniam",
    position: "General Secretary",
    linkInstagram: "https://instagram.com/ft.hyper",
    linkLinkedIn: "https://linkedin.com/in/sri-hari-sai-subramanian-737279322",
    linkGitHub: "https://github.com/HyperPlexG",
  },
  {
    image: generatePlaceholderURL("Ankita Menon"),//coreAnkitaMenon,
    name: "Ankita Menon",
    position: "Ex-Officio",
    linkInstagram: "https://instagram.com/ankita_menon_04",
    linkLinkedIn: "https://linkedin.com/in/k-ankita-menon-4513b8232",
    linkGitHub: "https://github.com/ankita-17-09",
  },
  {
    image: generatePlaceholderURL("Chhavi"),//coreChhavi,
    name: "Chhavi",
    position: "Treasurer",
    linkInstagram: "https://instagram.com/chhavithegreat",
    linkLinkedIn: "https://linkedin.com/in/fnu-chhavi-094b6b286",
    linkGitHub: "https://github.com/chhaavii",
  },
];

/** An array of members in the Technical Team section @type {Member[]} */
const sectionTechnicalTeam = [
  {
    image: generatePlaceholderURL("Stellin John"),//techStellinJohn,
    name: "Stellin John",
    position: "Tech Head",
    linkInstagram: "https://instagram.com/Stellin_15",
    linkLinkedIn: "https://linkedin.com/in/stellin-john-george-1bb757163",
    linkGitHub: "https://github.com/Stellin-15",
  },
  {
    image: generatePlaceholderURL("Akshat Singh"),//techAkshatSingh,
    name: "Akshat Singh",
    position: "Tech Manager",
    linkInstagram: "https://instagram.com/akshatlovesyou",
    linkLinkedIn: "https://linkedin.com/in/akshatsingh-ind",
    linkGitHub: "https://github.com/Akshatcodesyou",
  },
  {
    image: generatePlaceholderURL("Astha Adhikary"),//techAsthaAdhikary,
    name: "Astha Adhikary",
    position: "Tech Executive",
    linkInstagram: "https://instagram.com/_.astha.ad_",
    linkLinkedIn: "https://linkedin.com/in/astha-adhikary-420713279",
    linkGitHub: "https://github.com/astro-prog",
  },
  {
    image: generatePlaceholderURL("Nishal Ahmed"),//techNishalAhmed,
    name: "Nishal Ahmed",
    position: "Tech Executive",
    linkInstagram: "https://instagram.com/nishalahmxd",
    linkLinkedIn: "https://linkedin.com/in/nishalahmed",
    linkGitHub: "https://github.com/nishalahmedpk",
  },
  {
    image: generatePlaceholderURL("Raghubir Prasad"),//techRaghubirPrasad,
    name: "Raghubir Prasad",
    position: "Tech Executive",
    linkInstagram: "", // https://instagram.com/raghubir_0512 i think
    linkLinkedIn: "https://linkedin.com/in/raghubir-prasad",
    linkGitHub: "https://github.com/raghubirPrasad",
  },
  {
    image: generatePlaceholderURL("Sachin Putlur"),//techSachinPutlur,
    name: "Sachin Putlur",
    position: "Tech Executive",
    linkInstagram: "",
    linkLinkedIn: "",
    linkGitHub: "https://github.com/Sachinbits",
  },
  {
    image: generatePlaceholderURL("Tarakeshwar K"),//techTarakeshwarK,
    name: "Tarakeshwar K",
    position: "Tech Executive",
    linkInstagram: "", // https://instagram.com/_tarakexwar_ i think
    linkLinkedIn: "https://linkedin.com/in/ktarakeshwar",
    linkGitHub: "https://github.com/Tarak101",
  },
  {
    image: generatePlaceholderURL("Neil Laturkar"),//techNeilLaturkar,
    name: "Neil Laturkar",
    position: "Tech Executive",
    linkInstagram: "https://instagram.com/neillaturkar",
    linkLinkedIn: "https://linkedin.com/in/neil-laturkar-8920342b3",
    linkGitHub: "https://github.com/orangebead",
  },
];

/** An array of members in the DevOps Team section @type {Member[]} */
const sectionDevOpsTeam = [
  {
    image: generatePlaceholderURL("Adithya Nandakumar"),//devopsAdithyaNandakumar,
    name: "Adithya Nandakumar",
    position: "DevOps Manager",
    linkInstagram: "https://instagram.com/xantimax_isme",
    linkLinkedIn: "https://linkedin.com/in/adithya-nandakumar-8b8061286",
    linkGitHub: "https://github.com/XantimaX",
  },
  {
    image: generatePlaceholderURL("Sreenikethan Iyer"),//devopsSreenikethanIyer,
    name: "Sreenikethan Iyer",
    position: "DevOps Manager",
    linkInstagram: "https://instagram.com/sreenikethan.i",
    linkLinkedIn: "https://linkedin.com/in/sreenikethan-i",
    linkGitHub: "https://github.com/SreenikethanI",
  },
  {
    image: generatePlaceholderURL("Shanmukha Srinanda"),//devopsShanmukhaSrinanda,
    name: "Shanmukha Srinanda",
    position: "DevOps Manager",
    linkInstagram: "",
    linkLinkedIn: "",
    linkGitHub: "https://github.com/eatingmangoes",
  },
];

/** An array of members in the Events Team section @type {Member[]} */
const sectionEventsTeam = [
  {
    image: generatePlaceholderURL("Shahna Shajahan"),//eventsShahnaShajahan,
    name: "Shahna Shajahan",
    position: "Events Manager",
    linkInstagram: "https://instagram.com/shainaa04",
    linkLinkedIn: "https://linkedin.com/in/shahna-shajahan-208821307",
    linkGitHub: "",
  },
  {
    image: generatePlaceholderURL("Jahnavi Angiras"),//eventsJahnaviAngiras,
    name: "Jahnavi Angiras",
    position: "Events Executive",
    linkInstagram: "https://instagram.com/jahnavi_angiras",
    linkLinkedIn: "https://linkedin.com/in/jahnavi-angiras-1755a0300",
    linkGitHub: "",
  },
  {
    image: generatePlaceholderURL("Manogna Raju"),//eventsManognaRaju,
    name: "Manogna Raju",
    position: "Events Executive",
    linkInstagram: "",
    linkLinkedIn: "https://linkedin.com/in/manognaraju",
    linkGitHub: "",
  },
  {
    image: generatePlaceholderURL("Nirenjhena Venkatesan"),//eventsNirenjhenaVenkatesan,
    name: "Nirenjhena Venkatesan",
    position: "Events Executive",
    linkInstagram: "",
    linkLinkedIn: "https://linkedin.com/in/nirenjhena-venkatesan",
    linkGitHub: "",
  },
  {
    image: generatePlaceholderURL("Shaurya Srivastava"),//eventsShauryaSrivastava,
    name: "Shaurya Srivastava",
    position: "Events Executive",
    linkInstagram: "",
    linkLinkedIn: "https://linkedin.com/in/shauryasrivastava05",
    linkGitHub: "",
  },
];

/** An array of members in the Media Operations Team section @type {Member[]} */
const sectionMediaOperationsTeam = [
  {
    image: generatePlaceholderURL("Sathvik Sreeram"),//mediaSathvikSreeram,
    name: "Sathvik Sreeram",
    position: "Media Operations Head",
    linkInstagram: "https://instagram.com/sathvikboseman",
    linkLinkedIn: "https://linkedin.com/in/sathvik-sreeram-06b350280",
    linkGitHub: "https://github.com/sathvikboseman",
  },
  {
    image: generatePlaceholderURL("Saad Shafath"),//mediaSaadShafath,
    name: "Saad Shafath",
    position: "Media Operations Executive",
    linkInstagram: "",
    linkLinkedIn: "",
    linkGitHub: "",
  },
  {
    image: generatePlaceholderURL("Smrithi Ganesh"),//mediaSmrithiGanesh,
    name: "Smrithi Ganesh",
    position: "Media Operations Executive",
    linkInstagram: "",
    linkLinkedIn: "https://linkedin.com/in/smrithi-ganesh-283900309",
    linkGitHub: "",
  },
];

/** An array of members in the Marketing Team section @type {Member[]} */
const sectionMarketingTeam = [
  {
    image: generatePlaceholderURL("Khyati Jetly"),//marketingKhyatiJetly,
    name: "Khyati Jetly",
    position: "Marketing Head",
    linkInstagram: "https://instagram.com/_kxyati_",
    linkLinkedIn: "https://linkedin.com/in/khyati-jetly-085792306",
    linkGitHub: "https://github.com/khyati2107",
  },
  {
    image: generatePlaceholderURL("Srinjita Roy"),//marketingSrinjitaRoy,
    name: "Srinjita Roy",
    position: "Marketing Head",
    linkInstagram: "https://instagram.com/srinxie",
    linkLinkedIn: "https://linkedin.com/in/srinjita-roy-chowdhury-99707531a",
    linkGitHub: "https://github.com/Srinjita-RC",
  },
  {
    image: generatePlaceholderURL("Aminta Thomas"),//marketingAmintaThomas,
    name: "Aminta Thomas",
    position: "Marketing Manager",
    linkInstagram: "https://instagram.com/amintaa_bt",
    linkLinkedIn: "https://linkedin.com/in/aminta-binu-thomas-435731331",
    linkGitHub: "https://github.com/aminta-bt",
  },
  {
    image: generatePlaceholderURL("Prerana Srikrishnan"),//marketingPreranaSrikrishnan,
    name: "Prerana Srikrishnan",
    position: "Marketing Executive",
    linkInstagram: "https://instagram.com/_itz_me_prerana__",
    linkLinkedIn: "https://linkedin.com/in/prerana-chandrasekarapuram-srikrishnan-419bb6365",
    linkGitHub: "",
  },
  {
    image: generatePlaceholderURL("Tanisha Handa"),//marketingTanishaHanda,
    name: "Tanisha Handa",
    position: "Marketing Executive",
    linkInstagram: "https://instagram.com/txnishx24",
    linkLinkedIn: "",
    linkGitHub: "",
  },
];

/** An array of members in the Creative Team section @type {Member[]} */
const sectionCreativeTeam = [
  {
    image: generatePlaceholderURL("Diya Vinu"),//creativeDiyaVinu,
    name: "Diya Vinu",
    position: "Creative Head",
    linkInstagram: "https://instagram.com/dya.vnu",
    linkLinkedIn: "https://linkedin.com/in/diya-vinu-1a28342b4",
    linkGitHub: "",
  },
  {
    image: generatePlaceholderURL("Smredhi Shankar"),//creativeSmredhiShankar,
    name: "Smredhi Shankar",
    position: "Creative Manager",
    linkInstagram: "https://instagram.com/smrredhi",
    linkLinkedIn: "https://linkedin.com/in/smredhi-shankar-926210331",
    linkGitHub: "https://github.com/smredhi",
  },
  {
    image: generatePlaceholderURL("Aravind Renjith"),//creativeAravindRenjith,
    name: "Aravind Renjith",
    position: "Creative Executive",
    linkInstagram: "",
    linkLinkedIn: "https://linkedin.com/in/aravoffcl",
    linkGitHub: "",
  },
  {
    image: generatePlaceholderURL("Khyaati Rungta"),//creativeKhyaatiRungta,
    name: "Khyaati Rungta",
    position: "Creative Executive",
    linkInstagram: "",
    linkLinkedIn: "https://linkedin.com/in/khyaati-rungta-4a2a6021b",
    linkGitHub: "",
  },
  {
    image: generatePlaceholderURL("Tarunikka Suresh"),//creativeTarunikkaSuresh,
    name: "Tarunikka Suresh",
    position: "Creative Advisor",
    linkInstagram: "https://instagram.com/itztaruz",
    linkLinkedIn: "https://linkedin.com/in/tarunikka-suresh-a39065278",
    linkGitHub: "",
  },
];

/** An array of members in the Outreach Team section @type {Member[]} */
const sectionOutreachTeam = [
  {
    image: generatePlaceholderURL("Prasannah Raman"),//outreachPrasannahRaman,
    name: "Prasannah Raman",
    position: "Outreach Head",
    linkInstagram: "https://instagram.com/_prasannargh",
    linkLinkedIn: "https://linkedin.com/in/prasannah-raman-0a7a6926b",
    linkGitHub: "https://github.com/prastostart",
  },
  {
    image: generatePlaceholderURL("Hiteshi Rajkumar"),//outreachHiteshiRajkumar,
    name: "Hiteshi Rajkumar",
    position: "Outreach Executive",
    linkInstagram: "",
    linkLinkedIn: "",
    linkGitHub: "",
  },
  {
    image: generatePlaceholderURL("Saanvi Dutta"),//outreachSaanviDutta,
    name: "Saanvi Dutta",
    position: "Outreach Executive",
    linkInstagram: "",
    linkLinkedIn: "",
    linkGitHub: "",
  },
  {
    image: generatePlaceholderURL("Vaibav Krishnan"),//outreachVaibavKrishnan,
    name: "Vaibav Krishnan",
    position: "Outreach Executive",
    linkInstagram: "",
    linkLinkedIn: "",
    linkGitHub: "",
  },
];

/** An array of members in the Community Sandbox section @type {Member[]} */
const sectionCommunitySandbox = [
  {
    image: generatePlaceholderURL("Vaibhav Vinil Kumar"),//communityVaibhavVinilKumar,
    name: "Vaibhav Vinil Kumar",
    position: "Community Relations Manager",
    linkInstagram: "https://instagram.com/vaibhav_vinil",
    linkLinkedIn: "https://linkedin.com/in/vaibhav-vinil-87683a280",
    linkGitHub: "https://github.com/Vaibhav-Vinil",
  },
  {
    image: generatePlaceholderURL("Crystal Nazareth"),//communityCrystalNazareth,
    name: "Crystal Nazareth",
    position: "Biotechnology Community Manager",
    linkInstagram: "",
    linkLinkedIn: "",
    linkGitHub: "",
  },
  {
    image: generatePlaceholderURL("Diya Freddy"),//communityDiyaFreddy,
    name: "Diya Freddy",
    position: "Biotechnology Community Manager",
    linkInstagram: "https://instagram.com/diya.freddy",
    linkLinkedIn: "https://linkedin.com/in/diya-freddy-1592012b4",
    linkGitHub: "https://github.com/diyastudio1",
  },
  {
    image: generatePlaceholderURL("Shristi Sudeep"),//communityShristiSudeep,
    name: "Shristi Sudeep",
    position: "Biotechnology Community Manager",
    linkInstagram: "",
    linkLinkedIn: "",
    linkGitHub: "",
  },
  {
    image: generatePlaceholderURL("Sree Gouri Menon"),//communitySreeGouriMenon,
    name: "Sree Gouri Menon",
    position: "Biotechnology Community Manager",
    linkInstagram: "",
    linkLinkedIn: "",
    linkGitHub: "",
  },
  {
    image: generatePlaceholderURL("Adhinarayan Ashok"),//communityAdhinarayanAshok,
    name: "Adhinarayan Ashok",
    position: "Electrical Community Manager",
    linkInstagram: "",
    linkLinkedIn: "",
    linkGitHub: "",
  },
  {
    image: generatePlaceholderURL("Murtaza Rangwala"),//communityMurtazaRangwala,
    name: "Murtaza Rangwala",
    position: "Electrical Community Manager",
    linkInstagram: "",
    linkLinkedIn: "",
    linkGitHub: "",
  },
  {
    image: generatePlaceholderURL("Reuben Thomas"),//communityReubenThomas,
    name: "Reuben Thomas",
    position: "Electrical Community Manager",
    linkInstagram: "https://instagram.com/reuben_thooo",
    linkLinkedIn: "https://linkedin.com/in/reuben-thomas-thovelil-689893263",
    linkGitHub: "https://github.com/reuben-tho",
  },
];

/** An array of members in the Faculty In-Charge section @type {Member[]} */
const sectionFaculty = [
  {
    image: generatePlaceholderURL("Dr. Elakkiya R."),//facultyDrElakkiyaR,
    name: "Dr. Elakkiya R.",
    position: "Assistant Professor",
    linkLinkedIn: "https://linkedin.com/in/elakkiya-r-581884b1",
  }
]



/** An array of all sections in the About page. @type {Section[]} */
const sections = [
  {numCols: 3, sectionTitle: "Core Members", members: sectionCore},
  {numCols: 4, sectionTitle: "Technical Team", members: sectionTechnicalTeam},
  {numCols: 3, sectionTitle: "DevOps Team", members: sectionDevOpsTeam},
  {numCols: 3, sectionTitle: "Events Team", members: sectionEventsTeam},
  {numCols: 3, sectionTitle: "Media Operations Team", members: sectionMediaOperationsTeam},
  {numCols: 3, sectionTitle: "Marketing Team", members: sectionMarketingTeam},
  {numCols: 3, sectionTitle: "Creative Team", members: sectionCreativeTeam},
  {numCols: 2, sectionTitle: "Outreach Team", members: sectionOutreachTeam},
  {numCols: 4, sectionTitle: "Community Sandbox Team", members: sectionCommunitySandbox},
  {numCols: 1, sectionTitle: "Faculty In-Charge", members: sectionFaculty},
];

export default sections;
