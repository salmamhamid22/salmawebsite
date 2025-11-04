import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career & Education History</h1>

        {/* ---------- EDUCATION SECTION ---------- */}
        <h2 className="timeline-section-title">🎓 Education</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2025 - now"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">MSc Pro in AI & Big Data</h3>
            <h4 className="vertical-timeline-element-subtitle">Epitech Technology – Toulouse, France</h4>
            <p>
              Advanced program focused on artificial intelligence, data science, and software engineering.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2020 - 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Engineering Degree (AI & Big Data)</h3>
            <h4 className="vertical-timeline-element-subtitle">Université Polytechnique d'Agadir (Universiapolis), Morocco</h4>
            <p>
              5-year engineering cycle including:
              <ul>
                <li>Preparatory Classes (Engineering fundamentals)</li>
                <li>Computer Science specialization</li>
                <li>AI & Big Data final year</li>
              </ul>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        {/* ---------- EXPERIENCE SECTION ---------- */}
        <h2 className="timeline-section-title">💼 Professional Experience</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 (6 months)"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Intern – Barid Bank</h3>
            <h4 className="vertical-timeline-element-subtitle">Rabat, Morocco</h4>
            <p>
              Developed AI-based applications for real-time fraud detection and financial data optimization.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 (4months)"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Intern – ORMVA Souss Massa</h3>
            <h4 className="vertical-timeline-element-subtitle">Agadir, Morocco</h4>
            <p>
              Designed and developed a recruitment management system for HR to streamline hiring processes.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 (2 months)"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Intern – SSAM Partners</h3>
            <h4 className="vertical-timeline-element-subtitle">Agadir, Morocco</h4>
            <p>
              Contributed to AI and data analysis projects focusing on machine learning and process optimization.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
