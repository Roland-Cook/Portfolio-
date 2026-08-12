import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg6 from "../assets/img/Create-pro.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Cosmos",
      description: "This application was built to model planets, planetary systems and the overall navigation of celestial bodies.",
      imgUrl: projImg1,
      link: "https://github.com/Roland-Cook/Cosmos"
    },
    {
      title: "JumpSched",
      description: "A full stack app that allows users to book skydives and create accounts to manage their scheduled jumps.",
      imgUrl: projImg2,
      link: "https://github.com/Roland-Cook/JumpSched"
    },
    {
      title: "GarageGuardian",
      description: "This application was built to encompass the sales side and the service side of a car dealership.",
      imgUrl: projImg4,
      link: "https://github.com/Roland-Cook/GarageGuardian"
    }

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2>Projects</h2>
                <p>Welcome to my portfolio. Here, you'll find a variety of projects that showcase my skills and dedication. Explore my projects and don't hesitate to contact me with any questions or opportunities</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
