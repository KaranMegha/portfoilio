import Front from "../assets/img/boy.png";
import Designer from "../assets/img/ux.png";
import Backend from "../assets/img/coding.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={Front} alt="front" />
                                <h5>Designer</h5>
                            </div>
                            <div className="item">
                                <img src={Backend} alt="backend" />
                                <h5>Front-end</h5>
                            </div>
                            <div className="item">
                                <img src={Designer} alt="designer" />
                                <h5>Back-end</h5>
                            </div>
                  
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
