import coreAryanSatwani              from "./core_aryan_satwani.jpg";
import coreMrudulaRahate             from "./core_mrudula_rahate.jpg";
import coreVennelaVallabhaneni       from "./core_vennela_vallabhaneni.jpg";
import coreAdityaGopinath            from "./core_aditya_gopinath.jpg";
import coreKeaneCoutinho             from "./core_keane_coutinho.jpg";
import coreJoelJoseph                from "./core_joel_joseph.jpg";
import coreLasyaSai                  from "./core_lasya_sai.jpg";

import techShaikMohammadAnas         from "./tech_shaik_mohammad_anas.jpg";
import techLayaShreeElango           from "./tech_laya_shree_elango.jpg";
import techStellinJohnGeorge         from "./tech_stellin_john_george.jpg";
import techSreenikethanIyer          from "./tech_sreenikethan_iyer.jpg"
import techSiddharathNagesh          from "./tech_siddharath_nagesh.jpg";
import techVaibhavVinil              from "./tech_vaibhav_vinil.jpg"
import techSriHariSai                from "./tech_sri_hari_sai.jpg";
import techAkshatSingh               from "./tech_akshat_singh.jpg"
import techDurgaPritam               from "./tech_durga_pritam.jpg"

import eventsBhavyaKothari           from "./events_bhavya_kothari.jpg";
import eventsKarthikVishal           from "./events_karthik_vishal.jpg";
import eventsNardaZaria              from "./events_narda_zaria.jpg";
import eventsMahinPoptani            from "./events_mahin_poptani.jpg";
import eventsMyshaIqbal              from "./events_mysha_iqbal.jpg";
import eventsReubenThomas            from "./events_reuben_thomas.jpg";

import marketingSathvikSreeram       from "./marketing_sathvik_sreeram.jpg";
import marketingEshanTiwari          from "./marketing_eshan_tiwari.jpg";
import marketingKAnkitaMenon         from "./marketing_k_ankita_menon.jpg";
import marketingSrinjitaRoyChowdhury from "./marketing_srinjita_roy_chowdhury.jpg";
import marketingKhyatiJetly          from "./marketing_khyati_jetly.jpg";
import marketingAmeiyaWankhede       from "./marketing_ameiya_wankhede.jpg";

import outreachUtkarshTripathi       from "./outreach_utkarsh_tripathi.jpg";
import outreachPrasannahRaman        from "./outreach_prasannah_raman.jpg";
import outreachAkashRajasekar        from "./outreach_akash_rajasekar.jpg";
import outreachDiyaFreddy            from "./outreach_diya_freddy.jpg";

import ambassadorTanishaHanda        from "./ambassador_tanisha_handa.jpg";
import ambassadorPriyanshuSingh      from "./ambassador_priyanshu_singh.jpg";
import ambassadorChhavi              from "./ambassador_chhavi.jpg";
import ambassadorAmintaBinu          from "./ambassador_aminta_binu.jpg";
import ambassadorSurajSingh          from "./ambassador_suraj_singh.jpg";
import ambassadorSmredhiShankar      from "./ambassador_smredhi_shankar.jpg";

import facultyDrElakkiyaR            from "./faculty_dr_elakkiya_r.jpg";



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



