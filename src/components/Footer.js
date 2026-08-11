import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon" id="footer-icons">
            <a href="https://www.linkedin.com/in/rc801/" target="__blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Roland-Cook"><img src={navIcon2} alt=""/></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
