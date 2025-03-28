import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "./Particle";
import pdf from "../assets/Resume/TanishaKhandelwalResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <section className="resume" id="resume">
      <div>
        <Container fluid className="resume-section">
          <div className="row">
            <div className="col-12">
              <div className="resume-bx wow ">
                <h2>Know more about me ! ✨</h2>
                <br />
                <br />
                <p style={{ textAlign: "justify" }}>
                  Hi Everyone, I am{" "}
                  <span className="font-color">Tanisha Khandelwal </span>
                  from <span className="font-color"> Dausa,Rajasthan.</span>
                  <br />
                  <br /> I am a final-year student pursuing Master of Computer
                  Applications (MCA) from RTU.
                  <br />
                  <br />
                  As a MERN stack developer, I specialize in building dynamic
                  and responsive web applications. I have hands-on experience
                  with React.js, Next.js, Node.js, Express.js, and MongoDB,
                  focusing on creating seamless user experiences and efficient
                  backend solutions. <br />
                  <br />I love exploring new technologies, optimizing
                  performance, and continuously improving my development skills
                  to craft innovative digital solutions. 🚀✨
                </p>
              </div>
            </div>
          </div>
          <Particle />

          <Row
            className="resume-btn"
            style={{ justifyContent: "center", marginTop: "50px" }}
          >
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        </Container>
      </div>
    </section>
  );
};