/** An array of members in the Core Members section @type {Member[]} */
const sectionCore = [
  {
    image: coreAryanSatwani,
    name: "Aryan Satwani",
    position: "Chair",
    linkInstagram: "https://instagram.com/aryan_satwani",
    linkLinkedIn: "https://linkedin.com/in/aryan-satwani-43a46a211",
    linkGitHub: "https://github.com/aryansatwani",
  },
  {
    image: coreMrudulaRahate,
    name: "Mrudula Rahate",
    position: "Co-Chair",
    linkInstagram: "https://instagram.com/mrudula12503",
    linkLinkedIn: "https://linkedin.com/in/mrudula-rahate",
    linkGitHub: "https://github.com/Mrudula1205",
  },
  {
    image: coreVennelaVallabhaneni,
    name: "Vennela Vallabhaneni",
    position: "Vice Chair",
    linkInstagram: "https://instagram.com/venn.by",
    linkLinkedIn: "https://linkedin.com/in/venn-v",
    linkGitHub: "https://github.com/vennby",
  },
  {
    image: coreAdityaGopinath,
    name: "Aditya Gopinath",
    position: "Ex-Officio",
    linkInstagram: "https://instagram.com/aditya_gopinath",
    linkLinkedIn: "https://linkedin.com/in/aditya-gopinath-a907091ab",
    linkGitHub: "https://github.com/adi14023",
  },
  {
    image: coreKeaneCoutinho,
    name: "Keane Coutinho",
    position: "Treasurer & DevOps Head",
    linkInstagram: "https://instagram.com/keane_2703",
    linkLinkedIn: "https://linkedin.com/in/keane-coutinho",
    linkGitHub: "https://github.com/keanec27",
  },
  {
    image: coreJoelJoseph,
    name: "Joel Joseph",
    position: "Outreach Head",
    linkInstagram: "https://instagram.com/joelj.05",
    linkLinkedIn: "https://linkedin.com/in/joel-joseph-30a289215",
    linkGitHub: "https://github.com/JJ512-ishere",
  },
  {
    image: coreLasyaSai,
    name: "Lasya Sai",
    position: "General Secretary",
    linkInstagram: "https://instagram.com/lasyaasai_",
    linkLinkedIn: "https://linkedin.com/in/lasya-sai-dabbakuti-533625249",
    linkGitHub: "https://github.com/LasyaSai",
  },
];

/** An array of members in the Tech Team @type {Member[]} */
const sectionTechTeam = [
  {
    image: techShaikMohammadAnas,
    name: "Shaik Mohammad Anas",
    position: "Technical Head",
    linkInstagram: "https://instagram.com/armaan_0510",
    linkLinkedIn: "https://linkedin.com/in/anas-shaik",
    linkGitHub: "https://github.com/Brightlord5",
  },
  {
    image: techLayaShreeElango,
    name: "Laya Shree Elango",
    position: "Technical Manager",
    linkInstagram: "https://instagram.com/layashreeelango",
    linkLinkedIn: "https://linkedin.com/in/laya-shree-elango",
    linkGitHub: "https://github.com/Laya-Shree",
  },
  {
    image: techStellinJohnGeorge,
    name: "Stellin John",
    position: "Technical Executive",
    linkInstagram: "https://instagram.com/Stellin_15",
    linkLinkedIn: "https://linkedin.com/in/stellin-john-george-1bb757163",
    linkGitHub: "https://github.com/Stellin-15",
  },
  {
    image: techSreenikethanIyer,
    name: "Sreenikethan Iyer",
    position: "Technical Executive",
    linkInstagram: "https://instagram.com/sreenikethan.i",
    linkLinkedIn: "https://linkedin.com/in/sreenikethan-i",
    linkGitHub: "https://github.com/SreenikethanI",
  },
  {
    image: techSiddharathNagesh,
    name: "Siddharath Nagesh",
    position: "Technical Executive",
    linkInstagram: "https://instagram.com/siddharath_nagesh",
    linkLinkedIn: "https://linkedin.com/in/siddharath-malavalli-nagesh-270b571ba",
    linkGitHub: "https://github.com/SiddharathMN",
  },
  {
    image: techVaibhavVinil,
    name: "Vaibhav Vinil",
    position: "Technical Executive",
    linkInstagram: "https://instagram.com/vaibhav_vinil",
    linkLinkedIn: "https://linkedin.com/in/vaibhav-vinil-87683a280",
    linkGitHub: "https://github.com/Vaibhav-Vinil",
  },
  {
    image: techSriHariSai,
    name: "Sri Hari Sai",
    position: "Technical Executive",
    linkInstagram: "https://instagram.com/ft.hyper",
    linkLinkedIn: "https://linkedin.com/in/sri-hari-sai-subramanian-737279322",
    linkGitHub: "https://github.com/HyperPlexG",
  },
  {
    image: techAkshatSingh,
    name: "Akshat Singh",
    position: "Technical Executive",
    linkInstagram: "https://instagram.com/akshatlovesyou",
    linkLinkedIn: "https://linkedin.com/in/akshatsingh-ind",
    linkGitHub: "https://github.com/Akshatcodesyou",
  },
  {
    image: techDurgaPritam,
    name: "Durga Pritam",
    position: "Technical Executive",
    linkInstagram: "https://instagram.com/pritam_lite",
    linkLinkedIn: "https://linkedin.com/in/durgapritam",
    linkGitHub: "https://github.com/DurgaPritam",
  },
];

