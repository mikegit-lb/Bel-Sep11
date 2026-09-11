/**
 * VOCABULARY DATA MODULE
 * 3 Modules x 38-40 Vocabulary Items each with definitions, Turkish meanings, collocations, and speaking prompts.
 */

const VOCAB_DATA = {
  money: [
    {
      id: "m1",
      word: "budget",
      pos: "noun / verb",
      turkish: "bütçe / bütçe yapmak",
      definition: "A plan of how much money you have and how you will spend it.",
      collocation: "make / stick to a monthly budget",
      example: "If you want to save up for a new laptop, you need to create a realistic monthly budget.",
      question: "Do you currently have a budget for your personal expenses, or do you just spend money freely?"
    },
    {
      id: "m2",
      word: "pocket money",
      pos: "noun",
      turkish: "harçlık (günlük/haftalık)",
      definition: "A small amount of money that parents give regularly to teenagers.",
      collocation: "receive / ask for pocket money",
      example: "I receive weekly pocket money from my parents, but it rarely lasts until Sunday.",
      question: "How often do you get pocket money, and what do you usually spend it on?"
    },
    {
      id: "m3",
      word: "allowance",
      pos: "noun",
      turkish: "düzenli harçlık / tahsisat",
      definition: "A fixed sum of money given on a regular schedule, often for chores or good grades.",
      collocation: "monthly / weekly allowance",
      example: "Her parents increased her monthly allowance when she started high school.",
      question: "Should teenagers receive an allowance automatically or only if they help at home?"
    },
    {
      id: "m4",
      word: "save up (for)",
      pos: "phrasal verb",
      turkish: "para biriktirmek (bir şey için)",
      definition: "To keep money over time instead of spending it so you can buy something later.",
      collocation: "save up for a trip / gaming setup",
      example: "I have been saving up for months to buy a high-quality pair of headphones.",
      question: "What is the most expensive thing you have ever saved up for?"
    },
    {
      id: "m5",
      word: "spend money on",
      pos: "verb phrase",
      turkish: "...-e para harcamak",
      definition: "To use money to pay for specific goods, experiences, or services.",
      collocation: "spend money on clothes / coffee / tech",
      example: "Many teenagers spend too much money on fast food and online subscriptions.",
      question: "What category of things do you spend the most money on each month?"
    },
    {
      id: "m6",
      word: "waste money",
      pos: "verb phrase",
      turkish: "parayı boşa harcamak / israf etmek",
      definition: "To spend money foolishly on things you do not really need or use.",
      collocation: "waste money on useless gadgets",
      example: "Buying expensive branded t-shirts is a complete waste of money in my opinion.",
      question: "What was the last item you bought that felt like a complete waste of money?"
    },
    {
      id: "m7",
      word: "afford",
      pos: "verb",
      turkish: "maddi gücü yetmek",
      definition: "To have enough money to be able to pay for something without financial stress.",
      collocation: "can / can't afford to buy something",
      example: "As a student with no full-time job, I can't afford to eat at fancy restaurants.",
      question: "What is something you would love to buy right now but currently cannot afford?"
    },
    {
      id: "m8",
      word: "affordable",
      pos: "adjective",
      turkish: "bütçeye uygun / makul fiyatlı",
      definition: "Inexpensive reasonably priced so normal people have the ability to buy it.",
      collocation: "affordable prices / housing / options",
      example: "We chose an affordable youth hostel near the city center to keep our costs low.",
      question: "Are technological devices affordable for average high school students in Turkey?"
    },
    {
      id: "m9",
      word: "expensive",
      pos: "adjective",
      turkish: "pahalı",
      definition: "Costing a lot of money; having a high price.",
      collocation: "extremely / ridiculously expensive",
      example: "Imported electronic devices are extremely expensive nowadays due to high taxes.",
      question: "Why do you think young people still buy expensive brands even when cheaper options exist?"
    },
    {
      id: "m10",
      word: "worth it",
      pos: "adjective phrase",
      turkish: "değer / parasının hakkını verir",
      definition: "Rewarding enough to justify the price or effort invested.",
      collocation: "totally / definitely worth it",
      example: "The noise-cancelling headphones were pricey, but they were definitely worth it for studying.",
      question: "Tell me about a purchase you made that was expensive but totally worth it."
    },
    {
      id: "m11",
      word: "discount",
      pos: "noun",
      turkish: "indirim",
      definition: "A reduction in the usual price of a product or service.",
      collocation: "student discount / 50% discount",
      example: "Always ask if a museum or cinema offers a student discount before paying.",
      question: "Do you regularly check for student discounts when shopping online or going to cinema?"
    },
    {
      id: "m12",
      word: "bargain",
      pos: "noun",
      turkish: "kelepir / çok uygun fiyatlı fırsat",
      definition: "Something bought at a much lower price than its true value.",
      collocation: "hunt for bargains / real bargain",
      example: "I found this vintage denim jacket at a thrift market for 100 TL—what a bargain!",
      question: "Do you enjoy thrift shopping or hunting for bargains online?"
    },
    {
      id: "m13",
      word: "online shopping",
      pos: "noun",
      turkish: "çevrimiçi / internetten alışveriş",
      definition: "The activity of buying products or services over the internet.",
      collocation: "do online shopping / online shopping apps",
      example: "Online shopping makes it very easy to compare prices between multiple stores.",
      question: "Do you prefer traditional shopping in stores or online shopping? Why?"
    },
    {
      id: "m14",
      word: "financial responsibility",
      pos: "noun phrase",
      turkish: "maddi / finansal sorumluluk",
      definition: "Managing your money wisely by budgeting, saving, and paying obligations on time.",
      collocation: "develop / teach financial responsibility",
      example: "Learning how to cook and manage a budget teaches teenagers real financial responsibility.",
      question: "At what age should teenagers start taking full financial responsibility for their daily expenses?"
    },
    {
      id: "m15",
      word: "independent",
      pos: "adjective",
      turkish: "bağımsız / kendi kendine yeten",
      definition: "Not depending on other people for money, guidance, or decision-making.",
      collocation: "become financially independent",
      example: "Living in a student dormitory helped him become much more independent.",
      question: "In what areas of your life do you feel most independent right now?"
    },
    {
      id: "m16",
      word: "make decisions",
      pos: "verb phrase",
      turkish: "karar vermek (take a decision YANLIŞTIR)",
      definition: "To choose a course of action after thinking about several possibilities.",
      collocation: "make smart decisions / make decisions under pressure",
      example: "Teenagers need practice making important decisions before moving away to university.",
      question: "Is it easy or stressful for you to make financial decisions on your own?"
    },
    {
      id: "m17",
      word: "depend on",
      pos: "phrasal verb",
      turkish: "bağımlı olmak / güvenmek / ...-e bağlı olmak",
      definition: "To rely on someone or something for financial support or help.",
      collocation: "depend on parents for living costs",
      example: "Most high school students still completely depend on their family for basic needs.",
      question: "Until what age is it normal in Turkish culture to depend on your parents?"
    },
    {
      id: "m18",
      word: "responsible for",
      pos: "adjective phrase",
      turkish: "...-den sorumlu",
      definition: "Having an obligation or duty to take care of something.",
      collocation: "be responsible for your own spending",
      example: "Once you enter university, you are fully responsible for your daily meals and bills.",
      question: "What household or personal duties are you currently responsible for?"
    },
    {
      id: "m19",
      word: "manage money",
      pos: "verb phrase",
      turkish: "parayı yönetmek / idare etmek",
      definition: "To control how you earn, save, and spend your personal funds.",
      collocation: "learn to manage money wisely",
      example: "Schools should offer practical workshops on how to manage money effectively.",
      question: "Who taught you how to manage money: your parents, school, or personal experience?"
    },
    {
      id: "m20",
      word: "plan ahead",
      pos: "verb phrase",
      turkish: "önceden planlamak",
      definition: "To prepare for future events and expenses before they happen.",
      collocation: "plan ahead for unexpected emergencies",
      example: "If you plan ahead, you can book plane tickets when they are 40% cheaper.",
      question: "Do you tend to plan ahead for future expenses, or do you live in the moment?"
    },
    {
      id: "m21",
      word: "impulse buying",
      pos: "noun",
      turkish: "dürtüsel / plansız anlık alışveriş",
      definition: "Buying things immediately without planning or thinking about consequences.",
      collocation: "avoid impulse buying at checkout",
      example: "Social media advertising is specially engineered to trigger impulse buying in teens.",
      question: "Have you ever fallen victim to impulse buying because of an Instagram or TikTok ad?"
    },
    {
      id: "m22",
      word: "needs and wants",
      pos: "noun phrase",
      turkish: "ihtiyaçlar ve istekler",
      definition: "The crucial difference between essential survival items and desirable luxuries.",
      collocation: "distinguish between needs and wants",
      example: "A winter jacket is a need; a third designer hoodie is merely a want.",
      question: "How do you distinguish between your essential needs and your temporary wants?"
    },
    {
      id: "m23",
      word: "smart choice",
      pos: "noun phrase",
      turkish: "akıllıca / mantıklı seçim",
      definition: "A sensible decision that brings good long-term value.",
      collocation: "make a smart choice",
      example: "Investing in a durable, repairable smartphone is a smart choice for any student.",
      question: "What is the smartest financial choice you made during the past six months?"
    },
    {
      id: "m24",
      word: "poor choice",
      pos: "noun phrase",
      turkish: "yanlış / kötü seçim",
      definition: "An unwise decision that leads to regret or lost money.",
      collocation: "result of a poor choice",
      example: "Ordering takeaway dinner every night is a poor choice when you are on a tight budget.",
      question: "What is a common poor financial choice that many teenagers make?"
    },
    {
      id: "m25",
      word: "save for the future",
      pos: "verb phrase",
      turkish: "gelecek için birikim yapmak",
      definition: "Setting aside funds for long-term security and upcoming life milestones.",
      collocation: "start saving for the future early",
      example: "Even saving 50 TL every week helps build the habit to save for the future.",
      question: "Do you think teenagers are too young to care about saving for the future?"
    },
    {
      id: "m26",
      word: "short-term",
      pos: "adjective",
      turkish: "kısa vadeli",
      definition: "Relating to a short period of time into the immediate future.",
      collocation: "short-term financial goals",
      example: "My short-term goal is saving enough for next weekend's concert ticket.",
      question: "What is one short-term goal you want to achieve before the end of this month?"
    },
    {
      id: "m27",
      word: "long-term",
      pos: "adjective",
      turkish: "uzun vadeli",
      definition: "Relating to an extended period of years or decades.",
      collocation: "long-term investments / plans",
      example: "Studying foreign languages has tremendous long-term benefits for your career.",
      question: "What is your main long-term dream or career goal for the next 5 years?"
    },
    {
      id: "m28",
      word: "cost of living",
      pos: "noun phrase",
      turkish: "yaşam maliyeti",
      definition: "The amount of money required to cover basic living expenses such as food, rent, and transport.",
      collocation: "high / rising cost of living",
      example: "The cost of living in major capitals like London is significantly higher than in small towns.",
      question: "How has the rising cost of living affected the everyday lifestyle of your friends and family?"
    },
    {
      id: "m29",
      word: "monthly budget",
      pos: "noun phrase",
      turkish: "aylık bütçe",
      definition: "A financial calculation allocated for one calendar month.",
      collocation: "exceed your monthly budget",
      example: "She tracks every lira on a mobile app so she doesn't exceed her monthly budget.",
      question: "If you had a fixed monthly budget of 3000 TL, how would you divide it?"
    },
    {
      id: "m30",
      word: "pay for",
      pos: "phrasal verb",
      turkish: "...-in ücretini ödemek (pay it YANLIŞTIR)",
      definition: "To give money in exchange for goods or services.",
      collocation: "pay for lunch / pay for subscriptions",
      example: "My parents pay for my school books, but I pay for my own video games.",
      question: "What things do your parents pay for, and what do you pay for yourself?"
    },
    {
      id: "m31",
      word: "borrow money",
      pos: "verb phrase",
      turkish: "borç almak (ödünç para almak)",
      definition: "To take money from someone with the clear promise to return it later.",
      collocation: "borrow money from a close friend",
      example: "I try never to borrow money because owing money makes me feel anxious.",
      question: "Would you ever borrow money from a classmate to buy a luxury item?"
    },
    {
      id: "m32",
      word: "lend money",
      pos: "verb phrase",
      turkish: "borç vermek (ödünç para vermek)",
      definition: "To give money to someone on the condition that they will pay it back.",
      collocation: "refuse to lend money",
      example: "My brother promised to lend me some cash until I get my allowance on Friday.",
      question: "If a friend forgot their wallet, would you lend them money right away?"
    },
    {
      id: "m33",
      word: "owe money",
      pos: "verb phrase",
      turkish: "borcu olmak / borçlu olmak",
      definition: "To have an obligation to repay money that you previously borrowed.",
      collocation: "owe money to the bank / friend",
      example: "He owes me 200 TL for the concert tickets I bought yesterday.",
      question: "How do you politely remind someone that they owe you money?"
    },
    {
      id: "m34",
      word: "be broke",
      pos: "idiom / phrase",
      turkish: "meteliksiz olmak / parası bitmiş olmak",
      definition: "Having completely no money left in your wallet or bank account.",
      collocation: "be completely / totally broke",
      example: "By the end of the semester, most university students are totally broke.",
      question: "Have you ever found yourself completely broke before payday or allowance day?"
    },
    {
      id: "m35",
      word: "overpriced",
      pos: "adjective",
      turkish: "aşırı pahalı / ederinden fazla fiyatlandırılmış",
      definition: "Too expensive; costing far more than it is actually worth.",
      collocation: "overpriced coffee / designer brands",
      example: "Buying popcorn at the movie theater is famously overpriced.",
      question: "What product in Turkey do you think is ridiculously overpriced?"
    },
    {
      id: "m36",
      word: "good value",
      pos: "noun phrase",
      turkish: "fiyat/performans oranı iyi olan ürün",
      definition: "Worth what you paid for it; offering great quality for a fair price.",
      collocation: "good value for money",
      example: "This refurbished laptop provides fantastic value for money for coding and homework.",
      question: "Can you mention a product that offers extraordinary value for money?"
    },
    {
      id: "m37",
      word: "financial habit",
      pos: "noun phrase",
      turkish: "parasal / harcama alışkanlığı",
      definition: "A recurring behavior related to how you earn, save, or spend money.",
      collocation: "build healthy financial habits",
      example: "Tracking daily coffee and snack expenses is a healthy financial habit.",
      question: "What is one good financial habit you want to build before graduating?"
    },
    {
      id: "m38",
      word: "unnecessary purchase",
      pos: "noun phrase",
      turkish: "gereksiz satın alma / lüzumsuz harcama",
      definition: "Buying an item that serves no real function or purpose in your daily life.",
      collocation: "regret an unnecessary purchase",
      example: "Leaving delivery apps uninstalled helps reduce unnecessary purchases.",
      question: "What was your most recent unnecessary purchase, and why did you buy it?"
    }
  ],

  technology: [
    {
      id: "t1",
      word: "device",
      pos: "noun",
      turkish: "elektronik cihaz / alet",
      definition: "An electronic object or machine that has been designed for a specific task.",
      collocation: "mobile / handheld device",
      example: "Teenagers use multiple smart devices every single day for study and gaming.",
      question: "Which electronic device could you not live without for more than 24 hours?"
    },
    {
      id: "t2",
      word: "screen time",
      pos: "noun",
      turkish: "ekran süresi",
      definition: "The amount of time someone spends looking at digital screens like phones or computers.",
      collocation: "limit / reduce daily screen time",
      example: "My average screen time climbed to seven hours during the exam preparation week.",
      question: "What is your average daily screen time, and do you think it is healthy?"
    },
    {
      id: "t3",
      word: "social media",
      pos: "noun",
      turkish: "sosyal medya",
      definition: "Websites and applications that enable users to create and share content or network.",
      collocation: "browse / scroll through social media",
      example: "Excessive time on social media can negatively affect teenage self-esteem.",
      question: "Which social media platform do you find most creative or engaging?"
    },
    {
      id: "t4",
      word: "digital life",
      pos: "noun phrase",
      turkish: "dijital yaşam / çevrimiçi varlık",
      definition: "The part of your existence and identity connected to internet tools and online spaces.",
      collocation: "manage your digital life",
      example: "Our digital life and real-world life are now completely intertwined.",
      question: "How do you keep a healthy boundary between your digital life and real life?"
    },
    {
      id: "t5",
      word: "online safety",
      pos: "noun phrase",
      turkish: "çevrimiçi / internet güvenliği",
      definition: "The practice of being safe and protected against digital risks and threats.",
      collocation: "prioritize online safety",
      example: "Teaching online safety in middle school is essential for protecting young people.",
      question: "What safety rules do you follow when creating accounts or interacting online?"
    },
    {
      id: "t6",
      word: "privacy",
      pos: "noun",
      turkish: "gizlilik / mahremiyet",
      definition: "The right to keep your personal life and data private from corporations and strangers.",
      collocation: "protect user privacy",
      example: "Many free apps collect massive amounts of user data, violating user privacy.",
      question: "Do you care if tech companies collect your private data for advertising?"
    },
    {
      id: "t7",
      word: "password",
      pos: "noun",
      turkish: "şifre / parola",
      definition: "A secret sequence of characters used to unlock access to a computer system.",
      collocation: "strong / unique password",
      example: "Never use the same password across multiple sensitive email and banking accounts.",
      question: "Do you use a password manager or write your passwords down in a notebook?"
    },
    {
      id: "t8",
      word: "artificial intelligence",
      pos: "noun",
      turkish: "yapay zeka",
      definition: "The simulation of human intelligence processes by computer systems and algorithms.",
      collocation: "powered by artificial intelligence",
      example: "Artificial intelligence is changing the way students research and write essays.",
      question: "How do you believe artificial intelligence will change high school education?"
    },
    {
      id: "t9",
      word: "AI tool",
      pos: "noun phrase",
      turkish: "yapay zeka aracı / programı",
      definition: "A software application leveraging machine learning models to solve tasks or generate content.",
      collocation: "use an AI tool for coding / summaries",
      example: "I frequently use an AI tool to check my English grammar and clarify complex math problems.",
      question: "What is your favorite AI tool, and what specific tasks do you use it for?"
    },
    {
      id: "t10",
      word: "chatbot",
      pos: "noun",
      turkish: "sohbet botu / sanal asistan",
      definition: "A computer program designed to simulate conversation with human users over the internet.",
      collocation: "interact with an AI chatbot",
      example: "The customer service chatbot answered my questions within two seconds.",
      question: "Have you ever practiced English conversation with an AI chatbot?"
    },
    {
      id: "t11",
      word: "generate",
      pos: "verb",
      turkish: "oluşturmak / üretmek",
      definition: "To produce or create something through a process or computational model.",
      collocation: "generate ideas / generate code / generate images",
      example: "Generative models can generate photorealistic images from simple text descriptions.",
      question: "Can an AI generate truly original art, or is it merely combining existing data?"
    },
    {
      id: "t12",
      word: "reliable",
      pos: "adjective",
      turkish: "güvenilir",
      definition: "Consistently good in quality or performance; able to be trusted.",
      collocation: "reliable source of information",
      example: "Always verify facts using reliable encyclopedia and peer-reviewed sources.",
      question: "How do you verify whether an article on the internet is reliable or fake?"
    },
    {
      id: "t13",
      word: "fake news",
      pos: "noun phrase",
      turkish: "yalan / sahte haber",
      definition: "False or misleading information presented as real news to deceive readers.",
      collocation: "spread / spot fake news",
      example: "Social media algorithms often promote fake news because it sparks sensational emotional reactions.",
      question: "Have you ever believed a fake news story that turned out to be completely untrue?"
    },
    {
      id: "t14",
      word: "deepfake",
      pos: "noun",
      turkish: "derin sahte (yapay zeka ile değiştirilmiş video/ses)",
      definition: "A synthetic video or audio recording manipulated using AI to misrepresent someone.",
      collocation: "convincing deepfake video",
      example: "Deepfake technology poses serious challenges for elections and celebrity safety.",
      question: "Are you worried that deepfake technology will make it impossible to trust videos online?"
    },
    {
      id: "t15",
      word: "distraction",
      pos: "noun",
      turkish: "dikkat dağıtıcı şey",
      definition: "A thing that prevents someone from concentrating on what they are doing.",
      collocation: "major distraction while studying",
      example: "Smartphone notifications are the biggest distraction when attempting deep focus.",
      question: "What is the biggest digital distraction for you when you sit down to do homework?"
    },
    {
      id: "t16",
      word: "focus",
      pos: "noun / verb",
      turkish: "odak / odaklanmak",
      definition: "The center of interest or activity; the state of concentrating attention.",
      collocation: "maintain / lose focus",
      example: "Putting your phone in another room makes it much easier to maintain your study focus.",
      question: "How long can you focus on studying before you feel the urge to check your phone?"
    },
    {
      id: "t17",
      word: "productivity",
      pos: "noun",
      turkish: "üretkenlik / verimlilik",
      definition: "The effectiveness of productive effort, especially measured in terms of rate of output.",
      collocation: "boost / maximize productivity",
      example: "Time-blocking techniques can dramatically boost your daily study productivity.",
      question: "Do digital apps increase your productivity or just give you more distractions?"
    },
    {
      id: "t18",
      word: "depend on technology",
      pos: "verb phrase",
      turkish: "teknolojiye bağımlı olmak / bel bağlamak",
      definition: "To rely on digital tools so heavily that you cannot function well without them.",
      collocation: "become overly dependent on technology",
      example: "Many people depend on technology for basic navigation and simple mental calculations.",
      question: "Are teenagers today overly dependent on technology for solving basic everyday problems?"
    },
    {
      id: "t19",
      word: "be addicted to",
      pos: "adjective phrase",
      turkish: "...-e bağımlı olmak (fiziksel/psikolojik)",
      definition: "Physically and mentally dependent on a particular substance or activity.",
      collocation: "be addicted to gaming / short videos",
      example: "It is very easy to become addicted to short video scrolling due to dopamine loops.",
      question: "Do you know anyone who is genuinely addicted to smartphone gaming or social media?"
    },
    {
      id: "t20",
      word: "useful",
      pos: "adjective",
      turkish: "faydalı / yararlı",
      definition: "Able to be used for a practical purpose or in several ways.",
      collocation: "extremely useful tool",
      example: "Language learning apps are extremely useful for expanding your daily vocabulary.",
      question: "What is the most useful app on your smartphone right now?"
    },
    {
      id: "t21",
      word: "harmful",
      pos: "adjective",
      turkish: "zararlı",
      definition: "Causing or likely to cause damage or physical/mental injury.",
      collocation: "harmful effects on mental health",
      example: "Late-night blue light exposure is harmful to your natural sleep cycle.",
      question: "In what situations does technology become clearly harmful to young people?"
    },
    {
      id: "t22",
      word: "convenient",
      pos: "adjective",
      turkish: "pratik / elverişli / zahmetsiz",
      definition: "Fitting in well with a person's needs, activities, and plans; saving effort.",
      collocation: "highly convenient way to learn",
      example: "Ordering groceries through mobile apps is extremely convenient for busy families.",
      question: "What is the most convenient digital service you use on a weekly basis?"
    },
    {
      id: "t23",
      word: "creative",
      pos: "adjective",
      turkish: "yaratıcı",
      definition: "Relating to or involving the imagination or original ideas.",
      collocation: "creative digital skills",
      example: "Video editing and 3D modeling are wonderful creative digital skills for teenagers.",
      question: "Do you use technology more for creative production or passive consumption?"
    },
    {
      id: "t24",
      word: "digital skill",
      pos: "noun phrase",
      turkish: "dijital beceri / yetkinlik",
      definition: "The ability to use digital devices, communication applications, and networks.",
      collocation: "master essential digital skills",
      example: "Prompt engineering and data literacy are becoming critical digital skills for the future.",
      question: "Which new digital skill would you like to learn before entering university?"
    },
    {
      id: "t25",
      word: "online learning",
      pos: "noun phrase",
      turkish: "çevrimiçi / uzaktan eğitim",
      definition: "Education that takes place over the internet using digital platforms.",
      collocation: "effective online learning platforms",
      example: "Online learning gives students access to world-class courses from global universities.",
      question: "Do you learn better through online learning platforms or in traditional classrooms?"
    },
    {
      id: "t26",
      word: "cyberbullying",
      pos: "noun",
      turkish: "siber zorbalık",
      definition: "The use of electronic communication to bully or intimidate a person.",
      collocation: "prevent and report cyberbullying",
      example: "Schools must take active measures to prevent cyberbullying in online student groups.",
      question: "What should someone do if they witness cyberbullying in an online community?"
    },
    {
      id: "t27",
      word: "personal data",
      pos: "noun phrase",
      turkish: "kişisel veri / bilgiler",
      definition: "Information relating to an identified or identifiable natural person.",
      collocation: "protect your personal data",
      example: "Never share sensitive personal data such as ID numbers on public forums.",
      question: "Are you careful about what personal data you share when signing up for free apps?"
    },
    {
      id: "t28",
      word: "protect information",
      pos: "verb phrase",
      turkish: "bilgileri korumak",
      definition: "To keep confidential information safe from unauthorized access or theft.",
      collocation: "use two-factor authentication to protect information",
      example: "Enabling two-factor authentication is the best step to protect your account information.",
      question: "What practical steps do you take to protect your online accounts?"
    },
    {
      id: "t29",
      word: "use wisely",
      pos: "verb phrase",
      turkish: "akıllıca / ölçülü kullanmak",
      definition: "To make sensible and balanced use of a tool or resource.",
      collocation: "use digital tools wisely",
      example: "Technology is a double-edged sword; you must learn to use it wisely.",
      question: "How can high school students use AI wisely without damaging their own critical thinking?"
    },
    {
      id: "t30",
      word: "save time",
      pos: "verb phrase",
      turkish: "zaman kazanmak / zamandan tasarruf etmek",
      definition: "To reduce the amount of time needed to accomplish something.",
      collocation: "save time on research",
      example: "Automating repetitive spreadsheet tasks can save hours of study time.",
      question: "Which app or shortcut helps you save the most time every day?"
    },
    {
      id: "t31",
      word: "waste time",
      pos: "verb phrase",
      turkish: "zamanı boşa harcamak",
      definition: "To spend time doing unconstructive or pointless activities.",
      collocation: "waste time scrolling endlessly",
      example: "Mindless scrolling on social media feeds is the easiest way to waste valuable time.",
      question: "When do you find yourself accidentally wasting time on your smartphone?"
    },
    {
      id: "t32",
      word: "improve learning",
      pos: "verb phrase",
      turkish: "öğrenmeyi geliştirmek / hızlandırmak",
      definition: "To enhance the quality, speed, or retention of knowledge acquisition.",
      collocation: "interactive apps that improve learning",
      example: "Spaced repetition flashcard software can dramatically improve language learning.",
      question: "In what way has modern software improved your English learning journey?"
    },
    {
      id: "t33",
      word: "replace humans",
      pos: "verb phrase",
      turkish: "insanların yerini almak",
      definition: "To take the position or role previously performed by human workers.",
      collocation: "AI will not replace humans entirely",
      example: "AI will not completely replace humans, but people who use AI will replace those who don't.",
      question: "Which professions do you think AI might replace within the next ten years?"
    },
    {
      id: "t34",
      word: "solve problems",
      pos: "verb phrase",
      turkish: "sorun / problem çözmek",
      definition: "To find answers or solutions to complex difficulties or questions.",
      collocation: "use algorithmic thinking to solve problems",
      example: "Engineers use computational models to solve complex climate and energy problems.",
      question: "Can AI help humans solve global challenges like climate change and disease?"
    },
    {
      id: "t35",
      word: "make life easier",
      pos: "verb phrase",
      turkish: "hayatı kolaylaştırmak",
      definition: "To simplify everyday tasks and eliminate friction or manual labor.",
      collocation: "innovations that make life easier",
      example: "Real-time navigation apps make life much easier when exploring an unfamiliar city.",
      question: "What recent invention or app has made your school life significantly easier?"
    },
    {
      id: "t36",
      word: "become dependent",
      pos: "verb phrase",
      turkish: "bağımlı hale gelmek / muhtaç kalmak",
      definition: "To reach a state where you cannot operate without assistance.",
      collocation: "become dependent on digital calculators",
      example: "If students never write essays manually, they may become dependent on automated generators.",
      question: "At what point does using AI stop being helpful and start making students dependent?"
    },
    {
      id: "t37",
      word: "digital balance",
      pos: "noun phrase",
      turkish: "dijital denge (ekran ve gerçek hayat dengesi)",
      definition: "A healthy equilibrium between time spent online and offline real-world life.",
      collocation: "achieve and maintain digital balance",
      example: "Taking a digital detox on Sundays is a great way to restore your digital balance.",
      question: "What is your strategy for maintaining a healthy digital balance during exam seasons?"
    },
    {
      id: "t38",
      word: "offline life",
      pos: "noun phrase",
      turkish: "çevrimdışı / gerçek hayat",
      definition: "Real-world experiences, hobbies, and relationships conducted away from screens.",
      collocation: "nurture your offline life",
      example: "Playing sports, hiking, and playing musical instruments enrich your offline life.",
      question: "What offline hobbies do you enjoy the most when your phone is turned off?"
    }
  ],

  travel: [
    {
      id: "v1",
      word: "travel abroad",
      pos: "verb phrase",
      turkish: "yurt dışına seyahat etmek (go to abroad YANLIŞTIR)",
      definition: "To travel to foreign countries across national borders.",
      collocation: "travel abroad for summer vacation",
      example: "I hope to travel abroad next summer to improve my spoken English fluency.",
      question: "Which foreign country would you most like to travel abroad to visit?"
    },
    {
      id: "v2",
      word: "study abroad",
      pos: "verb phrase",
      turkish: "yurt dışında eğitim görmek",
      definition: "To pursue academic education or exchange semesters at an educational institution in another country.",
      collocation: "apply to study abroad",
      example: "Studying abroad allows teenagers to develop global perspectives and independence.",
      question: "Would you like to study abroad for university or do an Erasmus semester?"
    },
    {
      id: "v3",
      word: "culture shock",
      pos: "noun phrase",
      turkish: "kültür şoku",
      definition: "The feeling of disorientation experienced by someone suddenly subjected to an unfamiliar culture or way of life.",
      collocation: "experience / overcome culture shock",
      example: "Living in Japan caused initial culture shock because social etiquette rules were completely different.",
      question: "What cultural difference in another country might give you the biggest culture shock?"
    },
    {
      id: "v4",
      word: "homesick",
      pos: "adjective",
      turkish: "sıla hasreti çeken / evini ve ailesini özleyen",
      definition: "Experiencing a longing for one's home and family during an absence from them.",
      collocation: "feel terribly homesick",
      example: "During her first two weeks in England, she felt homesick and missed Turkish food.",
      question: "If you lived abroad for a year, what would you miss most about your home in Turkey?"
    },
    {
      id: "v5",
      word: "adapt to",
      pos: "phrasal verb",
      turkish: "...-e uyum sağlamak / adapte olmak",
      definition: "To adjust or modify your behavior to suit a new environment or different conditions.",
      collocation: "adapt quickly to a new environment",
      example: "It takes patience to adapt to the local customs and dining hours of a foreign city.",
      question: "Do you usually adapt quickly when you find yourself in a completely new environment?"
    },
    {
      id: "v6",
      word: "get used to",
      pos: "verb phrase",
      turkish: "...-e alışmak (ardından isim veya V+ing gelir)",
      definition: "To become familiar with something so that it no longer seems strange or difficult.",
      collocation: "get used to living alone / cold weather",
      example: "She found it hard to get used to eating dinner at 5 PM in Germany.",
      question: "What is something unusual in another culture that you think would be hard to get used to?"
    },
    {
      id: "v7",
      word: "foreign country",
      pos: "noun phrase",
      turkish: "yabancı ülke",
      definition: "A country that is not your own native homeland.",
      collocation: "visit / live in a foreign country",
      example: "Navigating public transport in a foreign country requires confidence and map-reading skills.",
      question: "What was the first foreign country you ever visited or heard about in school?"
    },
    {
      id: "v8",
      word: "local culture",
      pos: "noun phrase",
      turkish: "yerel kültür",
      definition: "The traditions, lifestyle, cuisine, and social habits of people native to a specific region.",
      collocation: "immerse yourself in local culture",
      example: "The best way to travel is to respect the local culture and eat where local residents eat.",
      question: "What is one aspect of Turkish local culture that foreign visitors find fascinating?"
    },
    {
      id: "v9",
      word: "custom",
      pos: "noun",
      turkish: "gelenek / yerel adet",
      definition: "A traditional and widely accepted way of behaving or doing something in a particular society.",
      collocation: "follow local customs",
      example: "Taking off your shoes before entering a Turkish home is a beloved cultural custom.",
      question: "What is an important Turkish custom that you would explain to an exchange student?"
    },
    {
      id: "v10",
      word: "tradition",
      pos: "noun",
      turkish: "gelenek / köklü anane",
      definition: "The transmission of customs or beliefs from generation to generation.",
      collocation: "rich cultural tradition",
      example: "Celebrating national holidays with family gatherings is an important Turkish tradition.",
      question: "Which family or holiday tradition is your absolute favorite?"
    },
    {
      id: "v11",
      word: "polite",
      pos: "adjective",
      turkish: "kibar / saygılı / nezaketli",
      definition: "Having or showing behavior that is respectful and considerate of other people.",
      collocation: "be polite and courteous to strangers",
      example: "Saying 'please' and 'thank you' in the local language shows you are a polite traveler.",
      question: "What is considered extremely polite in Turkish culture that might be different abroad?"
    },
    {
      id: "v12",
      word: "rude",
      pos: "adjective",
      turkish: "kaba / nezaketsiz",
      definition: "Offensively impolite or ill-mannered in behavior or words.",
      collocation: "considered extremely rude",
      example: "In some countries, tipping zero percent at a sit-down restaurant is considered very rude.",
      question: "What behavior in public transport do you find particularly rude?"
    },
    {
      id: "v13",
      word: "respectful",
      pos: "adjective",
      turkish: "saygılı",
      definition: "Feeling or showing deep respect and deference for people, places, or historical sites.",
      collocation: "be respectful of religious sites",
      example: "Dress modestly and speak quietly to be respectful when visiting historic temples.",
      question: "How can young travelers show that they are respectful visitors in a foreign city?"
    },
    {
      id: "v14",
      word: "communicate",
      pos: "verb",
      turkish: "iletişim kurmak",
      definition: "To share or exchange information, news, or feelings through speech or writing.",
      collocation: "communicate effectively in English",
      example: "Even if your grammar is not perfect, body language and simple words help you communicate.",
      question: "How do you communicate with someone when neither of you speaks the other's language?"
    },
    {
      id: "v15",
      word: "misunderstanding",
      pos: "noun",
      turkish: "yanlış anlaşılma",
      definition: "A failure to understand something correctly, often causing confusion or minor conflict.",
      collocation: "cause a cultural misunderstanding",
      example: "A hand gesture in one country might mean something offensive elsewhere, causing a misunderstanding.",
      question: "Have you ever had a funny or awkward linguistic misunderstanding in English?"
    },
    {
      id: "v16",
      word: "accent",
      pos: "noun",
      turkish: "aksan / şive",
      definition: "A distinctive mode of pronunciation of a language, especially associated with a country or locality.",
      collocation: "strong regional accent",
      example: "Do not be afraid of having a Turkish accent; clear pronunciation and confidence matter most.",
      question: "Which English accent do you find easiest or hardest to understand (British, American, Australian)?"
    },
    {
      id: "v17",
      word: "public transport",
      pos: "noun phrase",
      turkish: "toplu taşıma",
      definition: "Buses, trains, subways, and trams that are available to the public and run on fixed routes.",
      collocation: "rely on public transport",
      example: "European cities have reliable public transport systems that make traveling cheap and easy.",
      question: "How does the public transport in your city compare to public transport in major European cities?"
    },
    {
      id: "v18",
      word: "accommodation",
      pos: "noun",
      turkish: "konaklama yeri (otel, yurt, pansiyon vb.)",
      definition: "A room, group of rooms, or building in which someone may live or stay.",
      collocation: "book affordable accommodation",
      example: "Booking student accommodation six months in advance saves a tremendous amount of stress.",
      question: "When traveling, do you prefer hotel accommodation, Airbnb apartments, or youth hostels?"
    },
    {
      id: "v19",
      word: "host family",
      pos: "noun phrase",
      turkish: "yanında kalınan ev sahibi aile (öğrenci değişiminde)",
      definition: "A local family that provides board and lodging to students studying abroad.",
      collocation: "stay with a friendly host family",
      example: "Staying with an English host family is the fastest way to practice everyday conversational slang.",
      question: "Would you prefer staying with a host family or living in a university dormitory with friends?"
    },
    {
      id: "v20",
      word: "exchange student",
      pos: "noun phrase",
      turkish: "değişim öğrencisi (Erasmus vb.)",
      definition: "A high school or university student who studies abroad for a set period through a partner program.",
      collocation: "welcome an international exchange student",
      example: "Our school welcomed five exchange students from Spain and Germany this semester.",
      question: "If an exchange student stayed at your home, what places in your town would you show them?"
    },
    {
      id: "v21",
      word: "passport",
      pos: "noun",
      turkish: "pasaport",
      definition: "An official government document certifying identity and citizenship, permitting travel abroad.",
      collocation: "valid passport / renew your passport",
      example: "Make sure your passport is valid for at least six months before booking international flights.",
      question: "Have you got a passport yet, and how many stamps have you collected inside it?"
    },
    {
      id: "v22",
      word: "visa",
      pos: "noun",
      turkish: "vize (ülkeye giriş izni)",
      definition: "An official endorsement on a passport indicating that the holder is allowed to enter a country.",
      collocation: "apply for a student visa",
      example: "Applying for a European Schengen visa requires collecting bank statements and flight bookings.",
      question: "Why do you think obtaining a travel visa can sometimes be a stressful process?"
    },
    {
      id: "v23",
      word: "airport",
      pos: "noun",
      turkish: "havalimanı",
      definition: "A complex of runways and buildings for the take-off, landing, and maintenance of civil aircraft.",
      collocation: "arrive at the airport 3 hours early",
      example: "Istanbul Airport is one of the largest and busiest airport hubs in the entire world.",
      question: "Do you find being at the airport exciting or stressful?"
    },
    {
      id: "v24",
      word: "luggage",
      pos: "noun (uncountable)",
      turkish: "bagaj / valizler (luggages YANLIŞTIR)",
      definition: "Suitcases or other bags in which to pack personal belongings for traveling.",
      collocation: "pack light luggage / lost luggage",
      example: "I always travel with carry-on luggage to avoid paying extra airline baggage fees.",
      question: "Do you tend to pack light luggage or overpack when you go on a trip?"
    },
    {
      id: "v25",
      word: "flight",
      pos: "noun",
      turkish: "uçuş / uçak seferi",
      definition: "A journey made through the air, especially in a commercial airplane.",
      collocation: "direct flight / long-haul flight",
      example: "Our direct flight from Istanbul to London takes approximately four hours.",
      question: "What do you usually do to pass the time during a long flight?"
    },
    {
      id: "v26",
      word: "arrival",
      pos: "noun",
      turkish: "varış / iniş / geliş",
      definition: "The act of arriving at a destination; the time an aircraft reaches its destination.",
      collocation: "passport control at arrival",
      example: "Upon arrival at the airport, we followed the signs toward baggage claim and taxis.",
      question: "What is the first thing you want to do upon arrival in a brand new foreign city?"
    },
    {
      id: "v27",
      word: "departure",
      pos: "noun",
      turkish: "kalkış / hareket / ayrılış",
      definition: "The action of leaving, especially to start a journey; scheduled leaving time.",
      collocation: "departure gate / on-time departure",
      example: "Please proceed to departure gate 24B immediately as boarding has commenced.",
      question: "How early do you usually arrive at the terminal before flight departure?"
    },
    {
      id: "v28",
      word: "destination",
      pos: "noun",
      turkish: "varılacak yer / hedef rota",
      definition: "The place to which someone or something is going or being sent.",
      collocation: "popular holiday destination",
      example: "Antalya is one of the most popular summer holiday destinations in the Mediterranean.",
      question: "What is your dream European or world travel destination?"
    },
    {
      id: "v29",
      word: "currency",
      pos: "noun",
      turkish: "para birimi",
      definition: "A system of money in common use within a particular country or economic zone.",
      collocation: "foreign currency exchange",
      example: "Before traveling to the UK, you should check the exchange rate between the Turkish Lira and British Pound.",
      question: "Do you prefer paying with a multi-currency digital card or carrying physical cash abroad?"
    },
    {
      id: "v30",
      word: "emergency",
      pos: "noun",
      turkish: "acil durum",
      definition: "A serious, unexpected, and often dangerous situation requiring immediate action.",
      collocation: "in case of an emergency",
      example: "Always save the local emergency phone numbers (like 112 in Europe or 911 in the USA).",
      question: "Do you know who to contact or what to do in case of a medical emergency abroad?"
    },
    {
      id: "v31",
      word: "safe / unsafe",
      pos: "adjectives",
      turkish: "güvenli / güvensiz / tehlikeli",
      definition: "Protected from or not exposed to danger or risk / likely to cause harm.",
      collocation: "safe neighborhood / unsafe to walk alone",
      example: "Research which neighborhoods are safe before booking late-night walking tours.",
      question: "What safety precautions should a teenager take when exploring a foreign city alone?"
    },
    {
      id: "v32",
      word: "explore",
      pos: "verb",
      turkish: "keşfetmek",
      definition: "To travel through an unfamiliar area in order to learn about it.",
      collocation: "explore hidden streets and historic sites",
      example: "We spent the entire afternoon exploring the historic cobblestone alleys of Rome.",
      question: "Do you prefer following a strict tourist map or randomly exploring side streets?"
    },
    {
      id: "v33",
      word: "experience",
      pos: "noun / verb",
      turkish: "deneyim / tecrübe etmek",
      definition: "Practical contact with and observation of facts or events; to undergo something.",
      collocation: "unforgettable life experience",
      example: "Living abroad as a high school teenager is an unforgettable, character-building experience.",
      question: "What has been the most memorable travel experience in your life so far?"
    },
    {
      id: "v34",
      word: "problem-solving",
      pos: "noun phrase",
      turkish: "sorun çözme (yeteneği)",
      definition: "The process of finding solutions to difficult or complex issues.",
      collocation: "sharp problem-solving skills",
      example: "Navigating a missed train connection in a foreign language develops great problem-solving skills.",
      question: "Tell me about a time you had to use quick problem-solving during a family journey."
    },
    {
      id: "v35",
      word: "unfamiliar",
      pos: "adjective",
      turkish: "yabancı / bilinmeyen / alışılmadık",
      definition: "Not known or recognized; unusual or novel.",
      collocation: "unfamiliar surroundings / language",
      example: "Walking through unfamiliar neighborhoods at night can feel intimidating at first.",
      question: "How do you feel when you are placed in an unfamiliar situation with new people?"
    },
    {
      id: "v36",
      word: "international",
      pos: "adjective",
      turkish: "uluslararası",
      definition: "Existing, occurring, or carried on between two or more nations.",
      collocation: "international community / atmosphere",
      example: "Our summer camp had a wonderful international atmosphere with students from twelve countries.",
      question: "Do you have any international friends with whom you chat in English online?"
    },
    {
      id: "v37",
      word: "challenge",
      pos: "noun",
      turkish: "zorluk / meydan okuma",
      definition: "A task or situation that tests someone's abilities.",
      collocation: "face a major challenge",
      example: "Learning to cook your own meals on a budget is a rewarding challenge for new students.",
      question: "What would be the greatest challenge for you if you lived alone in another country?"
    },
    {
      id: "v38",
      word: "opportunity",
      pos: "noun",
      turkish: "fırsat",
      definition: "A set of circumstances that makes it possible to do something desirable.",
      collocation: "golden opportunity to improve",
      example: "Studying abroad provides a golden opportunity to build fluent conversational English.",
      question: "If you had the opportunity to spend one year anywhere in the world, where would you choose?"
    },
    {
      id: "v39",
      word: "comfort zone",
      pos: "noun phrase",
      turkish: "konfor alanı / alışılmış güvenli alan",
      definition: "A settled state where you feel at ease and without stress or risk.",
      collocation: "step out of your comfort zone",
      example: "True personal growth happens only when you step out of your comfort zone.",
      question: "When was the last time you stepped out of your comfort zone to try something scary?"
    },
    {
      id: "v40",
      word: "make friends",
      pos: "verb phrase",
      turkish: "arkadaş edinmek (make friend YANLIŞTIR)",
      definition: "To establish a mutual friendship with someone.",
      collocation: "make friends easily with classmates",
      example: "Joining school sports clubs or arts societies is the easiest way to make friends abroad.",
      question: "Is it easy or challenging for you to make new friends in a new school or club?"
    },
    {
      id: "v41",
      word: "ask for help",
      pos: "verb phrase",
      turkish: "yardım istemek (ask help YANLIŞTIR)",
      definition: "To request assistance when you are confused, lost, or facing difficulty.",
      collocation: "never hesitate to ask for help",
      example: "If you get lost in the subway station, never hesitate to ask for help from staff.",
      question: "Are you comfortable asking for help in English from strangers, or do you feel shy?"
    }
  ]
};
