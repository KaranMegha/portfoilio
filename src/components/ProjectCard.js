import { Col } from "react-bootstrap";
import github from "../assets/img/github.png";
import link from "../assets/img/external-link.png"

export const ProjectCard = ({ title, description, imgUrl, githublink, exlink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="im"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="link">
          <a href={githublink}><img className="linkimg" src={github} alt="github link" /></a>
          <a href={exlink}><img className="linkimg" src={link} alt="" /></a>
          </div>
        </div>
      </div>
    </Col>
  )
}
