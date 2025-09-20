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
<div
  className="header-flex"
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexFlow: "row-reverse wrap",
  }}
>
  <div
    className="avatar"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 230,           // Increased size
      height: 230,          // Increased size
      flexShrink: 0,
    }}
  >
    <img
      alt="Pranav Kalidas"
      className="avatar-image"
      src="/SOCAnalyst.jpeg"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "50%",
      }}
    />
  </div>
  <div
    style={{
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      flex: "1 1 0%",
      minWidth: 0,
      flexDirection: "column",
    }}
  >
    <div
      className="header-left"
      style={{
        flex: "1 1 0%",
        textAlign: "left",
        minWidth: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 60px)" }}>
          Pranav Kalidas <span className="accent">✦</span>
        </h1>
      </div>
      <div>
        <p className="row muted2" style={{marginTop: 10, marginBottom: 0 }}>
          <Shield size={16} /> Security Analyst
        </p>
      </div>
      <div>
        <p className="row muted" style={{ marginTop: 6 }}>
          <MapPin size={16} /> Kozhikode, Kerala — 673522
        </p>
      </div>
    </div>
    <div
      className="links"
      style={{
        marginLeft: 0,
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      <button
        className="pill theme-toggle-pill"
        aria-label="Toggle theme"
        style={{ display: "none" }}
        onClick={toggleTheme}
      >
        {isDark ? <Sun size={16} /> : <Moon size={16} />}{" "}
        {isDark ? "Light mode" : "Dark mode"}
      </button>
      <a href="mailto:kalidas.pranav@gmail.com" className="pill">
        <Mail size={16} /> kalidas.pranav@gmail.com
      </a>
      <a
        href="https://linkedin.com/in/pranav-kalidas"
        target="_blank"
        rel="noreferrer"
        className="pill"
      >
        <Globe size={16} /> linkedin.com/in/pranav-kalidas{" "}
        <ExternalLink size={16} />
      </a>
      <button className="btn-primary row" onClick={generateResumePDF}>
        <Award size={16} />
        <span className="terminal-cursor">Download Resume (PDF)</span>
      </button>
    </div>
  </div>
</div>
          </header>

          {/* Summary */}
          <main className="container" style={{paddingBottom: 64}}>
            <section className={`card animate-entrance professional-summary-section ${isDark ? 'terminal-window' : ''}`} style={{animationDelay: '0.1s',paddingTop:'6vh'}}>
              <h2 className="row" style={{fontSize:'clamp(18px,3vw,24px)'}}>
                <Shield size={20} className="accent"/> 
                {isDark ? (
                  <span className="terminal-cursor">Professional Summary</span>
                ) : (
                  'Professional Summary'
                )}
              </h2>
              <p style={{marginTop:12, fontFamily: isDark ? 'Courier New, monospace' : 'inherit'}}>
                {isDark ? (
                  <>
                    <span style={{color: '#00ff00'}}>root@security:~$ </span>Security Analyst with 1.8 years of hands-on SOC experience: monitoring, triaging, and responding to alerts. Skilled in threat detection, incident response, and remediation to safeguard enterprise infrastructure. Calm under pressure, collaborative with L2/L3, and consistently on-time against SLAs.<span className="terminal-cursor"></span> 
                  </>
                ) : (
                  'Security Analyst with 1.8 years of hands-on SOC experience: monitoring, triaging, and responding to alerts. Skilled in threat detection, incident response, and remediation to safeguard enterprise infrastructure. Calm under pressure, collaborative with L2/L3, and consistently on-time against SLAs.'
                )}
              </p>
            </section>

            {/* Experience & Skills */}
            <section className="grid-main mt-8">
              <div className="card animate-entrance" style={{animationDelay: '0.2s'}}>
                <h2 className="row" style={{fontSize:'clamp(18px,3vw,24px)'}}><Briefcase size={20} className="accent"/> Experience</h2>
                <div className="space-y mt-6">
                  {[...experience].map((exp, idx) => (
                    <div key={idx} className="card experience-card animate-entrance" style={{animationDelay: `${0.3 + (idx * 0.1)}s`}}>
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
              <div className="skills-container animate-entrance" style={{animationDelay: '0.4s'}}>
                <h2 className="row" style={{fontSize:'clamp(18px,3vw,24px)'}}><Code2 size={20} className="accent"/> Skills</h2>
                <div className="skills-group" style={{ marginTop: 16 }}>
                  <div className="muted2" style={{ fontWeight: 600, marginBottom: 8 }}>Core Skills</div>
                  <div className="skills-list">
                    {skills.map((s, index) => (
                      <span 
                        key={s} 
                        className="skill" 
                        style={{ '--skill-index': index }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

              <div className="skills-group" style={{ marginTop: 16 }}>
                <div className="muted2" style={{ fontWeight: 600, marginBottom: 8 }}>Scripting Languages</div>
                <div className="skills-list">
                  {scriptingLanguages.map((lang, index) => (
                    <span
                      key={lang}
                      className="skill"
                      style={{ '--skill-index': index }}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skills-group" style={{ marginTop: 16 }}>
                <div className="muted2" style={{ fontWeight: 600, marginBottom: 8 }}>Spoken Languages</div>
                <div className="skills-list">
                  {spokenLanguages.map((lang, index) => (
                    <span
                      key={lang}
                      className="skill"
                      style={{ '--skill-index': index }}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              </div>
            </section>

            {/* Certifications Badge Wall */}
            <section className="card mt-8 animate-entrance" style={{animationDelay: '0.5s'}}>
              <h2 className="row" style={{fontSize:'clamp(18px,3vw,24px)'}}><Award size={20} className="accent"/> Certifications & Badge Wall</h2>
              <div className="grid-tiles mt-6">
                {certifications.map((c, i) => (
                  <a 
                    key={i} 
                    href={c.url.startsWith('http') ? c.url : `https://${c.url}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="card animate-entrance certification-card-clickable" 
                    style={{display:'flex', alignItems:'center', gap:12, animationDelay: `${0.6 + (i * 0.1)}s`, textDecoration:'none', color:'inherit'}}
                  >
                    <div className="certification-image-container" style={{height:42, width:40, borderRadius:999, display:'grid', placeItems:'center', overflow:'hidden', cursor:'pointer'}}>
                      <img 
                        src={c.image} 
                        alt={c.org} 
                        style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:'50%'}}
                      />
                    </div>
                    <div style={{textAlign:'left', flex:1}}>
                      <div className="certification-name" style={{fontWeight:600, cursor:'pointer'}}>{c.name}</div>
                      <div className="muted" style={{fontSize:12}}>{c.org} • {c.date}</div>
                    </div>
                    <div className="certification-external-link">
                      <ExternalLink size={16} className="accent"/>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Tools & Technologies */}
            <section className="card mt-8 animate-entrance tools-section" style={{animationDelay: '0.7s'}}>
              <h2 className="row" style={{fontSize:'clamp(18px,3vw,24px)', marginBottom: '24px'}}>
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
                          className="tool-card animate-entrance"
                          style={{
                            animationDelay: `${0.8 + (i * 0.1)}s`,
                            '--tool-color': t.color
                          }}
                        >
                          <div className="tool-header">
                            <div className="tool-icon" style={{backgroundColor: t.color}}>
                              <IconComponent size={20} />
                            </div>
                            <div className="tool-category">{t.category}</div>
                          </div>
                          <div className="tool-content">
                            <h3 className="tool-name">{t.name}</h3>
                            <p className="tool-description">{t.desc}</p>
                          </div>
                          <div className="tool-footer">
                            <div className="tool-accent-line" style={{backgroundColor: t.color}}></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </section>

            {/* Threat Timeline */}
            <section className="card mt-8 animate-entrance" style={{animationDelay: '0.1s'}}>
              <h2 className="row" style={{fontSize:'clamp(18px,3vw,24px)'}}>
                <Shield size={20} className="accent"/> 
                Security Incident & Response Journal
              </h2>
              <div className="timeline mt-6">
                <div className="space-y">
                  {incidents && incidents.length > 0 ? incidents.map((it, idx) => (
                    <div key={it.title} className="timeline-item animate-entrance" style={{animationDelay: `${0.2 + (idx * 0.1)}s`}}>
                      <span className="dot" />
                      <div className="row" style={{justifyContent:'space-between'}}>
                        <div style={{fontWeight:600}}>{it.title}</div>
                        <span className={`severity-chip severity-${it.severity.toLowerCase()}`}>
                          {it.severity}
                        </span>
                      </div>
                      <div className="row" style={{gap:8, marginTop:8, flexWrap:'wrap'}}>
                        {it.tags.map(t => <span key={t} className="chip">{t}</span>)}
                      </div>
                      <p className="muted2" style={{marginTop:8, fontSize:14}}>{it.notes}</p>
                      
                      {/* Show More/Less Button */}
                      <button 
                        onClick={() => toggleIncidentDetails(it.title)}
                        style={{
                          marginTop: 12,
                          padding: '6px 0',
                          backgroundColor: 'transparent',
                          color: 'var(--amber)',
                          border: 'none',
                          borderRadius: '0',
                          cursor: 'pointer',
                          fontSize: '11px',
                          fontWeight: '500',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          transition: 'all 0.3s ease',
                          fontFamily: 'var(--font-primary)',
                          textDecoration: 'underline',
                          textUnderlineOffset: '2px',
                          position: 'relative',
                          overflow: 'hidden',
                          outline: 'none'
                        }}
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
                        style={{
                          maxHeight: expandedIncidents[it.title] ? '500px' : '0',
                          overflow: 'hidden',
                          transition: 'max-height 0.4s ease-in-out, opacity 0.3s ease-in-out',
                          opacity: expandedIncidents[it.title] ? 1 : 0
                        }}
                      >
                        {/* Threat Analysis Section */}
                        <div className="incident-details" style={{marginTop:12, padding:12, backgroundColor:'rgba(245, 158, 11, 0.05)', borderRadius:8, border:'1px solid rgba(245, 158, 11, 0.2)'}}>
                          <div className="detail-header" style={{display:'flex', alignItems:'center', gap:8, marginBottom:8}}>
                            <Shield size={14} className="accent"/>
                            <span style={{fontWeight:600, fontSize:13, color:'var(--text)'}}>What Happened:</span>
                          </div>
                          <p style={{fontSize:13,marginRight:10, lineHeight:1.5, textAlign:'left', color:'var(--muted-2)'}}>{it.whatHappened}</p>
                        </div>

                        {/* Response Actions Section */}
                        <div className="incident-details" style={{marginTop:8, padding:12, backgroundColor:'rgba(16, 185, 129, 0.05)', borderRadius:8, border:'1px solid rgba(16, 185, 129, 0.2)'}}>
                          <div className="detail-header" style={{display:'flex', alignItems:'center', gap:8, marginBottom:8}}>
                            <Zap size={14} className="accent"/>
                            <span style={{fontWeight:600, fontSize:13, color:'var(--text)'}}>How I responded:</span>
                          </div>
                          <p style={{fontSize:13, lineHeight:1.5, marginRight:10,textAlign:'left', color:'var(--muted-2)'}}>{it.howIResponded}</p>
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div style={{padding: '20px', textAlign: 'center', color: 'var(--muted)', backgroundColor: 'rgba(255, 0, 0, 0.1)', border: '1px solid red'}}>
                      No incidents data available - Debug: incidents = {JSON.stringify(incidents)}
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Education & Achievements - Modern Layout */}
            <section className="mt-8">
              <div className="education-achievements-grid">
                {/* Education Section */}
                <div className="education-section animate-entrance" style={{animationDelay: '1.1s'}}>
                  <div className="section-header">
                    <div className="section-icon education-icon-large">
                      <GraduationCap size={24} className="accent"/>
                    </div>
                    <h2 style={{fontSize:'clamp(18px,3vw,22px)', margin: 0}}>Education</h2>
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
                <div className="achievements-section animate-entrance" style={{animationDelay: '1.2s'}}>
                  <div className="section-header">
                    <div className="section-icon achievements-icon-large">
                      <Award size={24} className="accent"/>
                    </div>
                    <h2 style={{fontSize:'clamp(18px,3vw,22px)', margin: 0}}>Achievements</h2>
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
            <section className={`card mt-8 center animate-entrance ${isDark ? 'data-stream' : ''}`} style={{display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'center', animationDelay: '1.6s'}}>
              <h2 style={{fontSize:'clamp(18px,3vw,24px)'}}>
                "Let's connect"
              </h2>
              <p className="muted2" style={{marginTop:8, fontFamily: isDark ? 'Courier New, monospace' : 'inherit', textAlign: 'center'}}>
                {isDark ? (
                  <>
                    <span style={{color: '#00ff00'}}>root@security:~$ </span>&nbsp;Open to security analyst roles, SOC operations, and threat detection projects.<span className="terminal-cursor"></span>
                  </>
                ) : (
                  'Open to security analyst roles, SOC operations, and threat detection projects.'
                )}
              </p>
              <div className="row" style={{justifyContent:'center', marginTop:16}}>
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
          <footer className="container center" style={{paddingBottom:40, color:'var(--muted)'}}>
            © {new Date().getFullYear()} Pranav Kalidas. All rights reserved.
          </footer>
        </>
      )}
    </div>
  );
}
