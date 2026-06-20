import React from "react";
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function DemoFooter() {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <h1 className="title" style={{ fontWeight: 800, letterSpacing: "1px" }}>
                Aurea
              </h1>
              <p className="description" style={{ fontSize: "0.85rem", opacity: 0.7 }}>
                Connect. Share. Live.
              </p>
            </Col>
            <Col md="3" xs="6">
              <Nav>
                <NavItem>
                  <NavLink
                    href="#"
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#features"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(".section.section-lg")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Features
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Download
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="mailto:hello@aurea.app">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3" xs="6">
              <Nav>
                <NavItem>
                  <NavLink href="#">
                    Privacy Policy
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    Terms of Service
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    Blog
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <h3 className="title">Follow us:</h3>
              <div className="btn-wrapper profile text-left">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="#"
                  id="tooltip-instagram"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip-instagram">
                  Follow us on Instagram
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple ml-1"
                  color="default"
                  href="#"
                  id="tooltip-twitter"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip-twitter">
                  Follow us on Twitter / X
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple ml-1"
                  color="default"
                  href="#"
                  id="tooltip-tiktok"
                  target="_blank"
                >
                  <i className="fab fa-tiktok" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip-tiktok">
                  Follow us on TikTok
                </UncontrolledTooltip>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="text-center" md="12">
              <p style={{ fontSize: "0.8rem", opacity: 0.5 }}>
                © {new Date().getFullYear()} Aurea. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
