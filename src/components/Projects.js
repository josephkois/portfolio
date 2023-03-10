import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import sfsuhub from "../assets/img/sfsuhub.png";
import HTTPserver from "../assets/img/httpserver.png";
import saw from "../assets/img/saw.gif";
import artemis from "../assets/img/Artemis.png";
import filesystem from "../assets/img/filesystem.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projectsBackEnd= [
    {
        title: "Artemis",
        description: "A miniamlist, modular, bug tracking and ticket managing application built with Typescript",
        imgUrl: artemis,
    },
    {
        title: "Linux File System",
        description: "A linux file system implementation written in C, supports basic operations like ls, cd, ",
        imgUrl: filesystem,
    },
    {
        title: "HTTP Web Server",
        description: "A simple Java web server that will hand requests and responses.",
        imgUrl: HTTPserver,
    },
    ];

    const projectsFrontEnd = [
        {
            title: "Artemis",
            description: "A miniamlist, modular, bug tracking and ticket managing application built with Typescript",
            imgUrl: artemis,
        },
        {
            title: "Gator Companion",
            description: "Gator Companion helps students find housing, events, and used textbooks at SFSU",
            imgUrl: sfsuhub,
        },
    ]

    const projectsGames = [
        {
            title: "Steel & Wine",
            description: "A competitive arena battler where opponents venture to an Arena to fight for glory in a Fantasy RPG setting",
            imgUrl: saw,
        },
    ]

    return (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col size={12}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                <h2>Projects</h2>
                                <p>Many projects have been completed using a multitude of tools, frameworks, and languages such as: <br></br> Java, C, C++, HTML/CSS, Javascript, Typescript, 
                                React, NodeJS, ExpressJS, PostgreSQL, mySQL, Figma, Git, & Postman.</p>
                                <p><a href="https://github.com/josephkois">github.com/josephkois</a> for a more detailed look</p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Back End</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Front End</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Games</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                {
                                                    projectsBackEnd.map((project, index) => {
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
                                    <Tab.Pane eventKey="second">
                                    <Row>
                                                {
                                                    projectsFrontEnd.map((project, index) => {
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
                                    <Tab.Pane eventKey="third">
                                    <Row>
                                                {
                                                    projectsGames.map((project, index) => {
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
    </section>
    )
}