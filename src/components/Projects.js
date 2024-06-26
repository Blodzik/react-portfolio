import { ProjectCard } from './ProjectCard';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () => {

    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];

    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                        {({ isVisible }) => (
                                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                                    <h2>Projects</h2>
                                    <p>tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie</p>
                                    <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey='first'>Tab One</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey='first'>
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard key={index} {...project} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey='second'>Loren Ipsum</Tab.Pane>
                                            <Tab.Pane eventKey='third'>Loren Ipsum</Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            )}
                        </TrackVisibility>
                        
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} />
        </section>
    );
}