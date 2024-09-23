/*!

=========================================================
* BLK Design System PRO React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
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
            <NavbarBrand to="/index" tag={Link} id="tooltip6619950104">
              <span>EYEX•</span> Next-Generation Payment Solutions
            </NavbarBrand>
            <UncontrolledTooltip delay={0} target="tooltip6619950104">
            Designed and Coded by Bogazici Team
            </UncontrolledTooltip>
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
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    EYEX• <span></span>
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button className="navbar-toggler" id="navigation">
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle caret color="default" nav>
                  <i className="fa fa-cogs d-lg-none d-xl-none" />
                  Overview
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem to="/index" tag={Link}>
                    <i className="tim-icons icon-paper" />
                    Feature-Overview
                  </DropdownItem>
                  <DropdownItem to="/presentation" tag={Link}>
                    <i className="tim-icons icon-bullet-list-67" />
                    Product Demo
                  </DropdownItem>
                  
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle caret color="default" nav>
                  <i aria-hidden={true} className="tim-icons icon-paper" />
                  <p>Features</p>
                </DropdownToggle>
                <DropdownMenu right>
                  {/* <DropdownItem to="/sections#headers" tag={Link}> */}
                    {/* <i className="tim-icons icon-app" /> */}
                    {/* Headers */}
                  {/* </DropdownItem> */}
                  <DropdownItem to="/sections#features" tag={Link}>
                    <i className="tim-icons icon-settings" />
                    Payment-Features
                  </DropdownItem>
                  <DropdownItem to="/sections#blogs" tag={Link}>
                    <i className="tim-icons icon-align-left-2" />
                    Blogs
                  </DropdownItem>
                  <DropdownItem to="/sections#teams" tag={Link}>
                    <i className="tim-icons icon-user-run" />
                    Security-Teams
                  </DropdownItem>
                  <DropdownItem to="/sections#projects" tag={Link}>
                    <i className="tim-icons icon-paper" />
                    System-Projects
                  </DropdownItem>
                  <DropdownItem to="/sections#pricing" tag={Link}>
                    <i className="tim-icons icon-money-coins" />
                    Pricing
                  </DropdownItem>
                  <DropdownItem to="/sections#testimonials" tag={Link}>
                    <i className="tim-icons icon-chat-33" />
                    Testimonials
                  </DropdownItem>
                  <DropdownItem to="/sections#contactus" tag={Link}>
                    <i className="tim-icons icon-mobile" />
                    Contact Us
                  </DropdownItem>
                  <DropdownItem to="/sections#tables" tag={Link}>
                    <i className="tim-icons icon-chart-bar-32" />
                    Data
                  </DropdownItem>
                  <DropdownItem to="/sections#accordion" tag={Link}>
                    <i className="tim-icons icon-paper" />
                    Reporting
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle caret color="default" nav>
                  <i
                    aria-hidden={true}
                    className="tim-icons icon-book-bookmark"
                  />
                  <p>Performance-Metrics</p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem to="/about-us" tag={Link}>
                    <i className="tim-icons icon-bulb-63" />
                    Our Story
                  </DropdownItem>
                  <DropdownItem to="/blog-post" tag={Link}>
                    <i className="tim-icons icon-align-center" />
                    Articles
                  </DropdownItem>
                  <DropdownItem to="/blog-posts" tag={Link}>
                    <i className="tim-icons icon-chart-bar-32" />
                    Latest Insights
                  </DropdownItem>
                  <DropdownItem to="/contact-us" tag={Link}>
                    <i className="tim-icons icon-square-pin" />
                    Contact Us
                  </DropdownItem>
                  <DropdownItem to="/landing-page" tag={Link}>
                    <i className="tim-icons icon-paper" />
                    Landing
                  </DropdownItem>
                  <DropdownItem to="/pricing" tag={Link}>
                    <i className="tim-icons icon-coins" />
                    Pricing
                  </DropdownItem>
                  <DropdownItem to="/ecommerce" tag={Link}>
                    <i className="tim-icons icon-basket-simple" />
                    Ecommerce 
                  </DropdownItem>
                  <DropdownItem to="/product-page" tag={Link}>
                    <i className="tim-icons icon-bag-16" />
                    Product 
                  </DropdownItem>
                  <DropdownItem to="/profile-page" tag={Link}>
                    <i className="tim-icons icon-lock-circle" />
                    Profile 
                  </DropdownItem>
                  {/* <DropdownItem to="/404-error" tag={Link}> */}
                    {/* <i className="tim-icons icon-button-power" /> */}
                    {/* 404 Error  */}
                  {/* </DropdownItem> */}
                  {/* <DropdownItem to="/500-error" tag={Link}> */}
                    {/* <i className="tim-icons icon-alert-circle-exc" /> */}
                    {/* 500 Error  */}
                  {/* </DropdownItem> */}
                  <UncontrolledDropdown>
                    <DropdownToggle
                      caret
                      color="default"
                      className="dropdown-item"
                      tag="a"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i
                        aria-hidden={true}
                        className="tim-icons icon-book-bookmark"
                      />
                      App Pages
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/account-settings" tag={Link}>
                        <i className="tim-icons icon-lock-circle" />
                        Account Settings
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        <i className="tim-icons icon-tablet-2" />
                        Login 
                      </DropdownItem>
                      <DropdownItem to="/register-page" tag={Link}>
                        <i className="tim-icons icon-laptop" />
                        Register 
                      </DropdownItem>
                      <DropdownItem to="/reset-page" tag={Link}>
                        <i className="tim-icons icon-molecule-40" />
                        Reset 
                      </DropdownItem>
                      <DropdownItem to="/invoice-page" tag={Link}>
                        <i className="tim-icons icon-notes" />
                        Invoice 
                      </DropdownItem>
                      {/* <DropdownItem to="/checkout-page" tag={Link}> */}
                        {/* <i className="tim-icons icon-basket-simple" /> */}
                        {/* Checkout Page */}
                      {/* </DropdownItem> */}
                      <DropdownItem to="/chat-page" tag={Link}>
                        <i className="tim-icons icon-email-85" />
                        Chat Page
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Button
                  className="nav-link"
                  color="default"
                  href=""
                  size="sm"
                  target="_blank"
                >
                  <p>Try It Out</p>
                </Button>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}
