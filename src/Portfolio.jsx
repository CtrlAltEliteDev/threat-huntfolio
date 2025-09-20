import { useEffect, useState } from "react";
import "./Portfolio.css";
import {
  contact,
  experience,
  certifications,
  skills,
  education,
  achievements,
  tools,
  incidents,
  scriptingLanguages,
  spokenLanguages
} from "./portfolioData";
import {
  Mail,
  MapPin,
  Shield,
  Code2,
  Award,
  GraduationCap,
  Briefcase,
  ExternalLink,
  Sun,
  Moon,
  Zap,
  Database,
  Network,
  FileSearch,
  Workflow,
  Globe,
  Monitor,
  Lock,
  Activity,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedIncidents, setExpandedIncidents] = useState({});

  const toggleIncidentDetails = (incidentTitle) => {
    setExpandedIncidents(prev => ({
      ...prev,
      [incidentTitle]: !prev[incidentTitle]
    }));
  };

  useEffect(() => {
    // Ensure Tailwind dark mode works: requires tailwind.config.js -> darkMode: 'class'
    const stored = localStorage.getItem('theme');
    const initialDark = stored ? stored === 'dark' : true; // Default to dark theme
    document.documentElement.classList.toggle('dark', initialDark);
    document.body.classList.toggle('dark', initialDark); // extra safety for some setups
    setIsDark(initialDark);

    // Simulate loading for 3.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  // Debug incidents data
  useEffect(() => {
    console.log('Incidents data:', incidents);
    console.log('Incidents length:', incidents?.length);
  }, []);



  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    document.body.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  // Slider settings for infinite carousel
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
    centerMode: false,
    centerPadding: "0px",
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        }
      }
    ]
  };

  // PDF download function
  const generateResumePDF = () => {
    const link = document.createElement('a');
    link.href = '/Pranav Kalidas Resume v1.3.pdf';
    link.download = 'Pranav_Kalidas_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="portfolio" data-theme={isDark ? 'dark' : 'light'}>
      {isLoading ? (
        <div className="loader-container">
          <div className="loader-shield">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className="loader-icon">
              <path d="M16 2L28 8V16C28 22.627 22.627 28 16 28S4 22.627 4 16V8L16 2Z" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5"/>
              <rect x="12" y="14" width="8" height="8" rx="1" fill="#1f2937"/>
              <path d="M14 14V11C14 9.343 15.343 8 17 8S20 9.343 20 11V14" stroke="#1f2937" strokeWidth="1.5" fill="none"/>
              <circle cx="16" cy="18" r="1" fill="#f59e0b"/>
              <path d="M8 12L12 16L16 12" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 12L20 16L24 12" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="loader-text">
            <h1 className="loader-title">Engaging Threat Detection Protocol…</h1>
            <div className="loader-subtitle">Evaluating your IP, cookies, and sense of humor.</div>
          </div>
          <div className="loader-progress">
            <div className="loader-bar"></div>
          </div>
        </div>
      ) : (
        <>
          {/* Cyberpunk Effects for Dark Theme */}
          {isDark && (
            <>
              <div className="scan-lines"></div>
              <div className="cyber-grid"></div>
            </>
          )}

          {/* Background */}
          <div className="bg" style={{backgroundColor: isDark ? '#0a0a0a' : '#fefce8'}}>
            <div className="bg-grad" />
            <div className="bg-grid" />
            <div className="glow-a" />
            <div className="glow-b" />
          </div>

          {/* Header */}
          <header className="container header">
<div className="header-flex header-flex-container">
  <div className="avatar">
    <img
      alt="Pranav Kalidas"
      className="avatar-image"
      src="/SOCAnalyst.jpeg"
    />
  </div>
  <div className="header-content">
    <div className="header-left header-left-content">
      <div>
        <h1 className="main-title">
          Pranav Kalidas <span className="accent">✦</span>
        </h1>
      </div>
      <div>
        <p className="row muted2 security-analyst-text">
          <Shield size={16} /> Security Analyst
        </p>
      </div>
      <div>
        <p className="row muted location-text">
          <MapPin size={16} /> Kozhikode, Kerala — 673522
        </p>
      </div>
    </div>
    <div className="links links-container">
      <button
        className="pill theme-toggle-pill theme-toggle-hidden"
        aria-label="Toggle theme"
        onClick={toggleTheme}
      >
        {isDark ? <Sun size={16} /> : <Moon size={16} />}{" "}
        {isDark ? "Light mode" : "Dark mode"}
      </button>
      <a href="mailto:kalidas.pranav@gmail.com" className="pill">
        <Mail size={16} /> <span className="contact-text">kalidas.pranav@gmail.com</span>
      </a>
      <a
        href="https://linkedin.com/in/pranav-kalidas"
        target="_blank"
        rel="noreferrer"
        className="pill"
      >
        <Globe size={16} /> <span className="contact-text">linkedin.com/in/pranav-kalidas {" "}
        <ExternalLink size={16} /></span>
      </a>
      <button className="btn-primary row" onClick={generateResumePDF}>
        <Award size={16} />
        <span className="terminal-cursor contact-text">Download Resume (PDF)</span>
      </button>
    </div>
  </div>
</div>
          </header>

          {/* Summary */}
          <main className="container main-container">
            <section className={`card animate-entrance professional-summary-section ${isDark ? 'terminal-window' : ''}`}>
              <h2 className="row section-title">
                <Shield size={20} className="accent"/> 
                {isDark ? (
                  <span className="terminal-cursor">Professional Summary</span>
                ) : (
                  'Professional Summary'
                )}
              </h2>
              <p className="professional-summary-text">
                {isDark ? (
                  <>
                    <span className="terminal-prompt">root@security:~$ </span>Security Analyst with 1.8 years of hands-on SOC experience: monitoring, triaging, and responding to alerts. Skilled in threat detection, incident response, and remediation to safeguard enterprise infrastructure. Calm under pressure, collaborative with L2/L3, and consistently on-time against SLAs.<span className="terminal-cursor"></span> 
                  </>
                ) : (
                  'Security Analyst with 1.8 years of hands-on SOC experience: monitoring, triaging, and responding to alerts. Skilled in threat detection, incident response, and remediation to safeguard enterprise infrastructure. Calm under pressure, collaborative with L2/L3, and consistently on-time against SLAs.'
                )}
              </p>
            </section>

            {/* Experience & Skills */}
            <section className="grid-main mt-8">
              <div className="card animate-entrance experience-section">
                <h2 className="row section-title"><Briefcase size={20} className="accent"/> Experience</h2>
                <div className="space-y mt-6">
                  {[...experience].map((exp, idx) => (
                    <div key={idx} className="card experience-card animate-entrance experience-card-item">
                      <div className="row experience-header">
                        <div className="experience-company-info">
                          <div className="experience-logo-container">
                            <img 
                              src={exp.logo} 
                              alt={`${exp.company} logo`} 
                              className="experience-logo"
                            />
                          </div>
                          <div className="experience-text-info">
                            <div className="role-title">{exp.role}</div>
                            <div className="muted2">{exp.company}</div>
                            <div className="muted location-text">{exp.location}</div>
                          </div>
                        </div>
                        <div className="chip">{exp.start} – {exp.end}</div>
                      </div>
                      <ul className="experience-bullets">
                        {exp.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="skills-container animate-entrance skills-section">
                <h2 className="row section-title"><Code2 size={20} className="accent"/> Skills</h2>
                
                {/* Desktop Skills Layout */}
                <div className="skills-desktop">
                  <div className="skills-group">
                    <div className="muted2 skills-group-title">Core Skills</div>
                    <div className="skills-list">
                      {skills.map((s) => (
                        <span 
                          key={s} 
                          className="skill skill-item" 
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="skills-group">
                    <div className="muted2 skills-group-title">Scripting Languages</div>
                    <div className="skills-list">
                      {scriptingLanguages.map((lang) => (
                        <span
                          key={lang}
                          className="skill skill-item"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="skills-group">
                    <div className="muted2 skills-group-title">Spoken Languages</div>
                    <div className="skills-list">
                      {spokenLanguages.map((lang) => (
                        <span
                          key={lang}
                          className="skill skill-item"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Skills Cards */}
                <div className="skills-mobile">
                  <div className="skill-card animate-entrance" style={{animationDelay: '0.1s'}}>
                    <div className="skill-card-header">
                      <Code2 size={20} className="accent" />
                      <h3 className="skill-card-title">Core Skills</h3>
                    </div>
                    <div className="skill-card-content">
                      {skills.map((s) => (
                        <span key={s} className="skill skill-item">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="skill-card animate-entrance" style={{animationDelay: '0.2s'}}>
                    <div className="skill-card-header">
                      <Code2 size={20} className="accent" />
                      <h3 className="skill-card-title">Scripting Languages</h3>
                    </div>
                    <div className="skill-card-content">
                      {scriptingLanguages.map((lang) => (
                        <span key={lang} className="skill skill-item">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="skill-card animate-entrance" style={{animationDelay: '0.3s'}}>
                    <div className="skill-card-header">
                      <Code2 size={20} className="accent" />
                      <h3 className="skill-card-title">Spoken Languages</h3>
                    </div>
                    <div className="skill-card-content">
                      {spokenLanguages.map((lang) => (
                        <span key={lang} className="skill skill-item">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications Badge Wall */}
            <section className="card mt-8 animate-entrance certifications-section">
              <h2 className="row section-title"><Award size={20} className="accent"/> Certifications & Badge Wall</h2>
              <div className="grid-tiles mt-6">
                {certifications.map((c, i) => (
                  <a 
                    key={i} 
                    href={c.url.startsWith('http') ? c.url : `https://${c.url}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="card animate-entrance certification-card-clickable certification-card"
                  >
                    <div className="certification-image-container">
                      <img 
                        src={c.image} 
                        alt={c.org} 
                        className="certification-image"
                      />
                    </div>
                    <div className="certification-content">
                      <div className="certification-name">{c.name}</div>
                      <div className="muted certification-meta">{c.org} • {c.date}</div>
                    </div>
                    <div className="certification-external-link">
                      <ExternalLink size={16} className="accent"/>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Tools & Technologies */}
            <section className="card mt-8 animate-entrance tools-section">
              <h2 className="row tools-section-title">
                <Code2 size={20} className="accent"/>
                {isDark ? (
                  <span className="terminal-cursor">Tools & Technologies</span>
                ) : (
                  'Tools & Technologies'
                )}
              </h2>

              <div className="tools-carousel-container">
                <Slider {...sliderSettings}>
                  {tools.map((t, i) => {
                    const IconComponent = {
                      Shield: Shield,
                      Database: Database,
                      Network: Network,
                      FileSearch: FileSearch,
                      Workflow: Workflow,
                      Globe: Globe,
                      Monitor: Monitor,
                      Lock: Lock,
                      Activity: Activity
                    }[t.icon] || Code2;

                    return (
                      <div key={i} className="tool-card-wrapper">
                        <div
                          className="tool-card animate-entrance tool-card-item"
                          style={{ '--tool-color': t.color }}
                        >
                          <div className="tool-header">
                            <div className="tool-icon">
                              <IconComponent size={20} />
                            </div>
                            <div className="tool-category">{t.category}</div>
                          </div>
                          <div className="tool-content">
                            <h3 className="tool-name">{t.name}</h3>
                            <p className="tool-description">{t.desc}</p>
                          </div>
                          <div className="tool-footer">
                            <div className="tool-accent-line"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </section>

            {/* Threat Timeline */}
            <section className="card mt-8 animate-entrance timeline-section">
              <h2 className="row section-title">
                <Shield size={20} className="accent"/> 
                Security Incident & Response Log
              </h2>
              <div className="timeline mt-6">
                <div className="space-y">
                  {incidents && incidents.length > 0 ? incidents.map((it) => (
                    <div key={it.title} className="timeline-item animate-entrance timeline-item-content">
                      <span className="dot" />
                      <div className="row timeline-header">
                        <div className="timeline-title">{it.title}</div>
                        <span className={`severity-chip severity-${it.severity.toLowerCase()}`}>
                          {it.severity}
                        </span>
                      </div>
                      <div className="row timeline-tags">
                        {it.tags.map(t => <span key={t} className="chip">{t}</span>)}
                      </div>
                      <p className="muted2 timeline-notes">{it.notes}</p>
                      
                      {/* Show More/Less Button */}
                      <button 
                        onClick={() => toggleIncidentDetails(it.title)}
                        className="show-more-button"
                        onMouseOver={(e) => {
                          e.target.style.color = 'var(--amber-strong)';
                          e.target.style.textDecorationThickness = '2px';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.color = 'var(--amber)';
                          e.target.style.textDecorationThickness = '1px';
                        }}
                      >
                        {expandedIncidents[it.title] ? (
                          <>
                            <ChevronUp size={14} />
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown size={14} />
                            Show More
                          </>
                        )}
                      </button>

                      {/* Collapsible Details */}
                      <div 
                        className={`incident-details-container ${expandedIncidents[it.title] ? 'expanded' : ''}`}
                      >
                        {/* Threat Analysis Section */}
                        <div className="incident-details">
                          <div className="detail-header">
                            <Shield size={14} className="accent"/>
                            <span>What Happened:</span>
                          </div>
                          <p className="detail-text">{it.whatHappened}</p>
                        </div>

                        {/* Response Actions Section */}
                        <div className="incident-details">
                          <div className="detail-header">
                            <Zap size={14} className="accent"/>
                            <span>How I responded:</span>
                          </div>
                          <p className="detail-text">{it.howIResponded}</p>
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="debug-error">
                      No incidents data available - Debug: incidents = {JSON.stringify(incidents)}
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Education & Achievements - Modern Layout */}
            <section className="mt-8">
              <div className="education-achievements-grid education-achievements-container">
                {/* Education Section */}
                <div className="education-section animate-entrance">
                  <div className="section-header">
                    <div className="section-icon education-icon-large">
                      <GraduationCap size={24} className="accent"/>
                    </div>
                    <h2 className="section-title">Education</h2>
                  </div>
                  
                  <div className="education-card-modern">
                    <div className="education-main">
                      <h3 className="degree-title-modern">{education.degree}</h3>
                      <div className="university-badge">{education.uni}</div>
                    </div>
                    
                    <div className="education-details">
                      <p className="focus-area">{education.focus}</p>
                      <div className="education-timeline">
                        <div className="timeline-content">
                          <span className="timeline-period">{education.start} – {education.end}</span>
                          <div className="cgpa-highlight">{education.cgpa}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements Section */}
                <div className="achievements-section animate-entrance">
                  <div className="section-header">
                    <div className="section-icon achievements-icon-large">
                      <Award size={24} className="accent"/>
                    </div>
                    <h2 className="section-title">Achievements</h2>
                  </div>
                  
                  <div className="achievements-grid-modern">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="achievement-card animate-entrance" style={{animationDelay: `${1.3 + (index * 0.1)}s`}}>
                        <div className="achievement-number">{String(index + 1).padStart(2, '0')}</div>
                        <div className="achievement-content">
                          <div className="achievement-text-modern">{achievement}</div>
                        </div>
                        <div className="achievement-badge">
                          <Award size={16} className="accent"/>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className={`card mt-8 center animate-entrance cta-section ${isDark ? 'data-stream' : ''}`}>
              <h2 className="section-title">
                "Let's connect"
              </h2>
              <p className="muted2 cta-text">
                {isDark ? (
                  <>
                    <span className="terminal-prompt">root@security:~$ </span>Open to security analyst roles, SOC operations, and threat detection projects.<span className="terminal-cursor"></span>
                  </>
                ) : (
                  'Open to security analyst roles, SOC operations, and threat detection projects.'
                )}
              </p>
              <div className="row cta-buttons">
                <a href={`mailto:${contact.email}`} className="btn-primary row">
                  <Mail size={16}/> 
                     Email
                </a>
                <a href={contact.linkedin} target="_blank" rel="noreferrer" className="btn-primary row">
                  <Globe size={16}/>
                    LinkedIn
                </a>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="container center">
            © {new Date().getFullYear()} Pranav Kalidas. All rights reserved.
          </footer>
        </>
      )}
    </div>
  );
}
