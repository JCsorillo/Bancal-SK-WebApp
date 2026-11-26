// Bancal SK v1.7.0 content data. Edit here to add or change projects and translations.
// Project list source: "Projects / Programs / Activities Implemented This 2025 by Bancal SK" poster.
window.SECTORS = {
  gov: "Governance",
  health: "Health awareness and campaigns",
  sports: "Sports and youth development",
  socio: "Sociocultural activities",
  env: "Environment",
  youth: "Youth support and services",
  edu: "Education",
  incl: "Social inclusion and equity",
  aware: "Awareness seminars and campaigns"
};

window.PROJECTS = [
  [1,"gov","Official construction of the SK Office","Feb 2025"],
  [2,"gov","SK logo and building marker","Apr 2025"],
  [3,"gov","SK Office tables, folding tables and wooden file cabinets","2025"],
  [4,"gov","SK Office sofa, swivel chair and wooden chairs","2025"],
  [5,"gov","Purchase of office equipment and materials","2025"],
  [6,"gov","Katipunan ng Kabataan Assembly","Aug 23, 2025"],
  [7,"gov","Katipunan ng Kabataan Assembly, 2nd quarter","Oct 26, 2025"],
  [8,"health","Feeding and Bible Study programs","May 2025"],
  [9,"health","Safe Spaces: Mental Health Campaign","May 2025"],
  [10,"health","Teenage Pregnancy Awareness Campaign","Aug 23, 2025"],
  [11,"health","Youth Preparedness Training with MDRRMO","Aug 23, 2025"],
  [12,"health","Mental Health Awareness Campaign Among Adolescents, Part 2","Oct 26, 2025"],
  [13,"health","Basic First Aid and CPR Training with MDRRMC","Dec 27, 2025"],
  [14,"sports","Inter-Sitio Basketball League","Jan 2025"],
  [15,"sports","Repainting of basketball and volleyball courts","Jan 2025"],
  [16,"sports","Distribution of volleyballs and basketballs","Mar–Apr 2025"],
  [17,"sports","Painting of badminton court","May 2025"],
  [18,"sports","Badminton league and tournament","May 2025"],
  [19,"sports","Sports clinic: badminton training for kids","Jun 2025"],
  [20,"sports","Installation of basketball ring and nets at Sitio Cambalatong court","Jun 2025"],
  [21,"sports","Basketball league at Sitio Cambalatong","Jun 2025"],
  [22,"sports","Volleyball league in partnership with Arlanza Cup","Nov 29–30, 2025"],
  [23,"socio","Talent Enhancement: Bancal Got Talent at Sitio Cambalatong","Jun 22, 2025"],
  [24,"socio","Filmmaking activity","Aug 30, 2025"],
  [25,"socio","Search for Miss Linggo ng Kabataan 2025","Aug 30, 2025"],
  [26,"socio","Arts and Creativity Development: Kids' costume party","Nov 1, 2025"],
  [27,"socio","Muse and Escort Runway Showdown","Dec 27, 2025"],
  [28,"env","Recycling and waste segregation campaign","Oct 26, 2025"],
  [29,"env","Anti-littering and clean barangay campaign","Oct 26, 2025"],
  [30,"env","Disaster risk reduction: earthquake drills and awareness","Oct 26, 2025"],
  [31,"env","Coastal Care Project: mangrove planting, 1st batch","Nov 1, 2025"],
  [32,"env","Coastal Care Project: mangrove planting, 2nd batch","Nov 15, 2025"],
  [33,"youth","Sharing of Blessings: brand new phones, with sponsors","Apr 2025"],
  [34,"youth","Sharing of Blessings: cash for Bancal Integrated School students","May 2025"],
  [35,"edu","Free prints for all Bancaleños","Ongoing 2025"],
  [36,"edu","School supplies for 200 students at Bancal Integrated School","Aug 18, 2025"],
  [37,"edu","₱1,500 financial rewards for college graduates with Latin honors","Aug 23, 2025"],
  [38,"edu","₱1,000 financial rewards for college graduates","Aug 23, 2025"],
  [39,"edu","₱700 financial rewards for Dean's Listers","Aug 23, 2025"],
  [40,"edu","₱500 financial assistance for 86 college students","Oct 26 – Nov 15"],
  [41,"edu","Free Wi-Fi for students","Oct 2025"],
  [42,"incl","Project Talk Series: empowerment and encouragement for persons with disabilities, with MSWDO","Dec 24, 2025"],
  [43,"incl","Project Handog: ₱1,000 financial assistance for each person with a disability","Dec 24, 2025"],
  [44,"incl","Project Handog: gift giving for persons with disabilities","Dec 24, 2025"],
  [45,"aware","Awareness seminar on online sexual abuse and exploitation of children","May 2025"],
  [46,"aware","Anti-bullying and anti-violence campaign with MPS","Jun 2025"],
  [47,"aware","Kabataan Negosyante: online selling campaign","2025"],
  [48,"aware","Hire Ready: youth résumé workshop","2025"],
  [49,"aware","Anti-drugs campaign with Carles MPS","2025"]
].map(([n, s, t, d]) => ({ n, s, t, d }));

// Translations. EN is the source. HIL (Hiligaynon) is a draft: have a Bancal local review it before launch.
window.I18N = {
  en: {
    "nav.overview":"Overview","nav.first45":"First 45 days","nav.projects":"2025 projects","nav.officials":"Officials","nav.reports":"Latest reports","nav.reach":"Reach the SK",
    "hero.summary":"Sports leagues, scholarships, feeding programs, clean-ups and help for families. Run by the youth council of Barangay Bancal, term 2023–2026.",
    "hero.cta":"Explore the work",
    "stat.1":"programs in the first 1½ months, before any budget arrived","stat.2":"projects, programs and activities in 2025","stat.3":"sectors served, from sports to social inclusion","stat.4":"Feed Your Soul & Stomach, running since June 2022",
    "f45.title":"The first 45 days","f45.body":"From November 3 to December 2023, the SK23 officials carried out 13 programs, projects and activities for the youth and the barangay, before receiving any funds or budget.","f45.quote":"“True service does not wait for funding before it moves.”",
    "f.all":"All","f.nov":"November","f.dec":"December","f.pending":"Poster pending","f.undated":"Date to be added",
    "flag.body":"A Bible study and feeding program for children, started by Nicole Anne Barbosa in June 2022. It continues under the SK and is still accepting donations and volunteers.",
    "proj.title":"What the SK did in 2025","proj.body":"49 projects, programs and activities across nine sectors. Search the list or filter by sector.","proj.poster":"View the original 2025 poster","proj.search":"Search projects","proj.none":"No project matches that search.","proj.count":"Showing {n} of 49","proj.all":"All",
    "th.no":"No.","th.project":"Project","th.sector":"Sector","th.date":"Date",
    "off.title":"Your SK officials","off.body":"Elected to serve the youth of Barangay Bancal, term 2023–2026.",
    "rep.title":"Latest reports","rep.body":"Accomplishment reports as the SK posts them on Facebook.",
    "reach.title":"Reach the SK","reach.cta.body":"Questions about programs, scholarships or events? Write your message here and send it through the SK's Facebook profile.","reach.write":"Write a message",
    "reach.body":"Write your question or concern here, then send it through the SK's Facebook profile. This site does not store or send your message.",
    "form.name":"Name (optional)","form.topic":"Topic","form.msg":"Message","form.send":"Copy message and open Facebook","form.ok":"Message copied. Paste it in a message to the SK page.","form.hi":"Hello SK Bancal,",
    "topic.1":"Youth programs and registration","topic.2":"Scholarship or assistance","topic.3":"Sports equipment or court use","topic.4":"Report a concern","topic.5":"Something else",
    "foot.note":"Built from the SK's published posters and reports. For official announcements, follow the SK on Facebook."
  },
  tl: {
    "nav.overview":"Pangkalahatan","nav.first45":"Unang 45 araw","nav.projects":"Mga proyekto 2025","nav.officials":"Mga opisyal","nav.reports":"Mga huling ulat","nav.reach":"Makipag-ugnayan",
    "hero.summary":"Mga liga sa palakasan, scholarship, feeding program, paglilinis at tulong sa mga pamilya. Pinapatakbo ng konseho ng kabataan ng Barangay Bancal, 2023–2026.",
    "hero.cta":"Tingnan ang mga gawa",
    "stat.1":"programa sa unang 1½ buwan, bago pa dumating ang pondo","stat.2":"proyekto, programa at aktibidad noong 2025","stat.3":"sektor na natulungan, mula palakasan hanggang social inclusion","stat.4":"Feed Your Soul & Stomach, tuloy mula Hunyo 2022",
    "f45.title":"Ang unang 45 araw","f45.body":"Mula Nobyembre 3 hanggang Disyembre 2023, naisakatuparan ng mga opisyal ng SK23 ang 13 programa, proyekto at aktibidad para sa kabataan at sa barangay, bago pa matanggap ang anumang pondo o budget.","f45.quote":"“Ang tunay na serbisyo ay hindi naghihintay ng pondo bago kumilos.”",
    "f.all":"Lahat","f.nov":"Nobyembre","f.dec":"Disyembre","f.pending":"Hinihintay pa ang poster","f.undated":"Idadagdag pa ang petsa",
    "flag.body":"Bible study at feeding program para sa mga bata, sinimulan ni Nicole Anne Barbosa noong Hunyo 2022. Nagpapatuloy ito sa ilalim ng SK at tumatanggap pa rin ng donasyon at boluntaryo.",
    "proj.title":"Ang ginawa ng SK noong 2025","proj.body":"49 proyekto, programa at aktibidad sa siyam na sektor. Maghanap o salain ayon sa sektor.","proj.poster":"Tingnan ang orihinal na poster ng 2025","proj.search":"Maghanap ng proyekto","proj.none":"Walang proyektong tugma sa hinahanap.","proj.count":"Ipinapakita ang {n} sa 49","proj.all":"Lahat",
    "th.no":"Blg.","th.project":"Proyekto","th.sector":"Sektor","th.date":"Petsa",
    "off.title":"Ang inyong mga opisyal ng SK","off.body":"Inihalal upang maglingkod sa kabataan ng Barangay Bancal, 2023–2026.",
    "rep.title":"Mga huling ulat","rep.body":"Mga accomplishment report gaya ng ipinopost ng SK sa Facebook.",
    "reach.title":"Makipag-ugnayan sa SK","reach.cta.body":"May tanong tungkol sa mga programa, scholarship o event? Isulat dito ang mensahe at ipadala sa Facebook profile ng SK.","reach.write":"Magsulat ng mensahe",
    "reach.body":"Isulat dito ang inyong tanong o concern, saka ipadala sa Facebook profile ng SK. Hindi iniimbak o ipinapadala ng site na ito ang inyong mensahe.",
    "form.name":"Pangalan (opsyonal)","form.topic":"Paksa","form.msg":"Mensahe","form.send":"Kopyahin ang mensahe at buksan ang Facebook","form.ok":"Nakopya na ang mensahe. I-paste ito sa mensahe sa profile ng SK.","form.hi":"Magandang araw, SK Bancal,",
    "topic.1":"Mga programa at rehistro ng kabataan","topic.2":"Scholarship o tulong","topic.3":"Gamit pang-sports o paggamit ng court","topic.4":"Mag-ulat ng concern","topic.5":"Iba pa",
    "foot.note":"Gawa mula sa mga na-publish na poster at ulat ng SK. Para sa opisyal na anunsyo, i-follow ang SK sa Facebook."
  },
  hil: {
    "nav.overview":"Sang-ob","nav.first45":"Una nga 45 ka adlaw","nav.projects":"Mga proyekto 2025","nav.officials":"Mga opisyal","nav.reports":"Mga bag-o nga report","nav.reach":"Magsugid sa SK",
    "hero.summary":"Mga liga sa sports, scholarship, pagpakaon, hinloan kag bulig sa mga pamilya. Ginapadalagan sang konseho sang kabataan sang Barangay Bancal, 2023–2026.",
    "hero.cta":"Tan-awa ang mga ginhimo",
    "stat.1":"ka programa sa una nga 1½ ka bulan, antes pa makaabot ang pondo","stat.2":"ka proyekto, programa kag buluhaton sang 2025","stat.3":"ka sektor nga nabuligan, halin sa sports hasta social inclusion","stat.4":"Feed Your Soul & Stomach, nagapadayon halin Hunyo 2022",
    "f45.title":"Ang una nga 45 ka adlaw","f45.body":"Halin Nobyembre 3 hasta Disyembre 2023, natuman sang mga opisyal sang SK23 ang 13 ka programa, proyekto kag buluhaton para sa kabataan kag sa barangay, antes pa makabaton sang pondo ukon budget.","f45.quote":"“Ang matuod nga serbisyo wala nagahulat sang pondo antes magpanghikot.”",
    "f.all":"Tanan","f.nov":"Nobyembre","f.dec":"Disyembre","f.pending":"Ginahulat pa ang poster","f.undated":"Madugang pa ang petsa",
    "flag.body":"Bible study kag pagpakaon para sa mga bata, gin-umpisahan ni Nicole Anne Barbosa sang Hunyo 2022. Nagapadayon ini sa idalom sang SK kag nagabaton pa sang donasyon kag boluntaryo.",
    "proj.title":"Ang ginhimo sang SK sang 2025","proj.body":"49 ka proyekto, programa kag buluhaton sa siyam ka sektor. Pangita ukon pili-a suno sa sektor.","proj.poster":"Tan-awa ang orihinal nga poster sang 2025","proj.search":"Pangitaa ang proyekto","proj.none":"Wala sing proyekto nga katugma.","proj.count":"Ginapakita ang {n} sa 49","proj.all":"Tanan",
    "th.no":"Blg.","th.project":"Proyekto","th.sector":"Sektor","th.date":"Petsa",
    "off.title":"Ang inyo mga opisyal sang SK","off.body":"Gin-eleksyon agod magserbisyo sa kabataan sang Barangay Bancal, 2023–2026.",
    "rep.title":"Mga bag-o nga report","rep.body":"Mga accomplishment report subong sang gina-post sang SK sa Facebook.",
    "reach.title":"Magsugid sa SK","reach.cta.body":"May pamangkot bahin sa mga programa, scholarship ukon event? Isulat diri ang mensahe kag ipadala sa Facebook profile sang SK.","reach.write":"Magsulat sang mensahe",
    "reach.body":"Isulat diri ang inyo pamangkot ukon concern, dayon ipadala sa Facebook profile sang SK. Wala ginatigana ukon ginapadala sining site ang inyo mensahe.",
    "form.name":"Pangalan (opsyonal)","form.topic":"Hilisgutan","form.msg":"Mensahe","form.send":"Kopyaha ang mensahe kag buksi ang Facebook","form.ok":"Nakopya na ang mensahe. I-paste ini sa mensahe sa profile sang SK.","form.hi":"Maayong adlaw, SK Bancal,",
    "topic.1":"Mga programa kag rehistro sang kabataan","topic.2":"Scholarship ukon bulig","topic.3":"Gamit sa sports ukon paggamit sang court","topic.4":"Magreport sang concern","topic.5":"Iban pa",
    "foot.note":"Ginhimo halin sa mga na-publish nga poster kag report sang SK. Para sa opisyal nga anunsyo, i-follow ang SK sa Facebook."
  }
};


