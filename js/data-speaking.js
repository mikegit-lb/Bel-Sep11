/**
 * SPEAKING DATA MODULE
 * Warm-up questions, 40+ Speaking Cards across 3 topics, Reading text & quiz, Fluency challenges, B1->B2 upgrades.
 */

const SPEAKING_DATA = {
  warmups: [
    {
      id: "w1",
      format: "Would You Rather...?",
      question: "Would you rather receive 1,000 TL in cash right now to spend immediately, or receive 3,000 TL six months from now if you promise to save it for a big goal?",
      subPrompt: "Explain your reasoning using 'because' and 'for example'."
    },
    {
      id: "w2",
      format: "Choose One and Explain",
      question: "Which would you give up for one entire week: your smartphone or all your pocket money? Why?",
      subPrompt: "Describe how your daily routine would change without it."
    },
    {
      id: "w3",
      format: "Agree or Disagree?",
      question: "“Teenagers under 18 should not be allowed to use AI tools like ChatGPT to do their school homework.” Do you agree or disagree?",
      subPrompt: "Give at least two strong arguments to support your opinion."
    },
    {
      id: "w4",
      format: "Rank and Justify",
      question: "Rank these 4 things from most important (1) to least important (4) when deciding to buy a new smartphone: Brand Name, Camera Quality, Battery Life, Price / Discount.",
      subPrompt: "Explain why your #1 choice is crucial for you."
    },
    {
      id: "w5",
      format: "Have You Ever...?",
      question: "Have you ever bought something online that looked amazing in photos but turned out to be completely useless or poor quality in real life?",
      subPrompt: "What did you do, and what lesson did you learn from it?"
    },
    {
      id: "w6",
      format: "What Would You Do If...?",
      question: "What would you do if you arrived at an airport in a foreign country and discovered that your luggage was lost and your phone battery was at 2%?",
      subPrompt: "List three immediate steps you would take to solve the situation."
    },
    {
      id: "w7",
      format: "Would You Rather...?",
      question: "Would you rather live with a local host family who speaks zero Turkish during a study abroad year, or share a student apartment with two Turkish friends?",
      subPrompt: "Consider language learning versus emotional comfort."
    },
    {
      id: "w8",
      format: "Choose One and Explain",
      question: "If you could instantly master one of these three skills, which would you pick: 1) Advanced financial investing, 2) AI software programming, 3) Fluent English speaking with no accent anxiety?",
      subPrompt: "How would this skill transform your future career?"
    },
    {
      id: "w9",
      format: "Agree or Disagree?",
      question: "“Living abroad for at least one year as a teenager should be compulsory because it builds real maturity and independence.” Agree or disagree?",
      subPrompt: "Discuss potential benefits versus emotional difficulties."
    },
    {
      id: "w10",
      format: "Rank and Justify",
      question: "Rank these culture shock challenges from scariest (1) to easiest (4): Eating unfamiliar food, speaking English with native speakers, feeling homesick, using public transport in a huge city.",
      subPrompt: "Share how you would prepare for the scariest challenge."
    },
    {
      id: "w11",
      format: "What Would You Do If...?",
      question: "What would you do if your best friend constantly borrowed pocket money from you and repeatedly forgot to pay it back?",
      subPrompt: "How would you address this without destroying your friendship?"
    },
    {
      id: "w12",
      format: "Have You Ever...?",
      question: "Have you ever experienced a funny or awkward linguistic misunderstanding while trying to communicate in English (or while using a translation app)?",
      subPrompt: "What happened, and how did both sides react?"
    }
  ],

  speakingCardsTopic1: [
    {
      id: "sc1_1",
      number: "Card 01",
      format: "Personal Questionnaire",
      badgeClass: "badge-questionnaire",
      question: "Do you think teenagers should manage their own pocket money, or does this lead to impulse buying and poor financial habits?",
      targetWords: ["manage money", "pocket money", "impulse buying", "financial habit", "independent"],
      answerFrame: "In my opinion, giving teenagers their own pocket money is crucial because it teaches them how to... However, without guidance, they might fall into impulse buying when they...",
      followUp: "Challenge: Give one specific example of a good financial habit a teenager can develop today."
    },
    {
      id: "sc1_2",
      number: "Card 02",
      format: "Ranking Task",
      badgeClass: "badge-ranking",
      question: "Rank these teenage expenses from easiest to cut (1) to hardest to cut (4) during a financial crisis: Cafe drinks, Gaming/App subscriptions, Branded clothing, Transportation fares.",
      targetWords: ["budget", "waste money", "unnecessary purchase", "afford", "needs and wants"],
      answerFrame: "If I had to reduce my monthly budget, the first thing I would eliminate is... because it is an unnecessary purchase. On the other hand, I can't afford to cut... because it is an essential need.",
      followUp: "Challenge: Contrast 'essential needs' and 'temporary wants' using specific prices in TL."
    },
    {
      id: "sc1_3",
      number: "Card 03",
      format: "Advice Task",
      badgeClass: "badge-advice",
      question: "Your 15-year-old cousin gets 1,500 TL pocket money every month, but by the 10th day he is completely broke because of online shopping. What advice would you give him?",
      targetWords: ["be broke", "plan ahead", "save up", "monthly budget", "smart choice"],
      answerFrame: "If I were in your shoes, I would immediately start by creating a... You should divide your allowance into weekly amounts so you don't end up broke. Furthermore, making the smart choice to delete shopping apps...",
      followUp: "Challenge: Use 'should' and 'have to' at least twice in your advice."
    },
    {
      id: "sc1_4",
      number: "Card 04",
      format: "Convince Me Task",
      badgeClass: "badge-convince",
      question: "Convince your parents that buying an expensive 40,000 TL laptop for your high school studies is an investment, not a waste of money.",
      targetWords: ["expensive", "worth it", "good value", "waste money", "long-term"],
      answerFrame: "I understand that 40,000 TL seems extremely expensive at first glance. However, it is definitely worth it because of its long-term durability. Rather than wasting money on a cheap laptop that breaks in one year...",
      followUp: "Challenge: Address the counter-argument about cheaper refurbished models."
    },
    {
      id: "sc1_5",
      number: "Card 05",
      format: "Mini Debate",
      badgeClass: "badge-debate",
      question: "Debate topic: 'Parents should stop giving money to their children once they turn 18, forcing them to become completely financially independent.' Defend or oppose.",
      targetWords: ["depend on", "financially independent", "cost of living", "financial responsibility", "make decisions"],
      answerFrame: "While some people argue that 18-year-olds must become fully independent, I strongly believe that with today's high cost of living, young people still need to depend on their family while studying...",
      followUp: "Challenge: Use 'On the one hand... On the other hand...' to present both sides."
    },
    {
      id: "sc1_6",
      number: "Card 06",
      format: "Personal Questionnaire",
      badgeClass: "badge-questionnaire",
      question: "Have you ever saved up for a major goal over several months? What mental strategies helped you resist impulse spending along the way?",
      targetWords: ["save up", "short-term", "long-term", "impulse buying", "afford"],
      answerFrame: "Yes, I remember when I wanted to buy... To achieve my long-term goal, I had to sacrifice short-term pleasures like... Whenever I felt the urge for impulse buying, I reminded myself that...",
      followUp: "Challenge: Explain how setting a clear visual goal helps maintain motivation."
    },
    {
      id: "sc1_7",
      number: "Card 07",
      format: "Hypothetical Scenario",
      badgeClass: "badge-hypothetical",
      question: "If you unexpectedly won 50,000 TL in a national youth science competition, what exact percentages would you spend, save, and invest?",
      targetWords: ["save for the future", "budget", "smart choice", "spend money on", "responsible for"],
      answerFrame: "If I won 50,000 TL, I would allocate 50% to save for the future because... I would use 30% to spend money on... and keep 20% for unexpected emergencies. Making this smart choice would ensure that...",
      followUp: "Challenge: Use the second conditional structure: 'If I won..., I would...'"
    },
    {
      id: "sc1_8",
      number: "Card 08",
      format: "Advice Task",
      badgeClass: "badge-advice",
      question: "A classmate wants to borrow 500 TL from you to buy designer sneakers that are on a 20% discount. How do you respond?",
      targetWords: ["borrow money", "lend money", "owe money", "discount", "overpriced"],
      answerFrame: "I would tell my classmate that although the sneakers have a 20% discount, they are still overpriced. I generally prefer not to lend money to friends because owing money creates awkward tension...",
      followUp: "Challenge: Propose a polite alternative without sounding selfish."
    },
    {
      id: "sc1_9",
      number: "Card 09",
      format: "Convince Me Task",
      badgeClass: "badge-convince",
      question: "Convince a friend who is obsessed with luxury brands that buying thrift clothes or non-branded items offers much better value for money.",
      targetWords: ["bargain", "good value", "overpriced", "waste money", "affordable"],
      answerFrame: "You really don't need to spend thousands of liras just for a logo. If you check out thrift stores, you can find incredible bargains that are durable and unique. Paying triple the price for a brand is overpriced...",
      followUp: "Challenge: Use the word 'bargain' and 'good value' in the same sentence."
    },
    {
      id: "sc1_10",
      number: "Card 10",
      format: "Mini Debate",
      badgeClass: "badge-debate",
      question: "Debate topic: 'Credit cards and digital payment apps encourage young people to spend money recklessly compared to physical cash.'",
      targetWords: ["online shopping", "manage money", "financial habit", "plan ahead", "impulse buying"],
      answerFrame: "I agree that digital payment apps make spending feel invisible, which easily triggers impulse buying. When you hold physical cash, you visually see your money disappearing, making it easier to manage your budget...",
      followUp: "Challenge: Suggest one app feature that could prevent reckless teenage spending."
    },
    {
      id: "sc1_11",
      number: "Card 11",
      format: "Personal Questionnaire",
      badgeClass: "badge-questionnaire",
      question: "In what ways do Turkish cultural traditions around money (like giving gold/cash at weddings or Bayram pocket money) influence how teenagers view spending?",
      targetWords: ["pocket money", "save for the future", "financial responsibility", "make decisions", "tradition"],
      answerFrame: "In Turkish culture, receiving pocket money during religious holidays like Bayram is a wonderful tradition. It gives teenagers a great opportunity to practice financial responsibility by saving for the future rather than...",
      followUp: "Challenge: Compare holiday cash gifts with regular monthly allowances."
    },
    {
      id: "sc1_12",
      number: "Card 12",
      format: "Problem-Solving Task",
      badgeClass: "badge-ranking",
      question: "You and two friends want to go on a 3-day camping trip. Your total group budget is strictly 4,500 TL. How do you plan food, transport, and gear?",
      targetWords: ["budget", "affordable", "plan ahead", "pay for", "cost of living"],
      answerFrame: "To make our 4,500 TL budget work, we must plan ahead carefully. First, we can take public transport which is very affordable. Second, instead of eating at cafes, we should pay for supermarket groceries...",
      followUp: "Challenge: Calculate the exact cost per person and allocate a safety emergency fund."
    }
  ],

  speakingCardsTopic2: [
    {
      id: "sc2_1",
      number: "Card 01",
      format: "Interview Task",
      badgeClass: "badge-questionnaire",
      question: "Do AI tools like ChatGPT improve students' study productivity, or do they make teenagers too dependent on technology and lazy?",
      targetWords: ["AI tool", "productivity", "depend on technology", "improve learning", "become dependent"],
      answerFrame: "In my view, AI tools can dramatically boost student productivity when used for brainstorming and summaries. However, if students use AI to write entire essays, they will inevitably become dependent on technology...",
      followUp: "Challenge: Contrast 'active learning with AI' versus 'passive cheating with AI'."
    },
    {
      id: "sc2_2",
      number: "Card 02",
      format: "Opinion Ladder",
      badgeClass: "badge-debate",
      question: "On a scale of 1 to 10, how concerned are you about online safety and personal data privacy on social media platforms? Explain your rating.",
      targetWords: ["online safety", "privacy", "personal data", "protect information", "harmful"],
      answerFrame: "I would rate my concern at an 8 out of 10. While social media is entertaining, companies constantly track our personal data. To protect our information, teenagers must prioritize online safety by...",
      followUp: "Challenge: Mention two specific settings you adjust to protect your privacy on Instagram/TikTok."
    },
    {
      id: "sc2_3",
      number: "Card 03",
      format: "Problem-Solving Task",
      badgeClass: "badge-advice",
      question: "A high school student realizes her daily screen time is 8.5 hours and her grades are plummeting. Design a realistic 3-step 'Digital Balance Plan' for her.",
      targetWords: ["screen time", "digital balance", "distraction", "focus", "offline life"],
      answerFrame: "To reduce excessive screen time, she should first eliminate notifications which cause constant distraction. Second, she needs to schedule dedicated offline life activities like sports. Finally, to restore focus...",
      followUp: "Challenge: Use 'have to' and 'should' to formulate the steps."
    },
    {
      id: "sc2_4",
      number: "Card 04",
      format: "Role Play: Student & Teacher",
      badgeClass: "badge-roleplay",
      question: "Role Play: You used an AI chatbot to generate an outline for your English literature project. Your teacher suspects you copied the whole assignment. Defend your ethical use of AI.",
      targetWords: ["AI tool", "generate", "creative", "use wisely", "improve learning"],
      answerFrame: "Teacher, I did not copy the essay. I used an AI tool merely to generate initial ideas and structure my paragraphs. All the actual analysis and writing are completely my own creative work...",
      followUp: "Challenge: Show the teacher the difference between brainstorming and plagiarism."
    },
    {
      id: "sc2_5",
      number: "Card 05",
      format: "Impromptu Speaking",
      badgeClass: "badge-convince",
      question: "Speak for 60 seconds on this topic: 'Why deepfakes and fake news represent the biggest threat to online truth in the 21st century.'",
      targetWords: ["deepfake", "fake news", "reliable", "protect information", "solve problems"],
      answerFrame: "Deepfakes and fake news are becoming dangerously sophisticated. Because anyone can generate realistic synthetic media, it is harder than ever to find reliable sources of truth. To solve this problem...",
      followUp: "Challenge: Conclude with a strong call-to-action for media literacy."
    },
    {
      id: "sc2_6",
      number: "Card 06",
      format: "Opinion Ladder",
      badgeClass: "badge-debate",
      question: "Will artificial intelligence eventually replace human teachers, or is the emotional human connection in education irreplaceable?",
      targetWords: ["artificial intelligence", "replace humans", "useful", "make life easier", "creative"],
      answerFrame: "While artificial intelligence can explain grammar rules and make life easier by generating personalized quizzes, it can never fully replace humans. Human teachers provide emotional empathy and creative inspiration...",
      followUp: "Challenge: Give an example of a classroom moment that AI could never replicate."
    },
    {
      id: "sc2_7",
      number: "Card 07",
      format: "Role Play: Parent & Teenager",
      badgeClass: "badge-roleplay",
      question: "Role Play: Your parent wants to install a parental tracking app that monitors all your chat messages and screen time. Explain why you deserve trust while assuring them of your online safety.",
      targetWords: ["privacy", "online safety", "personal data", "use wisely", "responsible for"],
      answerFrame: "Mom/Dad, I understand that you care about my online safety and want to protect me. However, having complete privacy is important for my independence. I promise to use my device wisely and I am fully responsible for...",
      followUp: "Challenge: Propose a compromise that respects both safety and privacy."
    },
    {
      id: "sc2_8",
      number: "Card 08",
      format: "Interview Task",
      badgeClass: "badge-questionnaire",
      question: "Which digital skill (coding, video editing, prompt engineering, 3D design) do you think will guarantee the best career opportunities for teenagers in 2030?",
      targetWords: ["digital skill", "productivity", "solve problems", "creative", "artificial intelligence"],
      answerFrame: "In my opinion, mastering prompt engineering and creative problem-solving will be the most vital digital skill. As artificial intelligence automates routine coding, the human ability to solve problems creatively...",
      followUp: "Challenge: Explain why technical skills combined with English fluency create superpowers."
    },
    {
      id: "sc2_9",
      number: "Card 09",
      format: "Problem-Solving Task",
      badgeClass: "badge-advice",
      question: "You notice that a younger student in your school is being targeted by malicious cyberbullying in a WhatsApp gaming group. What immediate actions should be taken?",
      targetWords: ["cyberbullying", "harmful", "online safety", "protect information", "solve problems"],
      answerFrame: "Cyberbullying is deeply harmful and should never be ignored. First, the student must take screenshots to preserve evidence. Next, they should block the bullies and report the situation to school counselors to solve the problem...",
      followUp: "Challenge: Discuss why bystanders have a moral duty to intervene."
    },
    {
      id: "sc2_10",
      number: "Card 10",
      format: "Impromptu Speaking",
      badgeClass: "badge-convince",
      question: "Explain the concept of a '24-hour Digital Detox'. What would you do during a full day without screens, and what benefits would you experience?",
      targetWords: ["digital balance", "offline life", "distraction", "focus", "save time"],
      answerFrame: "A 24-hour digital detox means completely disconnecting from smart devices to reconnect with offline life. Without the constant distraction of notifications, I would spend time reading books, walking in nature, and restoring mental focus...",
      followUp: "Challenge: Describe how your brain feels after spending an entire day away from screens."
    },
    {
      id: "sc2_11",
      number: "Card 11",
      format: "Mini Debate",
      badgeClass: "badge-debate",
      question: "Debate topic: 'Online learning platforms and YouTube tutorials are far more effective for learning practical skills than traditional high school classes.'",
      targetWords: ["online learning", "convenient", "improve learning", "save time", "digital skill"],
      answerFrame: "I strongly agree that online learning is remarkably convenient because you can learn at your own pace and save time. You can pause, rewind, and choose the most expert global mentors to improve your skills...",
      followUp: "Challenge: Acknowledge one major disadvantage of online learning (e.g., lack of self-discipline)."
    },
    {
      id: "sc2_12",
      number: "Card 12",
      format: "Advice Task",
      badgeClass: "badge-advice",
      question: "Your friend uses the password 'password123' for his email, Steam account, and mobile banking. Explain why this is dangerous and teach him how to build strong passwords.",
      targetWords: ["password", "online safety", "protect information", "privacy", "personal data"],
      answerFrame: "Using such a predictable password is a massive risk to your online safety. If a hacker breaches one account, all your personal data and banking are compromised. To protect your information, you must create unique passwords with...",
      followUp: "Challenge: Explain how a password manager or two-factor authentication works."
    }
  ],

  readingArticle: {
    title: "Bridging Worlds: How an Istanbul Teenager Used AI and Smart Budgeting to Conquer Culture Shock in London",
    wordCount: 520,
    audioDuration: "3 min 45 sec",
    text: `When 16-year-old Zeynep from Kadıköy, Istanbul received her acceptance letter for a three-month student exchange program in London, she felt an electric mixture of excitement and sheer terror. While her spoken English was decent at an A2/B1 level, she had never lived away from her family, managed a monthly budget, or navigated a foreign transport network on her own.

Recognizing that she needed to plan ahead, Zeynep turned to modern digital tools to prepare for her journey. Instead of spending money on overpriced private travel consultants, she used artificial intelligence chatbots to design a customized survival guide. She prompted the AI tool to calculate the realistic cost of living for a student in London, including weekly subway fares, grocery prices, and essential student discounts. By tracking her allowance on a mobile budgeting app, she learned how to distinguish between essential needs and tempting wants before her flight departure.

Upon arrival at Heathrow Airport, however, Zeynep encountered her first major bout of culture shock. The British host family was warm and polite, but their daily routine was completely unfamiliar. Dinner was served strictly at 5:30 PM—three hours earlier than in Turkey—and public conversation was filled with subtle idioms and rapid accents that sounded nothing like her school textbooks. During her first week, Zeynep felt terribly homesick and missed the vibrant, loud streets of Istanbul.

Rather than withdrawing into excessive screen time and scrolling social media feeds to escape, Zeynep made a conscious decision to step out of her comfort zone. She used AI translation tools wisely to learn practical polite phrases, such as how to ask for help on the London Underground or how to clarify misunderstandings with her host mother. She also joined the high school debate club to make international friends and practice conversational fluency in natural settings.

By the second month, Zeynep noticed a dramatic transformation in her confidence and independence. She was sticking to her weekly budget, cooking simple Turkish dishes for her host family, and navigating the vast city without anxiety. "Living abroad pushed me to develop real problem-solving skills," Zeynep reflected. "Technology helped me prepare, but the courage to communicate, make mistakes, and adapt to local customs came from within."`,
    
    comprehensionQuestions: [
      {
        id: "cq1",
        q: "Why did Zeynep feel a mixture of excitement and terror upon getting accepted?",
        options: [
          "She had never traveled abroad or managed her own life and budget independently.",
          "Her English was already C2 and she was bored.",
          "Her school canceled the exchange scholarship.",
          "She wanted to move to London permanently without her family."
        ],
        answer: 0,
        explanation: "The text explains she had never lived away from family, managed a budget, or traveled alone."
      },
      {
        id: "cq2",
        q: "How did Zeynep use AI tools prior to her departure?",
        options: [
          "To generate fake exam certificates.",
          "To calculate living costs, transit fares, and draft a student survival guide.",
          "To automatically book flights without paying.",
          "To translate her entire school curriculum into Turkish."
        ],
        answer: 1,
        explanation: "She prompted AI to calculate realistic costs, subway fares, and build a survival guide."
      },
      {
        id: "cq3",
        q: "What was one specific cultural difference that caused initial culture shock?",
        options: [
          "The host family ate dinner at 5:30 PM and spoke with unfamiliar accents.",
          "People in London refused to use smartphones.",
          "There was no public transportation available.",
          "Her school classes started at midnight."
        ],
        answer: 0,
        explanation: "The host family served dinner at 5:30 PM (earlier than in Turkey) and used rapid idioms."
      },
      {
        id: "cq4",
        q: "What did Zeynep do when she felt homesick during the first week?",
        options: [
          "She bought a ticket and returned to Istanbul immediately.",
          "She stayed in her bedroom scrolling social media all day.",
          "She stepped out of her comfort zone and joined the debate club to make friends.",
          "She stopped speaking English completely."
        ],
        answer: 2,
        explanation: "She avoided passive scrolling and actively joined the debate club to connect with others."
      },
      {
        id: "cq5",
        q: "How did budgeting apps assist Zeynep during her exchange period?",
        options: [
          "They gave her free British Pounds.",
          "They helped her distinguish between needs and wants and stick to her allowance.",
          "They blocked all online shopping permanently.",
          "They booked five-star restaurants for her."
        ],
        answer: 1,
        explanation: "The budgeting app allowed her to separate essential needs from temporary wants."
      },
      {
        id: "cq6",
        q: "How did Zeynep resolve misunderstandings with her host mother?",
        options: [
          "She ignored her host mother.",
          "She used polite English phrases and digital tools wisely to communicate clearly.",
          "She hired an expensive professional translator.",
          "She wrote letters in Turkish."
        ],
        answer: 1,
        explanation: "She used digital tools wisely to master polite conversational phrases."
      },
      {
        id: "cq7",
        q: "What was Zeynep's ultimate realization about technology versus personal effort?",
        options: [
          "Technology can do 100% of human communication.",
          "Technology helps with preparation, but courage and adapting come from within.",
          "Living abroad is impossible without 10 different AI gadgets.",
          "Traditional books are always superior to digital tools."
        ],
        answer: 1,
        explanation: "She concluded that technology assisted with preparation, but personal courage was essential."
      },
      {
        id: "cq8",
        q: "Which three main topics are seamlessly woven into Zeynep's story?",
        options: [
          "Money management, AI technology, and living abroad / culture shock.",
          "Car mechanics, sports biology, and painting.",
          "Cooking recipes, fashion trends, and video gaming.",
          "Space exploration, crypto mining, and geography."
        ],
        answer: 0,
        explanation: "The story integrates Money/Budgeting, Technology/AI, and Travel/Culture Shock."
      }
    ],

    vocabInContext: [
      { id: "vic1", phrase: "plan ahead", question: "What does 'plan ahead' mean in paragraph 2?", answer: "To prepare for future expenses and events before they happen." },
      { id: "vic2", phrase: "cost of living", question: "What does 'cost of living' refer to?", answer: "The amount of money needed to pay for basic necessities like food, transport, and rent." },
      { id: "vic3", phrase: "needs and wants", question: "What is the key difference between 'needs' and 'wants'?", answer: "Needs are essential for survival; wants are enjoyable but non-essential desires." },
      { id: "vic4", phrase: "culture shock", question: "What caused Zeynep's 'culture shock'?", answer: "Unfamiliar dining schedules, rapid accents, and different social habits." },
      { id: "vic5", phrase: "homesick", question: "How does a person feel when they are 'homesick'?", answer: "Sad and longing for their familiar home, family, and cultural environment." },
      { id: "vic6", phrase: "comfort zone", question: "What does 'step out of your comfort zone' mean?", answer: "To try challenging, unfamiliar activities that push your personal limits." },
      { id: "vic7", phrase: "ask for help", question: "Why is 'asking for help' vital for exchange students?", answer: "It prevents dangerous misunderstandings and builds social connections." },
      { id: "vic8", phrase: "adapt to local customs", question: "What does 'adapt to local customs' mean?", answer: "To respect and adjust your daily habits to match the local culture." }
    ],

    speakingFollowUps: [
      "1. If you were in Zeynep's shoes, what would scare you most about moving to London?",
      "2. How would you use AI tools to plan your own dream study abroad trip?",
      "3. Why do you think many students retreat to social media when feeling homesick, and why is that counterproductive?",
      "4. What Turkish dish would you cook to impress a foreign host family?",
      "5. How does managing a tight budget in a foreign currency build maturity in teenagers?",
      "6. Would you prefer a 3-month exchange program or a full 4-year undergraduate degree abroad?"
    ]
  },

  speakingCardsTopic3: [
    {
      id: "sc3_1",
      number: "Card 01",
      format: "Hypothetical Scenario",
      badgeClass: "badge-hypothetical",
      question: "If you studied abroad in Germany and felt intensely homesick during your first month, what exact steps would you take to adapt to the local culture?",
      targetWords: ["study abroad", "homesick", "adapt to", "local culture", "make friends"],
      answerFrame: "If I felt homesick while studying abroad, I would first... Rather than staying alone in my dormitory, I would try to adapt to the local culture by joining student clubs and making international friends...",
      followUp: "Challenge: Use 'If I were homesick, I would...' (Second Conditional)."
    },
    {
      id: "sc3_2",
      number: "Card 02",
      format: "Travel Problem-Solving",
      badgeClass: "badge-ranking",
      question: "You land at Charles de Gaulle Airport in Paris, but your checked luggage didn't arrive on the carousel and you speak very little French. How do you resolve this?",
      targetWords: ["airport", "luggage", "arrival", "ask for help", "problem-solving"],
      answerFrame: "Upon arrival, when I realize my luggage is missing, I would remain calm and head directly to the lost baggage desk. I would use clear English and problem-solving skills to ask for help from the airline representative...",
      followUp: "Challenge: Role-play the exact conversation with the airport lost property clerk."
    },
    {
      id: "sc3_3",
      number: "Card 03",
      format: "Airport Role Play",
      badgeClass: "badge-roleplay",
      question: "Role Play: You are at the airport check-in desk. Your suitcase is 4 kilograms overweight, and the airline agent wants to charge you a 50 Euro penalty. Negotiate politely.",
      targetWords: ["flight", "luggage", "departure", "polite", "cost of living"],
      answerFrame: "Excuse me, I didn't realize my luggage exceeded the weight limit for this flight. Is it possible for me to transfer some heavy coats into my carry-on bag to avoid this extra fee? I really appreciate your help...",
      followUp: "Challenge: Maintain utmost politeness while finding a practical solution."
    },
    {
      id: "sc3_4",
      number: "Card 04",
      format: "Culture Shock Advice Circle",
      badgeClass: "badge-advice",
      question: "A Turkish student going to Japan is worried about committing cultural faux pas (rude mistakes) like wearing shoes inside or tipping at sushi restaurants. What advice do you give?",
      targetWords: ["culture shock", "custom", "tradition", "polite", "rude", "respectful"],
      answerFrame: "To prevent culture shock in Japan, it is essential to research their customs beforehand. For instance, tipping is considered rude in Japan, and you must always take off your shoes. Being respectful means observing how locals behave...",
      followUp: "Challenge: Compare this Japanese custom with a famous Turkish hospitality tradition."
    },
    {
      id: "sc3_5",
      number: "Card 05",
      format: "Mini Presentation",
      badgeClass: "badge-convince",
      question: "Deliver a 90-second mini presentation: 'Why stepping out of your comfort zone to live in a foreign country transforms your character forever.'",
      targetWords: ["comfort zone", "foreign country", "experience", "independent", "opportunity"],
      answerFrame: "Good day everyone. Today I want to discuss why stepping out of your comfort zone is essential. Living in a foreign country presents incredible challenges, but it also provides a unique opportunity to become independent...",
      followUp: "Challenge: Structure your presentation: Hook -> 2 Main Points -> Memorable Conclusion."
    },
    {
      id: "sc3_6",
      number: "Card 06",
      format: "Personal Interview",
      badgeClass: "badge-questionnaire",
      question: "Would you feel comfortable communicating in English with native speakers who have strong regional accents (e.g., Scottish, Irish, or Australian)?",
      targetWords: ["accent", "communicate", "misunderstanding", "ask for help", "unfamiliar"],
      answerFrame: "At first, communicating with people with strong unfamiliar accents might cause misunderstandings. However, I wouldn't feel embarrassed to politely ask them to speak a bit slower or repeat themselves...",
      followUp: "Challenge: Demonstrate two polite phrases to ask someone to repeat themselves."
    },
    {
      id: "sc3_7",
      number: "Card 07",
      format: "Choose the Best Solution",
      badgeClass: "badge-ranking",
      question: "You have 1,000 Euros saved for your exchange semester accommodation. Option A: Stay with a host family (meals included, strict curfew). Option B: Shared youth hostel with 4 international roommates (cheaper, independent, noisy). Which do you choose?",
      targetWords: ["accommodation", "host family", "exchange student", "independent", "safe / unsafe"],
      answerFrame: "Between these two options, I would definitely choose Option A/B because... While living with a host family offers a safe environment, sharing an apartment gives you the freedom to become truly independent...",
      followUp: "Challenge: Give 2 pros and 2 cons for your selected accommodation choice."
    },
    {
      id: "sc3_8",
      number: "Card 08",
      format: "Hypothetical Scenario",
      badgeClass: "badge-hypothetical",
      question: "If you got lost in a huge unfamiliar European city late at night with no mobile internet connection, what safety protocols would you follow?",
      targetWords: ["unfamiliar", "safe / unsafe", "emergency", "public transport", "ask for help"],
      answerFrame: "If I found myself lost in an unfamiliar city with no battery or internet, I would avoid dark and unsafe streets. Instead, I would look for a well-lit public transport station or hotel lobby to ask for help or contact emergency services...",
      followUp: "Challenge: Explain why panicking is the worst reaction in an emergency."
    },
    {
      id: "sc3_9",
      number: "Card 09",
      format: "Travel Problem-Solving",
      badgeClass: "badge-advice",
      question: "Your flight from Rome to Istanbul is delayed by 8 hours. The airline gives you a 15 Euro food voucher. How do you make the best of this situation at the departure terminal?",
      targetWords: ["flight", "departure", "airport", "problem-solving", "save time"],
      answerFrame: "An 8-hour departure delay is frustrating, but you can turn it into a productive opportunity. I would use my voucher for a healthy meal, find a quiet charging station, and use the time to study English or explore the airport terminal...",
      followUp: "Challenge: Explain how maintaining a positive mindset prevents travel stress."
    },
    {
      id: "sc3_10",
      number: "Card 10",
      format: "Mini Debate",
      badgeClass: "badge-debate",
      question: "Debate topic: 'Traveling abroad as a solo backpacker teaches you far more life lessons than traveling on an organized tour with your family.'",
      targetWords: ["travel abroad", "independent", "responsibility", "challenge", "explore"],
      answerFrame: "I strongly agree with this statement. When traveling with family, your parents handle all the logistics and responsibility. Solo travel, however, forces you to explore on your own, manage emergencies, and make independent choices...",
      followUp: "Challenge: Highlight the safety advantages of family travel versus solo travel."
    },
    {
      id: "sc3_11",
      number: "Card 11",
      format: "Culture Shock Advice Circle",
      badgeClass: "badge-advice",
      question: "A friend says: 'I want to study abroad, but I am terrified of making grammar mistakes and being judged by native speakers.' What encouraging pep talk would you give her?",
      targetWords: ["communicate", "misunderstanding", "challenge", "opportunity", "comfort zone"],
      answerFrame: "I would tell my friend that communication is about sharing ideas, not achieving perfection. Native speakers make mistakes too, and nobody will judge you for trying. Viewing this challenge as a golden opportunity...",
      followUp: "Challenge: Share a personal experience where making a mistake actually helped you learn."
    },
    {
      id: "sc3_12",
      number: "Card 12",
      format: "Airport Role Play",
      badgeClass: "badge-roleplay",
      question: "Role Play: You arrive at passport control in London. The immigration border officer asks you about the purpose of your visit, your return ticket, and your accommodation address.",
      targetWords: ["passport", "visa", "arrival", "destination", "polite"],
      answerFrame: "Good morning Officer. Here is my passport and student visa. I am visiting London as an exchange student for three months. I will be staying with a host family in Kensington, and here is my confirmed return ticket...",
      followUp: "Challenge: Answer three realistic follow-up questions from the border official."
    },
    {
      id: "sc3_13",
      number: "Card 13",
      format: "Personal Interview",
      badgeClass: "badge-questionnaire",
      question: "What Turkish food, family habit, or daily routine would be the hardest for you to get used to living without if you moved abroad for four years?",
      targetWords: ["get used to", "homesick", "tradition", "foreign country", "local culture"],
      answerFrame: "Without question, getting used to life without authentic Turkish breakfasts and fresh tea would be tough. Food is deeply tied to our family traditions, so when living in a foreign country, missing home-cooked meals...",
      followUp: "Challenge: Explain how learning to cook traditional meals helps alleviate homesickness."
    },
    {
      id: "sc3_14",
      number: "Card 14",
      format: "Hypothetical Scenario",
      badgeClass: "badge-hypothetical",
      question: "If you were paired with an exchange student from South Korea for a school cultural festival in Turkey, what 3 historic sites and 2 local customs would you introduce to them?",
      targetWords: ["local culture", "custom", "tradition", "explore", "respectful"],
      answerFrame: "If I were hosting a South Korean student, I would first take them to explore the historical peninsula of Sultanahmet and Cappadocia. Regarding our customs, I would introduce them to Turkish hospitality and tea rituals...",
      followUp: "Challenge: Explain the cultural meaning behind offering Turkish tea to guests."
    },
    {
      id: "sc3_15",
      number: "Card 15",
      format: "Choose the Best Solution",
      badgeClass: "badge-ranking",
      question: "You have your first day at an international high school abroad. You sit in the cafeteria and see three tables: Table 1 (All Turkish students speaking Turkish), Table 2 (Diverse international students speaking English), Table 3 (Local native students). Where do you sit?",
      targetWords: ["comfort zone", "make friends", "study abroad", "communicate", "opportunity"],
      answerFrame: "Although sitting at Table 1 is tempting because it feels safe, I would deliberately choose Table 2 or 3. The whole purpose of studying abroad is to step out of your comfort zone and make international friends in English...",
      followUp: "Challenge: Formulate a natural conversation starter you would use when sitting down at Table 2."
    }
  ],

  fluencyChallenges: [
    {
      id: "fc1",
      title: "Challenge 1: Teenage Financial Independence",
      time: "90 seconds",
      topic: "Explain whether teenagers should manage their own money and receive allowances.",
      targetVocab: ["budget", "pocket money", "financial responsibility", "impulse buying", "make decisions"],
      requiredGrammar: "should / shouldn't + first conditional (If teenagers manage..., they will...)",
      structure: [
        "Opinion: Clearly state whether teenagers should control their finances.",
        "Reason: Explain why financial literacy is essential before adulthood.",
        "Example: Share a realistic scenario of saving up versus impulse buying.",
        "Contrast: Acknowledge the risk of reckless spending without guidance.",
        "Conclusion: Summarize with a strong final recommendation."
      ],
      selfCheck: [
        "Did I speak continuously for at least 75-90 seconds?",
        "Did I use 'should' and at least one 'If + present, will + verb' sentence?",
        "Did I incorporate at least 4 target money vocabulary items?",
        "Did I follow the Opinion -> Reason -> Example -> Contrast -> Conclusion structure?"
      ]
    },
    {
      id: "fc2",
      title: "Challenge 2: The Double-Edged Sword of AI in Education",
      time: "90 seconds",
      topic: "Explain whether AI tools are ultimately more useful or harmful for student learning.",
      targetVocab: ["artificial intelligence", "productivity", "depend on technology", "creative", "use wisely"],
      requiredGrammar: "too / enough (too dependent / smart enough) + comparative structures",
      structure: [
        "Opinion: State your stance on AI's net impact on high school education.",
        "Reason: Discuss how AI boosts productivity when used as a study tutor.",
        "Example: Give a concrete example of using AI for coding, writing, or math.",
        "Contrast: Warn about students becoming too lazy to think critically.",
        "Conclusion: Emphasize the importance of using digital tools wisely."
      ],
      selfCheck: [
        "Did I maintain a steady speaking pace without long pauses?",
        "Did I use 'too' or 'enough' accurately in context?",
        "Did I clearly distinguish between productive AI use and academic cheating?",
        "Did I speak clearly without reverting to Turkish words?"
      ]
    },
    {
      id: "fc3",
      title: "Challenge 3: Overcoming Culture Shock Abroad",
      time: "90 seconds",
      topic: "Describe the biggest challenges a teenager faces when living abroad and how to overcome them.",
      targetVocab: ["culture shock", "homesick", "adapt to", "comfort zone", "make friends"],
      requiredGrammar: "used to / get used to + second conditional (If I lived abroad, I would...)",
      structure: [
        "Opinion: Identify the most daunting aspect of moving to an unfamiliar country.",
        "Reason: Explain why sudden isolation and language barriers trigger homesickness.",
        "Example: Describe dealing with strange food or unfamiliar public transport.",
        "Contrast: Show how retreating to social media makes culture shock worse.",
        "Conclusion: Explain why stepping out of your comfort zone builds lifelong resilience."
      ],
      selfCheck: [
        "Did I use the second conditional correctly ('If I faced..., I would...')?",
        "Did I use 'get used to + V-ing/noun' properly?",
        "Did I integrate target travel and culture terms smoothly?",
        "Was my pronunciation clear and confident?"
      ]
    },
    {
      id: "fc4",
      title: "Challenge 4: Essential Advice for Future Exchange Students",
      time: "90 seconds",
      topic: "Give three pieces of practical advice to a Turkish teenager preparing to study abroad.",
      targetVocab: ["plan ahead", "ask for help", "respectful", "cost of living", "problem-solving"],
      requiredGrammar: "have to / don't have to + modal verbs for advice",
      structure: [
        "Introduction: Congratulate the student and emphasize the excitement of the journey.",
        "Advice 1 (Logistics): Financial planning, budgeting, and understanding living costs.",
        "Advice 2 (Culture): Being respectful of local customs and open-minded about food.",
        "Advice 3 (Mindset): Never being afraid to ask for help or make conversational mistakes.",
        "Conclusion: Deliver an inspiring final wish for their upcoming adventure."
      ],
      selfCheck: [
        "Did I use 'You have to...', 'You don't have to...', and 'You should...'?",
        "Did I organize my points using transition words (First, Furthermore, Finally)?",
        "Did I address both practical and emotional aspects of studying abroad?",
        "Did I speak for the full 90 seconds?"
      ]
    },
    {
      id: "fc5",
      title: "Challenge 5: Turkey vs. Living Abroad — A Balanced Comparison",
      time: "90 seconds",
      topic: "Compare daily teenage life in Turkey with teenage life in a foreign country.",
      targetVocab: ["local culture", "foreign country", "tradition", "public transport", "independent"],
      requiredGrammar: "Present Perfect vs Past Simple + Relative Clauses (who / which / where)",
      structure: [
        "Introduction: Introduce the dynamic comparison between Turkish lifestyle and foreign life.",
        "Point 1 (Social/Family): Strong family ties and hospitality in Turkey versus early independence abroad.",
        "Point 2 (Daily Logistics): Public transit, school systems, and leisure activities.",
        "Contrast: What Turkish students gain abroad versus what they inevitably miss from home.",
        "Conclusion: Summarize why experiencing both worlds makes you a global citizen."
      ],
      selfCheck: [
        "Did I include relative clauses with 'which', 'who', or 'where'?",
        "Did I avoid common Turkish interference errors like 'go to abroad'?",
        "Did I present a balanced, mature comparison without unfair stereotypes?",
        "Did I conclude with high-level B1+/B2 vocabulary?"
      ]
    }
  ],

  b1b2Upgrades: [
    {
      id: "up1",
      topic: "Money: Spending Habits",
      a2Text: "I spend money for clothes. It is expensive but I like it.",
      b1Text: "I spend a lot of money on trendy clothes because I enjoy fashion, but sometimes it is too expensive for my budget.",
      b2Text: "Although purchasing designer clothing puts a noticeable strain on my monthly budget, I consider it a worthwhile investment in my personal style, provided I avoid reckless impulse buying.",
      whyBetter: "B2 uses subordinate clause 'Although...', sophisticated vocabulary ('strain on budget', 'worthwhile investment', 'reckless impulse buying'), and avoids the Turkish mistake 'spend money for'."
    },
    {
      id: "up2",
      topic: "Money: Teenage Allowance",
      a2Text: "Parents must give pocket money. Teenager need buy things.",
      b1Text: "Parents should give regular pocket money to teenagers so they can learn how to pay for their own needs.",
      b2Text: "Allocating a consistent monthly allowance empowers adolescents to cultivate genuine financial responsibility and master budgeting skills before entering independent adulthood.",
      whyBetter: "B2 replaces simple imperatives with gerund subject ('Allocating a consistent...'), using high-level academic verbs ('empowers', 'cultivate', 'master')."
    },
    {
      id: "up3",
      topic: "Technology: AI in Homework",
      a2Text: "AI is good for homework. It make homework fast.",
      b1Text: "AI is very useful for students because it helps them find information faster and organize their study ideas.",
      b2Text: "When utilized judiciously, artificial intelligence serves as a remarkable catalyst for academic productivity; however, over-reliance on automated tools can severely undermine students' critical thinking.",
      whyBetter: "B2 uses advanced discourse markers ('When utilized judiciously', 'however'), high-level nouns ('catalyst', 'productivity', 'over-reliance'), and complex semi-colon sentence structure."
    },
    {
      id: "up4",
      topic: "Technology: Social Media Addiction",
      a2Text: "Social media is bad because young people look screen all day.",
      b1Text: "Excessive social media use is harmful because teenagers waste too much time scrolling and lose their focus on school.",
      b2Text: "Mindless engagement with algorithmic feeds not only consumes an alarming amount of daily screen time but also poses serious risks to teenagers' mental wellbeing and offline relationships.",
      whyBetter: "B2 employs the advanced 'not only... but also' inversion/structure with rich vocabulary ('mindless engagement', 'algorithmic feeds', 'alarming amount')."
    },
    {
      id: "up5",
      topic: "Travel: Culture Shock",
      a2Text: "When I go to abroad, I feel culture shock because food is different.",
      b1Text: "When I travel abroad, I might experience culture shock because the local food and traditions are unfamiliar.",
      b2Text: "Immersing oneself in a foreign culture inevitably triggers an initial phase of disorientation and homesickness, yet navigating these cultural nuances is precisely what fosters emotional maturity.",
      whyBetter: "B2 eliminates the classic Turkish error 'go to abroad' (uses 'Immersing oneself in...'), employing evocative vocabulary ('disorientation', 'cultural nuances', 'fosters emotional maturity')."
    },
    {
      id: "up6",
      topic: "Travel: Asking for Help Abroad",
      a2Text: "If I lost in airport, I ask help to people.",
      b1Text: "If I get lost in an airport, I will politely ask the staff for help to find my flight gate.",
      b2Text: "Should I find myself disoriented within a massive international terminal, I would immediately seek assistance from airport personnel rather than panicking.",
      whyBetter: "B2 fixes 'ask help to' (correct: 'ask for help' / 'seek assistance') and uses advanced formal conditional inversion ('Should I find myself...')."
    },
    {
      id: "up7",
      topic: "Independence: Living Alone",
      a2Text: "I want live alone because no rules.",
      b1Text: "I want to live independently because I will be able to make my own decisions without parental rules.",
      b2Text: "Transitioning to independent living offers the liberating freedom to dictate one's own schedule, albeit accompanied by the demanding reality of managing household chores and daily expenses.",
      whyBetter: "B2 uses nuanced concession ('albeit accompanied by...'), nominalization ('Transitioning to independent living'), and sophisticated adjectives ('liberating', 'demanding')."
    }
  ]
};
