import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import NOVA from "../assets/img/N.O.V.A.jpg";
import WeatherApp from "../assets/img/Weather_app.jpg";
import Music from "../assets/img/Music_player.jpg";
import Stack from "../assets/img/stack-clone.jpg";
import Snake from "../assets/img/snake.jpg";
import Calculator from "../assets/img/calculator.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { StackOverflow } from "react-bootstrap-icons";

export const Projects = () => {

  const project_tab1 = [
    {
      title: "NOVA",
      description: "UI of a voting app",
      imgUrl: NOVA,
      githublink:"https://github.com/KaranMegha/NOVA",
      exlink:"https://karanmegha.github.io/NOVA/",
    },
    {
      title: "Weather App",
      description: "A weather app",
      imgUrl: WeatherApp,
      githublink:"https://github.com/KaranMegha/Weather_app",
      exlink:"https://karanmegha.github.io/Weather_app/",
    },
    {
      title: "Music Player",
      description: "A music player created with react",
      imgUrl: Music,
      githublink:"https://github.com/KaranMegha/react-music-app",
      exlink:"https://react-music-app-karan.netlify.app/",
    },
    {
      title: "Stack-Overflow-Clone",
      description: "stack-Overflow-Clone",
      imgUrl: Stack,
      githublink:"https://github.com/KaranMegha/new_weather_app",
      exlink:"https://newweather.netlify.app/",
    },
    {
      title: "Snake Game",
      description: "A snake game",
      imgUrl: Snake,
      githublink:"https://github.com/KaranMegha/Snake_game",
      exlink:"https://karanmegha.github.io/Snake_game/",
    },
    {
      title: "React Calculator",
      description: "Calculator made with react",
      imgUrl: Calculator,
      githublink:"https://github.com/KaranMegha/React_calculator",
      exlink:"https://calculator-react99.herokuapp.com/",
    },
  ];
  // const project_tab2 = [
  //   {
  //     title: "NOVA",
  //     description: "UI of a voting app",
  //     imgUrl: projImg1,
  //     githublink:"https://github.com/KaranMegha/NOVA",
  //     exlink:"https://karanmegha.github.io/NOVA/",
  //   },
  //   {
  //     title: "Stack-Overflow -Clone",
  //     description: "A weather app",
  //     imgUrl: projImg2,
  //     githublink:"https://github.com/KaranMegha/stack-overflow-clone",
  //     exlink:"https://stackclone1.netlify.app/",
  //   },
  //   {
  //     title: "Music Player",
  //     description: "Design & Development",
  //     imgUrl: projImg3,
  //     githublink:"https://github.com/KaranMegha/react-music-app",
  //     exlink:"https://react-music-app-karan.netlify.app/",
  //   },
  //   {
  //     title: "Weather App",
  //     description: "Design & Development",
  //     imgUrl: projImg1,
  //     githublink:"https://github.com/KaranMegha/new_weather_app",
  //     exlink:"https://newweather.netlify.app/",
  //   },
  //   {
  //     title: "Stack-Overflow UI clone",
  //     description: "Design & Development",
  //     imgUrl: projImg2,
  //     githublink:"",
  //     exlink:"",
  //   },
  //   {
  //     title: "Tindog",
  //     description: "UI of a tinder like website",
  //     imgUrl: projImg3,
  //     githublink:"",
  //     exlink:"",
  //   },
  // ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          project_tab1.map((project, index) => {
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
                        {/* {
                          project_tab2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        } */}
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