// v1.2.0 additions: intro, feed, bento and sidebar strings.
Object.assign(window.I18N.en,{
 "intro.tap":"Tap anywhere to continue","welcome.word":"Welcome","welcome.sub":"Maayong pag-abot · Maligayang pagdating","welcome.org":"Sangguniang Kabataan · Barangay Bancal, Carles, Iloilo",
 "hero.tag":"The SK23 council, Barangay Bancal","hero.cta2":"See the first 45 days",
 "act.salamat":"Salamat","act.fb":"SK on Facebook","feed.note":"Posters are shown as the SK published them. Dates come from the posters.",
 "side.about":"SK Bancal","side.aboutbody":"The Sangguniang Kabataan of Barangay Bancal, Carles, Iloilo. Chair: Hon. Nicole Anne D. Barbosa.","side.quote":"No budget yet. We started anyway.","side.tags":"Hashtags","side.follow":"Follow",
 "fb.page":"SK Bancal profile","fb.chair":"SK Chair Nicole Anne Barbosa",
 "flag.title":"Feed Your Soul & Stomach","flag.m1":"A Bible study and feeding program for children begins","flag.m2":"Poster for the November 25 session","flag.m3":"Listed among the 2025 projects","flag.m4":"Latest poster: Bible Study and Feeding Program","flag.d1":"Jun 2022","flag.d2":"Nov 2023","flag.d3":"May 2025","flag.d4":"Nov 2026",
 "bento.hint":"Tap a tile to filter the table. Tap it again to clear.","bento.clear":"Show all 49",
 "lat.1":"Bible Study and Feeding Program","lat.2":"2025 projects, programs and activities","lat.3":"Financial assistance for persons with disabilities","lat.4":"Inter-Sitio Basketball League, SK24",
 "reach.h":"Got a question for the SK?","pending.t":"Poster coming soon","pending.b":"The SK counts 13 programs. Two posters have not been added yet."
});
Object.assign(window.I18N.tl,{
 "intro.tap":"Pindutin kahit saan para magpatuloy","welcome.word":"Maligayang pagdating","welcome.sub":"Maayong pag-abot · Welcome","welcome.org":"Sangguniang Kabataan · Barangay Bancal, Carles, Iloilo",
 "hero.tag":"Ang SK23 council, Barangay Bancal","hero.cta2":"Tingnan ang unang 45 araw",
 "act.salamat":"Salamat","act.fb":"SK sa Facebook","feed.note":"Ipinapakita ang mga poster ayon sa pagkaka-publish ng SK. Galing sa mga poster ang mga petsa.",
 "side.about":"SK Bancal","side.aboutbody":"Ang Sangguniang Kabataan ng Barangay Bancal, Carles, Iloilo. Chair: Hon. Nicole Anne D. Barbosa.","side.quote":"Wala pang budget. Nagsimula pa rin kami.","side.tags":"Mga hashtag","side.follow":"I-follow",
 "fb.page":"Page ng SK Bancal","fb.chair":"SK Chair Nicole Anne Barbosa",
 "flag.title":"Feed Your Soul & Stomach","flag.m1":"Nagsimula ang Bible study at feeding program para sa mga bata","flag.m2":"Poster para sa session ng Nobyembre 25","flag.m3":"Kasama sa mga proyekto ng 2025","flag.m4":"Pinakabagong poster: Bible Study at Feeding Program","flag.d1":"Hun 2022","flag.d2":"Nob 2023","flag.d3":"May 2025","flag.d4":"Nob 2026",
 "bento.hint":"Pindutin ang tile para salain ang talaan. Pindutin muli para alisin.","bento.clear":"Ipakita ang lahat ng 49",
 "lat.1":"Bible Study at Feeding Program","lat.2":"Mga proyekto, programa at aktibidad ng 2025","lat.3":"Tulong pinansyal para sa mga PWD","lat.4":"Inter-Sitio Basketball League, SK24",
 "reach.h":"May tanong sa SK?","pending.t":"Paparating ang poster","pending.b":"13 programa ang bilang ng SK. Dalawang poster pa ang hindi naidadagdag."
});
Object.assign(window.I18N.hil,{
 "intro.tap":"Pat-ura bisan diin agod magpadayon","welcome.word":"Maayong pag-abot","welcome.sub":"Maligayang pagdating · Welcome","welcome.org":"Sangguniang Kabataan · Barangay Bancal, Carles, Iloilo",
 "hero.tag":"Ang SK23 council, Barangay Bancal","hero.cta2":"Tan-awa ang una nga 45 ka adlaw",
 "act.salamat":"Salamat","act.fb":"SK sa Facebook","feed.note":"Ang mga poster ginapakita subong sang pagka-publish sang SK. Ang mga petsa halin sa mga poster.",
 "side.about":"SK Bancal","side.aboutbody":"Ang Sangguniang Kabataan sang Barangay Bancal, Carles, Iloilo. Chair: Hon. Nicole Anne D. Barbosa.","side.quote":"Wala pa budget. Nagsugod gihapon kami.","side.tags":"Mga hashtag","side.follow":"I-follow",
 "fb.page":"Page sang SK Bancal","fb.chair":"SK Chair Nicole Anne Barbosa",
 "flag.title":"Feed Your Soul & Stomach","flag.m1":"Nagsugod ang Bible study kag pagpakaon para sa mga bata","flag.m2":"Poster para sa session sang Nobyembre 25","flag.m3":"Isa sa mga proyekto sang 2025","flag.m4":"Pinakabag-o nga poster: Bible Study kag Feeding Program","flag.d1":"Hun 2022","flag.d2":"Nob 2023","flag.d3":"May 2025","flag.d4":"Nob 2026",
 "bento.hint":"Pat-ura ang tile agod masala ang talaan. Pat-ura liwat agod mahaw-as.","bento.clear":"Ipakita ang tanan nga 49",
 "lat.1":"Bible Study kag Feeding Program","lat.2":"Mga proyekto, programa kag buluhaton sang 2025","lat.3":"Bulig nga kuwarta para sa mga PWD","lat.4":"Inter-Sitio Basketball League, SK24",
 "reach.h":"May pamangkot sa SK?","pending.t":"Madason ang poster","pending.b":"13 ka programa ang bilang sang SK. Duha pa ka poster ang wala madugang."
});

// First-45-days feed. Captions are written from what each poster says; dates are the poster dates.
window.POSTS = [
 {id:"caravan",m:"11",d:"Nov 3, 2023",t:"SK Caravan and Thanksgiving",c:"The SK23 officials opened their term with a caravan and a thanksgiving.",img:"caravan"},
 {id:"training",m:"11",d:"Nov 12, 2023",t:"Mandatory Training and Oathtaking",c:"Mandatory training and oathtaking for the newly elected council.",img:"training"},
 {id:"imec",m:"11",d:"Nov 17, 2023",t:"IMEC Scholarship Referral",c:"Scholarship referral session with Ken Arlanza.",img:"imec"},
 {id:"coastal",m:"11",d:"Nov 25, 2023",t:"Coastal Clean Up",c:"Clean-up of the shoreline together with AKRHO and the Guardians.",img:"coastal"},
 {id:"feeding",m:"11",d:"Nov 25, 2023",t:"Feed Your Soul & Stomach",c:"Bible study and feeding for children, with Crossing Boy.",img:"feeding-2023"},
 {id:"xmas",m:"12",d:"Dec 8–9, 2023",t:"Christmas Tree Making",c:"Two days of Christmas tree making for the barangay.",img:"xmas-tree"},
 {id:"court",m:"12",d:"Dec 19–21, 2023",t:"Repainting the Basketball Court",c:"Fresh paint for the basketball court, three days of volunteer work.",img:"repaint-court"},
 {id:"tiktok",m:"12",d:"Dec 27, 2023",t:"TikTok Dance Showdown, Season 1",c:"Youth dance contest, first season.",img:"tiktok"},
 {id:"vb",m:"12",d:"Dec 27, 2023",t:"Volleyball League, Inter-Barangay Season 1",c:"The first inter-barangay volleyball league.",img:"vb-league"},
 {id:"zumba",m:"all",d:"",t:"Zumba",c:"Health sector activity. The poster carries no date.",img:"zumba"},
 {id:"donations",m:"all",d:"",t:"Donation of Sports Equipment for Every Sitio, 1st batch",c:"An initiative of Nicole Anne Barbosa and Hena Bandojo. The poster carries no date.",img:"donations"}
];
window.LATEST = [
 {k:"lat.1",d:"Nov 7, 2026",img:"feeding-2026"},
 {k:"lat.2",d:"2025",img:"ppa-2025"},
 {k:"lat.3",d:"Dec 26, 2024",img:"pwd-2024"},
 {k:"lat.4",d:"2024",img:"inter-sitio"}
];
window.OFFICERS = [
 ["bagoy","Erica G. Bagoy","SK Kagawad"],["delleva","Andrew B. Delleva","SK Kagawad"],["dumapil","Daryl Gine I. Dumapil","SK Kagawad"],
 ["labos","Filmark B. Labos","SK Kagawad"],["magbanua","Kiel Francis B. Magbanua","SK Kagawad"],["caragos","Egie Boy B. Caragos","SK Kagawad"],
 ["montejo","Mary Jean M. Montejo","SK Secretary"],["relimbo","Alexandra Rose E. Relimbo","SK Treasurer"]
];

