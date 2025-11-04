import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faDatabase, faMicrochip, faCode, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// --- Tech stacks ---
const aiBigDataStack = [
    "Python", "Machine Learning", "Deep Learning", "PyTorch", "Pandas",
    "Scikit-learn", "NLTK", "TextBlob", "Matplotlib", "Hadoop", "Kafka"
];

const fullStackStack = [
    "React.js", "Flask", "Spring Boot", "JavaScript", "HTML5", "CSS3",
    "PostgreSQL", "MongoDB", "Axios", "Node.js"
];

const bigDataStack = [
    "Docker", "Git", "AWS", "Snowflake", "Linux", "Kafka", "Hadoop"
];

const genAIStack = [
    "OpenAI", "LangChain", "LLMs", "Prompt Engineering"
];

const cyberStack = [
    "Kali Linux", "Network Security", "Cisco", "PenTesting"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">

                    {/* --- AI & Big Data Engineer --- */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faBrain} size="3x" />
                        <h3>AI & Big Data Engineer</h3>
                        <p>
                            Expertise in designing and implementing intelligent solutions leveraging Machine Learning,
                            Deep Learning, and Big Data to automate processes and extract actionable insights.
                            Applied in projects like fraud detection (Barid Bank) and sentiment analysis (Hespress & Twitter).
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {aiBigDataStack.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* --- Full Stack Developer --- */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faCode} size="3x" />
                        <h3>Full Stack Developer</h3>
                        <p>
                            Skilled in building complete web applications from frontend to backend.
                            Experience gained through developing a recruitment management system at ORMVA Souss Massa
                            and working with REST APIs and modern UI frameworks.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {fullStackStack.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* --- Big Data & Scalable Systems --- */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faDatabase} size="3x" />
                        <h3>Big Data & Scalable Systems</h3>
                        <p>
                            Experienced in distributed computing and large-scale data management.
                            Developed real-time data pipelines and AI-powered fraud detection at Barid Bank using Kafka and Hadoop.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {bigDataStack.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* --- Generative AI & LLMs --- */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faMicrochip} size="3x" />
                        <h3>Generative AI & LLMs</h3>
                        <p>
                            Building next-generation AI systems using LLMs and prompt engineering.
                            Experience with OpenAI and LangChain to develop intelligent, automated assistants.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {genAIStack.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* --- Cybersecurity Enthusiast --- */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faShieldAlt} size="3x" />
                        <h3>Cybersecurity & Networks</h3>
                        <p>
                            Knowledge of network security principles and penetration testing.
                            Familiar with Cisco systems, Kali Linux, and vulnerability analysis.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {cyberStack.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;
