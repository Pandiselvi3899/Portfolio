
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import contactImg from "../../Assets/contact.svg";
import Tilt from "react-parallax-tilt";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row className="resume">
  
          <Col md-6 className="resume-center">
            <h3 className="Resume-title"><strong className="purple">𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗺𝗲📲📞</strong></h3>

            <Resumecontent
              content={[
              
                "𝗣𝗵𝗼𝗻𝗲 𝗡𝘂𝗺𝗯𝗲𝗿 - 6374658959",
              ]}
            />
  
            <Resumecontent
           
              content={[
                "𝗘𝗺𝗮𝗶𝗹 - sithanathanpandiselvi@gmail.com",
              ]}
            />
            <Resumecontent
              content={[
                "𝗚𝗶𝘁𝗛𝘂𝗯 - https://github.com/Pandiselvi3899",
              ]}
            />

            <Resumecontent
           
           content={[
             "𝗟𝗶𝗻𝗸𝗲𝗱𝗜𝗻 - https://www.linkedin.com/in/pandi-selvi-7b4652228",
           ]}
         />
           <Resumecontent
           
           content={[
             "𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻 - Cumbum,Theni District,TamilNadu",
           ]}
         />
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={contactImg} className="img-fluid" alt="contact" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;