// Government services. Links open the agencies' own sites. Requirements change: always confirm on the agency site.
window.SERVICES = [
 {
  "id": "lto",
  "c": "transport",
  "a": "LTO",
  "t": "Driver's license and violation tracking",
  "p": "Check your license, registration and violations in the LTO portal.",
  "docs": [
   "Valid ID",
   "Driver's license number",
   "Email address and mobile number for your account"
  ],
  "u": "https://portal.lto.gov.ph/ords/f?p=1200:HOME::::::"
 },
 {
  "id": "pagibig",
  "c": "social",
  "a": "Pag-IBIG",
  "t": "Member contributions and loan status",
  "p": "See your contributions, savings and loan status online.",
  "docs": [
   "Pag-IBIG MID number",
   "Registered email or mobile number",
   "Valid ID"
  ],
  "u": "https://www.pagibigfundservices.com/virtualpagibig/"
 },
 {
  "id": "philhealth",
  "c": "social",
  "a": "PhilHealth",
  "t": "Premium contributions and eligibility",
  "p": "Check your premium payments and eligibility for benefits.",
  "docs": [
   "PhilHealth Identification Number (PIN)",
   "Valid ID",
   "Proof of dependents, if you are adding any"
  ],
  "u": "https://www.philhealth.gov.ph/"
 },
 {
  "id": "sss",
  "c": "social",
  "a": "SSS",
  "t": "Salary loans and pension tracking",
  "p": "Track contributions, loans and pension benefits.",
  "docs": [
   "SS number",
   "Valid ID",
   "Registered mobile number and email"
  ],
  "u": "https://www.sss.gov.ph/"
 },
 {
  "id": "orus",
  "c": "tax",
  "a": "BIR ORUS",
  "t": "Tax registration and verification",
  "p": "Register, update and verify your tax details with the BIR online system.",
  "docs": [
   "Taxpayer Identification Number (TIN), if you have one",
   "Valid ID",
   "Email address"
  ],
  "u": "https://orus.bir.gov.ph/"
 },
 {
  "id": "bir",
  "c": "tax",
  "a": "BIR",
  "t": "Forms, guidelines and tax information",
  "p": "Find tax forms, guides, advisories and your Revenue District Office.",
  "docs": [
   "TIN",
   "Know your taxpayer type (individual, self-employed, business)"
  ],
  "u": "https://www.bir.gov.ph/home"
 },
 {
  "id": "nbi",
  "c": "id",
  "a": "NBI",
  "t": "Online clearance application",
  "p": "Apply for an NBI clearance, book a schedule and pay online.",
  "docs": [
   "Valid ID",
   "Email address",
   "Payment method for the fee",
   "Appointment reference after booking"
  ],
  "u": "https://clearance.nbi.gov.ph/"
 },
 {
  "id": "psa",
  "c": "id",
  "a": "PSA",
  "t": "Birth, marriage and death certificates",
  "p": "Order civil registry documents for delivery.",
  "docs": [
   "Full name, birth date and birthplace on the record",
   "Names of the parents",
   "Valid ID of the requester"
  ],
  "u": "https://psahelpline.ph/"
 },
 {
  "id": "dfa",
  "c": "id",
  "a": "DFA",
  "t": "Passport and consular services",
  "p": "Passport appointments, renewals and other consular services.",
  "docs": [
   "Valid ID",
   "PSA birth certificate",
   "Current passport, for renewal",
   "Appointment confirmation"
  ],
  "u": "https://dfa.gov.ph/"
 },
 {
  "id": "philsys",
  "c": "id",
  "a": "PhilSys",
  "t": "National ID",
  "p": "Information on the Philippine national ID, registration and status.",
  "docs": [
   "Valid ID or supporting documents",
   "Birth certificate, if asked"
  ],
  "u": "https://philsys.gov.ph/"
 },
 {
  "id": "denr",
  "c": "env",
  "a": "DENR",
  "t": "Environment permits, forestry and coastal resources",
  "p": "Environmental permits, forestry services and programs for natural resources.",
  "docs": [
   "Valid ID",
   "Application letter or form for the permit you need",
   "Barangay endorsement, where required"
  ],
  "u": "https://denr.gov.ph/"
 },
 {
  "id": "bfar",
  "c": "env",
  "a": "BFAR",
  "t": "Fisheries services and fisherfolk programs",
  "p": "Fisherfolk registration, licenses and fisheries programs. Useful for coastal communities.",
  "docs": [
   "Valid ID",
   "Barangay certification of residence",
   "Boat details, if you own a fishing boat"
  ],
  "u": "https://www.bfar.da.gov.ph/"
 },
 {
  "id": "tesda",
  "c": "youth",
  "a": "TESDA",
  "t": "Skills training and scholarships",
  "p": "Find free skills training and scholarship programs.",
  "docs": [
   "Valid ID",
   "Birth certificate",
   "Recent photo"
  ],
  "u": "https://www.tesda.gov.ph/"
 },
 {
  "id": "ched",
  "c": "youth",
  "a": "CHED",
  "t": "Scholarships and student financial aid",
  "p": "College scholarships and financial assistance programs.",
  "docs": [
   "Valid ID",
   "School records or report card",
   "Proof of income or indigency, if asked"
  ],
  "u": "https://ched.gov.ph/"
 },
 {
  "id": "dole",
  "c": "youth",
  "a": "DOLE",
  "t": "Jobs and youth employment",
  "p": "Job listings, labor rights and youth employment programs.",
  "docs": [
   "Valid ID",
   "Birth certificate",
   "Proof of school enrollment, for student programs"
  ],
  "u": "https://www.dole.gov.ph/"
 },
 {
  "id": "nyc",
  "c": "youth",
  "a": "NYC",
  "t": "National Youth Commission programs",
  "p": "Youth programs and policy information from the national youth agency.",
  "docs": [
   "Valid ID",
   "Most programs are for ages 15 to 30"
  ],
  "u": "https://nyc.gov.ph/"
 },
 {
  "id": "dilg",
  "c": "gov",
  "a": "DILG",
  "t": "Local governance and SK guidance",
  "p": "Guidance and advisories for barangays and the Sangguniang Kabataan.",
  "docs": [
   "No documents needed to browse advisories"
  ],
  "u": "https://dilg.gov.ph/"
 }
];
window.SVC_CATS = {all:"All",transport:"Transport",social:"Social security and health",tax:"Tax",id:"ID and records",env:"Environment and fisheries",youth:"Youth, school and work",gov:"Local government"};
Object.assign(window.I18N.en,{"nav.services":"Services","svc.k":"Serbisyo","svc.title":"Government services in one tap","svc.body":"Shortcuts to the official websites most people in Bancal need, with the documents to prepare before you start.","svc.open":"Open official site","svc.docs":"Documents to prepare","svc.note":"Links open the agencies' own websites. Before you sign in, check that the address ends in .gov.ph. Requirements change, so confirm on the agency's site.","egov.title":"Get the eGovPH app","egov.body":"One app from the Department of Information and Communications Technology (DICT) for many government services. Search \"eGovPH\" in your app store.","egov.site":"Official eGovPH site","egov.play":"Get it on Google Play","egov.ios":"On iPhone, search \"eGovPH\" in the App Store","foot.disc":"This is a community information website made to support the Sangguniang Kabataan of Barangay Bancal. It is not an official government website. Official announcements are posted on the SK's Facebook profile.","foot.priv":"This site does not collect personal data. Your heart reactions and language choice are saved only on your own device.","foot.links":"On this site","foot.gov":"Government services","foot.about":"About"});
Object.assign(window.I18N.tl,{"nav.services":"Serbisyo","svc.k":"Serbisyo","svc.title":"Mga serbisyo ng gobyerno sa isang tap","svc.body":"Mga shortcut sa mga opisyal na website na kailangan ng karamihan sa Bancal, kasama ang mga dokumentong dapat ihanda.","svc.open":"Buksan ang opisyal na site","svc.docs":"Mga dokumentong ihahanda","svc.note":"Binubuksan ng mga link ang sariling website ng mga ahensya. Bago mag-sign in, tiyaking nagtatapos sa .gov.ph ang address. Nagbabago ang mga requirement, kaya kumpirmahin sa site ng ahensya.","egov.title":"Kunin ang eGovPH app","egov.body":"Isang app mula sa Department of Information and Communications Technology (DICT) para sa maraming serbisyo ng gobyerno. Hanapin ang \"eGovPH\" sa app store.","egov.site":"Opisyal na site ng eGovPH","egov.play":"Kunin sa Google Play","egov.ios":"Sa iPhone, hanapin ang \"eGovPH\" sa App Store","foot.disc":"Ito ay community information website na ginawa para suportahan ang Sangguniang Kabataan ng Barangay Bancal. Hindi ito opisyal na website ng gobyerno. Ipinopost ang mga opisyal na anunsyo sa Facebook profile ng SK.","foot.priv":"Hindi nangongolekta ng personal na datos ang site na ito. Nasa sarili mong device lang naka-save ang iyong heart reaction at pinili mong wika.","foot.links":"Sa site na ito","foot.gov":"Mga serbisyo ng gobyerno","foot.about":"Tungkol"});
Object.assign(window.I18N.hil,{"nav.services":"Serbisyo","svc.k":"Serbisyo","svc.title":"Mga serbisyo sang gobyerno sa isa ka tap","svc.body":"Mga shortcut sa mga opisyal nga website nga kinahanglan sang kadam-an sa Bancal, upod ang mga dokumento nga dapat ihanda.","svc.open":"Buksi ang opisyal nga site","svc.docs":"Mga dokumento nga ihanda","svc.note":"Ginabuksan sang mga link ang kaugalingon nga website sang mga ahensya. Antes mag-sign in, tan-awa nga nagatapos sa .gov.ph ang address. Nagabag-o ang mga requirement, gani kompirmahon sa site sang ahensya.","egov.title":"Kuhaa ang eGovPH app","egov.body":"Isa ka app halin sa Department of Information and Communications Technology (DICT) para sa madamo nga serbisyo sang gobyerno. Pangitaa ang \"eGovPH\" sa app store.","egov.site":"Opisyal nga site sang eGovPH","egov.play":"Kuhaa sa Google Play","egov.ios":"Sa iPhone, pangitaa ang \"eGovPH\" sa App Store","foot.disc":"Ini isa ka community information website nga ginhimo para suportahan ang Sangguniang Kabataan sang Barangay Bancal. Indi ini opisyal nga website sang gobyerno. Ginapost ang mga opisyal nga anunsyo sa Facebook profile sang SK.","foot.priv":"Wala nagakolekta sang personal nga datos ang site nga ini. Sa kaugalingon mo nga device lang naka-save ang imo heart reaction kag pinili nga lingguwahe.","foot.links":"Sa site nga ini","foot.gov":"Mga serbisyo sang gobyerno","foot.about":"Bahin"});

Object.assign(window.I18N.en,{"svc.snap":"Previews are snapshots of each site's front page, loaded when you scroll to them. They can differ slightly from the live site.","svc.pv":"Preview","svc.pvna":"Preview not available. Use the button to open the site."});
Object.assign(window.I18N.tl,{"svc.snap":"Ang mga preview ay snapshot ng unang pahina ng bawat site, na naglo-load kapag naabot mo. Maaaring bahagyang iba ito sa aktuwal na site.","svc.pv":"Preview","svc.pvna":"Walang preview. Gamitin ang button para buksan ang site."});
Object.assign(window.I18N.hil,{"svc.snap":"Ang mga preview snapshot sang una nga panid sang kada site, nga nagaload kon maabot mo. Mahimo nga medyo lain ini sa tinuod nga site.","svc.pv":"Preview","svc.pvna":"Wala sing preview. Gamita ang button para buksan ang site."});

// Carles emergency hotlines, from the Carles MDRRMO advisory updated 07/20/2026. Roles only, no personal names.
window.HOTLINES = [
 {
  "k": "hl.1",
  "u": "MDRRMO Carles Response & Emergency Squad (CaRES)",
  "n": [
   "0948 073 9517"
  ],
  "f": "MDRRMO Carles Facebook page"
 },
 {
  "k": "hl.2",
  "u": "Carles Primary Care Facility, patient transport",
  "n": [
   "0946 949 0532",
   "0994 7048 381"
  ],
  "f": ""
 },
 {
  "k": "hl.3",
  "u": "Municipal Blood Recruitment Officer",
  "n": [
   "0956 617 5183"
  ],
  "f": "Also reachable on Facebook Messenger"
 },
 {
  "k": "hl.4",
  "u": "PTV Mayor's Office",
  "n": [
   "0999 430 6655"
  ],
  "f": ""
 },
 {
  "k": "hl.5",
  "u": "Bureau of Fire Protection, Carles",
  "n": [
   "0954 400 8764"
  ],
  "f": "Bfp Rsix Carles Fire Station"
 },
 {
  "k": "hl.6",
  "u": "Carles Municipal Police Station",
  "n": [
   "0998 598 6203"
  ],
  "f": "PNP Carles Municipal Police Station"
 },
 {
  "k": "hl.7",
  "u": "Philippine Coast Guard, Carles Sub-Station",
  "n": [
   "0956 995 4619"
  ],
  "f": "Coast Guard Sub-Station Carles"
 },
 {
  "k": "hl.8",
  "u": "PNP Maritime Group, Carles",
  "n": [
   "0930 593 7410"
  ],
  "f": "Carles Sbc Pnp MG"
 },
 {
  "k": "hl.9",
  "u": "Radyo Timbo-ok",
  "n": [
   "0917 652 3005"
  ],
  "f": "Radyo Timbo-Ok"
 }
];
Object.assign(window.I18N.en,{"nav.hotlines": "Hotlines", "hl.k": "Emergency", "hl.title": "Carles emergency hotlines", "hl.body": "Tap a number to call from your phone. Numbers come from the Carles MDRRMO advisory.", "hl.upd": "Updated as of July 20, 2026 by Carles MDRRMO. Numbers can change. If a call does not go through, check the MDRRMO's Facebook page.", "hl.tanod": "All 33 barangays have trained Barangay Tanods who can serve as first responders in an emergency.", "hl.911": "National emergency hotline", "hl.911b": "For any emergency anywhere in the Philippines.", "hl.call": "Call", "hl.copy": "Copy", "hl.copied": "Number copied", "sos": "Emergency", "act.share": "Share", "toast.link": "Link copied", "visits": "Visitors since launch", "visits.demo": "(preview mode)", "install": "Install on your phone", "hl.1": "Vehicular accidents and other emergencies", "hl.2": "Pregnancy and medical cases", "hl.3": "Blood requests and referrals", "hl.4": "Other medical concerns", "hl.5": "Fire", "hl.6": "Accidents and crime", "hl.7": "Sea rescue and travel advisories", "hl.8": "Maritime crime and water rescue", "hl.9": "Public service announcements"});
Object.assign(window.I18N.tl,{"nav.hotlines": "Hotline", "hl.k": "Emergency", "hl.title": "Mga emergency hotline ng Carles", "hl.body": "Pindutin ang numero para tumawag. Galing ang mga numero sa advisory ng Carles MDRRMO.", "hl.upd": "Na-update noong Hulyo 20, 2026 ng Carles MDRRMO. Maaaring magbago ang mga numero. Kung hindi tumuloy ang tawag, tingnan ang Facebook page ng MDRRMO.", "hl.tanod": "Lahat ng 33 barangay ay may sinanay na Barangay Tanod na maaaring maging first responder sa emergency.", "hl.911": "National emergency hotline", "hl.911b": "Para sa anumang emergency saanman sa Pilipinas.", "hl.call": "Tawag", "hl.copy": "Kopyahin", "hl.copied": "Nakopya ang numero", "sos": "Emergency", "act.share": "Ibahagi", "toast.link": "Nakopya ang link", "visits": "Mga bisita mula nang ilunsad", "visits.demo": "(preview mode)", "install": "I-install sa phone mo", "hl.1": "Aksidente sa sasakyan at iba pang emergency", "hl.2": "Pagbubuntis at mga kasong medikal", "hl.3": "Kahilingan at referral ng dugo", "hl.4": "Iba pang medikal na alalahanin", "hl.5": "Sunog", "hl.6": "Aksidente at krimen", "hl.7": "Rescue sa dagat at abiso sa paglalayag", "hl.8": "Krimen sa dagat at rescue sa tubig", "hl.9": "Mga anunsyo para sa publiko"});
Object.assign(window.I18N.hil,{"nav.hotlines": "Hotline", "hl.k": "Emergency", "hl.title": "Mga emergency hotline sang Carles", "hl.body": "Pat-ura ang numero para tumawag. Ang mga numero halin sa advisory sang Carles MDRRMO.", "hl.upd": "Na-update sang Hulyo 20, 2026 sang Carles MDRRMO. Mahimo magbag-o ang mga numero. Kon indi makatawag, tan-awa ang Facebook page sang MDRRMO.", "hl.tanod": "Ang tanan nga 33 ka barangay may sinanay nga Barangay Tanod nga mahimo mangin first responder sa emergency.", "hl.911": "National emergency hotline", "hl.911b": "Para sa bisan ano nga emergency bisan diin sa Pilipinas.", "hl.call": "Tawag", "hl.copy": "Kopyaha", "hl.copied": "Nakopya ang numero", "sos": "Emergency", "act.share": "Ibahin", "toast.link": "Nakopya ang link", "visits": "Mga bisita sugod sang ginlunsad", "visits.demo": "(preview mode)", "install": "I-install sa imo phone", "hl.1": "Aksidente sa sakyanan kag iban pa nga emergency", "hl.2": "Pagbusong kag mga kaso nga medikal", "hl.3": "Pagpangayo kag referral sang dugo", "hl.4": "Iban nga medikal nga kabalaka", "hl.5": "Sunog", "hl.6": "Aksidente kag krimen", "hl.7": "Rescue sa dagat kag abiso sa pagbiyahe", "hl.8": "Krimen sa dagat kag rescue sa tubig", "hl.9": "Mga anunsyo para sa publiko"});

Object.assign(window.I18N.en,{"svc.search":"Search, like passport or SSS","svc.search.l":"Search services","svc.none":"No service matches. Try another word."});
Object.assign(window.I18N.tl,{"svc.search":"Maghanap, tulad ng passport o SSS","svc.search.l":"Maghanap ng serbisyo","svc.none":"Walang tugma. Subukan ang ibang salita."});
Object.assign(window.I18N.hil,{"svc.search":"Pangita, subong passport ukon SSS","svc.search.l":"Pangita sang serbisyo","svc.none":"Wala sing may kapareho. Probahi ang lain nga pulong."});

