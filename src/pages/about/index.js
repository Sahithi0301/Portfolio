import React, { useEffect, useRef } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import '/Users/sahithiarekatla/Desktop/Web term project/react-portfolio/src/lib/ionicons/css/ionicons.min.css';


import {
  dataabout,
  meta,
} from "../../content_option";
import profileImage from "./sahithi.jpg";


export const About = function () {
  useEffect(() => {
    const servicesCarousel = $(".services-carousel");
    if (servicesCarousel.length) {
      servicesCarousel.owlCarousel({
        loop: true,
        items:3,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true, 
        autoplayTimeout: 3000, 
        
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          900: {
            items: 4,
          },
        },
      });
    }
  }, []);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <img src={profileImage} alt="Profile" className="color_sec py-4 profile-image" />
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
       
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Skills & Interests</h3>
          </Col>
          <div id="services">
    <div className="container">

        <div className="services-carousel owl-theme">

          <div className="services-block">

            <i className="ion-ios-bookmarks-outline"></i>
            <span>WEB DEVELOPER</span>
            <p className="separator"> I have experience building fully functional web applications using a range of technologies including React, HTML, CSS, JavaScript and Bootstrap.</p>

          </div>

          <div className="services-block">

            <i className="ion-ios-monitor-outline"></i>
            <span>PROGRAMMER</span>
            <p className="separator"> Possess a strong proficiency in problem-solving through programming languages such as C++, Python, Java and C. My expertise is honed through  participation in various coding contests, and consistent practice in platforms such as LeetCode.</p>

          </div>

          

          <div className="services-block">

            <i className="ion-ios-lightbulb-outline"></i>
            <span>MACHINE LEARNING DEVELOPER</span>
            <p className="separator">  Worked with various classification and regression algorithms, and possess expertise in data preprocessing and visualization techniques.</p>

          </div>

          <div className="services-block">

            <i className="ion-ios-fastforward-outline"></i>
            <span>SOFT SKILLS</span>
            <p className="separator"> Organized and hosted numerous events, showcasing my strong leadership and organizational skills..</p>

          </div>

          <div className="services-block">

            <i className="ion-ios-paper-outline"></i>
            <span>SQL</span>
            <p className="separator">Possess a deep understanding of SQL concepts and can write complex queries with ease. I have built fully functional data warehouses and have a strong understanding of database design principles. My proficiency in SQL has allowed me to optimize database performance and ensure data integrity.</p>

          </div>

        </div>

    </div>

  </div>
        </Row>
       
      </Container>
    </HelmetProvider>
  );
};

