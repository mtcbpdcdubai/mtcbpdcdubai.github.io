import coreMember1 from "./core_aryan_satwani.jpg";
import coreMember2 from "./core_mrudula_rahate.jpg";
import coreMember3 from "./core_vennela_vallabhaneni.jpg";
import coreMember4 from "./core_aditya_gopinath.jpg";
import coreMember5 from "./core_keane_coutinho.jpg";
import coreMember6 from "./core_lasya_sai.jpg";
import techMember1 from "./tech_shaik_mohammed_anas.jpg";
import techMember2 from "./tech_laya_shree_elango.jpg";
import techMember3 from "./tech_stellin_john_george.jpg";
import techMember4 from "./tech_srihari_sai.jpg";
import eventsMember1 from "./events_bhavya_kothari.jpg";
import eventsMember2 from "./events_karthik_vishal.jpg";
import eventsMember3 from "./events_narda_zaria.jpg";
import eventsMember4 from "./events_mahin_poptani.jpg";
import eventsMember5 from "./events_mysha_iqbal.jpg";
import eventsMember6 from "./events_reuben_thomas.jpg";
import marketingMember1 from "./marketing_satvik_sreeram.jpg";
import marketingMember2 from "./marketing_eshan_tiwari.jpg";
import marketingMember3 from "./marketing_k_ankita_menon.jpg";
import marketingMember4 from "./marketing_khyati_jetly.jpg";
import marketingMember5 from "./marketing_srinjita_roy_chowdhury.jpg";
import marketingMember6 from "./marketing_hana_riyas.jpg";
import marketingMember7 from "./marketing_ameyia_wankhede.jpg";
import outreachMember1 from "./outreach_joel_joseph.jpg";
import outreachMember2 from "./outreach_utkarsh_tripathi.jpg";
import outreachMember3 from "./outreach_prasannah_raman.jpg";
import outreachMember4 from "./outreach_siddharath_nagesh.jpg";
import outreachMember5 from "./outreach_akash_rajasekar.jpg";
import outreachMember6 from "./outreach_diya_freddy.jpg";
import facultyInCharge from "./faculty_dr_elakkiya_r.jpg";

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
 */



/** An array of members in the Core Members section @type {Member[]} */
const sectionCore = [
  {
    image: coreMember1,
    name: "Aryan Satwani",
    position: "Chair",
    linkInstagram: "https://www.instagram.com/aryan_satwani/",
    linkLinkedIn: "https://www.linkedin.com/in/aryan-satwani-43a46a211/",
    linkGitHub: "https://github.com/aryansatwani",
  },
  {
    image: coreMember2,
    name: "Mrudula Rahate",
    position: "Co-Chair",
    linkInstagram: "https://www.instagram.com/mrudula12503/",
    linkLinkedIn: "https://www.linkedin.com/in/mrudula-rahate/",
    linkGitHub: "https://github.com/Mrudula1205",
  },
  {
    image: coreMember3,
    name: "Vennela Vallabhaneni",
    position: "Vice Chair",
    linkInstagram: "https://www.instagram.com/venn.by/",
    linkLinkedIn: "https://www.linkedin.com/in/venn-v/",
    linkGitHub: "https://github.com/vennby",
  },
  {
    image: coreMember4,
    name: "Aditya Gopinath",
    position: "Ex-Officio",
    linkInstagram: "https://www.instagram.com/aditya_gopinath/",
    linkLinkedIn: "https://www.linkedin.com/in/aditya-gopinath-a907091ab/",
    linkGitHub: "https://github.com/adi14023",
  },
  {
    image: coreMember5,
    name: "Keane Coutinho",
    position: "Treasurer & DevOps Head",
    linkInstagram: "https://www.instagram.com/keane_2703/",
    linkLinkedIn: "https://www.linkedin.com/in/keane-coutinho/",
    linkGitHub: "https://github.com/keanec27",
  },
  {
    image: coreMember6,
    name: "Lasya Sai",
    position: "General Secretary",
    linkInstagram: "https://www.instagram.com/lasyaasai_/",
    linkLinkedIn: "http://www.linkedin.com/in/lasya-sai-dabbakuti-533625249",
    linkGitHub: "https://github.com/LasyaSai",
  },
];