// Accomplishment archive. Dates follow each poster. If a poster has no date, the SK year label is shown.
window.ARCHIVE = [
 {"id": "feeding-2026", "t": "Bible Study and Feeding Program", "tag": "SK26", "d": "Nov 7, 2026", "cat": "wel", "c": "A Bible study and feeding program for children.", "o": "", "s": "Social Services"},
 {"id": "educ26", "t": "Educational Project: School Supplies for 280 Students", "tag": "SK26", "d": "", "cat": "edu", "c": "School supplies given to 280 students of Bancal Integrated School. Funded by SK funds, ₱34,466.69 after tax and other fees.", "o": "Support education and help the students.", "s": "Education"},
 {"id": "basurahan", "t": "Project Basurahan", "tag": "SK26", "d": "", "cat": "env", "c": "Waste bins installed in key areas of Barangay Bancal for proper waste disposal and environmental responsibility.", "o": "Encourage waste segregation, reduce littering, and keep the community clean and healthy.", "s": "Environment"},
 {"id": "ppa-2025", "t": "2025 Projects, Programs and Activities", "tag": "SK25", "d": "2025", "cat": "gen", "c": "A summary of the SK's projects, programs and activities in 2025.", "o": "", "s": ""},
 {"id": "basketballs", "t": "Giving of Basketballs", "tag": "SK25", "d": "", "cat": "sport", "c": "Basketballs given to young players in the barangay.", "o": "", "s": "Sports"},
 {"id": "anti-drugs", "t": "Anti-Drugs Campaign: Bola Kontra Droga", "tag": "SK24", "d": "Dec 27, 2024", "cat": "sport", "c": "A seminar for the barangay's basketball players on the dangers of illegal drugs and the value of a healthy, active life. Held at Bancal Gymnasium.", "o": "Use sports to promote discipline, teamwork and a drug-free community.", "s": "Health, Youth and Sports Development"},
 {"id": "dance-moves", "t": "Battle of the Dance Moves 2024", "tag": "SK24", "d": "Dec 27, 2024", "cat": "cult", "c": "A dance showdown at Bancal Gymnasium where young dancers showed their skills.", "o": "Give young dancers a stage and build camaraderie and sportsmanship.", "s": "Sociocultural Development"},
 {"id": "pwd-2024", "t": "₱1,000 Financial Assistance to Persons with Disabilities", "tag": "SK24", "d": "Dec 26, 2024", "cat": "wel", "c": "Project Panghatag sa Paskwa: cash gifts for PWDs in Barangay Bancal during the Christmas season.", "o": "Bring hope and support to PWDs and recognize their role in the community.", "s": "Social Inclusion and Equity"},
 {"id": "office", "t": "Construction of the SK Office", "tag": "SK24", "d": "Dec 26, 2024", "cat": "env", "c": "A permanent office for SK operations and documentation, and a venue for meetings, youth consultations and planning.", "o": "Make SK programs more transparent and easier to reach.", "s": "Infrastructure"},
 {"id": "gift-2024", "t": "Christmas Gift Giving to Children", "tag": "SK24", "d": "Dec 2024", "cat": "wel", "c": "Christmas gifts and food for children in the barangay, wrapped and handed out by Team Nicole SK.", "o": "Share the joy of Christmas with the children of Bancal.", "s": "Social Services"},
 {"id": "equipment", "t": "Purchase of Office Equipment", "tag": "SK24", "d": "", "cat": "env", "c": "Two industrial fans and one stand fan for gym activities and the barangay hall. A long-term project, also posted as Cooling for Comfort.", "o": "Keep the gym and barangay hall comfortable.", "s": "Infrastructure and Health"},
 {"id": "halloween-night", "t": "Halloween Disco Night", "tag": "SK24", "d": "Nov 2, 2024", "cat": "cult", "c": "The SK Halloween Benefit Dance at Bancal Gymnasium, a sociocultural event that raised funds for the community.", "o": "Bring the youth and families together for a safe, fun celebration.", "s": "Active Citizenship"},
 {"id": "kids-halloween", "t": "Kids' Halloween Party", "tag": "SK24", "d": "Nov 2, 2024", "cat": "cult", "c": "Costumes and games for the children of Bancal, with parents and guardians joining in.", "o": "Give children a happy celebration and boost their confidence.", "s": "Child Welfare"},
 {"id": "fin-assist", "t": "Financial Assistance to Academic Achievers", "tag": "SK24", "d": "Oct 2024", "cat": "edu", "c": "Project Eskwela gave financial assistance to 100 students at Bancal Barangay Hall: senior high honor graduates, college students, Dean's Listers, graduates and Latin honors.", "o": "Support students' education and recognize excellence.", "s": "Education"},
 {"id": "eskwela-supplies", "t": "Project Eskwela: School Supplies", "tag": "SK24", "d": "Sep 2024", "cat": "edu", "c": "School supplies and educational assistance for students of Bancal Integrated School.", "o": "Support the students' education.", "s": "Education"},
 {"id": "miss-linggo", "t": "Miss Linggo ng Kabataan 2024", "tag": "SK24", "d": "Aug 2024", "cat": "cult", "c": "The grand coronation of the pageant at Bancal Gym, part of Linggo ng Kabataan 2024.", "o": "Celebrate youth talent and empowerment.", "s": "Linggo ng Kabataan"},
 {"id": "debate", "t": "Debate Competition", "tag": "SK24", "d": "Aug 2024", "cat": "cult", "c": "Part of Linggo ng Kabataan 2024 at Bancal Gym, with youth debating social issues.", "o": "Develop critical thinking, public speaking and leadership.", "s": "Youth Participation and Leadership"},
 {"id": "poster-making", "t": "Poster Making Competition", "tag": "SK24", "d": "Aug 2024", "cat": "cult", "c": "Part of Linggo ng Kabataan 2024 at Bancal Gym, where young artists made posters.", "o": "Let the youth grow their creativity through visual art.", "s": "Youth Empowerment through Arts"},
 {"id": "singing", "t": "Youth Singing Contest 2024", "tag": "SK24", "d": "Aug 2024", "cat": "cult", "c": "A singing contest under Linggo ng Kabataan at Bancal Gym.", "o": "Build confidence and self-expression through music.", "s": "Youth, Arts and Culture"},
 {"id": "film", "t": "Film Making Competition 2024", "tag": "SK24", "d": "Aug 2024", "cat": "cult", "c": "Youth made short films with social themes. Winners received certificates and a Film Making Champion award.", "o": "Promote creative expression and digital storytelling.", "s": "Youth Arts"},
 {"id": "sk-night", "t": "SK Night and Youth Night 2024", "tag": "SK24", "d": "Aug 2024", "cat": "cult", "c": "A night of music and bonding at Bancal Gymnasium, with 5 Stars Pro Audio providing sound and lights.", "o": "Strengthen camaraderie among the youth.", "s": "Youth Celebration"},
 {"id": "inter-sitio", "t": "Inter-Sitio Basketball League", "tag": "SK24", "d": "2024", "cat": "sport", "c": "A basketball league between the sitios of Bancal.", "o": "", "s": "Sports"},
 {"id": "macho-gay", "t": "Macho Gay", "tag": "SK24", "d": "", "cat": "cult", "c": "A sociocultural pageant organized by the SK officials and sponsored by Sitio Minoro.", "o": "", "s": "Sociocultural"}
];
Object.assign(window.I18N.en,{"ar.title":"More accomplishment reports","ar.body":"Posters from the SK's Facebook posts, from SK24 to SK26. Dates follow each poster. Where a poster has no date, the SK year is shown.","ar.all":"All","ar.edu":"Education","ar.wel":"Social welfare","ar.sport":"Sports and health","ar.cult":"Culture and events","ar.env":"Infrastructure and environment","ar.obj":"Objective","ar.none":"No reports in this group yet."});
Object.assign(window.I18N.tl,{"ar.title":"Iba pang accomplishment report","ar.body":"Mga poster mula sa Facebook posts ng SK, mula SK24 hanggang SK26. Sinusunod ng petsa ang nasa poster. Kung walang petsa ang poster, ipinapakita ang taon ng SK.","ar.all":"Lahat","ar.edu":"Edukasyon","ar.wel":"Serbisyong panlipunan","ar.sport":"Palakasan at kalusugan","ar.cult":"Kultura at mga event","ar.env":"Imprastraktura at kapaligiran","ar.obj":"Layunin","ar.none":"Wala pang report sa grupong ito."});
Object.assign(window.I18N.hil,{"ar.title":"Iban pa nga accomplishment report","ar.body":"Mga poster halin sa Facebook posts sang SK, halin SK24 hasta SK26. Ginasunod sang petsa ang yara sa poster. Kon wala petsa ang poster, ginapakita ang tuig sang SK.","ar.all":"Tanan","ar.edu":"Edukasyon","ar.wel":"Serbisyo sa katawhan","ar.sport":"Palakasan kag kahimsog","ar.cult":"Kultura kag mga event","ar.env":"Imprastraktura kag palibot","ar.obj":"Tuyo","ar.none":"Wala pa sing report sa grupo nga ini."});

// Later reports join the feed after the first 45 days, oldest first. The four in LATEST stay in their own section.
(function () {
  const order = ["miss-linggo","debate","poster-making","singing","film","sk-night","eskwela-supplies","fin-assist","halloween-night","kids-halloween","gift-2024","office","anti-drugs","dance-moves","equipment","macho-gay","basketballs","educ26","basurahan"];
  order.forEach(id => {
    const p = window.ARCHIVE.find(x => x.id === id);
    window.POSTS.push({ id: p.id, m: p.tag.toLowerCase(), d: p.d || p.tag, t: p.t, c: p.c + (p.o ? " Objective: " + p.o : ""), img: p.id, tag: p.tag });
  });
})();
Object.assign(window.I18N.en,{"nav.first45":"Feed","f45.title":"SK posters and reports","f45.body":"From November 3 to December 2023, the SK23 officials carried out 13 programs, projects and activities for the youth and the barangay, before receiving any funds or budget. Reports from SK24 to SK26 follow."});
Object.assign(window.I18N.tl,{"nav.first45":"Feed","f45.title":"Mga poster at report ng SK","f45.body":"Mula Nobyembre 3 hanggang Disyembre 2023, naisakatuparan ng mga opisyal ng SK23 ang 13 programa, proyekto at aktibidad para sa kabataan at sa barangay, bago pa matanggap ang anumang pondo o budget. Susunod ang mga report mula SK24 hanggang SK26."});
Object.assign(window.I18N.hil,{"nav.first45":"Feed","f45.title":"Mga poster kag report sang SK","f45.body":"Halin Nobyembre 3 hasta Disyembre 2023, natuman sang mga opisyal sang SK23 ang 13 ka programa, proyekto kag buluhaton para sa kabataan kag sa barangay, antes pa makabaton sang pondo ukon budget. Masunod ang mga report halin SK24 hasta SK26."});

Object.assign(window.I18N.en,{"sug.link":"Suggest an idea","sug.k":"Your voice","sug.title":"Suggest an idea to the SK","sug.body":"Have an idea for a program, project or activity in Bancal? Tell the SK. Every suggestion is read by the officials.","sug.topic":"What is it about?","sug.t1":"Program or activity idea","sug.t2":"Sports","sug.t3":"Education and scholarship","sug.t4":"Environment and clean-up","sug.t5":"Something else","sug.name":"Your name (optional)","sug.msg":"Your idea or suggestion","sug.send":"Send suggestion","sug.ok":"Thank you. Your suggestion was sent to the SK.","sug.fail":"Could not send. Check your connection and try again.","sug.demo":"Preview mode: nothing is sent yet. Your text was copied so you can send it to the SK on Facebook.","sug.wait":"You sent one a moment ago. Please wait a minute.","sug.short":"Please write at least 10 characters.","sug.note":"Suggestions go only to the SK officials. They are not shown on this site. Adding your name is optional.","foot.priv":"This site does not collect personal data. Your heart reactions and language choice are saved only on your own device. Suggestions you send go only to the SK."});
Object.assign(window.I18N.tl,{"sug.link":"Magmungkahi","sug.k":"Ang iyong boses","sug.title":"Magmungkahi sa SK","sug.body":"May ideya para sa programa, proyekto o aktibidad sa Bancal? Sabihin sa SK. Binabasa ng mga opisyal ang bawat mungkahi.","sug.topic":"Tungkol saan ito?","sug.t1":"Ideya para sa programa o aktibidad","sug.t2":"Palakasan","sug.t3":"Edukasyon at scholarship","sug.t4":"Kapaligiran at paglilinis","sug.t5":"Iba pa","sug.name":"Pangalan mo (opsyonal)","sug.msg":"Ang iyong ideya o mungkahi","sug.send":"Ipadala ang mungkahi","sug.ok":"Salamat. Naipadala ang mungkahi mo sa SK.","sug.fail":"Hindi naipadala. Tingnan ang koneksyon at subukan ulit.","sug.demo":"Preview mode: wala pang naipapadala. Nakopya ang teksto mo para maipadala mo sa SK sa Facebook.","sug.wait":"May naipadala ka kani-kanina lang. Maghintay ng isang minuto.","sug.short":"Magsulat ng hindi bababa sa 10 character.","sug.note":"Sa mga opisyal ng SK lang napupunta ang mga mungkahi. Hindi ito ipinapakita sa site na ito. Opsyonal ang pangalan.","foot.priv":"Hindi nangongolekta ng personal na datos ang site na ito. Nasa sarili mong device lang naka-save ang iyong heart reaction at pinili mong wika. Sa SK lang napupunta ang mga mungkahing ipapadala mo."});
Object.assign(window.I18N.hil,{"sug.link":"Maghatag sang ideya","sug.k":"Ang imo tingog","sug.title":"Maghatag sang ideya sa SK","sug.body":"May ideya para sa programa, proyekto ukon buluhaton sa Bancal? Sugiri ang SK. Ginabasa sang mga opisyal ang kada suhestyon.","sug.topic":"Bahin sa ano ini?","sug.t1":"Ideya para sa programa ukon buluhaton","sug.t2":"Palakasan","sug.t3":"Edukasyon kag scholarship","sug.t4":"Palibot kag paglimpyo","sug.t5":"Iban pa","sug.name":"Imo ngalan (opsyonal)","sug.msg":"Ang imo ideya ukon suhestyon","sug.send":"Ipadala ang suhestyon","sug.ok":"Salamat. Napadala na ang imo suhestyon sa SK.","sug.fail":"Indi napadala. Tan-awa ang koneksyon kag probahi liwat.","sug.demo":"Preview mode: wala pa sing napadala. Nakopya ang imo teksto agod mapadala mo sa SK sa Facebook.","sug.wait":"May napadala ka lang. Maghulat sang isa ka minuto.","sug.short":"Magsulat sang indi pa kulang sa 10 ka character.","sug.note":"Sa mga opisyal lang sang SK makadto ang mga suhestyon. Indi ini ginapakita sa site nga ini. Opsyonal ang ngalan.","foot.priv":"Wala nagakolekta sang personal nga datos ang site nga ini. Sa kaugalingon mo nga device lang naka-save ang imo heart reaction kag pinili nga lingguwahe. Sa SK lang makadto ang mga suhestyon nga imo ipadala."});
Object.assign(window.I18N.en,{"legal.privacy":"Privacy Policy","legal.terms":"Terms and Conditions","legal.legal":"Legal notice","legal.note":"These documents are written in English. Last updated November 16, 2026.","hl.print":"Print this list","hl.printnote":"Printed from the SK Bancal community website. Numbers from the Carles MDRRMO advisory, July 20, 2026."});
Object.assign(window.I18N.tl,{"legal.privacy":"Patakaran sa Privacy","legal.terms":"Mga Tuntunin at Kundisyon","legal.legal":"Legal na paunawa","legal.note":"Nakasulat sa Ingles ang mga dokumentong ito. Huling na-update noong Nobyembre 16, 2026.","hl.print":"I-print ang listahang ito","hl.printnote":"Na-print mula sa community website ng SK Bancal. Mga numero mula sa abiso ng Carles MDRRMO, Hulyo 20, 2026."});
Object.assign(window.I18N.hil,{"legal.privacy":"Palisiya sa Privacy","legal.terms":"Mga Termino kag Kondisyon","legal.legal":"Legal nga pahibalo","legal.note":"Nasulat sa Ingles ini nga mga dokumento. Ulihi nga gin-update Nobyembre 16, 2026.","hl.print":"I-print ini nga listahan","hl.printnote":"Gin-print halin sa community website sang SK Bancal. Mga numero halin sa pahibalo sang Carles MDRRMO, Hulyo 20, 2026."});

