/**
 * FINAL PROJECT & HOMEWORK ENRICHMENT DATA MODULE
 * Final Speaking Project Template, Rubric, and 18 Homework enrichment options.
 */

const PROJECT_AND_HW_DATA = {
  finalProject: {
    title: "My Smart Independent Life Plan",
    duration: "2 to 3 minutes",
    minVocabCount: 15,
    minGrammarStructures: 2,
    prompt: "Prepare and deliver a 2-3 minute spoken presentation presenting your personal blueprint for future independence, smart financial management, ethical technology use, and living/studying abroad.",
    
    pillars: [
      {
        title: "1. Financial Independence & Smart Budgeting",
        description: "How you will manage pocket money, distinguish between needs and wants, avoid impulse buying, and save for the future.",
        suggestedVocab: ["budget", "pocket money", "save up", "afford", "financial responsibility", "needs and wants", "smart choice"]
      },
      {
        title: "2. Technology, AI & Digital Wellbeing",
        description: "How you will harness AI tools productively while safeguarding online privacy and maintaining a healthy digital balance.",
        suggestedVocab: ["AI tool", "productivity", "online safety", "privacy", "use wisely", "digital balance", "focus"]
      },
      {
        title: "3. Preparing for Living or Studying Abroad",
        description: "How you would adapt to culture shock, respect local customs, communicate confidently, and navigate unfamiliar situations.",
        suggestedVocab: ["study abroad", "culture shock", "adapt to", "get used to", "comfort zone", "ask for help", "problem-solving"]
      },
      {
        title: "4. Anticipated Challenges & Personal Solutions",
        description: "Identify two specific obstacles you might face (financial or cultural) and outline your proactive solutions.",
        suggestedVocab: ["challenge", "homesick", "cost of living", "misunderstanding", "independent"]
      },
      {
        title: "5. Golden Advice for Turkish Teenagers",
        description: "Deliver your final, inspiring message of advice to other Turkish teenagers who want to become globally minded.",
        suggestedVocab: ["opportunity", "make decisions", "tradition", "explore", "worth it"]
      }
    ],

    sentenceStarters: [
      "“Hello everyone. Today I am excited to present my personal roadmap titled 'My Smart Independent Life Plan'...”",
      "“When it comes to financial management, I believe every teenager should create a monthly budget because...”",
      "“To avoid the trap of impulse buying, my strategy is to always distinguish between essential needs and temporary wants...”",
      "“In terms of technology, I regularly use AI tools to boost my study productivity; however, to maintain a healthy digital balance, I make sure to...”",
      "“If I had the opportunity to study abroad in Europe, I would embrace the challenge by stepping out of my comfort zone...”",
      "“Although I might experience initial culture shock and feel homesick, I would adapt to local customs by...”",
      "“Whenever I face unexpected travel emergencies, I will use my problem-solving skills and never hesitate to ask for help...”",
      "“In conclusion, my ultimate advice to fellow Turkish teenagers is: invest in your English skills, plan ahead financially, and never be afraid of making mistakes!”"
    ],

    teacherFollowUpQuestions: [
      "1. You mentioned budgeting: what is the very first thing you will do if you accidentally overspend your monthly allowance?",
      "2. How will you prevent AI tools from weakening your critical thinking skills as you prepare for university exams?",
      "3. If your foreign host family served food that looked completely unappetizing to you, how would you react politely?"
    ],

    assessmentRubric: [
      { criterion: "Target Vocabulary (15+ items)", description: "Naturally incorporates at least 15 target vocabulary items across Money, Tech, and Travel without forced listing." },
      { criterion: "Grammar Accuracy & Range", description: "Accurately utilizes at least 2 target grammar structures (Conditionals, Modals, Relative clauses, Used to, Present Perfect)." },
      { criterion: "Pronunciation & Intonation", description: "Clear, confident delivery with natural sentence stress and avoidance of Turkish L1 interference patterns." },
      { criterion: "Fluency & Timing (2-3 min)", description: "Speaks continuously without prolonged pauses, staying within the 120-180 second presentation window." },
      { criterion: "Interaction & Q&A Response", description: "Answers teacher follow-up questions spontaneously with coherent reasons and examples." }
    ]
  },

  homeworkMenu: [
    {
      id: "hw1",
      category: "Speaking",
      categoryBadge: "badge-questionnaire",
      title: "Audio Diary: Teenage Spending Habits",
      time: "90 seconds",
      instructions: "Record a 90-second voice memo analyzing your monthly spending habits. Explain one smart choice and one unnecessary purchase you made recently using 'should have' or First Conditional.",
      deliverable: "Audio recording file or voice note submitted to teacher."
    },
    {
      id: "hw2",
      category: "Speaking",
      categoryBadge: "badge-questionnaire",
      title: "Podcast Talk: Is AI Helping or Hurting Students?",
      time: "2 minutes",
      instructions: "Record a 2-minute podcast segment arguing whether AI tools make students smarter or more dependent. Include words: 'productivity', 'depend on technology', 'use wisely', and 'digital balance'.",
      deliverable: "Audio recording file."
    },
    {
      id: "hw3",
      category: "Speaking",
      categoryBadge: "badge-questionnaire",
      title: "Video Advice: Travel Survival Guide for England",
      time: "2 minutes",
      instructions: "Record a short video giving 5 practical advice tips to a friend going to study in the UK for the first time. Focus on culture shock, polite etiquette, and public transport.",
      deliverable: "Short video or audio clip."
    },
    {
      id: "hw4",
      category: "Vocabulary",
      categoryBadge: "badge-advice",
      title: "Digital Vocabulary Lexicon",
      time: "30 minutes",
      instructions: "Create a digital or handwritten vocabulary notebook containing 30 new words from today's lesson. For each word, write the Turkish meaning, one natural collocation, and your own personal example sentence.",
      deliverable: "Photo of notebook page or digital document link."
    },
    {
      id: "hw5",
      category: "Vocabulary",
      categoryBadge: "badge-advice",
      title: "Collocation Masterclass: 15 Golden Sentences",
      time: "25 minutes",
      instructions: "Write 15 original sentences using high-impact collocations learned today (e.g., 'make decisions', 'impulse buying', 'step out of comfort zone', 'ask for help', 'cost of living').",
      deliverable: "Written document (15 numbered sentences)."
    },
    {
      id: "hw6",
      category: "Vocabulary",
      categoryBadge: "badge-advice",
      title: "Triple Topic Mind Map",
      time: "25 minutes",
      instructions: "Draw an artistic, color-coded mind map connecting the 3 lesson topics (Money, Technology, Travel). Place at least 12 connected vocabulary items on each branch.",
      deliverable: "Photo of your illustrated mind map."
    },
    {
      id: "hw7",
      category: "Grammar",
      categoryBadge: "badge-debate",
      title: "10 First Conditional Life Scenarios",
      time: "20 minutes",
      instructions: "Write 10 First Conditional sentences about your personal financial and academic future (e.g., 'If I pass my English exam, I will apply for an Erasmus exchange program next year.'). Remember: NO 'will' in the If-clause!",
      deliverable: "10 written First Conditional sentences."
    },
    {
      id: "hw8",
      category: "Grammar",
      categoryBadge: "badge-debate",
      title: "10 Second Conditional Dream Scenarios",
      time: "20 minutes",
      instructions: "Write 10 Second Conditional sentences exploring hypothetical situations (e.g., 'If I won 100,000 TL, I would invest 40% in tech stocks and spend the rest on traveling abroad.').",
      deliverable: "10 written Second Conditional sentences."
    },
    {
      id: "hw9",
      category: "Grammar",
      categoryBadge: "badge-debate",
      title: "Turkish L1 Error Correction Doctor",
      time: "25 minutes",
      instructions: "Take 15 of the Turkish interference mistakes from today's 'Turkish->English Watch' section. Write the incorrect sentence, the corrected version, and a 1-sentence Turkish note explaining WHY the mistake happens.",
      deliverable: "Error analysis worksheet."
    },
    {
      id: "hw10",
      category: "Grammar",
      categoryBadge: "badge-debate",
      title: "A2 to B2 Sentence Transformation Drill",
      time: "25 minutes",
      instructions: "Transform 8 basic A2 sentences into sophisticated B1+/B2 sentences using subordinate clauses, advanced adjectives, and transition words (Although, In order to, Provided that).",
      deliverable: "8 before-and-after sentence pairs."
    },
    {
      id: "hw11",
      category: "Reading / Listening",
      categoryBadge: "badge-ranking",
      title: "YouTube Study Abroad Case Study",
      time: "30 minutes",
      instructions: "Watch an authentic 8-10 minute English YouTube video of an international exchange student describing their first month abroad. Note down 10 natural conversational phrases and summarize their culture shock in 5 sentences.",
      deliverable: "List of 10 phrases + 5-sentence summary."
    },
    {
      id: "hw12",
      category: "Reading / Listening",
      categoryBadge: "badge-ranking",
      title: "Tech Article Summary Challenge",
      time: "25 minutes",
      instructions: "Find a short English article about how artificial intelligence is changing high schools. Summarize the main arguments in exactly 5 B1+ sentences and record yourself reading it.",
      deliverable: "Written summary + 45s audio recording."
    },
    {
      id: "hw13",
      category: "Reading / Listening",
      categoryBadge: "badge-ranking",
      title: "Financial Idiom Hunt",
      time: "20 minutes",
      instructions: "Research 5 authentic English financial idioms or proverbs (e.g., 'A penny saved is a penny earned', 'Cost an arm and a leg', 'Break the bank') and explain their meanings with realistic teenage examples.",
      deliverable: "5 idioms with explanations and examples."
    },
    {
      id: "hw14",
      category: "Creative",
      categoryBadge: "badge-roleplay",
      title: "Interactive One-Week Teenage Budget Plan",
      time: "35 minutes",
      instructions: "Design an attractive weekly budget chart in English for an imaginary budget of 2,000 TL. Categorize items into Fixed Needs, Flexible Wants, and Savings Fund with accompanying reasoning in English.",
      deliverable: "Budget spreadsheet or designed infographic."
    },
    {
      id: "hw15",
      category: "Creative",
      categoryBadge: "badge-roleplay",
      title: "Digital Balance Contract",
      time: "30 minutes",
      instructions: "Draft a formal 'Digital Balance & Screen Time Contract' between yourself and your daily goals. Include 5 specific rules, allowed app limits, and offline replacement hobbies.",
      deliverable: "Signed 1-page English contract."
    },
    {
      id: "hw16",
      category: "Creative",
      categoryBadge: "badge-roleplay",
      title: "Travel Survival Infographic Poster",
      time: "40 minutes",
      instructions: "Create a digital or illustrated poster titled 'How to Conquer Culture Shock & Live Independently Abroad'. Feature 6 essential golden rules with catchy English headlines.",
      deliverable: "Digital graphic or photo of hand-drawn poster."
    }
  ]
};