/** An array of members in the Events Team @type {Member[]} */
const sectionEventsTeam = [
  {
    image: eventsBhavyaKothari,
    name: "Bhavya Kothari",
    position: "Events Head",
    linkInstagram: "https://instagram.com/bruhvya",
    linkLinkedIn: "https://linkedin.com/in/bhavya-manish-kothari",
    linkGitHub: "https://github.com/bruhvya",
  },
  {
    image: eventsKarthikVishal,
    name: "Karthik Vishal",
    position: "Events Manager",
    linkInstagram: "https://instagram.com/karthik_vishal03",
    linkLinkedIn: "https://linkedin.com/in/karthik-vishal-sr-1a7995245",
    linkGitHub: "https://github.com/Karthik-Vishal03",
  },
  {
    image: eventsNardaZaria,
    name: "Narda Zaria",
    position: "Strategy Manager",
    linkInstagram: "https://instagram.com/nardazaria",
    linkLinkedIn: "https://linkedin.com/in/narda-zaria-60254823b",
    linkGitHub: "https://github.com/nardazaria",
  },
  {
    image: eventsMahinPoptani,
    name: "Mahin Poptani",
    position: "Events Executive",
    linkInstagram: "https://instagram.com/mahin_sp20",
    linkLinkedIn: "https://linkedin.com/in/mahin-poptani-b22166118",
    linkGitHub: "https://github.com/Mahin200405",
  },
  {
    image: eventsMyshaIqbal,
    name: "Mysha Iqbal",
    position: "Events Executive",
    linkInstagram: "https://instagram.com/myshaa.i",
    linkLinkedIn: "https://linkedin.com/in/mysha-i-baaa87318",
    linkGitHub: "https://github.com/Mysha-BITS",
  },
  {
    image: eventsReubenThomas,
    name: "Reuben Thomas",
    position: "Events Executive",
    linkInstagram: "https://instagram.com/reuben_thooo",
    linkLinkedIn: "https://linkedin.com/in/reuben-thomas-thovelil-689893263",
    linkGitHub: "https://github.com/reuben-tho",
  },
];

/** An array of members in the Marketing & Creative Team @type {Member[]} */
const sectionMarketingTeam = [
  {
    image: marketingSathvikSreeram,
    name: "Sathvik Sreeram",
    position: "Marketing Head",
    linkInstagram: "https://instagram.com/sathvikboseman",
    linkLinkedIn: "https://linkedin.com/in/sathvik-sreeram-06b350280",
    linkGitHub: "https://github.com/sathvikboseman",
  },
  {
    image: marketingEshanTiwari,
    name: "Eshan Tiwari",
    position: "Creative Head",
    linkInstagram: "https://instagram.com/eshan.tiw_",
    linkLinkedIn: "https://linkedin.com/in/eshan-tiwari-354728274",
    linkGitHub: "https://github.com/Eshan-BlipTweak",
  },
  {
    image: marketingKAnkitaMenon,
    name: "K Ankita Menon",
    position: "Marketing Executive",
    linkInstagram: "https://instagram.com/ankita_menon_04",
    linkLinkedIn: "https://linkedin.com/in/k-ankita-menon-4513b8232",
    linkGitHub: "https://github.com/ankita-17-09",
  },
  {
    image: marketingSrinjitaRoyChowdhury,
    name: "Srinjita Roy Chowdhury",
    position: "Marketing Executive",
    linkInstagram: "https://instagram.com/srinxie",
    linkLinkedIn: "https://linkedin.com/in/srinjita-roy-chowdhury-99707531a",
    linkGitHub: "https://github.com/Srinjita-RC",
  },
  {
    image: marketingKhyatiJetly,
    name: "Khyati Jetly",
    position: "Marketing Executive",
    linkInstagram: "https://instagram.com/_kxyati_",
    linkLinkedIn: "https://linkedin.com/in/khyati-jetly-085792306",
    linkGitHub: "https://github.com/khyati2107",
  },
  {
    image: marketingAmeiyaWankhede,
    name: "Ameiya Wankhede",
    position: "Creative Executive",
    linkInstagram: "https://instagram.com/ameiya.w",
    linkLinkedIn: "https://linkedin.com/in/ameiya-wankhede-7600912b1",
    linkGitHub: "https://github.com/aw2106",
  },
];