// 2023-2024 list from the SK's "Accomplishments 2023-2024" poster. Sector grouping and dates are approximate (the poster has no dates): please check.
window.PROJECTS_2324 = [{"n": 1, "s": "health", "t": "Bible and Feeding Programs", "d": "2023–2024"}, {"n": 2, "s": "health", "t": "Praise and Worship Concert 2024", "d": "2024"}, {"n": 3, "s": "env", "t": "Coastal Clean-Up Drives", "d": "2023–2024"}, {"n": 4, "s": "env", "t": "Community Clean-Up Drives", "d": "2023–2024"}, {"n": 5, "s": "incl", "t": "Fundraising for a Cause", "d": "2023–2024"}, {"n": 6, "s": "sports", "t": "Repainting of Bancal Gymnasium Basketball Court 2023", "d": "2023"}, {"n": 7, "s": "sports", "t": "Basketball League: Bancal Proper Inter-Sitio 2024", "d": "2024"}, {"n": 8, "s": "sports", "t": "Basketball League Awarding: Sitio Cambalatong", "d": "2023–2024"}, {"n": 9, "s": "sports", "t": "Basketball League Awarding: Sitio Minoro", "d": "2023–2024"}, {"n": 10, "s": "sports", "t": "December Volleyball League", "d": "2023–2024"}, {"n": 11, "s": "sports", "t": "Volleyball League Season 2 and All-Stars (men's and women's category)", "d": "2023–2024"}, {"n": 12, "s": "socio", "t": "Disco Derby Competition", "d": "2023–2024"}, {"n": 13, "s": "socio", "t": "Macho Gay Competition", "d": "2023–2024"}, {"n": 14, "s": "sports", "t": "Mobile Legends Tournament 2024: Sitio Cambalatong", "d": "2024"}, {"n": 15, "s": "sports", "t": "Inter-Barangay Volleyball League", "d": "2023–2024"}, {"n": 16, "s": "socio", "t": "TikTok Dance Showdown Season 1", "d": "2023–2024"}, {"n": 17, "s": "socio", "t": "TikTok Dance Showdown Season 2", "d": "2023–2024"}, {"n": 18, "s": "socio", "t": "Christmas Tree Making by the SK Council", "d": "2023–2024"}, {"n": 19, "s": "socio", "t": "1st Bancal SK Motorshow 2024", "d": "2024"}, {"n": 20, "s": "socio", "t": "1st Bancal SK Runway Fashion Show 2024", "d": "2024"}, {"n": 21, "s": "socio", "t": "Linggo ng Kabataan 2024", "d": "2024"}, {"n": 22, "s": "socio", "t": "Debate Competition", "d": "2024"}, {"n": 23, "s": "socio", "t": "Poster Making Contest", "d": "2024"}, {"n": 24, "s": "socio", "t": "Singing Competition Season 1: Sitio Minoro", "d": "2024"}, {"n": 25, "s": "socio", "t": "Singing Competition Season 2: Bancal Proper", "d": "2024"}, {"n": 26, "s": "socio", "t": "Search for Miss Linggo ng Kabataan 2024", "d": "2024"}, {"n": 27, "s": "socio", "t": "Lin-Ay Sang San Juan 2024: Sitio Cambalatong", "d": "2024"}, {"n": 28, "s": "socio", "t": "SK Night and Youth Night", "d": "2024"}, {"n": 29, "s": "socio", "t": "Kids' Halloween Party", "d": "2024"}, {"n": 30, "s": "socio", "t": "Halloween Disco Night", "d": "2024"}, {"n": 31, "s": "edu", "t": "Scholarship Program in Collaboration with IMEC Ken Arlanza", "d": "2023–2024"}, {"n": 32, "s": "aware", "t": "Symposium on Safe Sex Practices", "d": "2023–2024"}, {"n": 33, "s": "aware", "t": "Anti-Drug Campaign", "d": "2023–2024"}, {"n": 34, "s": "edu", "t": "Distribution of School Supplies to 150 Students of Bancal Integrated School", "d": "2024"}, {"n": 35, "s": "edu", "t": "Distribution of Financial Assistance to 100 Students and Academic Achievers", "d": "2024"}, {"n": 36, "s": "edu", "t": "Financial Assistance to SHS Graduates with Honors", "d": "2024"}, {"n": 37, "s": "edu", "t": "Financial Assistance to Enrolled College Students", "d": "2024"}, {"n": 38, "s": "edu", "t": "Financial Assistance to Dean's Listers Students", "d": "2024"}, {"n": 39, "s": "edu", "t": "Financial Assistance to College Graduate", "d": "2024"}, {"n": 40, "s": "edu", "t": "Financial Assistance to Latin Honors Students", "d": "2024"}, {"n": 41, "s": "incl", "t": "Distribution of ₱1,000 Financial Assistance to 28 PWDs", "d": "2024"}, {"n": 42, "s": "gov", "t": "Construction of the SK Office and Provision of Office Supplies and Equipment", "d": "2024"}];
window.ARCHIVE.push({"id": "gambling", "t": "Campaign Against Illegal and Online Gambling", "tag": "SK26", "d": "Aug 23, 2026", "cat": "aware", "c": "A seminar at Bancal Gymnasium during Linggo ng Kabataan 2026 (Topic 8), led by an officer of the Carles Municipal Police Station, on the dangers of illegal and online gambling and why responsible choices matter.", "o": "Educate and empower the youth to build a responsible, informed, gambling-free community.", "s": "Awareness"},
 {"id": "billiards", "t": "1st Ever Barangay Bancal SK Billiards Tournament 2026", "tag": "SK26", "d": "Sep 13, 2026", "cat": "sport", "c": "The first SK billiards tournament, held at Sir Pedroso's Billiards in Bancal with 14 participants. The SK thanked the players, supporters and the host venue.", "o": "Celebrate sportsmanship, camaraderie and community unity.", "s": "Sports"},
 {"id": "office-supplies", "t": "SK26: Purchase of Office Supplies", "tag": "SK26", "d": "", "cat": "env", "c": "Office supplies bought with ₱23,985.12 of SK budget.", "o": "Provide the supplies needed to run SK programs, activities and services for the youth of Bancal efficiently.", "s": "Governance"},
 {"id": "basurahan-2026", "t": "Bancal SK Project Basurahan 2026", "tag": "SK26", "d": "", "cat": "env", "c": "Funded from the SK budget: waste bins for proper disposal, cleanliness and environmental responsibility in the community.", "o": "A cleaner and greener Bancal.", "s": "Environment"});
["gambling","billiards","office-supplies","basurahan-2026"].forEach(id => {
  const p = window.ARCHIVE.find(x => x.id === id);
  window.POSTS.push({ id: p.id, m: p.tag.toLowerCase(), d: p.d || p.tag, t: p.t, c: p.c + (p.o ? " Objective: " + p.o : ""), img: p.id, tag: p.tag });
});
Object.assign(window.I18N.en,{"nav.projects":"Projects","proj.title.2324":"What the SK did in 2023 and 2024","proj.body.2324":"42 projects, programs and activities, grouped by sector from the SK's own list. Dates are by year only.","proj.poster.2324":"View the original 2023–2024 poster","yr.2324":"2023–2024","yr.2025":"2025","sug.abyip":"The SK is open for program and project suggestions for its Annual Barangay Youth Investment Program (ABYIP) and SK Budget. Your ideas guide planning and budgeting. Programs included still depend on the youth's needs, SK priorities and available funds.","sug.formbtn":"Open the SK's suggestion form","sug.quick":"Or send a quick idea here","foot.priv":"This site does not collect personal data. Your heart reactions and language choice are saved only on your own device. The SK's Google Form is run by the SK under Google's own policies."});
Object.assign(window.I18N.tl,{"nav.projects":"Mga proyekto","proj.title.2324":"Ang ginawa ng SK noong 2023 at 2024","proj.body.2324":"42 proyekto, programa at aktibidad, pinagsama-sama ayon sa sektor mula sa listahan ng SK. Taon lang ang petsa.","proj.poster.2324":"Tingnan ang orihinal na poster ng 2023–2024","yr.2324":"2023–2024","yr.2025":"2025","sug.abyip":"Bukas ang SK para sa mga mungkahing programa at proyekto para sa Annual Barangay Youth Investment Program (ABYIP) at SK Budget. Gabay sa pagpaplano at pagbabadyet ang mga ideya mo. Nakabatay pa rin ang isasama sa pangangailangan ng kabataan, prayoridad ng SK at pondong nakalaan.","sug.formbtn":"Buksan ang suggestion form ng SK","sug.quick":"O magpadala ng mabilis na ideya dito","foot.priv":"Hindi nangongolekta ng personal na datos ang site na ito. Nasa sarili mong device lang naka-save ang iyong heart reaction at pinili mong wika. Ang Google Form ng SK ay pinapatakbo ng SK sa ilalim ng patakaran ng Google."});
Object.assign(window.I18N.hil,{"nav.projects":"Mga proyekto","proj.title.2324":"Ang ginhimo sang SK sang 2023 kag 2024","proj.body.2324":"42 ka proyekto, programa kag buluhaton, gin-grupo suno sa sektor halin sa listahan sang SK. Tuig lang ang petsa.","proj.poster.2324":"Tan-awa ang orihinal nga poster sang 2023–2024","yr.2324":"2023–2024","yr.2025":"2025","sug.abyip":"Bukas ang SK para sa mga suhestyon nga programa kag proyekto para sa Annual Barangay Youth Investment Program (ABYIP) kag SK Budget. Giya sa pagplano kag pagbadyet ang imo mga ideya. Ang mapaslak nagadepende pa sa kinahanglan sang kabataan, prayoridad sang SK kag pondo nga nahaylo.","sug.formbtn":"Buksi ang suggestion form sang SK","sug.quick":"Ukon magpadala sang madasig nga ideya diri","foot.priv":"Wala nagakolekta sang personal nga datos ang site nga ini. Sa kaugalingon mo nga device lang naka-save ang imo heart reaction kag pinili nga lingguwahe. Ang Google Form sang SK gapadalagan sang SK sa idalom sang palisiya sang Google."});
Object.assign(window.I18N.en,{"vid.title":"Accomplishment report video","vid.body":"A 30-second look at the SK's accomplishments, from the SK's own video."});
Object.assign(window.I18N.tl,{"vid.title":"Video ng accomplishment report","vid.body":"30-segundong tanaw sa mga nagawa ng SK, mula sa sariling video ng SK."});
Object.assign(window.I18N.hil,{"vid.title":"Video sang accomplishment report","vid.body":"30-segundo nga pagtan-aw sa mga nahimo sang SK, halin sa kaugalingon nga video sang SK."});

/* ---------- v1.7.0: notices, events, documents ----------
   ANNOUNCEMENT: a bar shown at the top of every page. Set to null to hide it.
     window.ANNOUNCEMENT = { t: "Basketball league registration is open", href: "https://www.facebook.com/...", link: "Details" };
   EVENTS: list for the Events page (newest first is fine). iso is YYYY-MM-DD and is used to split Upcoming and Past.
     { t: "Event name", d: "Dec 20, 2026", iso: "2026-12-20", where: "Bancal Gymnasium", c: "One or two sentences." }
   DOCUMENTS: PDFs you upload to assets/docs/. { t: "ABYIP 2026", d: "Jan 2026", f: "assets/docs/abyip-2026.pdf" }
   After editing, run:  node tools/build.js   (rebuilds the pages) */
window.ANNOUNCEMENT = null;
window.EVENTS = [];
window.DOCUMENTS = [];

