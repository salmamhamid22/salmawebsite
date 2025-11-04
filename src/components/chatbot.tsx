import React, { useState, useRef, useEffect } from 'react';
import '../assets/styles/chatbot.scss';

type Lang = 'en' | 'fr';

const SCRIPTS: Record<Lang, Record<string, string>> = {
  en: {
    intro: "Hi! I'm SalmaBot, the portfolio assistant of Salma Mhamid. Ask me anything!",
    about: `
Salma Mhamid
AI & Big Data Engineer

Expertise:
AI & Big Data Engineer - Expertise in designing and implementing intelligent solutions leveraging Machine Learning, Deep Learning, and Big Data to automate processes and extract actionable insights. Applied in projects like fraud detection (Barid Bank) and sentiment analysis (Hespress & Twitter).

Full Stack Developer - Skilled in building complete web applications from frontend to backend. Experience gained through developing a recruitment management system at ORMVA Souss Massa and working with REST APIs and modern UI frameworks.

Big Data & Scalable Systems - Experienced in distributed computing and large-scale data management. Developed real-time data pipelines and AI-powered fraud detection at Barid Bank using Kafka and Hadoop.

Generative AI & LLMs - Building next-generation AI systems using LLMs and prompt engineering. Experience with OpenAI and LangChain to develop intelligent, automated assistants.

Cybersecurity & Networks - Knowledge of network security principles and penetration testing. Familiar with Cisco systems, Kali Linux, and vulnerability analysis.
`,
    skills: `
Tech Stack:
Python, Machine Learning, Deep Learning, PyTorch, Pandas, Scikit-learn, NLTK, TextBlob, Matplotlib
React.js, Flask, Spring Boot, JavaScript, HTML5, CSS3, PostgreSQL, MongoDB, Axios, Node.js
Docker, Git, AWS, Snowflake, Linux, Kafka, Hadoop
OpenAI, LangChain, LLMs, Prompt Engineering
Kali Linux, Network Security, Cisco, PenTesting
Languages: French, English, Arabic
`,
    projects: `
Featured Projects:
- ORMVA Recruitment App: React + Spring Boot
- Brain Tumor Detection: Deep Learning model
- Sentiment Analysis on Twitter: Arabic NLP
- Road Sign Detection: Computer Vision
- Other projects in progress
`,
    experience: `
Professional Experience:
- Intern at Barid Bank, Rabat: AI-based fraud detection & financial data optimization (6 months, 2025)
- Intern at ORMVA Souss Massa, Agadir: Recruitment management system (4 months, 2024)
- Intern at SSAM Partners, Agadir: AI & ML data projects (2 months, 2023)

Education:
- MSc Pro in AI & Big Data, Epitech Technology, Toulouse (2025-now)
- Engineering Degree AI & Big Data, Université Polytechnique d'Agadir (2020-2025)
`,
    contact: "Contact Salma at salmamhamid42@gmail.com. Check her portfolio for CV, GitHub, and LinkedIn."
  },
  fr: {
    intro: "Bonjour ! Je suis SalmaBot, l’assistante virtuelle de Salma Mhamid. Pose-moi une question !",
    about: `
Salma Mhamid
Ingénieure en IA & Big Data

Expertise:
Ingénierie IA & Big Data - Expertise dans la conception et la mise en œuvre de solutions intelligentes utilisant le Machine Learning, Deep Learning et Big Data pour automatiser les processus et extraire des insights. Projets réalisés : détection de fraude (Barid Bank) et analyse de sentiment (Hespress & Twitter).

Développement Full Stack - Compétences en développement complet d'applications web front-end et back-end. Expérience avec ORMVA Souss Massa et les APIs REST.

Big Data & Systèmes Scalables - Gestion de données distribuées et pipelines temps réel. Détection de fraude IA avec Kafka et Hadoop.

IA Générative & LLMs - Développement de systèmes AI de nouvelle génération avec OpenAI et LangChain.

Cybersécurité & Réseaux - Connaissance des principes de sécurité réseau et tests de pénétration. Familiarité avec Cisco et Kali Linux.
`,
    skills: `
Tech Stack:
Python, Machine Learning, Deep Learning, PyTorch, Pandas, Scikit-learn, NLTK, TextBlob, Matplotlib
React.js, Flask, Spring Boot, JavaScript, HTML5, CSS3, PostgreSQL, MongoDB, Axios, Node.js
Docker, Git, AWS, Snowflake, Linux, Kafka, Hadoop
OpenAI, LangChain, LLMs, Prompt Engineering
Kali Linux, Network Security, Cisco, PenTesting
Langues : Français, Anglais, Arabe
`,
    projects: `
Projets phares:
- Application de recrutement ORMVA: React + Spring Boot
- Détection des tumeurs cérébrales: modèle Deep Learning
- Analyse des sentiments Twitter: NLP arabe
- Détection des panneaux routiers: Vision par ordinateur
- Autres projets en attente
`,
    experience: `
Expérience Professionnelle:
- Stagiaire Barid Bank, Rabat: Détection de fraude et optimisation de données financières (6 mois, 2025)
- Stagiaire ORMVA Souss Massa, Agadir: Application de gestion de recrutement (4 mois, 2024)
- Stagiaire SSAM Partners, Agadir: Projets AI & ML (2 mois, 2023)

Formation:
- MSc Pro en IA & Big Data, Epitech Technology, Toulouse (2025-maintenant)
- Diplôme d'Ingénieur IA & Big Data, Université Polytechnique d'Agadir (2020-2025)
`,
    contact: "Contactez Salma : salmamhamid42@gmail.com. Consultez son portfolio pour CV, GitHub et LinkedIn."
  }
};

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>('en');
  const [messages, setMessages] = useState<{ text: string; user?: boolean }[]>([]);
  const [input, setInput] = useState('');
  const msgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (msgRef.current) msgRef.current.scrollTop = msgRef.current.scrollHeight;
  }, [messages]);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = lang === 'fr' ? 'fr-FR' : 'en-US';
      const voices = window.speechSynthesis.getVoices();
      utter.voice = voices.find(v => v.lang.includes(lang) && v.name.toLowerCase().includes('female')) || voices[0];
      window.speechSynthesis.speak(utter);
    }
  };

  const addMessage = (text: string, user = false) => {
    setMessages(prev => [...prev, { text, user }]);
    if (!user) speak(text);
  };

  const handleQuick = (key: string) => addMessage(SCRIPTS[lang][key]);

  const handleSend = () => {
    if (!input.trim()) return;
    const msg = input.trim();
    addMessage(msg, true);
    setInput('');

    const lower = msg.toLowerCase();
    if (lang === 'en') {
      if (lower.includes('about')) addMessage(SCRIPTS.en.about);
      else if (lower.includes('skill')) addMessage(SCRIPTS.en.skills);
      else if (lower.includes('project')) addMessage(SCRIPTS.en.projects);
      else if (lower.includes('experience')) addMessage(SCRIPTS.en.experience);
      else if (lower.includes('contact')) addMessage(SCRIPTS.en.contact);
      else addMessage("I can answer about About, Skills, Projects, Experience, or Contact.");
    } else {
      if (lower.includes('à propos')) addMessage(SCRIPTS.fr.about);
      else if (lower.includes('compétence')) addMessage(SCRIPTS.fr.skills);
      else if (lower.includes('projet')) addMessage(SCRIPTS.fr.projects);
      else if (lower.includes('expérience')) addMessage(SCRIPTS.fr.experience);
      else if (lower.includes('contact')) addMessage(SCRIPTS.fr.contact);
      else addMessage("Je peux répondre sur À propos, Compétences, Projets, Expérience ou Contact.");
    }
  };

  return (
    <>
      <button className="chatbot-button" onClick={() => setOpen(!open)}>🤖</button>
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>SalmaBot 🤖</h3>
            <button className="lang-toggle" onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}>
              {lang === 'en' ? 'FR' : 'EN'}
            </button>
          </div>

          <div ref={msgRef} className="chatbot-messages">
            {messages.length === 0 && <p>{SCRIPTS[lang].intro}</p>}
            {messages.map((m, i) => (
              <p key={i} className={m.user ? 'user-msg' : ''}>{m.text}</p>
            ))}
          </div>

          <div className="chatbot-footer">
            <div className="quick-buttons">
              <button onClick={() => handleQuick('about')}>{lang === 'en' ? 'About' : 'À propos'}</button>
              <button onClick={() => handleQuick('skills')}>{lang === 'en' ? 'Skills' : 'Compétences'}</button>
              <button onClick={() => handleQuick('projects')}>{lang === 'en' ? 'Projects' : 'Projets'}</button>
              <button onClick={() => handleQuick('experience')}>{lang === 'en' ? 'Experience' : 'Expérience'}</button>
              <button onClick={() => handleQuick('contact')}>{lang === 'en' ? 'Contact' : 'Contact'}</button>
            </div>
            <div className="chatbot-input">
              <input
                type="text"
                placeholder={lang === 'en' ? "Type your question..." : "Écris ta question..."}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
              />
              <button onClick={handleSend}>{lang === 'en' ? 'Send' : 'Envoyer'}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