/** An array of members in the Tech Team @type {Member[]} */
const sectionTechTeam = [
  {
    image: techMember1,
    name: "Shaik Mohammed Anas",
    position: "Technical Head",
    linkInstagram: "https://www.instagram.com/armaan_0510/",
    linkLinkedIn: "https://www.linkedin.com/in/anas-shaik/",
    linkGitHub: "https://github.com/Brightlord5",
  },
  {
    image: techMember2,
    name: "Laya Shree Elango",
    position: "Technical Manager",
    linkInstagram: "https://www.instagram.com/layashreeelango/",
    linkLinkedIn: "http://www.linkedin.com/in/laya-shree-elango",
    linkGitHub: "https://github.com/Laya-Shree",
  },
  {
    image: techMember3,
    name: "Stellin John George",
    position: "Technical Executive",
    linkInstagram: "https://www.instagram.com/Stellin_15/",
    linkLinkedIn: "http://www.linkedin.com/in/stellin-john-george-1bb757163",
    linkGitHub: "https://github.com/Stellin-15",
  },
  {
    image: techMember4,
    name: "Srihari Sai",
    position: "Technical Executive",
    linkInstagram: "http://instagram.com/ft.hyper",
    linkLinkedIn: "http://www.linkedin.com/in/sri-hari-sai-subramanian-737279322",
    linkGitHub: "http://github.com/HyperPlexG",
  },
];

/** An array of members in the Events Team @type {Member[]} */
const sectionEventsTeam = [
  {
    image: eventsMember1,
    name: "Bhavya Kothari",
    position: "Events Head",
    linkInstagram: "https://www.instagram.com/bruhvya/",
    linkLinkedIn: "https://www.linkedin.com/in/bhavya-manish-kothari/",
    linkGitHub: "https://github.com/bruhvya",
  },
  {
    image: eventsMember2,
    name: "Karthik Vishal",
    position: "Events Manager",
    linkInstagram: "https://www.instagram.com/karthik_vishal03/",
    linkLinkedIn: "https://www.linkedin.com/in/karthik-vishal-sr-1a7995245/",
    linkGitHub: "https://github.com/Karthik-Vishal03",
  },
  {
    image: eventsMember3,
    name: "Narda Zaria",
    position: "Strategy Officer",
    linkInstagram: "https://www.instagram.com/nardazaria/",
    linkLinkedIn: "https://www.linkedin.com/in/narda-zaria-60254823b/",
    linkGitHub: "https://github.com/aina282",
  },
  {
    image: eventsMember4,
    name: "Mahin Poptani",
    position: "Events Executive",
    linkInstagram: "https://www.instagram.com/mahin_sp20/",
    linkLinkedIn: "https://www.linkedin.com/in/mahin-poptani-b22166118/",
    linkGitHub: "https://github.com/Mahin200405",
  },
  {
    image: eventsMember5,
    name: "Mysha Iqbal",
    position: "Events Executive",
    linkInstagram: "https://www.instagram.com/myshaa.i/",
    linkLinkedIn: "https://www.linkedin.com/in/mysha-i-baaa87318/",
    linkGitHub: "https://github.com/Mysha-BITS",
  },
  {
    image: eventsMember6,
    name: "Reuben Thomas",
    position: "Events Executive",
    linkInstagram: "https://www.instagram.com/reuben_thooo/",
    linkLinkedIn: "https://www.linkedin.com/in/reuben-thomas-689893263/",
    linkGitHub: "https://github.com/reuben-tho",
  },
];