/* ---------- v1.7.0: page text (EN / Tagalog / Hiligaynon). Hiligaynon is a draft. ---------- */
(function () {
  const T = (k, en, tl, hil) => { const L = window.I18N; L.en[k] = en; L.tl[k] = tl; L.hil[k] = hil; };
  T('nav.home', 'Home', 'Home', 'Panimalay');
  T('nav.reports', 'Reports', 'Mga report', 'Mga report');
  T('nav.about', 'About', 'Tungkol sa SK', 'Parte sa SK');
  T('nav.events', 'Events', 'Mga kaganapan', 'Mga hitabo');
  T('nav.downloads', 'Downloads', 'Mga download', 'Mga download');
  T('nav.faq', 'FAQ', 'Mga tanong', 'Mga pamangkot');
  T('nav.contact', 'Contact', 'Makipag-ugnayan', 'Pagkontak');
  T('foot.more', 'More', 'Iba pa', 'Iba pa');
  T('foot.textsize', 'Text size', 'Laki ng titik', 'Kadako sang letra');
  T('hero.cta2', 'See the reports', 'Tingnan ang mga report', 'Tan-awa ang mga report');
  T('rep.more', 'See all reports', 'Tingnan ang lahat ng report', 'Tan-awa tanan nga report');
  T('quick.k', 'Need something?', 'May kailangan?', 'May kinahanglan?');
  T('quick.title', 'Quick links', 'Mabilis na link', 'Madasig nga link');
  T('q.hot.t', 'Emergency numbers', 'Mga numero sa emergency', 'Mga numero sa emergency');
  T('q.hot.b', 'Police, fire, medical and rescue contacts for Carles.', 'Pulis, bumbero, medikal at rescue sa Carles.', 'Pulis, bombero, medikal kag rescue sa Carles.');
  T('q.svc.t', 'Government services', 'Serbisyo ng gobyerno', 'Serbisyo sang gobyerno');
  T('q.svc.b', 'LTO, SSS, PhilHealth, BIR and more, with the documents to prepare.', 'LTO, SSS, PhilHealth, BIR at iba pa, kasama ang mga dokumentong ihahanda.', 'LTO, SSS, PhilHealth, BIR kag iban pa, upod ang mga dokumento nga andamon.');
  T('q.proj.t', 'Project lists', 'Listahan ng proyekto', 'Lista sang proyekto');
  T('q.proj.b', 'Searchable lists of SK projects from 2023 to 2025.', 'Mahahanap na listahan ng mga proyekto ng SK mula 2023 hanggang 2025.', 'Mahibal-an nga lista sang mga proyekto sang SK halin 2023 tubtob 2025.');
  T('q.about.t', 'Meet the officials', 'Kilalanin ang mga opisyal', 'Kilalaha ang mga opisyal');
  T('q.about.b', 'The SK Chair and council for 2023 to 2026.', 'Ang SK Chair at konseho para sa 2023 hanggang 2026.', 'Ang SK Chair kag konseho para sa 2023 tubtob 2026.');
  T('q.dl.t', 'Downloads', 'Mga download', 'Mga download');
  T('q.dl.b', 'Posters and lists to save, print or share.', 'Mga poster at listahang pwedeng i-save, i-print o ibahagi.', 'Mga poster kag lista nga mahimo i-save, i-print ukon ipaambit.');
  T('q.faq.t', 'Questions and answers', 'Mga tanong at sagot', 'Mga pamangkot kag sabat');
  T('q.faq.b', 'How to suggest a project, reach the SK and more.', 'Paano magmungkahi ng proyekto, makipag-ugnayan sa SK at iba pa.', 'Paano magsugyot sang proyekto, makigkontak sa SK kag iban pa.');
  T('q.sug.t', 'Suggest a project', 'Magmungkahi ng proyekto', 'Magsugyot sang proyekto');
  T('q.sug.b', 'Send your idea for the ABYIP and SK Budget.', 'Ipadala ang ideya mo para sa ABYIP at SK Budget.', 'Ipadala ang imo ideya para sa ABYIP kag SK Budget.');
  T('reports.title', 'Accomplishment reports', 'Mga accomplishment report', 'Mga accomplishment report');
  T('reports.body', 'Every poster the SK has shared so far, from the first 45 days of the term to the newest projects. Tap a poster to enlarge it. Open a report to see it on its own page and share it.', 'Lahat ng poster na ibinahagi ng SK, mula sa unang 45 araw ng termino hanggang sa pinakabagong proyekto. I-tap ang poster para palakihin. Buksan ang report para makita ito sa sarili nitong pahina at maibahagi.', 'Tanan nga poster nga gin-ambit sang SK, halin sa una nga 45 ka adlaw sang termino tubtob sa pinakabag-o nga proyekto. I-tap ang poster para padakuon. Buksi ang report agud makita sa iya kaugalingon nga pahina kag maipaambit.');
  T('f.nov', 'Nov 2023', 'Nob 2023', 'Nob 2023');
  T('f.dec', 'Dec 2023', 'Dis 2023', 'Dis 2023');
  T('side.motto', 'SK motto', 'Motto ng SK', 'Motto sang SK');
  T('f45.quote', 'Bancal to the Highest', 'Bancal to the Highest', 'Bancal to the Highest');
  T('sug.body', 'Have an idea for a program, project or activity in Bancal? Tell the SK.', 'May ideya para sa programa, proyekto o aktibidad sa Bancal? Sabihin sa SK.', 'May ideya para sa programa, proyekto ukon buluhaton sa Bancal? Silhig sa SK.');
  T('foot.priv', 'This site does not collect personal data. Your heart reactions, language and display choices are saved only on your own device.', 'Hindi nangongolekta ng personal na datos ang site na ito. Sa sarili mong device lang naka-save ang iyong heart, wika at display setting.', 'Wala nagakolekta sang personal nga datos ang site nga ini. Sa kaugalingon mo nga device lang naka-save ang imo heart, lingguwahe kag display setting.');
  T('about.k', 'Who we are', 'Sino kami', 'Sin-o kami');
  T('about.title', 'About SK Bancal', 'Tungkol sa SK Bancal', 'Parte sa SK Bancal');
  T('about.body', 'The Sangguniang Kabataan (SK) is the youth council of Barangay Bancal, Carles, Iloilo. This council is led by Chair Hon. Nicole Anne D. Barbosa, term 2023 to 2026.', 'Ang Sangguniang Kabataan (SK) ang konseho ng kabataan ng Barangay Bancal, Carles, Iloilo. Pinamumunuan ito ni Chair Hon. Nicole Anne D. Barbosa, termino 2023 hanggang 2026.', 'Ang Sangguniang Kabataan (SK) amo ang konseho sang kabataan sang Barangay Bancal, Carles, Iloilo. Ginapangunahan ini ni Chair Hon. Nicole Anne D. Barbosa, termino 2023 tubtob 2026.');
  T('about.body2', 'The SK runs sports leagues, scholarships, feeding programs, clean-ups and help for families, and posts its accomplishment reports on its Facebook profile.', 'Nagpapatakbo ang SK ng mga liga sa palakasan, scholarship, feeding program, clean-up at tulong sa mga pamilya, at ipinopost ang mga accomplishment report sa Facebook profile nito.', 'Nagapadalagan ang SK sang mga liga sa sports, scholarship, feeding program, clean-up kag bulig sa mga pamilya, kag ginapost ang mga accomplishment report sa Facebook profile sini.');
  T('about.site.t', 'About this website', 'Tungkol sa website na ito', 'Parte sa website nga ini');
  T('about.site.b', 'This is a community information website made to support the SK. It is not an official government website. Posters, photos and the SK logo belong to the Sangguniang Kabataan of Barangay Bancal. Design and code by Jolan Clark Sorillo.', 'Isa itong community information website na ginawa para suportahan ang SK. Hindi ito opisyal na website ng gobyerno. Ang mga poster, larawan at logo ng SK ay pag-aari ng Sangguniang Kabataan ng Barangay Bancal. Disenyo at code ni Jolan Clark Sorillo.', 'Ini isa ka community information website nga ginhimo para suportahan ang SK. Indi ini opisyal nga website sang gobyerno. Ang mga poster, retrato kag logo sang SK iya sang Sangguniang Kabataan sang Barangay Bancal. Disenyo kag code ni Jolan Clark Sorillo.');
  T('ev.k', "What's next", 'Ano ang susunod', 'Ano ang masunod');
  T('ev.title', 'Announcements and events', 'Mga anunsyo at kaganapan', 'Mga anunsyo kag hitabo');
  T('ev.body', "Upcoming SK activities and notices. For the latest news, check the SK's Facebook profile.", 'Mga paparating na aktibidad at abiso ng SK. Para sa pinakabagong balita, tingnan ang Facebook profile ng SK.', 'Mga umabot nga buluhaton kag pahibalo sang SK. Para sa pinakabag-o nga balita, tan-awa ang Facebook profile sang SK.');
  T('ev.none', "No activities or notices are posted here right now. Check the SK's Facebook profile for the latest news.", 'Walang nakapost na aktibidad o abiso rito ngayon. Tingnan ang Facebook profile ng SK para sa pinakabagong balita.', 'Wala pa sing nakapost nga buluhaton ukon pahibalo diri subong. Tan-awa ang Facebook profile sang SK para sa pinakabag-o nga balita.');
  T('ev.up', 'Upcoming', 'Paparating', 'Umabot');
  T('ev.past', 'Past', 'Nakaraan', 'Nagligad');
  T('ev.where', 'Where', 'Saan', 'Diin');
  T('dl.k', 'Free to save', 'Libre i-save', 'Libre i-save');
  T('dl.title', 'Downloads', 'Mga download', 'Mga download');
  T('dl.body', "Posters and lists you can save, print or share. Official documents are posted on the SK's Facebook profile.", 'Mga poster at listahang pwede mong i-save, i-print o ibahagi. Ang mga opisyal na dokumento ay nasa Facebook profile ng SK.', 'Mga poster kag lista nga mahimo mo i-save, i-print ukon ipaambit. Ang mga opisyal nga dokumento ara sa Facebook profile sang SK.');
  T('dl.ppa25', 'Projects, programs and activities 2025', 'Mga proyekto, programa at aktibidad 2025', 'Mga proyekto, programa kag buluhaton 2025');
  T('dl.ppa2324', 'Accomplishments 2023 to 2024', 'Mga nagawa 2023 hanggang 2024', 'Mga nahimo 2023 tubtob 2024');
  T('dl.poster', 'Poster image', 'Larawan ng poster', 'Retrato sang poster');
  T('dl.vid', 'Accomplishment report video', 'Video ng accomplishment report', 'Video sang accomplishment report');
  T('dl.vidb', '30 seconds, MP4', '30 segundo, MP4', '30 segundo, MP4');
  T('dl.get', 'Download', 'I-download', 'I-download');
  T('dl.hot', 'Carles emergency hotlines', 'Mga hotline sa emergency ng Carles', 'Mga hotline sa emergency sang Carles');
  T('dl.hotb', 'A printable list of the numbers from the Carles MDRRMO advisory.', 'Napi-print na listahan ng mga numero mula sa advisory ng Carles MDRRMO.', 'Mapi-print nga lista sang mga numero halin sa advisory sang Carles MDRRMO.');
  T('dl.print', 'Open and print', 'Buksan at i-print', 'Buksi kag i-print');
  T('dl.docs', 'Documents', 'Mga dokumento', 'Mga dokumento');
  T('faq.k', 'Questions', 'Mga tanong', 'Mga pamangkot');
  T('faq.title', 'Frequently asked questions', 'Mga madalas itanong', 'Mga kinabulag-an nga pamangkot');
  T('faq.body', 'Short answers about the SK and this website.', 'Maikling sagot tungkol sa SK at sa website na ito.', 'Mabaklid nga sabat parte sa SK kag sa website nga ini.');
  const Q = [
    ['Is this the official website of the SK?', "No. This is a community information website made to support the SK. Official announcements are posted on the SK's Facebook profile.",
      'Ito ba ang opisyal na website ng SK?', 'Hindi. Isa itong community information website na ginawa para suportahan ang SK. Ang mga opisyal na anunsyo ay nasa Facebook profile ng SK.',
      'Opisyal bala nga website ini sang SK?', 'Indi. Ini isa ka community information website nga ginhimo para suportahan ang SK. Ang mga opisyal nga anunsyo ara sa Facebook profile sang SK.'],
    ["Where can I see the SK's latest news?", 'On the SK Bancal Facebook profile. This website keeps the accomplishment reports, projects and useful numbers in one place.',
      'Saan makikita ang pinakabagong balita ng SK?', 'Sa Facebook profile ng SK Bancal. Dito sa website, nasa iisang lugar ang mga accomplishment report, proyekto at kapaki-pakinabang na numero.',
      'Diin makita ang pinakabag-o nga balita sang SK?', 'Sa Facebook profile sang SK Bancal. Diri sa website, ara sa isa ka lugar ang mga accomplishment report, proyekto kag mapuslanon nga numero.'],
    ['How do I suggest a program or project?', "Use the SK's suggestion form (a Google Form). Your ideas guide the Annual Barangay Youth Investment Program (ABYIP) and the SK Budget. What gets included still depends on the youth's needs, SK priorities and available funds.",
      'Paano magmungkahi ng programa o proyekto?', 'Gamitin ang suggestion form ng SK (Google Form). Gabay ang mga ideya ninyo sa Annual Barangay Youth Investment Program (ABYIP) at SK Budget. Nakadepende pa rin sa pangangailangan ng kabataan, prayoridad ng SK at magagamit na pondo kung ano ang isasama.',
      'Paano magsugyot sang programa ukon proyekto?', 'Gamita ang suggestion form sang SK (Google Form). Giya ang inyo mga ideya sa Annual Barangay Youth Investment Program (ABYIP) kag SK Budget. Nagadepende pa gihapon sa kinahanglan sang kabataan, prayoridad sang SK kag pondo nga nahaylo kon ano ang mapaslak.'],
    ['How do I contact the SK?', 'Message the SK through its Facebook profile. This website does not receive messages.',
      'Paano makipag-ugnayan sa SK?', 'Mag-message sa SK sa pamamagitan ng Facebook profile nito. Hindi tumatanggap ng mensahe ang website na ito.',
      'Paano makigkontak sa SK?', 'Mag-message sa SK paagi sa Facebook profile sini. Wala nagatanggap sang mensahe ini nga website.'],
    ['Where can I see what the SK has done?', 'The Reports page shows every accomplishment poster. The Projects page lists 49 projects, programs and activities for 2025 and 42 for 2023 to 2024.',
      'Saan makikita ang mga nagawa ng SK?', 'Ipinapakita ng pahina ng Reports ang lahat ng accomplishment poster. Nakalista naman sa pahina ng Projects ang 49 proyekto, programa at aktibidad noong 2025 at 42 noong 2023 hanggang 2024.',
      'Diin makita ang mga nahimo sang SK?', 'Ginapakita sang Reports nga pahina ang tanan nga accomplishment poster. Ang Projects nga pahina may lista sang 49 ka proyekto, programa kag buluhaton sang 2025 kag 42 sang 2023 tubtob 2024.'],
    ['What number do I call in an emergency?', 'Call 911 for any emergency. The Hotlines page lists local numbers from the Carles MDRRMO advisory (updated July 20, 2026) for medical, fire, police and sea rescue. Numbers can change.',
      'Anong numero ang tatawagan sa emergency?', 'Tumawag sa 911 para sa anumang emergency. Nakalista sa pahina ng Hotlines ang mga lokal na numero mula sa advisory ng Carles MDRRMO (na-update noong Hulyo 20, 2026) para sa medikal, sunog, pulis at sea rescue. Maaaring magbago ang mga numero.',
      'Ano nga numero ang tawgan kon may emergency?', 'Tawag sa 911 para sa bisan ano nga emergency. Ang Hotlines nga pahina may lista sang lokal nga numero halin sa advisory sang Carles MDRRMO (na-update Hulyo 20, 2026) para sa medikal, sunog, pulis kag sea rescue. Mahimo magbag-o ang mga numero.'],
    ['Does this website collect my personal information?', 'No. It saves your language, light or dark mode and your hearts only on your own device. Read the Privacy Policy for details.',
      'Nangongolekta ba ang website na ito ng personal na impormasyon?', 'Hindi. Sa sarili mong device lang naka-save ang iyong wika, light o dark mode at mga heart. Basahin ang Privacy Policy para sa detalye.',
      'Nagakolekta bala sang personal nga impormasyon ini nga website?', 'Indi. Sa kaugalingon mo nga device lang naka-save ang imo lingguwahe, light ukon dark mode kag mga heart. Basaha ang Privacy Policy para sa detalye.'],
    ['Who made this website?', 'Jolan Clark Sorillo designed and built it for the SK. Posters, photos and the SK logo belong to the Sangguniang Kabataan of Barangay Bancal.',
      'Sino ang gumawa ng website na ito?', 'Dinisenyo at ginawa ito ni Jolan Clark Sorillo para sa SK. Ang mga poster, larawan at logo ng SK ay pag-aari ng Sangguniang Kabataan ng Barangay Bancal.',
      'Sin-o ang nagpanday sini nga website?', 'Gin-disenyo kag gin-himo ini ni Jolan Clark Sorillo para sa SK. Ang mga poster, retrato kag logo sang SK iya sang Sangguniang Kabataan sang Barangay Bancal.'],
    ['Something on the site is wrong or should be removed. What do I do?', 'Message the SK through its Facebook profile and say which page it is on, so it can be corrected or removed.',
      'May mali sa site o dapat tanggalin. Ano ang gagawin?', 'Mag-message sa SK sa Facebook profile nito at sabihin kung aling pahina, para maitama o matanggal.',
      'May sala sa site ukon dapat tanggalon. Ano ang himuon?', 'Mag-message sa SK sa Facebook profile sini kag silhig kon diin nga pahina, agud mabag-o ukon matanggal.']
  ];
  Q.forEach((q, i) => { T('faq.q' + (i + 1), q[0], q[2], q[4]); T('faq.a' + (i + 1), q[1], q[3], q[5]); });
  T('ct.k', 'Get in touch', 'Makipag-ugnayan', 'Magkontak');
  T('ct.title', 'Contact the SK', 'Makipag-ugnayan sa SK', 'Magkontak sa SK');
  T('ct.body', "The SK of Barangay Bancal, Carles, Iloilo answers questions through its Facebook profile. This website does not receive messages.", 'Sumasagot ang SK ng Barangay Bancal, Carles, Iloilo sa mga tanong sa pamamagitan ng Facebook profile nito. Hindi tumatanggap ng mensahe ang website na ito.', 'Nagasabat ang SK sang Barangay Bancal, Carles, Iloilo sa mga pamangkot paagi sa Facebook profile sini. Wala nagatanggap sang mensahe ini nga website.');
  T('ct.fb', 'Announcements, posters and messages.', 'Mga anunsyo, poster at mensahe.', 'Mga anunsyo, poster kag mensahe.');
  T('ct.chair', "The SK Chair's own profile.", 'Mismong profile ng SK Chair.', 'Mismo nga profile sang SK Chair.');
  T('ct.write', 'Write it here, then send it on Facebook.', 'Isulat dito, saka ipadala sa Facebook.', 'Isulat diri, dayon ipadala sa Facebook.');
  T('ct.hot', 'In an emergency, call 911 or the hotlines. Do not message the SK.', 'Sa emergency, tumawag sa 911 o sa mga hotline. Huwag mag-message sa SK.', 'Kon may emergency, tawag sa 911 ukon sa mga hotline. Indi mag-message sa SK.');
  T('ct.note', 'Barangay Bancal, Carles, Iloilo, Philippines.', 'Barangay Bancal, Carles, Iloilo, Pilipinas.', 'Barangay Bancal, Carles, Iloilo, Pilipinas.');
  T('nf.title', 'That page was not found', 'Hindi nahanap ang pahinang iyon', 'Wala makita ang amo nga pahina');
  T('nf.body', 'The link may be old or mistyped. Try one of these.', 'Maaaring luma o mali ang link. Subukan ang isa sa mga ito.', 'Mahimo daan ukon sala ang link. Probaha ang isa sa sini.');
  T('rd.back', 'All reports', 'Lahat ng report', 'Tanan nga report');
  T('rd.prev', 'Previous report', 'Nakaraang report', 'Naligad nga report');
  T('rd.next', 'Next report', 'Susunod na report', 'Masunod nga report');
  T('rd.obj', 'Objective', 'Layunin', 'Katuyuan');
  T('rd.more', 'More reports', 'Iba pang report', 'Iban pa nga report');
  T('nav.menu.home', 'Home', 'Home', 'Panimalay');
})();

