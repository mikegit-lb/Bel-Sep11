/**
 * CORE APPLICATION ENGINE
 * High-performance, modular interactive engine for the ESL Lesson Platform.
 */

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

const App = {
  state: {
    theme: localStorage.getItem('esl_theme') || 'light',
    completedStages: JSON.parse(localStorage.getItem('esl_completed_stages') || '[]'),
    checkedGoals: JSON.parse(localStorage.getItem('esl_checked_goals') || '[]'),
    selectedHw: JSON.parse(localStorage.getItem('esl_selected_hw') || '[]'),
    teacherNotesVisible: false,
    timerInterval: null,
    timerSeconds: 90,
    isTimerRunning: false,
    mediaRecorder: null,
    audioChunks: [],
    audioBlobUrl: null
  },

  init() {
    this.applyTheme(this.state.theme);
    this.renderGoals();
    this.renderWarmups();
    this.renderVocabSections();
    this.renderSpeakingSections();
    this.renderGrammarSections();
    this.renderReadingSection();
    this.renderFluencySection();
    this.renderTurkishWatchSection();
    this.renderFinalProjectSection();
    this.renderHomeworkSection();
    this.renderB1B2Upgrades();
    this.bindEvents();
    this.updateProgress();
    this.initScrollSpy();
  },

  /* ==========================================================================
     THEME & NAVIGATION
     ========================================================================== */
  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeIcon = document.getElementById('themeToggleBtn');
    if (themeIcon) {
      themeIcon.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    }
    localStorage.setItem('esl_theme', theme);
  },

  toggleTheme() {
    this.state.theme = this.state.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(this.state.theme);
  },

  toggleTeacherNotes() {
    this.state.teacherNotesVisible = !this.state.teacherNotesVisible;
    const boxes = document.querySelectorAll('.teacher-notes-box');
    const toggleBtn = document.getElementById('teacherNotesToggleBtn');
    
    boxes.forEach(box => {
      box.classList.toggle('active', this.state.teacherNotesVisible);
    });

    if (toggleBtn) {
      toggleBtn.classList.toggle('active', this.state.teacherNotesVisible);
      toggleBtn.innerHTML = this.state.teacherNotesVisible ? '👨‍🏫 Hide Teacher Notes' : '👨‍🏫 Teacher Notes';
    }
  },

  /* ==========================================================================
     PROGRESS & CHECKLISTS
     ========================================================================== */
  toggleStageCompletion(stageId) {
    const index = this.state.completedStages.indexOf(stageId);
    if (index > -1) {
      this.state.completedStages.splice(index, 1);
    } else {
      this.state.completedStages.push(stageId);
    }
    localStorage.setItem('esl_completed_stages', JSON.stringify(this.state.completedStages));
    this.updateProgress();
  },

  toggleGoal(goalId) {
    const index = this.state.checkedGoals.indexOf(goalId);
    if (index > -1) {
      this.state.checkedGoals.splice(index, 1);
    } else {
      this.state.checkedGoals.push(goalId);
    }
    localStorage.setItem('esl_checked_goals', JSON.stringify(this.state.checkedGoals));
    this.renderGoals();
    this.updateProgress();
  },

  updateProgress() {
    const totalStages = 16;
    const completedCount = this.state.completedStages.length;
    const percent = Math.min(100, Math.round((completedCount / totalStages) * 100));

    const fillBar = document.getElementById('progressBarFill');
    const percentText = document.getElementById('progressPercentText');
    const countText = document.getElementById('progressCountText');

    if (fillBar) fillBar.style.width = `${percent}%`;
    if (percentText) percentText.textContent = `${percent}% Complete`;
    if (countText) countText.textContent = `${completedCount}/${totalStages} Stages`;

    // Update section toggles & sidebar badges
    document.querySelectorAll('.stage-complete-toggle').forEach(btn => {
      const stage = btn.dataset.stage;
      const isDone = this.state.completedStages.includes(stage);
      btn.classList.toggle('checked', isDone);
      btn.innerHTML = isDone ? '✓ Completed' : 'Mark Stage Done';
    });

    document.querySelectorAll('.sidebar-link').forEach(link => {
      const stage = link.dataset.stage;
      link.classList.toggle('completed', this.state.completedStages.includes(stage));
    });
  },

  initScrollSpy() {
    const sections = document.querySelectorAll('.lesson-section');
    const navLinks = document.querySelectorAll('.sidebar-link');

    window.addEventListener('scroll', () => {
      let currentSection = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        if (window.pageYOffset >= top) {
          currentSection = sec.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    });
  },

  /* ==========================================================================
     TEXT-TO-SPEECH (TTS) AUDIO SYNTHESIS
     ========================================================================== */
  speak(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.92;
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech is not supported by your browser.");
    }
  },

  /* ==========================================================================
     SECTION 1: GOALS & CAN-DO STATEMENTS
     ========================================================================== */
  renderGoals() {
    const container = document.getElementById('canDoGoalsContainer');
    if (!container) return;

    const goals = [
      { id: "g1", title: "Talk about Spending Habits & Independence", desc: "Use budget, allowance, impulse buying, and justify needs vs wants." },
      { id: "g2", title: "Evaluate Technology, AI & Screen Balance", desc: "Explain digital safety, AI productivity, and express balanced opinions." },
      { id: "g3", title: "Navigate Culture Shock & Living Abroad", desc: "Describe travel problems, airport situations, and adapting to foreign customs." },
      { id: "g4", title: "Upgrade Short A2 Sentences to Fluent B1+/B2", desc: "Use subordinate clauses, discourse markers, and avoid Turkish translations." },
      { id: "g5", title: "Deliver a 90-second Coherent Speech", desc: "Follow Opinion -> Reason -> Example -> Contrast -> Conclusion framework." }
    ];

    container.innerHTML = goals.map(g => {
      const isChecked = this.state.checkedGoals.includes(g.id);
      return `
        <div class="can-do-item ${isChecked ? 'checked' : ''}" onclick="App.toggleGoal('${g.id}')">
          <div class="can-do-checkbox">${isChecked ? '✓' : ''}</div>
          <div>
            <div class="can-do-text">${g.title}</div>
            <div class="can-do-desc">${g.desc}</div>
          </div>
        </div>
      `;
    }).join('');
  },

  /* ==========================================================================
     SECTION 2: WARM-UP SPEAKING
     ========================================================================== */
  renderWarmups() {
    const container = document.getElementById('warmupsContainer');
    if (!container) return;

    container.innerHTML = SPEAKING_DATA.warmups.map((w, index) => `
      <div class="speaking-card">
        <div class="speaking-card-header">
          <span class="speaking-format-badge badge-questionnaire">${w.format}</span>
          <span class="speaking-card-num">Question #${index + 1}</span>
        </div>
        <div class="speaking-question">${w.question}</div>
        <div class="speaking-challenge-box">
          <span>💡</span>
          <div><strong>Speaking Support:</strong> ${w.subPrompt}</div>
        </div>
      </div>
    `).join('');
  },

  /* ==========================================================================
     SECTION 3, 6, 9: VOCABULARY MODULES
     ========================================================================== */
  renderVocabSections() {
    this.renderVocabGrid('vocabGridMoney', VOCAB_DATA.money);
    this.renderVocabGrid('vocabGridTech', VOCAB_DATA.technology);
    this.renderVocabGrid('vocabGridTravel', VOCAB_DATA.travel);
  },

  renderVocabGrid(elementId, items) {
    const container = document.getElementById(elementId);
    if (!container) return;

    container.innerHTML = items.map(item => `
      <div class="vocab-card" id="card-${item.id}">
        <div>
          <div class="vocab-card-top">
            <div class="vocab-word">
              ${item.word}
              <button class="vocab-speaker-btn" title="Pronounce word" onclick="App.speak('${item.word.replace(/'/g, "\\'")}')">🔊</button>
            </div>
            <span class="vocab-pos">${item.pos}</span>
          </div>
          <p class="vocab-definition">${item.definition}</p>
          <div class="vocab-collocation">
            <span>🔗</span> <strong>Collocation:</strong> ${item.collocation}
          </div>
          <div class="vocab-example">“${item.example}”</div>
          <div class="vocab-question-box">
            <div class="vocab-question-label">💬 Speaking Prompt:</div>
            <div>${item.question}</div>
          </div>
        </div>
        <div class="vocab-turkish-wrap">
          <button class="vocab-turkish-btn" onclick="App.revealTurkish('${item.id}')">🇹🇷 Reveal Turkish Meaning</button>
          <div class="vocab-turkish-text">🇹🇷 ${item.turkish}</div>
        </div>
      </div>
    `).join('');
  },

  revealTurkish(id) {
    const card = document.getElementById(`card-${id}`);
    if (card) {
      card.classList.toggle('revealed');
    }
  },

  filterVocab(gridId, searchInputId) {
    const query = document.getElementById(searchInputId).value.toLowerCase();
    const container = document.getElementById(gridId);
    if (!container) return;

    const cards = container.querySelectorAll('.vocab-card');
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? 'flex' : 'none';
    });
  },

  generateRandom3Words(moduleKey) {
    const items = VOCAB_DATA[moduleKey];
    if (!items || items.length < 3) return;

    const shuffled = [...items].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    const containerId = `randomWords_${moduleKey}`;
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = selected.map(w => `
        <span class="random-word-badge" title="${w.definition}">
          ${w.word}
        </span>
      `).join('');
    }
  },

  /* ==========================================================================
     SECTION 4, 7, 10: SPEAKING INTEGRATION CARDS
     ========================================================================== */
  renderSpeakingSections() {
    this.renderSpeakingGrid('speakingGridTopic1', SPEAKING_DATA.speakingCardsTopic1);
    this.renderSpeakingGrid('speakingGridTopic2', SPEAKING_DATA.speakingCardsTopic2);
    this.renderSpeakingGrid('speakingGridTopic3', SPEAKING_DATA.speakingCardsTopic3);
  },

  renderSpeakingGrid(elementId, cards) {
    const container = document.getElementById(elementId);
    if (!container) return;

    container.innerHTML = cards.map(c => `
      <div class="speaking-card">
        <div class="speaking-card-header">
          <span class="speaking-format-badge ${c.badgeClass}">${c.format}</span>
          <span class="speaking-card-num">${c.number}</span>
        </div>
        <div class="speaking-question">${c.question}</div>
        <div class="speaking-target-words">
          <div class="target-words-label">🎯 Target Vocabulary to Use:</div>
          <div class="target-chips-wrap">
            ${c.targetWords.map(w => `<span class="target-chip">${w}</span>`).join('')}
          </div>
        </div>
        <div class="answer-frame-box">
          <div class="answer-frame-label">🗣️ Answer Starter Frame:</div>
          <div class="answer-frame-text">${c.answerFrame}</div>
        </div>
        <div class="speaking-challenge-box">
          <span>⚡</span>
          <div>${c.followUp}</div>
        </div>
      </div>
    `).join('');
  },

  drawRandomSpeakingCard(topicKey) {
    let cardPool = [];
    if (topicKey === 'topic1') cardPool = SPEAKING_DATA.speakingCardsTopic1;
    else if (topicKey === 'topic2') cardPool = SPEAKING_DATA.speakingCardsTopic2;
    else if (topicKey === 'topic3') cardPool = SPEAKING_DATA.speakingCardsTopic3;

    if (!cardPool.length) return;
    const randomCard = cardPool[Math.floor(Math.random() * cardPool.length)];

    const modalBody = document.getElementById('randomCardModalBody');
    if (modalBody) {
      modalBody.innerHTML = `
        <div class="speaking-card" style="box-shadow: none; border: none; padding: 0;">
          <div class="speaking-card-header">
            <span class="speaking-format-badge ${randomCard.badgeClass}">${randomCard.format}</span>
            <span class="speaking-card-num">${randomCard.number}</span>
          </div>
          <div class="speaking-question" style="font-size: 1.25rem;">${randomCard.question}</div>
          <div class="speaking-target-words" style="margin: 1rem 0;">
            <div class="target-words-label">🎯 Target Words to Use in Your Answer:</div>
            <div class="target-chips-wrap">
              ${randomCard.targetWords.map(w => `<span class="target-chip" style="font-size: 0.9rem;">${w}</span>`).join('')}
            </div>
          </div>
          <div class="answer-frame-box" style="margin-bottom: 1rem;">
            <div class="answer-frame-label">🗣️ Answer Frame:</div>
            <div class="answer-frame-text">${randomCard.answerFrame}</div>
          </div>
          <div class="speaking-challenge-box">
            <span>⚡</span>
            <div>${randomCard.followUp}</div>
          </div>
        </div>
      `;
      document.getElementById('randomCardModal').classList.add('active');
    }
  },

  closeModal() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  },

  /* ==========================================================================
     SECTION 5 & 11: MINI GRAMMAR FOR SPEAKING
     ========================================================================== */
  renderGrammarSections() {
    this.renderGrammarRules('grammar1RulesContainer', GRAMMAR_DATA.grammar1);
    this.renderGrammarRules('grammar2RulesContainer', GRAMMAR_DATA.grammar2);
  },

  renderGrammarRules(containerId, rules) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = rules.map(r => `
      <div class="grammar-rule-card">
        <div class="grammar-rule-title">${r.topic}</div>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.6rem;">${r.explanation.replace(/\n/g, '<br>')}</p>
        <div class="grammar-form-box">${r.form}</div>
        
        <h5 style="font-size: 0.82rem; font-weight: 700; text-transform: uppercase; color: var(--primary); margin: 0.75rem 0 0.4rem;">5 Topic-Based Examples:</h5>
        <ul class="grammar-examples-list">
          ${r.examples.map(ex => `<li>${ex}</li>`).join('')}
        </ul>

        <h5 style="font-size: 0.82rem; font-weight: 700; text-transform: uppercase; color: var(--danger); margin: 0.75rem 0 0.4rem;">5 Common Turkish Learner Mistakes:</h5>
        <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 0.75rem;">
          ${r.turkishMistakes.map(m => `
            <div style="background: var(--bg-subtle); padding: 0.6rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.84rem;">
              <div style="color: var(--danger); text-decoration: line-through;">❌ ${m.wrong}</div>
              <div style="color: var(--success); font-weight: 700;">✅ ${m.correct}</div>
              <div style="color: var(--text-muted); font-size: 0.78rem; margin-top: 0.2rem;">💡 ${m.note}</div>
            </div>
          `).join('')}
        </div>

        <div class="speaking-challenge-box" style="margin-top: 0.75rem;">
          <span>💬</span>
          <div><strong>Speaking Practice:</strong> ${r.speakingPrompt}</div>
        </div>
      </div>
    `).join('');
  },

  /* ==========================================================================
     SECTION 8: READING & LISTENING SUPPORT
     ========================================================================== */
  renderReadingSection() {
    const container = document.getElementById('readingTextContainer');
    const compContainer = document.getElementById('readingCompContainer');
    const vocabInCtxContainer = document.getElementById('readingVocabInCtxContainer');
    const speakingFollowUpContainer = document.getElementById('readingSpeakingFollowUpContainer');

    if (container) {
      container.innerHTML = `
        <div class="audio-title" style="margin-bottom: 1rem; font-size: 1.3rem;">
          📖 ${SPEAKING_DATA.readingArticle.title}
        </div>
        <div style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 1.25rem;">
          Length: <strong>${SPEAKING_DATA.readingArticle.wordCount} words</strong> | CEFR Target: <strong>B1/B1+</strong>
        </div>
        <div class="reading-text-body">
          ${SPEAKING_DATA.readingArticle.text.split('\n\n').map(p => `<p>${p}</p>`).join('')}
        </div>
      `;
    }

    if (compContainer) {
      compContainer.innerHTML = SPEAKING_DATA.readingArticle.comprehensionQuestions.map((cq, qIdx) => `
        <div class="quiz-item" id="cq_item_${cq.id}">
          <div class="quiz-question">${qIdx + 1}. ${cq.q}</div>
          <div class="quiz-options">
            ${cq.options.map((opt, optIdx) => `
              <button class="quiz-option" onclick="App.checkReadingComp('${cq.id}', ${optIdx}, ${cq.answer}, '${cq.explanation.replace(/'/g, "\\'")}')">
                ${opt}
              </button>
            `).join('')}
          </div>
          <div class="quiz-feedback" id="cq_fb_${cq.id}"></div>
        </div>
      `).join('');
    }

    if (vocabInCtxContainer) {
      vocabInCtxContainer.innerHTML = SPEAKING_DATA.readingArticle.vocabInContext.map(v => `
        <div style="background: var(--bg-subtle); border: 1px solid var(--border-color); padding: 0.85rem 1rem; border-radius: var(--radius-md); margin-bottom: 0.6rem;">
          <div style="font-weight: 700; color: var(--primary); font-size: 0.95rem;">🔍 “${v.phrase}”</div>
          <div style="font-size: 0.88rem; color: var(--text-main); margin: 0.25rem 0;">${v.question}</div>
          <div style="font-size: 0.82rem; color: var(--success); font-weight: 600;">✓ In Context: ${v.answer}</div>
        </div>
      `).join('');
    }

    if (speakingFollowUpContainer) {
      speakingFollowUpContainer.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 0.65rem;">
          ${SPEAKING_DATA.readingArticle.speakingFollowUps.map(s => `
            <div style="background: var(--bg-card); border-left: 3px solid var(--secondary); padding: 0.75rem 1rem; border-radius: 0 var(--radius-sm) var(--radius-sm) 0; font-size: 0.92rem; font-weight: 600;">
              ${s}
            </div>
          `).join('')}
        </div>
      `;
    }
  },

  readArticleAudio() {
    this.speak(SPEAKING_DATA.readingArticle.text);
  },

  checkReadingComp(id, selectedIdx, correctIdx, explanation) {
    const item = document.getElementById(`cq_item_${id}`);
    const fb = document.getElementById(`cq_fb_${id}`);
    const options = item.querySelectorAll('.quiz-option');

    options.forEach((opt, idx) => {
      opt.disabled = true;
      if (idx === correctIdx) {
        opt.classList.add('selected-correct');
      } else if (idx === selectedIdx && selectedIdx !== correctIdx) {
        opt.classList.add('selected-wrong');
      }
    });

    fb.classList.add('show');
    if (selectedIdx === correctIdx) {
      fb.style.background = 'var(--success-light)';
      fb.style.color = 'var(--success)';
      fb.innerHTML = `✅ <strong>Correct!</strong> ${explanation}`;
    } else {
      fb.style.background = 'var(--danger-light)';
      fb.style.color = 'var(--danger)';
      fb.innerHTML = `❌ <strong>Not quite.</strong> ${explanation}`;
    }
  },

  /* ==========================================================================
     SECTION 12: FLUENCY CHALLENGE & TIMER / VOICE RECORDER
     ========================================================================== */
  renderFluencySection() {
    const container = document.getElementById('fluencyChallengesContainer');
    if (!container) return;

    container.innerHTML = SPEAKING_DATA.fluencyChallenges.map(fc => `
      <div class="speaking-card" style="margin-bottom: 1.5rem;">
        <div class="speaking-card-header">
          <span class="speaking-format-badge badge-convince">${fc.title}</span>
          <span class="speaking-card-num">⏱️ ${fc.time}</span>
        </div>
        <div class="speaking-question">${fc.topic}</div>
        
        <div class="speaking-target-words">
          <div class="target-words-label">🎯 Target Vocabulary Required:</div>
          <div class="target-chips-wrap">
            ${fc.targetVocab.map(w => `<span class="target-chip">${w}</span>`).join('')}
          </div>
        </div>

        <div style="background: var(--bg-subtle); padding: 0.75rem 1rem; border-radius: var(--radius-md); margin-bottom: 0.85rem; font-size: 0.84rem;">
          <strong style="color: var(--secondary);">⚙️ Required Grammar:</strong> ${fc.requiredGrammar}
        </div>

        <div class="answer-frame-box">
          <div class="answer-frame-label">📋 5-Step Answer Framework:</div>
          <ul style="padding-left: 1.25rem; font-size: 0.86rem; display: flex; flex-direction: column; gap: 0.25rem;">
            ${fc.structure.map(st => `<li>${st}</li>`).join('')}
          </ul>
        </div>

        <div style="margin-top: 0.5rem; background: var(--bg-card); border: 1px dashed var(--border-color); padding: 0.75rem; border-radius: var(--radius-md);">
          <div style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.35rem;">Self-Check Checklist:</div>
          <div style="display: flex; flex-direction: column; gap: 0.3rem;">
            ${fc.selfCheck.map(sc => `
              <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.82rem; cursor: pointer;">
                <input type="checkbox"> <span>${sc}</span>
              </label>
            `).join('')}
          </div>
        </div>

        <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
          <button class="btn btn-primary btn-sm" onclick="App.setTimerDuration(90); App.startTimer();">⏱️ Start 90s Speech Timer</button>
          <button class="btn btn-outline btn-sm" onclick="App.setTimerDuration(60); App.startTimer();">⏱️ Start 60s Fast Timer</button>
        </div>
      </div>
    `).join('');
  },

  setTimerDuration(seconds) {
    this.state.timerSeconds = seconds;
    this.updateTimerDisplay();
  },

  updateTimerDisplay() {
    const mins = Math.floor(this.state.timerSeconds / 60);
    const secs = this.state.timerSeconds % 60;
    const display = document.getElementById('speechTimerDisplay');
    if (display) {
      display.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  },

  startTimer() {
    if (this.state.isTimerRunning) return;
    this.state.isTimerRunning = true;
    this.state.timerInterval = setInterval(() => {
      if (this.state.timerSeconds > 0) {
        this.state.timerSeconds--;
        this.updateTimerDisplay();
      } else {
        this.stopTimer();
        this.speak("Time is up! Great speaking challenge!");
        alert("⏱️ Time is up! Fantastic job completing the speech challenge!");
      }
    }, 1000);
  },

  stopTimer() {
    clearInterval(this.state.timerInterval);
    this.state.isTimerRunning = false;
  },

  resetTimer() {
    this.stopTimer();
    this.state.timerSeconds = 90;
    this.updateTimerDisplay();
  },

  /* ==========================================================================
     SECTION 13: TURKISH -> ENGLISH WATCH
     ========================================================================== */
  renderTurkishWatchSection() {
    const container = document.getElementById('turkishWatchContainer');
    if (!container) return;

    container.innerHTML = GRAMMAR_DATA.turkishWatch20.map(tw => `
      <div class="mistake-card">
        <div style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--turkish-flag); margin-bottom: 0.5rem;">
          ⚠️ ${tw.category}
        </div>
        <div class="mistake-comparison">
          <div class="wrong-box">${tw.wrong}</div>
          <div class="correct-box">${tw.correct}</div>
        </div>
        <div class="mistake-reason">
          <strong>Why this happens:</strong> ${tw.explanation}
        </div>
        <div class="mistake-turkish-interference">
          <span>🇹🇷</span> <strong>Turkish L1 Interference:</strong> ${tw.turkishInterference}
        </div>
        <div style="background: var(--bg-subtle); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.84rem; color: var(--text-main); border-left: 2px solid var(--success);">
          <strong>🎯 Extra Practice Drill:</strong> “${tw.practiceSentence}”
        </div>
      </div>
    `).join('');
  },

  /* ==========================================================================
     SECTION 14: FINAL SPEAKING PROJECT
     ========================================================================== */
  renderFinalProjectSection() {
    const container = document.getElementById('finalProjectContainer');
    if (!container) return;

    const data = PROJECT_AND_HW_DATA.finalProject;
    container.innerHTML = `
      <div style="background: var(--bg-subtle); padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.2rem; color: var(--primary); margin-bottom: 0.4rem;">🎯 Project Task Prompt:</h4>
        <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-main);">${data.prompt}</p>
        <div style="display: flex; gap: 1rem; margin-top: 1rem; flex-wrap: wrap;">
          <span class="tag-badge" style="background: var(--primary); color: white;">⏱️ Target Time: ${data.duration}</span>
          <span class="tag-badge" style="background: var(--success); color: white;">📚 Min Vocab: ${data.minVocabCount} Target Items</span>
          <span class="tag-badge" style="background: var(--accent); color: #111;">⚙️ Min Grammar: ${data.minGrammarStructures} Structures</span>
        </div>
      </div>

      <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--text-main); margin-bottom: 1rem;">🏛️ 5 Pillars of Your Life Plan:</h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
        ${data.pillars.map(p => `
          <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 1.25rem; border-radius: var(--radius-md);">
            <div style="font-weight: 800; color: var(--primary); margin-bottom: 0.35rem;">${p.title}</div>
            <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 0.75rem;">${p.description}</p>
            <div style="font-size: 0.78rem; font-weight: 600; color: var(--secondary);">
              Suggested Vocab: ${p.suggestedVocab.join(', ')}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="answer-frame-box" style="margin-bottom: 1.5rem;">
        <div class="answer-frame-label">🗣️ Useful Sentence Starters:</div>
        <ul style="padding-left: 1.25rem; font-size: 0.88rem; display: flex; flex-direction: column; gap: 0.4rem;">
          ${data.sentenceStarters.map(ss => `<li>${ss}</li>`).join('')}
        </ul>
      </div>

      <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 1.25rem; border-radius: var(--radius-lg); margin-bottom: 1.5rem;">
        <h4 style="font-size: 1rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.75rem;">👨‍🏫 Teacher Follow-Up Questions (Spontaneous Q&A):</h4>
        <ul style="padding-left: 1.25rem; font-size: 0.9rem; color: var(--text-main); display: flex; flex-direction: column; gap: 0.4rem;">
          ${data.teacherFollowUpQuestions.map(tf => `<li>${tf}</li>`).join('')}
        </ul>
      </div>

      <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 1.25rem; border-radius: var(--radius-lg);">
        <h4 style="font-size: 1rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.75rem;">📊 Assessment Rubric & Criteria:</h4>
        <div style="display: flex; flex-direction: column; gap: 0.6rem;">
          ${data.assessmentRubric.map(ar => `
            <div style="background: var(--bg-subtle); padding: 0.75rem 1rem; border-radius: var(--radius-md); font-size: 0.86rem;">
              <strong style="color: var(--primary);">${ar.criterion}:</strong> ${ar.description}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  /* ==========================================================================
     SECTION 15: HOMEWORK ENRICHMENT MENU
     ========================================================================== */
  renderHomeworkSection() {
    const container = document.getElementById('homeworkMenuContainer');
    if (!container) return;

    container.innerHTML = PROJECT_AND_HW_DATA.homeworkMenu.map(hw => {
      const isSelected = this.state.selectedHw.includes(hw.id);
      return `
        <div class="speaking-card" style="cursor: pointer; border-color: ${isSelected ? 'var(--primary)' : 'var(--border-color)'}; background: ${isSelected ? 'var(--primary-light)' : 'var(--bg-card)'}" onclick="App.toggleHomeworkSelection('${hw.id}')">
          <div class="speaking-card-header">
            <span class="speaking-format-badge ${hw.categoryBadge}">${hw.category}</span>
            <span class="speaking-card-num">⏱️ ${hw.time}</span>
          </div>
          <div class="speaking-question" style="font-size: 1.1rem;">${hw.title}</div>
          <p style="font-size: 0.88rem; color: var(--text-main); line-height: 1.5; margin-bottom: 0.75rem;">${hw.instructions}</p>
          <div style="font-size: 0.82rem; color: var(--text-muted); background: var(--bg-card); padding: 0.4rem 0.65rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
            📁 <strong>Deliverable:</strong> ${hw.deliverable}
          </div>
          <div style="margin-top: 0.85rem; font-size: 0.82rem; font-weight: 700; color: ${isSelected ? 'var(--primary)' : 'var(--text-muted)'}; display: flex; align-items: center; gap: 0.4rem;">
            <span>${isSelected ? '☑️ Selected for My Homework Plan' : '☐ Click to Select this Task'}</span>
          </div>
        </div>
      `;
    }).join('');

    const countSpan = document.getElementById('selectedHwCount');
    if (countSpan) {
      countSpan.textContent = `${this.state.selectedHw.length} Tasks Selected`;
    }
  },

  toggleHomeworkSelection(id) {
    const idx = this.state.selectedHw.indexOf(id);
    if (idx > -1) {
      this.state.selectedHw.splice(idx, 1);
    } else {
      this.state.selectedHw.push(id);
    }
    localStorage.setItem('esl_selected_hw', JSON.stringify(this.state.selectedHw));
    this.renderHomeworkSection();
  },

  printSelectedHomework() {
    const selectedItems = PROJECT_AND_HW_DATA.homeworkMenu.filter(h => this.state.selectedHw.includes(h.id));
    if (!selectedItems.length) {
      alert("Please select at least one homework task first!");
      return;
    }

    const printWin = window.open('', '_blank');
    printWin.document.write(`
      <html>
        <head>
          <title>My Customized ESL Homework Assignment</title>
          <style>
            body { font-family: sans-serif; padding: 2rem; color: #111; line-height: 1.6; }
            h1 { color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 0.5rem; }
            .hw-card { border: 1px solid #ccc; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; }
            .meta { font-size: 0.85rem; color: #666; margin-bottom: 0.5rem; }
          </style>
        </head>
        <body>
          <h1>My Customized ESL Homework Assignment</h1>
          <p>Student Name: _______________________ | Date: _________________</p>
          <p>Target CEFR: A2+/B1 -> B1+/B2 | Selected Tasks: ${selectedItems.length}</p>
          <hr style="margin: 1rem 0;">
          ${selectedItems.map(item => `
            <div class="hw-card">
              <h3>${item.title} (${item.category})</h3>
              <div class="meta">⏱️ Estimated Time: ${item.time}</div>
              <p>${item.instructions}</p>
              <p><strong>Deliverable:</strong> ${item.deliverable}</p>
            </div>
          `).join('')}
          <script>window.print();</script>
        </body>
      </html>
    `);
    printWin.document.close();
  },

  /* ==========================================================================
     SECTION 16: B1+ / B2 UPGRADE SECTION
     ========================================================================== */
  renderB1B2Upgrades() {
    const container = document.getElementById('upgradesContainer');
    if (!container) return;

    container.innerHTML = SPEAKING_DATA.b1b2Upgrades.map(u => `
      <div class="upgrade-card">
        <div class="upgrade-topic-label">📈 ${u.topic}</div>
        <div class="upgrade-levels-flow">
          <div class="upgrade-level-row row-a2">
            <span class="level-tag a2">A2 / B1</span>
            <div class="upgrade-text">“${u.a2Text}”</div>
          </div>
          <div class="upgrade-level-row row-b1">
            <span class="level-tag b1">B1+</span>
            <div class="upgrade-text">“${u.b1Text}”</div>
          </div>
          <div class="upgrade-level-row row-b2">
            <span class="level-tag b2">B2</span>
            <div class="upgrade-text">“${u.b2Text}”</div>
          </div>
        </div>
        <div style="margin-top: 0.85rem; background: var(--bg-subtle); padding: 0.6rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.82rem; color: var(--text-muted);">
          <strong style="color: var(--primary);">💡 Why this upgrade works:</strong> ${u.whyBetter}
        </div>
      </div>
    `).join('');
  },

  /* ==========================================================================
     EVENT BINDING
     ========================================================================== */
  bindEvents() {
    document.getElementById('themeToggleBtn')?.addEventListener('click', () => this.toggleTheme());
    document.getElementById('teacherNotesToggleBtn')?.addEventListener('click', () => this.toggleTeacherNotes());
    document.getElementById('printPageBtn')?.addEventListener('click', () => window.print());
    document.getElementById('sidebarToggleBtn')?.addEventListener('click', () => {
      document.querySelector('.sidebar')?.classList.toggle('open');
    });

    // Close modal on click outside
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) this.closeModal();
      });
    });
  }
};
