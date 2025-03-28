import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo2.png";
import linkedin from "../assets/img/nav-icon1.svg";
import github from "../assets/img/nav-icon3.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      url: "https://www.linkedin.com/in/tanishakhandelwal1/",
      icon: linkedin,
      alt: "LinkedIn Profile",
    },
    {
      url: "https://github.com/Tanishakhandelwal21",
      icon: github,
      alt: "GitHub Profile",
    },
  ];

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6} className="footer-col">
            <img
              src={logo}
              alt="Portfolio Logo"
              loading="lazy"
              width="150"
              height="auto"
            />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.alt}
                >
                  <img
                    src={link.icon}
                    alt={link.alt}
                    loading="lazy"
                    width="24"
                    height="24"
                  />
                </a>
              ))}
            </div>
            <p>Copyright © {currentYear}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