(function () {
  const T = (k, en, tl, hil) => { const L = window.I18N; L.en[k] = en; L.tl[k] = tl; L.hil[k] = hil; };
  T('hero.s1', 'The youth council of Barangay Bancal, Carles, Iloilo, term 2023 to 2026. We organize', 'Ang konseho ng kabataan ng Barangay Bancal, Carles, Iloilo, termino 2023 hanggang 2026. Nag-oorganisa kami ng', 'Ang konseho sang kabataan sang Barangay Bancal, Carles, Iloilo, termino 2023 tubtob 2026. Nagaorganisar kami sang');
  T('rot.1', 'sports leagues', 'mga liga sa palakasan', 'mga liga sa sports');
  T('rot.2', 'scholarships', 'mga scholarship', 'mga scholarship');
  T('rot.3', 'feeding programs', 'feeding program', 'feeding program');
  T('rot.4', 'clean-ups', 'clean-up', 'clean-up');
  T('rot.5', 'help for families', 'tulong sa mga pamilya', 'bulig sa mga pamilya');
  T('num.k', 'In numbers', 'Sa numero', 'Sa numero');
  T('num.title', 'What the SK works on', 'Ano ang pinagtutuunan ng SK', 'Ano ang gina-focus sang SK');
  T('num.body', 'Projects, programs and activities from 2023 to 2025, grouped by sector.', 'Mga proyekto, programa at aktibidad mula 2023 hanggang 2025, ayon sa sektor.', 'Mga proyekto, programa kag buluhaton halin 2023 tubtob 2025, suno sa sektor.');
  T('num.btn', 'Browse the project lists', 'Tingnan ang mga listahan', 'Tan-awa ang mga lista');
  T('tl.k', 'The term so far', 'Ang termino hanggang ngayon', 'Ang termino tubtob subong');
  T('tl.title', 'Milestones, 2023 to 2026', 'Mga tampok, 2023 hanggang 2026', 'Mga tampok, 2023 tubtob 2026');
  T('tl.body', "A few of the SK's activities in order. Each one opens its report.", 'Ilan sa mga aktibidad ng SK ayon sa pagkakasunod. Bubuksan ng bawat isa ang report nito.', 'Pila sa mga buluhaton sang SK suno sa pagkasunod-sunod. Ang kada isa magabukas sang report sini.');
  T('tl.read', 'Open the report', 'Buksan ang report', 'Buksi ang report');
  T('tl.list', 'See the project list', 'Tingnan ang listahan ng proyekto', 'Tan-awa ang lista sang proyekto');
  T('sb.t', 'In an emergency, call 911', 'Sa emergency, tumawag sa 911', 'Kon may emergency, tawag sa 911');
  T('sb.b', 'Local numbers for Carles, Iloilo are one tap away.', 'Isang tap lang ang mga lokal na numero para sa Carles, Iloilo.', 'Isa lang ka tap ang mga lokal nga numero para sa Carles, Iloilo.');
  T('aa.1', 'Normal', 'Karaniwan', 'Normal');
  T('aa.2', 'Large', 'Malaki', 'Dako');
  T('aa.3', 'Largest', 'Pinakamalaki', 'Pinakadako');
})();

(function () {
  const T = (k, en, tl, hil) => { const L = window.I18N; L.en[k] = en; L.tl[k] = tl; L.hil[k] = hil; };
  T('srch.ph', 'Search reports, projects, services, hotlines', 'Maghanap ng report, proyekto, serbisyo, hotline', 'Pangita sang report, proyekto, serbisyo, hotline');
  T('srch.none', 'Nothing found. Try another word.', 'Walang nakita. Subukan ang ibang salita.', 'Wala sing makita. Tilawi ang iban nga pulong.');
  T('srch.hint', 'Type to search. Press Esc to close.', 'Mag-type para maghanap. Pindutin ang Esc para isara.', 'Mag-type agud mangita. Pugsa ang Esc agud isara.');
})();

(function () {
  const T = (k, en, tl, hil) => { const L = window.I18N; L.en[k] = en; L.tl[k] = tl; L.hil[k] = hil; };
  T('pwa.t', 'Install the SK Bancal app', 'I-install ang SK Bancal app', 'I-install ang SK Bancal app');
  T('pwa.b', 'One tap from your home screen. Reports and hotlines still open without internet.', 'Isang tap mula sa home screen. Bukas pa rin ang mga report at hotline kahit walang internet.', 'Isa ka tap halin sa home screen. Buksan pa gihapon ang mga report kag hotline bisan wala internet.');
  T('pwa.go', 'Install', 'I-install', 'I-install');
  T('pwa.no', 'Not now', 'Mamaya na', 'Sa liwat na');
  T('pwa.ios', 'Tap the Share button, then choose "Add to Home Screen".', 'Pindutin ang Share button, tapos piliin ang "Add to Home Screen".', 'Pugsa ang Share button, dayon pilia ang "Add to Home Screen".');
  T('pwa.foot', 'Install the app', 'I-install ang app', 'I-install ang app');
  T('pwa.done', 'App installed. Salamat!', 'Na-install na ang app. Salamat!', 'Na-install na ang app. Salamat!');
  T('net.off', 'You are offline. Pages you opened before still work.', 'Offline ka. Gumagana pa rin ang mga pahinang nabuksan mo na.', 'Offline ka. Nagagana pa ang mga pahina nga nabuksan mo na.');
  T('net.on', 'Back online.', 'Online ka na ulit.', 'Online ka na liwat.');
})();

(function () {
  const T = (k, en, tl, hil) => { const L = window.I18N; L.en[k] = en; L.tl[k] = tl; L.hil[k] = hil; };
  T('vcf.btn', 'Save all numbers to my phone', 'I-save ang lahat ng numero sa phone ko', 'I-save tanan nga numero sa phone ko');
  T('vcf.note', 'Downloads a contacts file. Open it to add every Carles emergency number at once.', 'Magda-download ng contacts file. Buksan ito para maidagdag ang lahat ng emergency number ng Carles.', 'Magadownload sang contacts file. Buksi ini agud madugang tanan nga emergency number sang Carles.');
})();

(function () {
  const T = (k, en, tl, hil) => { const L = window.I18N; L.en[k] = en; L.tl[k] = tl; L.hil[k] = hil; };
  T('nt.lang', 'Language', 'Wika', 'Pinulongan');
})();

(function () {
  const T = (k, en, tl, hil) => { const L = window.I18N; L.en[k] = en; L.tl[k] = tl; L.hil[k] = hil; };
  T('scrawl', 'start here', 'dito magsimula', 'diri magsugod');
  T('lb.prev', 'Previous poster', 'Nakaraang poster', 'Naagi nga poster');
  T('lb.next', 'Next poster', 'Susunod na poster', 'Sunod nga poster');
})();

/* Budget transparency. Fill this in when the SK releases its figures; leave allocation as null until then.
   allocation: total SK budget for the year in pesos. items: planned and spent per sector or program. docs: links to signed PDFs. */
window.BUDGET = { year: 2026, asOf: '', allocation: null, items: [], docs: [] };
(function () {
  const T = (k, en, tl, hil) => { const L = window.I18N; L.en[k] = en; L.tl[k] = tl; L.hil[k] = hil; };
  T('nav.transparency', 'Transparency', 'Transparency', 'Transparency');
  T('legal.access', 'Accessibility', 'Accessibility', 'Accessibility');
  T('q.tr.t', 'Budget transparency', 'Transparency ng budget', 'Transparency sang budget');
  T('q.tr.b', 'Where the SK fund goes, and how to ask for documents.', 'Saan napupunta ang pondo ng SK, at paano humingi ng dokumento.', 'Diin napakadto ang pondo sang SK, kag paano mangayo sang dokumento.');
  T('tr.k', 'Open books', 'Bukas na libro', 'Bukas nga libro');
  T('tr.title', 'SK budget transparency', 'Transparency ng budget ng SK', 'Transparency sang budget sang SK');
  T('tr.body', "Where the SK's money comes from, what it is planned for and how much has been spent. Figures are posted here only after the SK releases them.", 'Saan galing ang pera ng SK, para saan ito at magkano na ang nagastos. Ipo-post lang dito ang mga numero kapag inilabas na ng SK.', 'Diin gikan ang kuwarta sang SK, para sa ano kag pila na ang nagasto. Ipos-post lang diri ang mga numero kon ginpagwa na sang SK.');
  T('tr.pend', 'Not yet published', 'Hindi pa nai-post', 'Wala pa makapos-post');
  T('tr.pendh', 'The figures are not posted yet', 'Hindi pa nai-post ang mga numero', 'Wala pa maipos-post ang mga numero');
  T('tr.pendp', 'The SK has not released its budget figures for this website. Nothing on this page is an estimate. When the ABYIP and the SK budget are released, the totals, the spending by sector and the documents will appear here.', 'Hindi pa inilalabas ng SK ang mga numero ng budget para sa website na ito. Walang tantya sa pahinang ito. Kapag nailabas na ang ABYIP at budget ng SK, lalabas dito ang kabuuan, gastos ayon sa sektor at mga dokumento.', 'Wala pa ginapagwa sang SK ang mga numero sang budget para sa website nga ini. Wala sing banta sa pahina nga ini. Kon mapagwa na ang ABYIP kag budget sang SK, makita diri ang kabuuan, gasto suno sa sektor kag mga dokumento.');
  T('tr.docs', 'Documents', 'Mga dokumento', 'Mga dokumento');
  T('tr.nodocs', 'Signed documents will be linked here once the SK releases them.', 'Ilalagay dito ang mga link ng pirmadong dokumento kapag inilabas na ng SK.', 'Ibutang diri ang mga link sang pirmado nga dokumento kon mapagwa na sang SK.');
  T('tr.used', 'of the budget used', 'ng budget ang nagamit', 'sang budget ang nagamit');
  T('tr.total', 'SK budget', 'Budget ng SK', 'Budget sang SK');
  T('tr.spent', 'Spent so far', 'Nagastos na', 'Nagasto na');
  T('tr.left', 'Remaining', 'Natitira', 'Nabilin');
  T('tr.asof', 'As of', 'Hanggang', 'Tubtob');
  T('tr.h1', 'Where the money comes from', 'Saan galing ang pera', 'Diin gikan ang kuwarta');
  T('tr.p1', "The Sangguniang Kabataan receives a share of the barangay's general fund each year. It is spent through the Annual Barangay Youth Investment Program (ABYIP), which lists every planned project and its cost.", 'Tumatanggap ang Sangguniang Kabataan ng bahagi ng general fund ng barangay kada taon. Ginagastos ito sa pamamagitan ng Annual Barangay Youth Investment Program (ABYIP), na naglilista ng bawat planadong proyekto at gastos nito.', 'Nagabaton ang Sangguniang Kabataan sang bahin sang general fund sang barangay kada tuig. Ginagasto ini paagi sa Annual Barangay Youth Investment Program (ABYIP), nga nagalista sang kada plano nga proyekto kag gasto sini.');
  T('tr.h2', 'How to read the numbers', 'Paano basahin ang mga numero', 'Paano basahon ang mga numero');
  T('tr.p2', 'Planned is what the ABYIP set aside for a sector. Spent is what has actually been paid out. Remaining is the difference. The bar shows how much of the plan has been used.', 'Ang Planned ay inilaan ng ABYIP para sa isang sektor. Ang Spent ay ang aktwal na nabayaran. Ang Remaining ay ang pagkakaiba. Ipinapakita ng bar kung gaano na ang nagamit sa plano.', 'Ang Planned amo ang gintagana sang ABYIP para sa isa ka sektor. Ang Spent amo ang tunay nga nabayaran. Ang Remaining amo ang kalainan. Ginapakita sang bar kon pila na ang nagamit sa plano.');
  T('tr.h3', 'Ask for a document', 'Humingi ng dokumento', 'Mangayo sang dokumento');
  T('tr.p3', 'Anyone may ask to see the ABYIP, the SK budget or the liquidation reports. Send a message to the SK, or visit the barangay hall in Bancal, Carles.', 'Maaaring humingi ang sinuman na makita ang ABYIP, budget ng SK o mga liquidation report. Magpadala ng mensahe sa SK, o bumisita sa barangay hall sa Bancal, Carles.', 'Puwede mangayo ang bisan sin-o nga makita ang ABYIP, budget sang SK ukon mga liquidation report. Magpadala sang mensahe sa SK, ukon bisita sa barangay hall sa Bancal, Carles.');
  T('ac.lead', 'This site is meant to work for everyone in Bancal, including people on slow phones, small screens, screen readers and keyboards.', 'Ang site na ito ay para sa lahat sa Bancal, kasama ang mga gumagamit ng mabagal na phone, maliit na screen, screen reader at keyboard.', 'Ang site nga ini para sa tanan sa Bancal, upod ang mga nagagamit sang mahinay nga phone, gamay nga screen, screen reader kag keyboard.');
})();

