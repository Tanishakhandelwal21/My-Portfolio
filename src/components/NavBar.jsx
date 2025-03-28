import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo2.png";
import linkedin from "../assets/img/nav-icon1.svg";
import github from "../assets/img/nav-icon3.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    setExpanded(false); // Close navbar on mobile after clicking a link
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight =
        document.querySelector(".navbar")?.offsetHeight || 80;
      const sectionPosition =
        section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <Navbar
      expand="lg"
      className={scrolled ? "scrolled" : ""}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <Navbar.Brand href="#home" onClick={() => handleNavLinkClick("home")}>
          <img src={logo} alt="Logo" loading="lazy" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {["home", "skills", "projects", "resume"].map((link) => (
              <Nav.Link
                key={link}
                href={`#${link}`}
                className={`navbar-link ${activeLink === link ? "active" : ""}`}
                onClick={() => {
                  handleNavLinkClick(link);
                  scrollToSection(link);
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Nav.Link>
            ))}
          </Nav>

          <div className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/tanishakhandelwal1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" loading="lazy" />
              </a>
              <a
                href="https://github.com/Tanishakhandelwal21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub" loading="lazy" />
              </a>
            </div>
            <button
              className="vvd"
              onClick={() => {
                handleNavLinkClick("connect");
                scrollToSection("connect");
              }}
            >
              <span>Let's Connect!</span>
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
