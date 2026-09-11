/**
 * GRAMMAR & TURKISH L1 ERROR WATCH DATA MODULE
 * Mini Grammar 1 (Modals, Conditionals 1, Too/Enough), Mini Grammar 2 (Tenses, Conditionals 2, Used to, Relative Clauses),
 * and 24 Turkish L1 interference watch drills.
 */

const GRAMMAR_DATA = {
  grammar1: [
    {
      id: "g1_1",
      topic: "should / shouldn't (Giving Advice & Recommendations)",
      explanation: "Use 'should' or 'shouldn't' + base verb (V1) to give advice, make recommendations, or express what is a smart or poor choice. Do not use 'to' after should!",
      form: "Subject + should / shouldn't + Verb (base form) [Subject + should + V1]",
      examples: [
        "Teenagers should create a monthly budget before spending their allowance.",
        "You shouldn't waste money on fast food when you are trying to save up.",
        "Students should use AI tools to brainstorm ideas, not to copy full essays.",
        "You shouldn't share your private passwords with anyone online.",
        "If you want to study abroad, you should start researching student visas early."
      ],
      turkishMistakes: [
        {
          wrong: "You should to save your pocket money.",
          correct: "You should save your pocket money.",
          note: "Turkish students often add 'to' after modal verbs (should, must, can)."
        },
        {
          wrong: "He shouldn't spends all his money on gaming.",
          correct: "He shouldn't spend all his money on gaming.",
          note: "Modals are ALWAYS followed by the pure base verb (no -s, no -ed, no -ing)."
        },
        {
          wrong: "I think you should don't buy that overpriced phone.",
          correct: "I don't think you should buy that overpriced phone.",
          note: "In English, we transfer the negative to 'think' ('I don't think you should...')."
        },
        {
          wrong: "We must to be careful on internet.",
          correct: "We must be careful on the internet.",
          note: "'Must' never takes 'to', and 'internet' requires the definite article 'the'."
        },
        {
          wrong: "Should we to ask help from the teacher?",
          correct: "Should we ask for help from the teacher?",
          note: "No 'to' in questions with should, and 'ask for help' requires the preposition 'for'."
        }
      ],
      speakingPrompt: "Give 3 'should' and 2 'shouldn't' recommendations for a teenager who is constantly broke by the middle of the month."
    },
    {
      id: "g1_2",
      topic: "have to / don't have to vs must (Obligation vs Absence of Obligation)",
      explanation: "'Have to' expresses an external rule or necessity. 'Don't have to' means there is NO obligation (it is optional). Do not confuse 'don't have to' with 'mustn't' (which means forbidden/prohibited)!",
      form: "Subject + have to / has to + V1  |  Subject + don't / doesn't have to + V1",
      examples: [
        "International exchange students have to apply for a student visa.",
        "You don't have to buy expensive designer brands to look stylish and smart.",
        "In Turkey, high school students have to attend classes regularly.",
        "You don't have to pay for expensive software when free AI tools exist.",
        "Airline passengers have to show a valid passport at airport departure gates."
      ],
      turkishMistakes: [
        {
          wrong: "You don't have to steal accounts online. (Intended: It's forbidden)",
          correct: "You mustn't steal accounts online. / You cannot steal accounts online.",
          note: "'Don't have to' means 'zorunda değilsin (isteğe bağlı)'. For prohibition, use 'mustn't' or 'can't'."
        },
        {
          wrong: "She have to manage her budget.",
          correct: "She has to manage her budget.",
          note: "He/She/It takes 'has to', not 'have to'."
        },
        {
          wrong: "Do you have pay for the public transport?",
          correct: "Do you have to pay for the public transport?",
          note: "Do not forget 'to' with 'have to' (have + to + verb)."
        },
        {
          wrong: "I didn't had to go to bank yesterday.",
          correct: "I didn't have to go to the bank yesterday.",
          note: "After auxiliary 'didn't', use base form 'have to', not 'had to'."
        },
        {
          wrong: "You must to show your passport at border.",
          correct: "You have to / must show your passport at the border.",
          note: "'Must to' is a very common Turkish interference mistake. Use 'must + V1' or 'have to + V1'."
        }
      ],
      speakingPrompt: "What are two things an exchange student HAS to do, and two things they DON'T HAVE to do when living abroad?"
    },
    {
      id: "g1_3",
      topic: "too vs enough (Degree & Sufficiency with Adjectives and Nouns)",
      explanation: "'Too' means more than necessary (negative tone), placed BEFORE adjectives. 'Enough' means sufficient, placed AFTER adjectives but BEFORE nouns!",
      form: "too + adjective  |  adjective + enough  |  enough + noun",
      examples: [
        "This flagship smartphone is too expensive for an average student allowance.",
        "He is not mature enough to live independently in a foreign country yet.",
        "I don't have enough money in my monthly budget to afford weekend trips.",
        "The screen time on her phone was too high, causing severe eye strain.",
        "Do you have enough time to finish your AI project before tomorrow's deadline?"
      ],
      turkishMistakes: [
        {
          wrong: "This laptop is too much expensive.",
          correct: "This laptop is too expensive. / This laptop is far too expensive.",
          note: "Turkish learners say 'too much expensive' translating 'çok fazla pahalı'. With adjectives, use ONLY 'too'!"
        },
        {
          wrong: "She is not enough old to travel alone.",
          correct: "She is not old enough to travel alone.",
          note: "'Enough' comes AFTER adjectives (old enough, smart enough, rich enough)."
        },
        {
          wrong: "I don't have money enough for the ticket.",
          correct: "I don't have enough money for the ticket.",
          note: "'Enough' comes BEFORE nouns (enough money, enough time, enough food)."
        },
        {
          wrong: "The wifi connection is too fast! I love it! (Intended positive praise)",
          correct: "The wifi connection is very / extremely fast! I love it!",
          note: "'Too' carries an inherently negative connotation (problematic excess). Use 'very' or 'really' for positive praise."
        },
        {
          wrong: "The flight was too much long.",
          correct: "The flight was too long.",
          note: "'Long' is an adjective, so use 'too long', never 'too much long'."
        }
      ],
      speakingPrompt: "Describe a product that is 'too expensive', a habit that is 'too distracting', and a skill you are not 'confident enough' in yet."
    },
    {
      id: "g1_4",
      topic: "First Conditional (Real Future Possibilities & Consequences)",
      explanation: "Use the First Conditional to talk about realistic future possibilities and their probable results. Rule: NEVER put 'will' in the If-clause!",
      form: "If + Present Simple, will / won't + Verb (base form) [If + S + V1/Vs, S + will + V1]",
      examples: [
        "If you save 100 TL every week, you will have enough money for a concert ticket by summer.",
        "If teenagers spend all their allowance on impulse buying, they will be broke by mid-month.",
        "If you use AI tools responsibly, your research productivity will double.",
        "If she doesn't protect her personal data, hackers will compromise her account.",
        "If I pass the English language exam, I will apply to study abroad in Ireland."
      ],
      turkishMistakes: [
        {
          wrong: "If I will save money, I will buy a new tablet.",
          correct: "If I save money, I will buy a new tablet.",
          note: "Turkish uses future suffix (-ecek/acak) in conditional clauses, but English strictly prohibits 'will' after 'if' in first conditional!"
        },
        {
          wrong: "If he don't study, he will fail the exchange exam.",
          correct: "If he doesn't study, he will fail the exchange exam.",
          note: "Present simple with he/she/it requires 'doesn't + base verb'."
        },
        {
          wrong: "If you will go to abroad, you will learn English.",
          correct: "If you go abroad, you will learn English.",
          note: "No 'will' in the if-clause, and 'abroad' does NOT take the preposition 'to'."
        },
        {
          wrong: "What you will do if the flight is delayed?",
          correct: "What will you do if the flight is delayed?",
          note: "In questions, invert the subject and modal: 'What will you do...?'"
        },
        {
          wrong: "If we don't plan ahead, we are broke next week.",
          correct: "If we don't plan ahead, we will be broke next week.",
          note: "The result clause in the future requires 'will + be'."
        }
      ],
      speakingPrompt: "Complete these 3 sentences for yourself: 1) If I reduce my screen time..., 2) If I save my money wisely..., 3) If I travel abroad next summer..."
    }
  ],

  grammar2: [
    {
      id: "g2_1",
      topic: "Present Perfect vs Past Simple (Unspecified Experience vs Specific Past Time)",
      explanation: "Use Past Simple when you state or ask about a SPECIFIC finished time in the past (yesterday, last year, in 2023, 2 days ago, when I was 10). Use Present Perfect for general life experiences without a specific date (ever, never, recently, already, yet) or actions continuing up to the present.",
      form: "Past Simple: Subject + V2 (did/didn't)  |  Present Perfect: Subject + have/has + V3 (past participle)",
      examples: [
        "I went to Germany with my school last summer. (Past Simple - specific time: last summer)",
        "I have visited three European countries in my life. (Present Perfect - life experience, no date)",
        "She bought a new smartphone two days ago. (Past Simple - specific time: 2 days ago)",
        "Have you ever experienced severe culture shock? (Present Perfect - life experience question)",
        "I haven't saved enough money for the flight tickets yet. (Present Perfect - up to now)"
      ],
      turkishMistakes: [
        {
          wrong: "I have been in Germany last year.",
          correct: "I went to Germany last year. / I was in Germany last year.",
          note: "Turkish uses the same past tense for both concepts. In English, you CANNOT use Present Perfect with specific past time words like 'last year'!"
        },
        {
          wrong: "Did you ever traveled abroad?",
          correct: "Have you ever traveled abroad? (Experience) / Did you travel abroad last summer? (Specific)",
          note: "'Ever' in general life experience questions requires Present Perfect ('Have you ever + V3')."
        },
        {
          wrong: "I live here since three years.",
          correct: "I have lived / have been living here for three years.",
          note: "For actions starting in the past and continuing now, English requires Present Perfect + 'for' (duration) or 'since' (starting point)."
        },
        {
          wrong: "When have you bought this laptop?",
          correct: "When did you buy this laptop?",
          note: "'When' questions asking for a specific moment in time always take Past Simple ('When did you...?')."
        },
        {
          wrong: "She has lost her passport yesterday at the airport.",
          correct: "She lost her passport yesterday at the airport.",
          note: "'Yesterday' is a finished past time marker, requiring Past Simple 'lost'."
        }
      ],
      speakingPrompt: "Tell your partner: 1) Three countries or cities you have visited in your life, and 2) Exactly what you did in one of them on a specific past holiday."
    },
    {
      id: "g2_2",
      topic: "used to vs be used to / get used to (Past Habits vs Familiarity)",
      explanation: "1) 'used to + V1' = past habit/state that is NO LONGER true today (eskiden yapardım ama artık yapmıyorum).\n2) 'be used to + V-ing/noun' = to be accustomed to (alışkın olmak).\n3) 'get used to + V-ing/noun' = the process of becoming accustomed (alışma süreci).",
      form: "Past habit: S + used to + V1  |  Familiarity: S + be/get used to + V-ing / noun",
      examples: [
        "I used to spend all my pocket money on video games, but now I save it.",
        "She didn't use to care about online privacy when she was younger.",
        "It took me two weeks to get used to eating dinner early in England.",
        "I am used to waking up at 6:30 AM for high school, so it's easy for me.",
        "Did you use to travel with your parents every summer?"
      ],
      turkishMistakes: [
        {
          wrong: "I am used to live in Turkey. (Intended: I currently live / I'm accustomed to living)",
          correct: "I am used to living in Turkey. / I live in Turkey.",
          note: "'Be used to' is followed by a gerund (V-ing) or noun, never base verb! If you mean past habit, use 'I used to live'."
        },
        {
          wrong: "I didn't used to save money.",
          correct: "I didn't use to save money.",
          note: "After 'didn't', the 'd' drops: 'didn't use to'."
        },
        {
          wrong: "I use to go to gym every day now. (Intended: I usually go)",
          correct: "I usually go to the gym every day now.",
          note: "'Used to' only refers to the past! For present habits, use 'usually + present simple', NOT 'use to'."
        },
        {
          wrong: "I will get used to speak English with native speakers.",
          correct: "I will get used to speaking English with native speakers.",
          note: "'Get used to' requires the gerund 'speaking'."
        },
        {
          wrong: "He is used to use AI for everything.",
          correct: "He is used to using AI for everything.",
          note: "Add -ing: 'is used to using'."
        }
      ],
      speakingPrompt: "Describe: 1) One habit you used to have in middle school that you stopped, and 2) One new cultural habit you had to get used to."
    },
    {
      id: "g2_3",
      topic: "Second Conditional (Unreal / Hypothetical Situations in the Present or Future)",
      explanation: "Use the Second Conditional to talk about imaginary, hypothetical, or impossible situations right now or in the future. Form: If + Past Simple, would / wouldn't + Verb (base form). Note: In formal English, use 'were' for all persons (If I were you...).",
      form: "If + Past Simple (V2 / were), would + Verb (base form) [If + S + V2, S + would + V1]",
      examples: [
        "If I had 100,000 TL right now, I would invest half of it and travel to Japan.",
        "If you lived in London for a year, what would you miss most about Turkey?",
        "If I were you, I would delete addictive social media apps before the exam week.",
        "If we didn't have AI translation tools, communicating abroad would be much harder.",
        "What would you do if you lost your passport in a foreign airport?"
      ],
      turkishMistakes: [
        {
          wrong: "If I will live abroad, I would learn the culture.",
          correct: "If I lived abroad, I would learn about the culture.",
          note: "Never use 'will' or 'would' in the If-clause of a second conditional! Use Past Simple in the If-clause."
        },
        {
          wrong: "If I was have more money, I would buy a MacBook.",
          correct: "If I had more money, I would buy a MacBook.",
          note: "Do not say 'was have'. The past tense of have is simply 'had'."
        },
        {
          wrong: "If I am you, I wouldn't lend him money.",
          correct: "If I were you, I wouldn't lend him money.",
          note: "Use the subjunctive 'were' in hypothetical advice: 'If I were you...'."
        },
        {
          wrong: "If he won the competition, he will celebrate.",
          correct: "If he won the competition, he would celebrate. (Or: If he wins, he will...)",
          note: "Keep the tenses consistent: Past -> Would (Second Conditional) or Present -> Will (First Conditional)."
        },
        {
          wrong: "What would you do if you will get lost?",
          correct: "What would you do if you got lost?",
          note: "In the if-clause, use Past Simple 'got lost'."
        }
      ],
      speakingPrompt: "Answer: If you could spend 6 months living anywhere in the world with all expenses paid, where would you go and what would you do every day?"
    },
    {
      id: "g2_4",
      topic: "Relative Clauses (who, which, that, where, whose)",
      explanation: "Use relative clauses to combine sentences and give essential information about people, things, and places without repeating words.\n- 'who / that' for people\n- 'which / that' for things & animals\n- 'where' for places (meaning 'in which')\n- 'whose' for possession (whose father, whose screen)",
      form: "Noun + [who / which / that / where / whose + clause]",
      examples: [
        "A budget is a financial plan which / that helps you track your daily spending.",
        "An exchange student is a teenager who studies abroad at a partner school.",
        "London is the vibrant city where Zeynep experienced culture shock.",
        "I have a classmate whose screen time exceeds nine hours every single day.",
        "ChatGPT is an AI tool that generates text and clarifies difficult concepts."
      ],
      turkishMistakes: [
        {
          wrong: "The student which won the scholarship was very excited.",
          correct: "The student who / that won the scholarship was very excited.",
          note: "Use 'who' (or 'that') for human beings, NEVER 'which'!"
        },
        {
          wrong: "This is the city which I was born. (Intended: where I was born)",
          correct: "This is the city where I was born. / This is the city in which I was born.",
          note: "Use 'where' when talking about an action happening in a place, or 'which' with a preposition ('in which')."
        },
        {
          wrong: "I met a boy who his father is a pilot.",
          correct: "I met a boy whose father is a pilot.",
          note: "Do not say 'who his'. Use the possessive relative pronoun 'whose'."
        },
        {
          wrong: "The laptop what I bought yesterday is very fast.",
          correct: "The laptop that / which I bought yesterday is very fast.",
          note: "'What' cannot be used as a relative pronoun after a specific noun. Use 'that' or 'which'."
        },
        {
          wrong: "The app who helps me manage money is free.",
          correct: "The app which / that helps me manage money is free.",
          note: "Apps and software are non-human things, so use 'which' or 'that', not 'who'."
        }
      ],
      speakingPrompt: "Define these 3 things using relative clauses: 1) A good friend is someone who..., 2) A useful app is a tool which..., 3) A dream destination is a place where..."
    }
  ],

  turkishWatch20: [
    {
      id: "tw1",
      category: "Prepositions / Movement",
      wrong: "I want to go to abroad next summer.",
      correct: "I want to go abroad / travel abroad next summer.",
      explanation: "'Abroad' is an adverb meaning 'in or to a foreign country'. It already includes direction.",
      turkishInterference: "Turkish uses the dative suffix '-e/a' (yurt dışına gitmek), leading students to mistakenly translate it as 'to abroad'.",
      practiceSentence: "She plans to study abroad (NOT study to abroad) after finishing high school."
    },
    {
      id: "tw2",
      category: "Verb Collocations / Direct Translation",
      wrong: "I took a big decision about my university.",
      correct: "I made a big decision about my university.",
      explanation: "In English, the standard natural collocation is 'make a decision', never 'take a decision'.",
      turkishInterference: "Turkish says 'karar almak' (literally: take a decision). Direct word-for-word translation creates this error.",
      practiceSentence: "It is difficult to make financial decisions when you are under stress."
    },
    {
      id: "tw3",
      category: "Prepositions / Spending",
      wrong: "I spend too much money for coffee and snacks.",
      correct: "I spend too much money on coffee and snacks.",
      explanation: "The verb 'spend' collocated with money or time requires the preposition 'ON' (spend money ON something).",
      turkishInterference: "Turkish uses the dative suffix '-e/a' or 'için' (kahve için para harcamak), causing learners to say 'spend for'.",
      practiceSentence: "Don't spend all your savings on expensive designer clothes."
    },
    {
      id: "tw4",
      category: "Prepositions / Paying",
      wrong: "My father will pay it the dinner bill.",
      correct: "My father will pay for the dinner bill. / My father will pay the bill.",
      explanation: "When you pay for a good or service, you 'pay for something'. You can also say 'pay the bill'. Do not double 'it'.",
      turkishInterference: "Turkish phrasing 'hesabı ödemek' leads to awkward pronoun insertion and missing 'for'.",
      practiceSentence: "Who is going to pay for our taxi fare to the airport?"
    },
    {
      id: "tw5",
      category: "Adjective vs Verb Confusion",
      wrong: "I am agree with your opinion about artificial intelligence.",
      correct: "I agree with your opinion about artificial intelligence.",
      explanation: "'Agree' is a regular action verb, NOT an adjective. It never takes the 'am/is/are' auxiliary in the present simple!",
      turkishInterference: "Turkish speakers confuse 'katılıyorum' with being in a state ('hemfikirim'), adding unnecessary 'am'.",
      practiceSentence: "Do you agree with the new school smartphone policy?"
    },
    {
      id: "tw6",
      category: "Countable vs Uncountable Nouns",
      wrong: "I have too many luggages for this flight.",
      correct: "I have too much luggage / too many bags for this flight.",
      explanation: "'Luggage' (and 'baggage') is strictly uncountable in English. It cannot be pluralized with -s and takes 'much', not 'many'.",
      turkishInterference: "Turkish allows plural 'valizler/bagajlar', leading students to say 'luggages'.",
      practiceSentence: "Please make sure your luggage is tagged with your contact info."
    },
    {
      id: "tw7",
      category: "Modals & Infinitive Forms",
      wrong: "We must to protect our private passwords.",
      correct: "We must protect our private passwords.",
      explanation: "Modal auxiliary verbs (must, should, can, could, may, might) are followed directly by the bare infinitive (V1) without 'to'.",
      turkishInterference: "Turkish infinitive suffix '-mek/mak' prompts learners to insert 'to' after every modal.",
      practiceSentence: "Teenagers must learn how to budget their monthly allowance."
    },
    {
      id: "tw8",
      category: "Degree Modifiers with Adjectives",
      wrong: "This camera is too much expensive.",
      correct: "This camera is too expensive. / This camera is way too expensive.",
      explanation: "Modify adjectives with 'too' (too expensive, too hot, too fast). Use 'too much' only with uncountable NOUNS (too much money).",
      turkishInterference: "Direct translation from Turkish 'çok fazla pahalı' leads to the common error 'too much expensive'.",
      practiceSentence: "Living in central London is too expensive for most high school exchange students."
    },
    {
      id: "tw9",
      category: "Conditionals / Tense in If-Clauses",
      wrong: "If I will save money, I will buy a gaming PC.",
      correct: "If I save money, I will buy a gaming PC.",
      explanation: "In First Conditional sentences, the condition clause (If-clause) takes the Present Simple, NEVER 'will'!",
      turkishInterference: "Turkish uses future markings in conditional clauses ('Para biriktireceksem... / biriktirirsem'), prompting 'will'.",
      practiceSentence: "If you arrive early at the airport, you will avoid long check-in queues."
    },
    {
      id: "tw10",
      category: "Present Perfect with Specific Past Time",
      wrong: "I have visited London two years ago.",
      correct: "I visited London two years ago.",
      explanation: "When a specific past time is stated (two years ago, yesterday, in 2022), you MUST use Past Simple, not Present Perfect.",
      turkishInterference: "Turkish lacks the distinction between finished time versus open time in past tense morphology.",
      practiceSentence: "We bought our flight tickets two days ago."
    },
    {
      id: "tw11",
      category: "Missing Copula / 'Be' Verb",
      wrong: "My friend very clever at coding.",
      correct: "My friend is very clever at coding.",
      explanation: "Every English sentence must contain a finite verb. Descriptive sentences require the copula 'be' (am/is/are/was/were).",
      turkishInterference: "Turkish uses zero-copula or hidden suffixes in the present tense ('Arkadaşım çok zeki'), so students omit 'is'.",
      practiceSentence: "Online shopping is extremely convenient for busy people."
    },
    {
      id: "tw12",
      category: "Word Order / Adverb Placement",
      wrong: "I like very much online gaming.",
      correct: "I like online gaming very much. / I really like online gaming.",
      explanation: "Do not place adverbs between the transitive verb ('like') and its direct object ('online gaming'). Place it at the end or use 'really'.",
      turkishInterference: "Turkish puts the adverb before the verb ('Çok seviyorum'), so learners say 'I like very much X'.",
      practiceSentence: "She really enjoys exploring historic European cities."
    },
    {
      id: "tw13",
      category: "Make vs Do Collocations",
      wrong: "I need to make my homework before playing video games.",
      correct: "I need to do my homework before playing video games.",
      explanation: "Use 'do' for tasks, chores, and work (do homework, do research, do chores). Use 'make' for creating or producing (make money, make friends, make a decision).",
      turkishInterference: "Turkish uses the single generic verb 'yapmak' for both 'make' (karar yapmak/vermek) and 'do' (ödev yapmak).",
      practiceSentence: "Students must do their own research rather than letting AI do everything."
    },
    {
      id: "tw14",
      category: "Look / Watch / See Distinction",
      wrong: "I saw a movie at the cinema last night on my phone. / I looked TV.",
      correct: "I watched a movie on my phone last night. / I watched TV.",
      explanation: "Use 'watch' for moving screens, matches, or things in motion over time. Use 'look at' for static objects, and 'see' for sensory perception.",
      turkishInterference: "Turkish uses 'bakmak' and 'görmek/izlemek' interchangeably in colloquial speech.",
      practiceSentence: "How many hours do you spend watching YouTube tutorials each week?"
    },
    {
      id: "tw15",
      category: "Listen vs Hear / Preposition Usage",
      wrong: "I like listening music while doing homework.",
      correct: "I like listening to music while doing homework.",
      explanation: "The verb 'listen' MUST be followed by the preposition 'to' when mentioning the object (listen to music, listen to podcasts, listen to the teacher).",
      turkishInterference: "Turkish says 'müzik dinlemek' without a preposition, causing students to drop 'to'.",
      practiceSentence: "Always listen to the safety instructions before flight departure."
    },
    {
      id: "tw16",
      category: "Relative Pronouns with People",
      wrong: "The girl which sits next to me is an exchange student.",
      correct: "The girl who sits next to me is an exchange student.",
      explanation: "Use 'who' or 'that' for human beings; 'which' is strictly reserved for objects, concepts, and animals.",
      turkishInterference: "Turkish uses the universal participle '-en/an' (oturan kız) without separating human from non-human relative pronouns.",
      practiceSentence: "The teacher who taught us financial literacy was inspiring."
    },
    {
      id: "tw17",
      category: "Gerunds vs Infinitives after Prepositions",
      wrong: "I am interested in learn artificial intelligence.",
      correct: "I am interested in learning artificial intelligence.",
      explanation: "Any verb that immediately follows a preposition (in, on, at, about, for, without) MUST take the gerund form (-ing).",
      turkishInterference: "Turkish infinitive '-mek/mak' leads students to use base verb form after prepositions.",
      practiceSentence: "She is passionate about studying abroad in Europe."
    },
    {
      id: "tw18",
      category: "Definite vs Indefinite Articles",
      wrong: "Internet is very useful for do research.",
      correct: "The internet is very useful for doing research.",
      explanation: "We say 'the internet' (unique global system). Also, remember the gerund 'doing' after the preposition 'for'!",
      turkishInterference: "Turkish has no definite article 'the', so Turkish learners frequently omit it.",
      practiceSentence: "You can find reliable information on the internet if you search wisely."
    },
    {
      id: "tw19",
      category: "Plural vs Singular / Making Friends",
      wrong: "I want to make friend in my new school.",
      correct: "I want to make friends in my new school.",
      explanation: "The standard English idiom is plural: 'make friends' (to form social friendships).",
      turkishInterference: "Turkish often uses singular nouns generically ('arkadaş edinmek'), leading to 'make friend'.",
      practiceSentence: "Joining clubs makes it easy to make friends with international students."
    },
    {
      id: "tw20",
      category: "Asking for Help Collocation",
      wrong: "Don't hesitate to ask help to your teacher.",
      correct: "Don't hesitate to ask your teacher for help. / ...ask for help from your teacher.",
      explanation: "Correct syntax: 'ask [someone] for help' or 'ask for help from [someone]'. Never say 'ask help to'.",
      turkishInterference: "Turkish says 'öğretmenine yardım sormak/istemek', producing the faulty 'ask help to'.",
      practiceSentence: "If you get lost in an airport, politely ask the staff for help."
    },
    {
      id: "tw21",
      category: "Second Conditional / Double Modal Error",
      wrong: "If I would have money, I would buy a ticket.",
      correct: "If I had money, I would buy a ticket.",
      explanation: "Never use 'would' in the If-clause of a hypothetical conditional! Use Past Simple (had/were/lived).",
      turkishInterference: "Translating hypothetical 'param olsaydı' creates confusion, causing students to repeat 'would' twice.",
      practiceSentence: "If she spoke fluent English, she would apply for the internship abroad."
    },
    {
      id: "tw22",
      category: "Borrow vs Lend Direction",
      wrong: "Can you borrow me 100 TL until tomorrow? (Intended: Can you lend me...)",
      correct: "Can you lend me 100 TL until tomorrow? / Can I borrow 100 TL from you?",
      explanation: "'Borrow' means to TAKE money temporarily (borç almak). 'Lend' means to GIVE money temporarily (borç vermek).",
      turkishInterference: "Turkish speakers mix up the direction of lending versus borrowing.",
      practiceSentence: "I never lend money to people who have poor financial habits."
    }
  ]
};
