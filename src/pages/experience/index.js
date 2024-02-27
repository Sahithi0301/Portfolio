import React from 'react';

import "./styles.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col } from 'reactstrap';



export function Experience() 
  {
   
    const meta = {
        title: 'Experience',
        description: 'A list of my work experience '
      };

      return (
        <HelmetProvider>
          <Container className="Experience-header">
          <Helmet>
         <meta charSet="utf-8" />
         <title> {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
            <Row className="mb-5 mt-3 pt-md-3">
              <Col lg="8">
                <h1 className="display-4 mb-4"> {meta.title} </h1>{" "}
                <hr className="t_border my-4 ml-0 text-left" />
              </Col>
            </Row>
            <div className="mb-5 po_item_ho">
              <h2>Internships</h2>
              <div>
              <div className="row">
              <div className="col-sm-6"  style={{ marginBottom: '30px' }}>
              <div className="card card-hover-shadow">

                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      <h5>Software Developer Intern</h5>
                        <p>RightData <i>06/2023 - 08/2023</i></p>
                    </div>       
                      <p className="card-text">Developed RightData's Dextrus product by refining the user interface of the Dextrus product, leveraging React libraries & CSS styling, building API’s, working alongside a cross-functional team and leveraging ML methodologies to enhance processing of data.</p>
                      <p> Lead comprehensive integration, with a focus on rigorous automation procedures to ensure product reliability, coupled with creation of deliverables and a systematic approach to managing codebase using Git. </p>        
                  </div>
                </div>
              </div>
              </div>
              <div className="col-sm-6">
              <div className="card card-hover-shadow">

                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      <h5>Data Science Intern</h5>
                        <p>Technocolabs <i>06/2021 - 07/2021</i></p>
                    </div>       
                      <p className="card-text">Reduced the risk of the lending club by 6% using a Machine learning algorithm and deployed the model using Heroku.
                        Got to learn how to deal with large datasets and deployment of a model.</p>  
                        <p>Optimized company's decision-making process by fostering financial stability and decreasing loan default rates,
thereby resulting in increased credit accessibility to existing and prospective borrowers.</p>      
                  </div>
                </div>
                </div>
              </div>
              <div className="col-sm-6">
              <div className="card card-hover-shadow">

                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      <h5>Machine Learning Intern</h5>
                        <p>Smartbridge <i>04/2020 - 05/2020</i></p>
                    </div>      
                  <p className="card-text">Led a team of 3 trainees to design & develop an interactive web application that predicts user’s car performance.</p>
                  <p >Used decision tree algorithm with accuracy 91.25% and learnt more of data visualization and data handling techniques. </p>
        
                </div>
                </div>
               </div>
            </div>
              </div>
              </div>
              </div>
              
              <div className="mb-5 po_item_ho">
                    <h2>Academic Experience</h2>
                    <div>
                        <div className="row">
                            <div className="col-sm-6">
                            <div className="card card-hover-shadow">

                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h5>Boston University </h5>
                                            <p className="card-text">
                                            <p>Teaching Assistant   <i>09/08/2023 - Present</i></p> 
                                                           
                                        </p>
                                        </div>

                                        <p>
                                          Assisting and evaluating the work of 60 students by facilitating discussion session and office hours by providing constructive feedback and suggestions for the courses Cloud Computing (GCP) and Programming for Data Science (Python, Rust).
                                        </p>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>


              

              <div className="mb-5 po_item_ho">
              <h2>Positions of responsibility</h2>
              <div>
              <div className="row">
              <div className="col-sm-6">
              <div className="card card-hover-shadow">

                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      <h5>Google Developer Student Club</h5>
                        <p>DSC Core Team <i>2021 - 2021</i></p>
                    </div>       
                      <p className="card-text">Served as an editor to the team and organized various events like Workshops, 
                      college-level Hackathons, and helped juniors in development and coding. </p>        
                  </div>
                </div>
              </div>
              </div>
              <div className="col-sm-6">
              <div className="card card-hover-shadow">

                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      <h5>GirlScript Foundation - Visakhapatnam Chapter </h5>
                        <p>Campus Hero   <i>2020 - 2021</i></p>
                    </div>      
                  <p className="card-text">Organized various college-level events like coding competitions and also hosted various 
                  community-level webinars. GirlScript provided me a platform to connect with many like-minded people and develop 
                  my leadership qualities.</p>
        
                </div>
                </div>
               </div>
            </div>
              </div>
              </div>
              </div>
            
          </Container>
        </HelmetProvider>
      );
    }
    
    export default Experience;
    
    
    
    
    
    
 