/** An array of members in the Outreach & DevOps Team @type {Member[]} */
const sectionOutreachTeam = [
  {
    image: outreachUtkarshTripathi,
    name: "Utkarsh Tripathi",
    position: "Outreach Manager",
    linkInstagram: "https://instagram.com/Wtffut",
    linkLinkedIn: "https://linkedin.com/in/wtffut",
    linkGitHub: "https://github.com/btwitsutkarsh",
  },
  {
    image: outreachPrasannahRaman,
    name: "Prasannah Raman",
    position: "Outreach Manager",
    linkInstagram: "https://instagram.com/_prasannargh",
    linkLinkedIn: "https://linkedin.com/in/prasannah-raman-0a7a6926b",
    linkGitHub: "https://github.com/prastostart",
  },
  {
    image: outreachAkashRajasekar,
    name: "Akash Rajasekar",
    position: "DevOps Manager",
    linkInstagram: "https://instagram.com/akash_r3",
    linkLinkedIn: "https://linkedin.com/in/akash-rajasekar",
    linkGitHub: "https://github.com/Akashrajasekar",
  },
  {
    image: outreachDiyaFreddy,
    name: "Diya Freddy",
    position: "Content Executive",
    linkInstagram: "https://instagram.com/diya.freddy",
    linkLinkedIn: "https://linkedin.com/in/diya-freddy-1592012b4",
    linkGitHub: "https://github.com/diyastudio1",
  },
];

/** An array of members in the Ambassadors section @type {Member[]} */
const sectionAmbassadors = [
  {
    image: ambassadorTanishaHanda,
    name: "Tanisha Handa",
    position: "Technical Ambassador",
    linkInstagram: "https://instagram.com/txnishx24",
    linkLinkedIn: "",
    linkGitHub: "",
  },
  {
    image: ambassadorPriyanshuSingh,
    name: "Priyanshu Singh",
    position: "Technical Ambassador",
    linkInstagram: "https://instagram.com/prx.py",
    linkLinkedIn: "https://linkedin.com/in/priyanshusingh10",
    linkGitHub: "https://github.com/prxcode",
  },
  {
    image: ambassadorChhavi,
    name: "Chhavi",
    position: "Technical & Creative Ambassador",
    linkInstagram: "https://instagram.com/chhavithegreat",
    linkLinkedIn: "https://linkedin.com/in/fnu-chhavi-094b6b286",
    linkGitHub: "https://github.com/chhaavii",
  },
  {
    image: ambassadorAmintaBinu,
    name: "Aminta Binu",
    position: "Marketing Ambassador",
    linkInstagram: "https://instagram.com/amintaa_bt",
    linkLinkedIn: "https://linkedin.com/in/aminta-binu-thomas-435731331",
    linkGitHub: "https://github.com/aminta-bt",
  },
  {
    image: ambassadorSurajSingh,
    name: "Suraj Singh",
    position: "Marketing Ambassador",
    linkInstagram: "https://instagram.com/surxj.xx",
    linkLinkedIn: "https://linkedin.com/in/suraj-singh-750a67320",
    linkGitHub: "https://github.com/SurajBlazer",
  },
  {
    image: ambassadorSmredhiShankar,
    name: "Smredhi Shankar",
    position: "Creative Ambassador",
    linkInstagram: "https://instagram.com/smrredhi",
    linkLinkedIn: "https://linkedin.com/in/smredhi-shankar-926210331",
    linkGitHub: "https://github.com/smredhi",
  },
];

/** An array of members in the Faculty In-Charge section @type {Member[]} */
const sectionFaculty = [
  {
    image: facultyDrElakkiyaR,
    name: "Dr. Elakkiya R.",
    position: "Assistant Professor",
    linkLinkedIn: "https://linkedin.com/in/elakkiya-r-581884b1",
  }
]



/** An array of all sections in the About page. @type {Section[]} */
const sections = [
  {numCols: 4, sectionTitle: "Core Members", members: sectionCore},
  {numCols: 3, sectionTitle: "Tech Team", members: sectionTechTeam},
  {numCols: 3, sectionTitle: "Events Team", members: sectionEventsTeam},
  {numCols: 3, sectionTitle: "Marketing & Creative Team", members: sectionMarketingTeam},
  {numCols: 2, sectionTitle: "Outreach & DevOps Team", members: sectionOutreachTeam},
  {numCols: 3, sectionTitle: "Ambassadors", members: sectionAmbassadors},
  {numCols: 1, sectionTitle: "Faculty In-Charge", members: sectionFaculty},
];

export default sections;
