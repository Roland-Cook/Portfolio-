import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import reactImg from "../assets/img/skillsImg/reactjs.png"
import JsImg from "../assets/img/skillsImg/javascript.png"
import TsImg from "../assets/img/skillsImg/typescript.png"
import pyImg from "../assets/img/skillsImg/python.png"
import twImg from "../assets/img/skillsImg/tailwind.png"
import bs from "../assets/img/skillsImg/bootstrap.png"
import sass from "../assets/img/skillsImg/sass.png"
import docker from "../assets/img/skillsImg/docker.png"
import next from "../assets/img/skillsImg/next-icon.png"
import git from "../assets/img/skillsImg/git.png"
import html from "../assets/img/skillsImg/html.png"
import css from "../assets/img/skillsImg/css.png"
import django from "../assets/img/skillsImg/django.png"
import fapi from "../assets/img/skillsImg/fastapi.png"


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      
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
                                <img src={html} alt="img" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="img" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={JsImg} alt="img" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={reactImg} alt="img" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={next} alt="img" />
                                <h5>Next.js</h5>
                            </div>
                            <div className="item">
                                <img src={bs} alt="img" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={pyImg} alt="img" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={django} alt="img" />
                                <h5>Django</h5>
                            </div>
                            <div className="item">
                                <img src={fapi} alt="img" />
                                <h5>FastApi</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="img" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={docker} alt="img" />
                                <h5>Docker</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="img" />
    </section>
  )
}
