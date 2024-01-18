// Projects.jsx
import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/project-img1.jpg';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.jpeg';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'WebExp',
      description: 'Freelancer Portal website',
      imgUrl: projImg1,
      projectLink: 'https://github.com/TUSHARG146/WEBEXP1', // Add your project link here
    },
    {
      title: 'Infopedia',
      description: 'More than a news app',
      imgUrl: projImg2,
      projectLink: 'https://github.com/TUSHARG146/INFONATION-master', // Add your project link here
    },
    {
      title: 'DotConnect',
      description: 'Handsign Detection',
      imgUrl: projImg3,
      projectLink: 'https://example.com/dotconnect', // Add your project link here
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate_animated animate_fadeIn' : ''}>
                  <h2>Projects</h2>
                  <p>
                    Following projects showcase my skills and experience through real-world examples of my work. Each
                    project is briefly described with links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies, and manage projects
                    effectively.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? 'animate_animated animate_slideInUp' : ''}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Coming Soon...</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Coming Soon...</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
