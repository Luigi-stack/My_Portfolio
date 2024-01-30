import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardsProjects(props) {
    return (
        <>
            <Col md={6} lg={4} className="d-flex flex-column align-items-center mb-5 hoveproject">

                <Link to={props.link} target="_blank" rel="noopener noreferrer" className="link-offset-2 link-underline link-underline-opacity-0">

                    <img src={props.img} alt={props.alt} className="img_projects mb-2" width={250} />
                    <p className="d-flex justify-content-center">
                        <i className="bi bi-arrow-return-right text-white fs-4"> {props.description}</i>
                    </p>
                </Link>

            </Col>
        </>
    )
}

export default CardsProjects;