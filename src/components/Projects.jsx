import { Container, Row, Col } from "react-bootstrap";
import netflixCloneImg from '../assets/netflix_clone.png';
import spotifyCloneImg from '../assets/spotify_clone.png';
import CardsProjects from "./CardsProjects";
import vitalCareImg from '../assets/vitalCareImg.png';
import solisRestaurantImg from '../assets/solisRestaurantImg.png';


function Projects() {

    return (
        <>
            <Container id="projects">
                <Row className="mb-5">

                    <Col>
                        <h2 className="sm d-md-none">My Projects</h2>

                        <h2 className="md d-none d-md-block d-lg-none">My Projects</h2>

                        <h2 className="lg d-none d-lg-block d-xl-none">My Projects</h2>

                        <h2 className="xl d-none d-xl-block">My Projects</h2>
                    </Col>
                </Row>

                <Container>
                    <Row>

                        <CardsProjects
                            link='https://spotify-clone-luigi-iossa.netlify.app'
                            alt='Spotify img'
                            img={spotifyCloneImg}
                            description='Spotify Clone'
                        />

                        <CardsProjects
                            link='https://netflix-clone2-luigi-iossa.netlify.app'
                            alt='Netflix img'
                            img={netflixCloneImg}
                            description='Netflix Clone'
                        />

                        <CardsProjects
                            link='https://vitalcare-clinic.netlify.app'
                            alt='Vital Care Clinic home page'
                            img={vitalCareImg}
                            description='Vital Care Clinic'
                        />

                        <CardsProjects
                            link='https://solis-italian-food-and-wine.netlify.app/home'
                            alt='Solis restaurant home page'
                            img={solisRestaurantImg}
                            description='Solis Restaurant'
                        />

                    </Row>

                </Container>
            </Container>
        </>
    )
}

export default Projects;