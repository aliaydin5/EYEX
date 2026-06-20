import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function ColorNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  const changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      setNavbarColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      setNavbarColor("navbar-transparent");
    }
  };
  return (
    <>
      <Navbar className={"fixed-top " + navbarColor} expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link}>
              <span style={{ fontWeight: 800, letterSpacing: "1px" }}>Aurea</span>
            </NavbarBrand>
            <button className="navbar-toggler" id="navigation">
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#navigation">
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <span style={{ fontWeight: 800 }}>Aurea</span>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button className="navbar-toggler" id="navigation">
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/#features" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(".section.section-lg")?.scrollIntoView({ behavior: "smooth" });
                }}>
                  Features
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/#download" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
                }}>
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Button
                  className="nav-link btn-round"
                  color="info"
                  href="#download"
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Download Now
                </Button>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}
