import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../Particle";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle />
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a fresher to the world of coding however I have worked on several projects on my own to gain the coding knowledge and experience.
              <br />
              <br />I am a MERN Stack developer with 
              <i>
                <b className="purple">
                  {" "}
                  Creative and Engineering background.{" "}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Mern Stack Projects </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="purple"> Modern Javascript Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Node.js and React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
          <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href="https://drive.google.com/file/d/1-OPQCBH1BWXz-8yP5GZUtwAOkhxutKm2/view?usp=sharing" target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
