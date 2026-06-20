import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import canvas1_3 from "assets/img/canvas-1-3.png";
import canvas1_9 from "assets/img/canvas-1-9.png";
import canvas2_5 from "assets/img/canvas-2-5.png";
import canvas2_10 from "assets/img/canvas-2-10.png";

export default function LandingPage() {
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  }, []);

  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>

        {/* ── Hero ── */}
        <div className="page-header">
          <img alt="" className="path"    src={require("assets/img/blob.png")} />
          <img alt="" className="path2"   src={require("assets/img/path2.png")} />
          <img alt="" className="shapes triangle" src={require("assets/img/triunghiuri.png")} />
          <img alt="" className="shapes wave"     src={require("assets/img/waves.png")} />
          <img alt="" className="shapes squares"  src={require("assets/img/patrat.png")} />
          <img alt="" className="shapes circle"   src={require("assets/img/cercuri.png")} />
          <Container>
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  Connect. Share.<br />
                  <span className="text-info">Live.</span>
                </h1>
                <p className="text-white mb-3">
                  Aurea is the next-generation social media app that brings people closer.
                  Share moments with Blur Posts, connect with loved ones, and go live — all in one place.
                </p>
                <div className="btn-wrapper">
                  <Button
                    className="btn-round mr-2"
                    color="info"
                    href="https://apps.apple.com/tr/app/aurea-ai-social-platform/id6755821747?l=tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                  >
                    <i className="fab fa-apple mr-2" />
                    App Store
                  </Button>
                  <Button
                    className="btn-round btn-simple"
                    color="info"
                    href="https://play.google.com/store/apps/details?id=com.socialAi.social_app&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                  >
                    <i className="fab fa-google-play mr-2" />
                    Google Play
                  </Button>
                </div>
              </Col>
              <Col lg="4" md="5">
                <img
                  alt="Aurea App"
                  className="img-fluid"
                  src={canvas1_9}
                  style={{ borderRadius: "24px", maxHeight: "520px", objectFit: "contain" }}
                />
              </Col>
            </Row>
          </Container>
        </div>

        {/* ── Features ── */}
        <section className="section section-lg">
          <img alt="" className="path" src={require("assets/img/path4.png")} />
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg="8" className="text-center">
                <h2>Everything you love, in one app</h2>
                <p className="description">
                  Aurea brings together the best of social media — share posts, go live, connect with close ones.
                </p>
              </Col>
            </Row>

            <Row className="row-grid align-items-center mb-5">
              <Col md="5">
                <img
                  alt="Share What Matters"
                  className="img-fluid"
                  src={canvas1_9}
                  style={{ borderRadius: "24px" }}
                />
              </Col>
              <Col md="7">
                <div className="info info-horizontal px-md-4">
                  <div className="icon icon-info">
                    <i className="tim-icons icon-camera-18" />
                  </div>
                  <div className="description">
                    <h3 className="info-title">Your World — Share What Matters</h3>
                    <p>
                      Post photos and videos to your feed. Our unique <strong>Blur Post</strong> feature keeps your content hidden until it reaches 98+ likes — build suspense, earn reveals.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="row-grid align-items-center mb-5 flex-row-reverse">
              <Col md="5">
                <img
                  alt="All Your Dates"
                  className="img-fluid"
                  src={canvas1_3}
                  style={{ borderRadius: "24px" }}
                />
              </Col>
              <Col md="7">
                <div className="info info-horizontal px-md-4">
                  <div className="icon icon-warning">
                    <i className="tim-icons icon-heart-2" />
                  </div>
                  <div className="description">
                    <h3 className="info-title">All Your Dates in One App</h3>
                    <p>
                      Meet new people, manage connections, and keep all your dates organised in a single place. Dating reimagined for the modern world.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="row-grid align-items-center mb-5">
              <Col md="5">
                <img
                  alt="Go Live"
                  className="img-fluid"
                  src={canvas2_5}
                  style={{ borderRadius: "24px" }}
                />
              </Col>
              <Col md="7">
                <div className="info info-horizontal px-md-4">
                  <div className="icon icon-danger">
                    <i className="tim-icons icon-video-66" />
                  </div>
                  <div className="description">
                    <h3 className="info-title">Go Live — Stories That Inspire</h3>
                    <p>
                      Broadcast live to your followers and share Au Stories that disappear after 24 hours. Connect with your audience in real-time, every time.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="row-grid align-items-center flex-row-reverse">
              <Col md="5">
                <img
                  alt="Your Person"
                  className="img-fluid"
                  src={canvas2_10}
                  style={{ borderRadius: "24px" }}
                />
              </Col>
              <Col md="7">
                <div className="info info-horizontal px-md-4">
                  <div className="icon icon-success">
                    <i className="tim-icons icon-single-02" />
                  </div>
                  <div className="description">
                    <h3 className="info-title">Your Person — Always Close</h3>
                    <p>
                      Add your closest people as <strong>Partner</strong>, <strong>Family</strong>, or <strong>Friend</strong> and stay always connected with those who matter most.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* ── Stats ── */}
        <section className="section section-lg">
          <img alt="" className="path"  src={require("assets/img/path4.png")} />
          <img alt="" className="path2" src={require("assets/img/path5.png")} />
          <img alt="" className="path3" src={require("assets/img/path2.png")} />
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">Join the Aurea Community</h1>
                <Row className="row-grid justify-content-center mt-4">
                  <Col lg="3" className="text-center">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <h4 className="info-title">10K+</h4>
                      <hr className="line-primary" />
                      <p>Active Users</p>
                    </div>
                  </Col>
                  <Col lg="3" className="text-center">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-camera-18" />
                      </div>
                      <h4 className="info-title">2M+</h4>
                      <hr className="line-warning" />
                      <p>Posts Shared Daily</p>
                    </div>
                  </Col>
                  <Col lg="3" className="text-center">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-heart-2" />
                      </div>
                      <h4 className="info-title">10M+</h4>
                      <hr className="line-success" />
                      <p>Connections Made</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        {/* ── Social Proof Cards ── */}
        <section className="section section-lg section-safe">
          <img alt="" className="path" src={require("assets/img/path5.png")} />
          <Container>
            <Row className="row-grid justify-content-between align-items-center">
              <Col md="4">
                <img
                  alt="Aurea Close Ones"
                  className="img-fluid floating"
                  src={canvas2_10}
                  style={{ borderRadius: "24px" }}
                />
                <Card className="card-stats bg-info mt-3">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">10K+</CardTitle>
                        <p className="card-category text-white">Active Users</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-default">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">4.8 ★</CardTitle>
                        <p className="card-category text-white">App Store Rating</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h3>Why people love Aurea</h3>
                  <p>
                    Aurea combines the most beloved social features into a single, beautifully designed app — fast, intuitive, and built around the connections that matter.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-check-2" />
                        </div>
                        <div className="ml-3">
                          <h6>Unique Blur Post — content unlocked by likes</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-check-2" />
                        </div>
                        <div className="ml-3">
                          <h6>Live Streaming &amp; Au Stories</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-check-2" />
                        </div>
                        <div className="ml-3">
                          <h6>Close Ones — Partner, Family, Friend</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-check-2" />
                        </div>
                        <div className="ml-3">
                          <h6>Dating &amp; Connections in One Place</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* ── Download CTA ── */}
        <section className="section section-lg" id="download">
          <img alt="" className="path"  src={require("assets/img/path4.png")} />
          <img alt="" className="path2" src={require("assets/img/path2.png")} />
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <h1>Ready to join Aurea?</h1>
                <p className="description mb-5">
                  Download the app and start sharing, connecting, and living your story today. Available on iOS and Android.
                </p>
                <div className="btn-wrapper">
                  <Button
                    className="btn-round mr-3"
                    color="info"
                    size="lg"
                    href="https://apps.apple.com/tr/app/aurea-ai-social-platform/id6755821747?l=tr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-apple mr-2" />
                    Download on the App Store
                  </Button>
                  <Button
                    className="btn-round btn-simple"
                    color="info"
                    size="lg"
                    href="https://play.google.com/store/apps/details?id=com.socialAi.social_app&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-google-play mr-2" />
                    Get it on Google Play
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <DemoFooter />
      </div>
    </>
  );
}
