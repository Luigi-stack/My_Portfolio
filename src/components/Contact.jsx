import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from 'aos';


function Contact() {

    AOS.init();

    return (
        <>
            <Container id="contact" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500">
                <Row>
                    <Col>
                        <h2 className="sm mb-5 d-md-none">Reach Out
                            <br />
                            to Me
                        </h2>

                        <h2 className="md my-5 d-none d-md-block d-lg-none">Reach Out
                            <br />
                            to Me
                        </h2>

                        <h2 className="lg my-5 d-none d-lg-block d-xl-none">Reach Out
                            <br />
                            to Me
                        </h2>

                        <h2 className="xl my-5 d-none d-xl-block">Reach Out
                            <br />
                            to Me
                        </h2>

                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col sm={12} md={4} className="d-flex flex-column align-items-center">
                        <h3>Address</h3>
                        <Link to="#" className="text-secondary fs-5 link-offset-2 link-underline link-underline-opacity-0" target="_blank" rel="noopener noreferrer">Bruxelles</Link>
                    </Col>

                    <Col sm={12} md={4} className="d-flex flex-column align-items-center">
                        <h3>Email</h3>
                        <Link to="mailto: luigi_iossa@hotmail.com" className="text-secondary fs-5 link-offset-2 link-underline link-underline-opacity-0">luigi_iossa@hotmail.com</Link>
                    </Col>

                    <Col sm={12} md={4} className="d-flex flex-column align-items-center">
                        <h3>Phone</h3>
                        <Link to="tel:+393801520069" className="text-secondary fs-5 link-offset-2 link-underline link-underline-opacity-0">IT +39 3801520069</Link>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-end my-2">
                        <p>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <a href="https://api.whatsapp.com/send/?phone=393801520069&text&type=phone_number&app_absent=0" className="link-offset-2 link-underline link-underline-opacity-0"><i className="bi bi-whatsapp text-white fs-5"> Chat on WhatsApp</i></a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact;
