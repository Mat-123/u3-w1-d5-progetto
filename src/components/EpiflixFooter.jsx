import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import { Button } from "react-bootstrap";

function EpiflixFooter() {
  return (
    <Container data-bs-theme="dark" className="text-start" fluid>
      <Row className="justify-content-center mt-5">
        <Col xs={6}>
          <Row>
            <Col className="mb-2 p-0">
              <BsFacebook className="icons" />
              <BsInstagram className="icons" />
              <BsTwitterX className="icons" />
              <BsYoutube className="icons" />
            </Col>
          </Row>
          <Row xs={1} sm={2} md={4} lg={4}>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#" alt="footer link">
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Contact us
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#" alt="footer link">
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Legal Notices
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#" alt="footer link">
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Cookie Preferences
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#" alt="footer link">
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Corporate Information
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="my-2">
              <Button variant="outline-light">Service Code</Button>
            </Col>
          </Row>
          <Row>
            <Col className="mb-4 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default EpiflixFooter;
