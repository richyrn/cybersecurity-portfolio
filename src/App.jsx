import { useEffect, useState } from 'react'

import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  Shield,
  Terminal,
  Cloud,
  Network,
  Code2,
  Sun,
  Moon,
} from 'lucide-react'

import './App.css'

import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
  

    if (savedTheme) {
      return savedTheme === 'dark'
    }

    return true
  })

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')
  
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
  
        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      {
        threshold: [0.2, 0.5, 0.8],
        rootMargin: '-15% 0px -55% 0px',
      }
    )
  
    sections.forEach((section) => observer.observe(section))
  
    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

useEffect(() => {
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 500)
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])

  return (
    <div className={`portfolio ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="background-grid"></div>

      <header className="navbar">
        <a href="#" className="logo">
          RA<span>.</span>
        </a>

        <nav>
  <a
    href="#about"
    className={activeSection === 'about' ? 'active' : ''}
  >
    About
  </a>

  <a
    href="#skills"
    className={activeSection === 'skills' ? 'active' : ''}
  >
    Skills
  </a>

  <a
    href="#projects"
    className={activeSection === 'projects' ? 'active' : ''}
  >
    Projects
  </a>

  <a
    href="#experience"
    className={activeSection === 'experience' ? 'active' : ''}
  >
    Experience
  </a>

  <a
    href="#education"
    className={activeSection === 'education' ? 'active' : ''}
  >
    Education
  </a>

  <a
    href="#contact"
    className={activeSection === 'contact' ? 'active' : ''}
  >
    Contact
  </a>
</nav>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
        <button
  className="theme-toggle"
  onClick={() => setDarkMode(!darkMode)}
  aria-label="Toggle light and dark mode"
>
  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
</button>
      </header>
      

      <main>

        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <div className="status">
              <span></span>
              Available for opportunities
            </div>

            <p className="hero-label">
              CYBERSECURITY / IT
            </p>

            <h1>
              Richard
              <br />
              <span>Adegorite</span>
            </h1>

            <p className="hero-description">
              Cybersecurity-focused IT professional building practical
              experience across security operations, networking,
              threat intelligence and IT infrastructure.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore Projects
                <ArrowUpRight size={18} />
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-terminal">
            <div className="terminal-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="terminal-body">
              <p>
                <span className="terminal-green">$</span> whoami
              </p>

              <p className="terminal-output">
                cybersecurity_analyst
              </p>

              <p>
                <span className="terminal-green">$</span> skills
              </p>

              <p className="terminal-output">
                CYBERSECURITY · NETWORKING · IT · CLOUD
              </p>

              <p>
                <span className="terminal-green">$</span> status
              </p>

              <p className="terminal-output">
                building & learning...
              </p>

              <span className="cursor">_</span>
            </div>
          </div>
        </section>
              
        {/* ABOUT */}
        <section id="about" className="section">
          <div className="section-heading">
            <span>01</span>
            <h2>About Me</h2>
          </div>

          <div className="about-content">
            <div>
            <p className="large-text">
                Cybersecurity-focused IT professional with a practical
                approach to security operations, networking and
                infrastructure.
              </p>
            </div>

            <div>
              <p>
                I have an academic background in Information Technology
                and hands-on experience supporting cybersecurity and
                cloud environments.
              </p>

              <p>
                My interests include security operations, threat
                intelligence, network security, vulnerability management
                and cloud security. I enjoy building practical projects
                to strengthen my understanding of real-world security
                environments.
              </p>

              <p>
                I am currently developing my skills toward cybersecurity
                and SOC-focused roles while continuing to expand my
                knowledge of networking, Azure and security tooling.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section-heading">
            <span>02</span>
            <h2>Technical Skills</h2>
          </div>

          <div className="skills-grid">

            <div className="skill-card">
              <div className="skill-icon">
                <Shield size={22} />
              </div>

              <h3>Cybersecurity</h3>

              <div className="skill-tags">
                <span>SOC Operations</span>
                <span>SIEM</span>
                <span>Threat Intelligence</span>
                <span>Vulnerability Management</span>
                <span>Security Monitoring</span>
                <span>Incident Response</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <Network size={22} />
              </div>

              <h3>Networking</h3>

              <div className="skill-tags">
                <span>TCP/IP</span>
                <span>DNS</span>
                <span>DHCP</span>
                <span>VLANs</span>
                <span>NAT</span>
                <span>Routing</span>
                <span>Wireshark</span>
                <span>Cisco Packet Tracer</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <Cloud size={22} />
              </div>

              <h3>Cloud & Security Tools</h3>

              <div className="skill-tags">
                <span>Microsoft Azure</span>
                <span>Microsoft Sentinel</span>
                <span>Defender for Cloud</span>
                <span>Log Analytics</span>
                <span>KQL</span>
                <span>Azure Monitor</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <Code2 size={22} />
              </div>

              <h3>Programming & Development</h3>

              <div className="skill-tags">
                <span>Python</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>SQL</span>
                <span>Git</span>
                <span>GitHub</span>
              </div>
            </div>

          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section-heading">
            <span>03</span>
            <h2>Featured Projects</h2>
          </div>

          <div className="projects-grid">

            <article className="project-card">
              <div className="project-top">
                <span className="project-number">01</span>

                <div className="project-icon">
                  <Terminal size={24} />
                </div>
              </div>

              <div className="project-content">
                <p className="project-category">
                  THREAT INTELLIGENCE
                </p>

                <h3>Honeypot System</h3>

                <p>
                  A Python-based honeypot designed to capture and analyse
                  attacker behaviour in a controlled environment.
                </p>

                <div className="project-details">
                  <p>Focus</p>

                  <span>
                  Attacker behaviour analysis, threat intelligence and security monitoring
                  </span>
                </div>

                <div className="project-tags">
                  <span>Python</span>
                  <span>Linux</span>
                  <span>SSH</span>
                  <span>HTTP</span>
                  <span>MITRE ATT&CK</span>
                </div>
              </div>

              <a
                href="https://github.com/richyrn/HoneyP"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub
                <ArrowUpRight size={17} />
              </a>
            </article>

            <article className="project-card">
              <div className="project-top">
                <span className="project-number">02</span>

                <div className="project-icon">
                  <Cloud size={24} />
                </div>
              </div>

              <div className="project-content">
                <p className="project-category">
                  CLOUD SECURITY
                </p>

                <h3>SOC & Honeynet in Azure</h3>

                <p>
                  A cloud-based security environment using Azure virtual
                  machines, Microsoft Sentinel and Log Analytics for
                  security monitoring.
                </p>

                <div className="project-details">
                  <p>Focus</p>

                  <span>
                    Security monitoring, logging and threat detection
                  </span>
                </div>

                <div className="project-tags">
                  <span>Azure</span>
                  <span>Sentinel</span>
                  <span>Log Analytics</span>
                  <span>KQL</span>
                </div>
              </div>

              <a href="#" className="project-link">
              View on GitHub
                <ArrowUpRight size={17} />
              </a>
            </article>

            <article className="project-card">
              <div className="project-top">
                <span className="project-number">03</span>

                <div className="project-icon">
                  <Network size={24} />
                </div>
              </div>

              <div className="project-content">
                <p className="project-category">
                  NETWORKING
                </p>

                <h3>Cisco Networking Labs</h3>

                <p>
                  Practical network environments covering switching,
                  routing, VLANs, DHCP, NAT, firewalls and network
                  troubleshooting.
                </p>

                <div className="project-details">
                  <p>Focus</p>

                  <span>
                    Network configuration and troubleshooting
                  </span>
                </div>

                <div className="project-tags">
                  <span>Cisco</span>
                  <span>Packet Tracer</span>
                  <span>TCP/IP</span>
                  <span>VLANs</span>
                  <span>DHCP</span>
                </div>
              </div>

              <a href="#" className="project-link">
              View on GitHub
                <ArrowUpRight size={17} />
              </a>
            </article>

          </div>
        </section>

        
        <section id="experience" className="section">
          <div className="section-heading">
            <span>04</span>
            <h2>Experience</h2>
          </div>

          <div className="experience-list">

            <article className="experience-item">
              <div className="experience-meta">
                <p>JUN 2025 — DEC 2025</p>
                <span>INTERNSHIP</span>
              </div>

              <div className="experience-main">
                <h3>Cybersecurity Support Engineer Intern</h3>

                <p className="company">
                  Strictly Technology (Nig) Ltd
                </p>

                <p className="experience-description">
                  Supported cybersecurity and cloud security activities
                  involving Microsoft Azure, infrastructure security,
                  security monitoring and compliance.
                </p>

                <div className="experience-tags">
                  <span>Azure</span>
                  <span>Sentinel</span>
                  <span>Defender for Cloud</span>
                  <span>Log Analytics</span>
                  <span>KQL</span>
                  <span>NIST 800-53</span>
                </div>
              </div>
            </article>

            <article className="experience-item">
              <div className="experience-meta">
                <p>2026 — PRESENT</p>
                <span>PROJECTS</span>
              </div>

              <div className="experience-main">
                <h3>Cybersecurity & Networking Labs</h3>

                <p className="company">
                  Independent Technical Projects
                </p>

                <p className="experience-description">
                  Building practical security and networking environments
                  to develop hands-on experience with SIEM, threat
                  intelligence, network configuration and troubleshooting.
                </p>

                <div className="experience-tags">
                  <span>Python</span>
                  <span>Cisco Packet Tracer</span>
                  <span>Wireshark</span>
                  <span>Azure</span>
                  <span>Linux</span>
                  <span>Networking</span>
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <div className="section-heading">
            <span>05</span>
            <h2>Education</h2>
          </div>

          <div className="education-card">
            <div className="education-icon">
              <Code2 size={22} />
            </div>

            <div className="education-content">
              <p className="education-type">
                BACHELOR'S DEGREE
              </p>

              <h3>BSc Information Technology</h3>

              <p className="education-description">
                Academic foundation in information technology, computing,
                programming, networking, databases and information systems.
              </p>

              <div className="education-tags">
                <span>Information Technology</span>
                <span>Networking</span>
                <span>Programming</span>
                <span>Cybersecurity</span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <p className="hero-label">06 / CONTACT</p>

          <h2>
            Let's build something
            <br />
            <span>secure.</span>
          </h2>

          <p>
            I'm open to opportunities in cybersecurity, IT infrastructure,
            security operations and cloud security.
          </p>

          <div className="contact-buttons">
            <a
              href="mailto:your@email.com"
              className="primary-button"
            >
              Get In Touch
              <Mail size={18} />
            </a>

            <a
              href="https://github.com/richyrn"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              GitHub
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/richyrn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a href="#">
              LinkedIn
            </a>

            <a href="mailto:richardadegorite@gmail.com">
              <Mail size={20} />
              Email
            </a>
          </div>
        </section>

      </main>
      {showScrollTop && (
  <button
    className="scroll-top"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    aria-label="Scroll to top"
  >
    <ArrowUp size={20} />
  </button>
)}
      <footer>
        <p>© 2026 Richard Adegorite</p>
        <p>Built with React</p>
      </footer>
    </div>
  )
}

export default App