import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Pandi Selvi</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} pandi selvi</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/pandi-selvi-7b4652228"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/Pandiselvi3899"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://sithanathanpandiselvi@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      
    </Container>
  );
}

export default Footer;