/** An array of members in the Marketing & Creative Team @type {Member[]} */
const sectionMarketingTeam = [
  {
    image: marketingMember1,
    name: "Satvik Sreeram",
    position: "Marketing Head",
    linkInstagram: "https://www.instagram.com/sathvikboseman/",
    linkLinkedIn: "https://www.linkedin.com/in/sathvik-sreeram-06b350280/",
    linkGitHub: "https://github.com/sathvikboseman",
  },
  {
    image: marketingMember2,
    name: "Eshan Tiwari",
    position: "Creative Head",
    linkInstagram: "https://www.instagram.com/eshan.tiw_/",
    linkLinkedIn: "https://www.linkedin.com/in/eshan-tiwari-354728274/",
    linkGitHub: "https://github.com/Eshan-BlipTweak",
  },
  {
    image: marketingMember3,
    name: "K Ankita Menon",
    position: "Marketing Executive",
    linkInstagram: "https://www.instagram.com/ankita_menon_04/",
    linkLinkedIn: "https://www.linkedin.com/in/k-ankita-menon-4513b8232/",
    linkGitHub: "",
  },
  {
    image: marketingMember4,
    name: "Khyati Jetly",
    position: "Marketing Executive",
    linkInstagram: "https://www.instagram.com/_kxyati_/",
    linkLinkedIn: "http://www.linkedin.com/in/khyati-jetly-085792306",
    linkGitHub: "https://github.com/khyati2107",
  },
  {
    image: marketingMember5,
    name: "Srinjita Roy Chowdhury",
    position: "Marketing Executive",
    linkInstagram: "https://www.instagram.com/srinxie/",
    linkLinkedIn: "https://www.linkedin.com/in/srinjita-roy-chowdhury-99707531a/",
    linkGitHub: "https://github.com/Srinjita-RC",
  },
  {
    image: marketingMember7,
    name: "Ameyia Wankhede",
    position: "Creative Executive",
    linkInstagram: "https://www.instagram.com/ameiya.w/",
    linkLinkedIn: "https://www.linkedin.com/in/ameiya-wankhede-7600912b1",
    linkGitHub: "https://github.com/aw2106",
  },
];

/** An array of members in the Outreach & DevOps Team @type {Member[]} */
const sectionOutreachTeam = [
  {
    image: outreachMember1,
    name: "Joel Joseph",
    position: "Outreach Head",
    linkInstagram: "https://www.instagram.com/joelj.05/",
    linkLinkedIn: "https://www.linkedin.com/in/joel-joseph-30a289215/",
    linkGitHub: "https://github.com/JJ512-ishere",
  },
  {
    image: outreachMember2,
    name: "Utkarsh Tripathi",
    position: "Outreach Manager",
    linkInstagram: "https://www.instagram.com/Wtffut/",
    linkLinkedIn: "http://www.linkedin.com/in/wtffut",
    linkGitHub: "https://github.com/btwitsutkarsh",
  },
  {
    image: outreachMember3,
    name: "Prasannah Raman",
    position: "Outreach Manager",
    linkInstagram: "https://www.instagram.com/_prasannargh/",
    linkLinkedIn: "https://www.linkedin.com/in/prasannah-raman-0a7a6926b/",
    linkGitHub: "https://github.com/codeyko-blip",
  },
  {
    image: outreachMember4,
    name: "Siddharath Nagesh",
    position: "DevOps Manager",
    linkInstagram: "https://www.instagram.com/siddharath_nagesh?igsh=eG11d2JwNmhscGEx",
    linkLinkedIn: "http://linkedin.com/in/siddharath-malavalli-nagesh-270b571ba",
    linkGitHub: "https://github.com/SiddharathMN",
  },
  {
    image: outreachMember5,
    name: "Akash Rajasekar",
    position: "DevOps Manager",
    linkInstagram: "https://www.instagram.com/akash_r3/",
    linkLinkedIn: "https://www.linkedin.com/in/akash-rajasekar/",
    linkGitHub: "https://github.com/Akashrajasekar",
  },
  {
    image: outreachMember6,
    name: "Diya Freddy",
    position: "Content Executive",
    linkInstagram: "https://www.instagram.com/diya.freddy/",
    linkLinkedIn: "https://www.linkedin.com/in/diya-freddy-1592012b4/",
    linkGitHub: "https://github.com/diyastudio1",
  },
];

/** An array of members in the Faculty In-Charge section @type {Member[]} */
const sectionFaculty = [
  {
    image: facultyInCharge,
    name: "Dr. Elakkiya R.",
    position: "Assistant Professor",
    linkLinkedIn: "https://www.linkedin.com/in/dr-elakkiya-r-581884b1/",
  }
]



/** An array of all sections in the About page. @type {Section[]} */
const sections = [
  {sectionTitle: "Core Members", members: sectionCore},
  {sectionTitle: "Tech Team", members: sectionTechTeam},
  {sectionTitle: "Events Team", members: sectionEventsTeam},
  {sectionTitle: "Marketing & Creative Team", members: sectionMarketingTeam},
  {sectionTitle: "Outreach & DevOps Team", members: sectionOutreachTeam},
  {sectionTitle: "Faculty In-Charge", members: sectionFaculty},
];

export default sections;
