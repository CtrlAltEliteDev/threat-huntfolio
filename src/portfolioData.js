export const contact = {
  name: "Pranav Kalidas",
  email: "kalidas.pranav@gmail.com",
  linkedin: "https://linkedin.com/in/pranav-kalidas",
  location: "Kozhikode, Kerala — 673522",
  title: "Security Analyst",
  summary: "Security Analyst with 1.8 years of hands-on SOC experience: monitoring, triaging, and responding to alerts. Skilled in threat detection, incident response, and remediation to safeguard enterprise infrastructure. Calm under pressure, collaborative with L2/L3, and consistently on-time against SLAs.",
};

export const experience = [
  {
    role: "Security Analyst",
    company: "Tech Mahindra",
    location: "Bengaluru",
    start: "Dec 2023",
    end: "Present",
    bullets: [
      "SOC Analyst as a Managed Security Service Provider (MSSP) supporting SES Telecom, a leading European telecom firm with 5000+ employees",
      "Performed alert triage using KQL across all shifts with due diligence.",
      "Initiated playbooks swiftly and escalated critical alerts when needed.",
      "Collaborated with L2/L3 to expedite resolutions and meet SLAs.",
      "Conducted in-depth investigations and produced clear findings.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Netmeds (Reliance Retail)",
    location: "Chennai",
    start: "Oct 2022",
    end: "Sep 2023",
    bullets: [
      "Implemented Java business logic for inbound/outbound inventory flow.",
      "Partnered with cross-functional teams to stabilize stock management.",
    ],
  },
];

export const certifications = [
  { abbr: "SC-200", name: "Security Operations Analyst Associate (SC-200)", org: "Microsoft", date: "July 2025", url: "https://learn.microsoft.com/api/credentials/share/en-us/PranavKalidas-0465/EC50D42E72C423D5?sharingId=698376E8CB7702F2", image: "/Microsoft.png" },
  { abbr: "CEH-Practical", name: "Certified Ethical Hacker v12 – Practical", org: "EC-Council", date: "April 2025", url: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=o2jPBvIo2t5MxoNABIYpODJoz1P9SBs5LqWYLx8PVTo=", image: "/CEH.png" },
  { abbr: "CEH", name: "Certified Ethical Hacker v12", org: "EC-Council", date: "August 2024", url: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=HLHJ6cwIhgyNHkfjTRD7IT2/lnmHgCqFdGTODBqSwnA=", image: "/CEH.png" },
  { abbr: "NSE-2", name: "Certified Fundamentals Cybersecurity", org: "Fortinet", date: "October 2024", url: "https://www.credly.com/badges/5fb71cd2-e98e-4bef-9b29-d30159369ca5/public_url", image: "/Fortinet.png" },
  { abbr: "NPTEL", name: "Ethical Hacking", org: "NPTEL (IIT Kharagpur)", date: "November 2023", url: "nptel.ac.in/noc/E_Certificate/NPTEL23CS75S73320006020301625", image: "/NPTEL.png" },
  { abbr: "THM", name: "Active Learner on TryHackMe", org: "Self-paced", date: "Since Feb 2024", url: "https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1076369", image: "/tryhackme.jpg" },
];

export const skills = [
  "Incident Management",
  "OSINT collection",
  "Security Operations and Monitoring",
  "Phishing Email analysis",
  "Log Analysis",
  "Playbook execution",
  "Documentation",
  "End user Communication",
  "Due diligence",
];

export const scriptingLanguages = [
  "Python",
  "KQL",
  "Bash",
];

export const spokenLanguages = [
  "English (fluent)",
  "Hindi (fluent)",
  "Marathi (conversational)",
  "Malayalam (native)",
];

export const education = {
  degree: "B.E. in Computer Science",
  focus: "Focus: Cryptography & Cybersecurity",
  uni: "Alvas Institute of Engineering and Technology, VTU",
  cgpa: "8.7 CGPA",
  start: "Aug 2019",
  end: "May 2023",
};

export const achievements = [
  "Pat-On-The-Back award (2x) for impactful performance",
  "College Cultural Team Lead for stage/non-stage events",
  "Best Final Year Project – Bitcoin Price Prediction (ML)",
];

export const tools = [
  { 
    name: "Microsoft Defender XDR", 
    desc: "Threat hunting with KQL, device timeline analysis, email triage, file and software inspection, and CVE vulnerability detection",
    category: "SIEM/XDR",
    icon: "Shield",
    color: "#0078d4"
  },
  { 
    name: "IBM QRadar", 
    desc: "Log correlation, traffic flow analysis, attack context decoding, IoC triaging, threat visualization",
    category: "SIEM",
    icon: "Database",
    color: "#0066cc"
  },
  { 
    name: "Cisco Umbrella Proxy", 
    desc: "User browsing behaviour, identifying referral pages even when not explicitly logged in SIEM",
    category: "Web Traffic Analysis",
    icon: "Network",
    color: "#1ba1e2"
  },
  { 
    name: "Cisco Secure Malware Analytics", 
    desc: "Phishing domain extraction, malware process deconstruction, post-compromise behavior mapping, and threat artifact enrichment",
    category: "Sandbox Analysis",
    icon: "FileSearch",
    color: "#1ba1e2"
  },
  { 
    name: "Fortinet FortiSOAR", 
    desc: "Workflow orchestration, playbook automation, alert/incident documentation, asset management",
    category: "SOAR",
    icon: "Workflow",
    color: "#d73027"
  },
  { 
    name: "OSINT Tools", 
    desc: "VirusTotal, IBM X-Force, Cisco Talos, CrowdSec, Scamalytics, URLScan.io, and Whois for threat intelligence and domain analysis",
    category: "Domain & IP Enri",
    icon: "Globe",
    color: "#28a745"
  }
];

export const incidents = [
  { 
    title: "Lumma Stealer using Fake Captcha", 
    severity: "Critical", 
    tags: ["Initial Access","Credential Stealer","MSHTA.exe"], 
    whatHappened: "User was redirected to a fake CAPTCHA page that copied a malicious mshta.exe command to clipboard. The user unknowingly executed it via Win+R, triggering the download of Lumma Stealer malware.",
    howIResponded: "Initiated on-call response to immediately isolate the infected device, disabled the user account to prevent potential lateral movement, investigated the redirection source, confirmed the referrer through sandbox analysis, and blocked the identified indicators of compromise (IoCs) across the environment."
  },
  { 
    title: "User Password Compromise Due to Brute Force",
    severity: "High",
    tags: ["Account", "Brute Force", "Credential Security", "MFA"],
    whatHappened: "User's password was compromised through brute force attempts, but login was blocked by MFA enforcement.",
    howIResponded: "Engaged service desk to initiate password reset, advised user to set a strong password, and proposed stronger password policy with reduced expiry duration.",
  },
  { 
    title: "Phishing Email Barrage with DGA Domains",
    severity: "Medium",
    tags: ["Email", "Phishing", "DGA", "URL Analysis", "KQL"],
    whatHappened: "Received a barrage of phishing emails containing DGA-based URLs with varied root and subdomains, making traditional triage ineffective.",
    howIResponded: "Used KQL for efficient email triage, performed sandbox analysis after stripping tracking identifiers, confirmed no user interaction, and blocked malicious domains, root domains, and subject patterns via regex.",
  },
];
