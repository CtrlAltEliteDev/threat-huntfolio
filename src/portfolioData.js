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
  { abbr: "NPTEL", name: "Ethical Hacking", org: "IIT Kharagpur", date: "November 2023", url: "nptel.ac.in/noc/E_Certificate/NPTEL23CS75S73320006020301625", image: "/NPTEL.png" },
  { abbr: "THM", name: "Active Learner on TryHackMe", org: "Self-paced", date: "Since Feb 2024", url: "https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1076369", image: "/tryhackme.jpg" },
];

export const skills = [
  "KQL triage",
  "Email analysis",
  "OSINT collection",
  "Incident Management",
  "Playbook execution",
  "Scripting",
  "Communication",
  "Threat Hunting",
  "SIEM Operations",
  "Log Analysis",
  "Vulnerability Assessment",
  "Network Security",
  "Endpoint Detection",
  "Malware Analysis",
  "Forensics",
  "Risk Assessment",
  "Security Monitoring",
  "Alert Correlation",
  "Incident Response",
  "Security Awareness",
  "Compliance",
  "Documentation",
  "Team Collaboration",
  "Problem Solving",
  "Time Management"
];

export const education = {
  degree: "B.E. in Computer Science",
  focus: "Cryptography, Cybersecurity & Computer Networks",
  uni: "VTU",
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
  { name: "Microsoft Sentinel", desc: "Threat hunting with KQL, device timeline, email triage" },
  { name: "Microsoft Defender XDR", desc: "Endpoint signals, correlated investigations" },
  { name: "IBM QRadar", desc: "Log correlation, flow analysis, attack context, IoC triage" },
  { name: "Cisco Umbrella Proxy", desc: "User browsing behavior, referral page identification" },
  { name: "Cisco Secure Malware Analytics", desc: "Phishing domain extraction, malware deconstruction" },
  { name: "Fortinet FortiSOAR", desc: "Workflow orchestration, playbook automation" },
];

export const incidents = [
  { 
    date: "2025-08-10", 
    title: "Lumma Stealer using Fake Captcha", 
    severity: "Critical", 
    tags: ["Initial Access","Credential Stealer","MSHTA.exe"], 
    notes: "Quarantined message, reset creds, reviewed app consent logs.",
    whatIDid: "Analyzed suspicious email attachment, identified MSHTA.exe execution pattern, traced credential theft attempt",
    howIResponded: "Immediately quarantined the malicious email, reset all affected user credentials, reviewed application consent logs for unauthorized access, and updated detection rules"
  },
  { 
    date: "2025-07-22", 
    title: "Beaconing from Host EU-043", 
    severity: "Medium", 
    tags: ["EDR", "C2"], 
    notes: "Isolated device via XDR, collected timeline, no lateral movement observed.",
    whatIDid: "Detected unusual network traffic patterns, identified C2 communication, performed endpoint investigation",
    howIResponded: "Isolated the compromised device using XDR capabilities, collected comprehensive timeline data, analyzed network flows, and confirmed no lateral movement occurred"
  },
  { 
    date: "2025-07-03", 
    title: "Excessive MFA Prompts", 
    severity: "Low", 
    tags: ["Account", "Brute Force"], 
    notes: "Enabled number match, blocked source IP ranges, user education.",
    whatIDid: "Identified brute force attack pattern targeting MFA, analyzed source IPs and attack vectors",
    howIResponded: "Enabled number matching for MFA, blocked malicious IP ranges, conducted user security awareness training, and implemented additional monitoring"
  },
];