(function () {
  const T = (k, en, tl, hil) => { const L = window.I18N; L.en[k] = en; L.tl[k] = tl; L.hil[k] = hil; };
  T('nav.officials', 'Officials', 'Mga opisyal', 'Mga opisyal');
  T('ab.k', 'The basics', 'Ang mga batayan', 'Ang mga batayan');
  T('ab.title', 'How the SK works', 'Paano gumagana ang SK', 'Paano nagahuman ang SK');
  T('ab.h1', 'Who is in the SK', 'Sino ang nasa SK', 'Sin-o ang yara sa SK');
  T('ab.p1', 'Every young Filipino aged 15 to 30 who lives in the barangay belongs to the Katipunan ng Kabataan. They vote for the SK Chairperson and the council every few years. Anyone can join the activities.', 'Ang bawat kabataang Pilipino na 15 hanggang 30 taong gulang na nakatira sa barangay ay kasapi ng Katipunan ng Kabataan. Sila ang bumoboto sa SK Chairperson at konseho kada ilang taon. Maaaring sumali ang sinuman sa mga aktibidad.', 'Ang kada kabataan nga Pilipino nga 15 tubtob 30 ka tuig nga nagapuyo sa barangay kasapi sang Katipunan ng Kabataan. Sila ang nagaboto sa SK Chairperson kag konseho kada pila ka tuig. Puwede magsali ang bisan sin-o sa mga buluhaton.');
  T('ab.h2', 'What the SK does', 'Ano ang ginagawa ng SK', 'Ano ang ginahimo sang SK');
  T('ab.p2', "It plans and runs programs for youth in Bancal: sports, education, health, the environment, livelihood and community service. Each year's plan is written into the ABYIP.", 'Nagpaplano at nagpapatakbo ito ng mga programa para sa kabataan ng Bancal: palakasan, edukasyon, kalusugan, kapaligiran, kabuhayan at paglilingkod sa komunidad. Nakasulat sa ABYIP ang plano kada taon.', 'Nagaplano kag nagapadalagan ini sang mga programa para sa kabataan sang Bancal: sports, edukasyon, kahimtangan sang lawas, kapaligiran, pangabuhi kag serbisyo sa komunidad. Nasulat sa ABYIP ang plano kada tuig.');
  T('ab.h3', 'How to take part', 'Paano makilahok', 'Paano makigbahin');
  T('ab.p3', 'Join a program, send an idea through the suggestion form, or message the SK on Facebook. Reports of finished projects are on the Reports page.', 'Sumali sa programa, magpadala ng ideya sa suggestion form, o mag-message sa SK sa Facebook. Nasa Reports page ang mga report ng natapos na proyekto.', 'Sumali sa programa, magpadala sang ideya sa suggestion form, ukon mag-message sa SK sa Facebook. Yara sa Reports page ang mga report sang natapos nga proyekto.');
  T('ab.off', 'Meet the officials', 'Kilalanin ang mga opisyal', 'Kilalaha ang mga opisyal');
  T('ab.pk', 'Fine print', 'Mga patakaran', 'Mga patakaran');
  T('ab.pt', 'Policies and notices', 'Mga patakaran at paunawa', 'Mga patakaran kag paalam');
  T('ab.pb', 'Plain-language pages about how this website is run.', 'Mga pahinang madaling basahin tungkol sa pagpapatakbo ng website na ito.', 'Mga pahina nga masayon basahon parte sa pagdumala sang website nga ini.');
  T('ab.priv', 'What is saved on your device, what is not collected, and the services this site links to.', 'Ano ang nase-save sa device mo, ano ang hindi kinokolekta, at mga serbisyong nilalagyan ng link ng site.', 'Ano ang gina-save sa device mo, ano ang indi ginakolekta, kag mga serbisyo nga ginalinkan sang site.');
  T('ab.terms', 'The rules for using this community information website.', 'Ang mga tuntunin sa paggamit ng community information website na ito.', 'Ang mga lagda sa paggamit sining community information website.');
  T('ab.legal', 'Who made the site, who owns the posters and logo, and credits.', 'Sino ang gumawa ng site, sino ang may-ari ng poster at logo, at mga kredito.', 'Sin-o ang naghimo sang site, sin-o ang tag-iya sang poster kag logo, kag mga kredito.');
  T('ab.access', 'How the site supports keyboards, screen readers and small screens.', 'Paano sinusuportahan ng site ang keyboard, screen reader at maliliit na screen.', 'Paano ginasuportahan sang site ang keyboard, screen reader kag gagmay nga screen.');
})();

(function () {
  const T = (k, en, tl, hil) => { const L = window.I18N; L.en[k] = en; L.tl[k] = tl; L.hil[k] = hil; };
  T("pj.k", "Big picture", "Pangkalahatang tanaw", "Kabilugan nga tan-aw");
  T("pj.t", "The SK's work by sector", "Ang gawain ng SK ayon sa sektor", "Ang buluhaton sang SK suno sa sektor");
  T("pj.b", "All projects from the 2023 to 2025 lists, grouped by the sector they serve.", "Lahat ng proyekto mula sa mga listahan ng 2023 hanggang 2025, ayon sa sektor.", "Tanan nga proyekto halin sa mga lista sang 2023 tubtob 2025, suno sa sektor.");
  T("pj.g1", "projects, programs and activities listed", "proyekto, programa at aktibidad na nakalista", "proyekto, programa kag buluhaton nga nalista");
  T("pj.g2", "sectors covered", "sektor na natugunan", "sektor nga natugyan");
  T("pj.g3", "in the busiest sector:", "sa pinakamaraming sektor:", "sa pinakadamo nga sektor:");
  T("rp.g1", "accomplishment reports", "accomplishment report", "accomplishment report");
  T("rp.g2", "projects behind them", "proyektong nasa likod nito", "proyekto sa likod sini");
  T("rp.g3", "years of SK work, 2023 to 2026", "taon ng gawain ng SK, 2023 hanggang 2026", "tuig sang buluhaton sang SK, 2023 tubtob 2026");
  T("of.g1", "council members", "miyembro ng konseho", "miyembro sang konseho");
  T("of.g2", "years in this term", "taon sa terminong ito", "tuig sa termino nga ini");
  T("of.g3", "projects and programs so far", "proyekto at programa hanggang ngayon", "proyekto kag programa tubtob subong");
  T("of.k", "Who does what", "Sino ang gumagawa ng ano", "Sin-o ang nagahimo sang ano");
  T("of.t", "What SK officials do", "Ano ang ginagawa ng mga opisyal ng SK", "Ano ang ginahimo sang mga opisyal sang SK");
  T("of.b", "The council is small, so every member has a job.", "Maliit ang konseho, kaya may tungkulin ang bawat miyembro.", "Gamay ang konseho, gani may katungdanan ang kada miyembro.");
  T("of.r1", "The Chairperson", "Ang Chairperson", "Ang Chairperson");
  T("of.r1p", "Leads the council, presides over meetings, and represents the youth of Bancal in the barangay council.", "Nangunguna sa konseho, namumuno sa mga pulong, at kumakatawan sa kabataan ng Bancal sa sangguniang barangay.", "Nagapanguna sa konseho, nagapamuno sa mga miting, kag nagarepresentar sa kabataan sang Bancal sa sangguniang barangay.");
  T("of.r2", "The Secretary", "Ang Secretary", "Ang Secretary");
  T("of.r2p", "Keeps the records of meetings and resolutions so decisions can be checked later.", "Nag-iingat ng talaan ng mga pulong at resolusyon para masuri ang mga desisyon sa hinaharap.", "Nagatipig sang talaan sang mga miting kag resolusyon agud masuri ang mga desisyon sa ulihi.");
  T("of.r3", "The Treasurer", "Ang Treasurer", "Ang Treasurer");
  T("of.r3p", "Keeps the books for the SK fund: what comes in, what is paid out, and the receipts behind it.", "Nag-iingat ng libro ng pondo ng SK: ang pumapasok, ang binabayaran, at ang mga resibo.", "Nagatipig sang libro sang pondo sang SK: ang nagasulod, ang ginabayaran, kag ang mga resibo.");
  T("of.r4", "The Kagawads", "Ang mga Kagawad", "Ang mga Kagawad");
  T("of.r4p", "Each one looks after a committee, such as sports, education, health or the environment, and helps run its projects.", "Bawat isa ay may komite, tulad ng palakasan, edukasyon, kalusugan o kapaligiran, at tumutulong sa mga proyekto nito.", "Kada isa may komite, pareho sang sports, edukasyon, kahimtangan sang lawas ukon kapaligiran, kag nagabulig sa mga proyekto sini.");
  T("hs.k", "Stay calm", "Manatiling kalmado", "Magpabilin nga kalmado");
  T("hs.t", "What to say when you call", "Ano ang sasabihin kapag tumawag", "Ano ang isiling kon magtawag");
  T("hs.1", "Say where you are.", "Sabihin kung nasaan ka.", "Silinga kon diin ka.");
  T("hs.1b", "Barangay, street, and a landmark someone nearby would know.", "Barangay, kalye, at palatandaang kilala ng mga tao sa paligid.", "Barangay, dalan, kag palatandaan nga kilala sang mga tawo sa palibot.");
  T("hs.2", "Say what happened.", "Sabihin kung ano ang nangyari.", "Silinga kon ano ang natabo.");
  T("hs.2b", "Fire, accident, medical emergency, or someone in danger.", "Sunog, aksidente, medikal na emergency, o may nasa panganib.", "Kalayo, disgrasya, medikal nga emergency, ukon may yara sa katalagman.");
  T("hs.3", "Say how many people are hurt.", "Sabihin kung ilan ang nasaktan.", "Silinga kon pila ang nasamdan.");
  T("hs.3b", "And whether anyone is not breathing or badly bleeding.", "At kung may hindi humihinga o matinding dumudugo.", "Kag kon may indi nagaginhawa ukon grabe nga nagaduguan.");
  T("hs.4", "Stay on the line.", "Huwag ibaba ang tawag.", "Indi ibaba ang tawag.");
  T("hs.4b", "Give your name and number, and hang up only when they tell you to.", "Ibigay ang pangalan at numero mo, at ibaba lang kapag sinabi nila.", "Ihatag ang ngalan kag numero mo, kag ibaba lang kon silingon nila.");
  T("sv.k", "Save a trip", "Makatipid sa biyahe", "Makatipid sa biyahe");
  T("sv.t", "Before you go to the office", "Bago pumunta sa opisina", "Antes magkadto sa opisina");
  T("sv.1", "Check the official site first", "Tingnan muna ang opisyal na site", "Tan-awa anay ang opisyal nga site");
  T("sv.1b", "Requirements, fees and schedules change. The agency's own website has the latest.", "Nagbabago ang mga requirement, bayad at iskedyul. Nasa website ng ahensya ang pinakabago.", "Nagabaylo ang mga requirement, bayad kag iskedyul. Yara sa website sang ahensya ang pinakabag-o.");
  T("sv.2", "Bring a valid ID and copies", "Magdala ng valid ID at kopya", "Magdala sang valid ID kag kopya");
  T("sv.2b", "Many offices ask for one or two government IDs and a photocopy of each.", "Maraming opisina ang humihingi ng isa o dalawang government ID at photocopy ng bawat isa.", "Damo nga opisina ang nagapangayo sang isa ukon duha ka government ID kag photocopy sang kada isa.");
  T("sv.3", "Skip the fixers", "Huwag sa mga fixer", "Indi sa mga fixer");
  T("sv.3b", "Pay only at the official cashier and ask for a receipt. Nobody outside the office can speed up your application.", "Magbayad lang sa opisyal na kahera at humingi ng resibo. Walang nasa labas ng opisina ang makapagpapabilis ng aplikasyon mo.", "Magbayad lang sa opisyal nga kahera kag mangayo sang resibo. Wala sing sa guwa sang opisina ang makapabilis sang aplikasyon mo.");
  T("sv.4", "Go early on weekdays", "Pumunta nang maaga kapag weekday", "Magkadto sang aga kon weekday");
  T("sv.4b", "Queues are shortest in the morning, and many offices close for lunch.", "Pinakamaikli ang pila sa umaga, at maraming opisina ang nagsasara sa tanghalian.", "Pinakamadali ang pila sa aga, kag damo nga opisina ang nagasira sa udto.");
})();

(function () {
  const T = (k, en, tl, hil) => { const L = window.I18N; L.en[k] = en; L.tl[k] = tl; L.hil[k] = hil; };
  T("yr.all", "All", "Lahat", "Tanan");
  T("proj.title.all", "What the SK did, 2023 to 2025", "Ang ginawa ng SK, 2023 hanggang 2025", "Ang ginhimo sang SK, 2023 hasta 2025");
  T("proj.body.all", "Every project, program and activity from both lists in one place. The year is shown next to each sector.", "Lahat ng proyekto, programa at aktibidad mula sa dalawang listahan sa iisang lugar. Nakasulat ang taon sa tabi ng sektor.", "Tanan nga proyekto, programa kag buluhaton halin sa duha ka listahan sa isa lang ka lugar. Nasulat ang tuig sa kilid sang sektor.");
  T("proj.poster.all", "", "", "");
})();
