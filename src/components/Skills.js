import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase, FaGit, FaGem, FaServer, FaCogs, FaPalette } from 'react-icons/fa'; // Import colorful icons from react-icons library
import { Tilt } from 'react-tilt';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const technologies = [
    { icon: <FaHtml5 color="#E44D26" size={60} />, name: 'HTML' },
    { icon: <FaCss3 color="#1572B6" size={60} />, name: 'CSS' },
    { icon: <FaJs color="#F7DF1E" size={60} />, name: 'JavaScript' },
    { icon: <FaReact color="#61DAFB" size={60} />, name: 'React' },
    { icon: <FaNodeJs color="#339933" size={60} />, name: 'Node.js' },
    { icon: <FaDatabase color="#47A248" size={60} />, name: 'MongoDB' },
    { icon: <FaPalette color="#38B2AC" size={60} />, name: 'Tailwind CSS' },
    { icon: <FaGem color="#7952B3" size={60} />, name: 'Bootstrap' },
    { icon: <FaServer color="#00758F" size={60} />, name: 'SQL' },
    { icon: <FaCogs color="#336791" size={60} />, name: 'PostgreSQL' },
    { icon: <FaGit color="#F05032" size={60} />, name: 'Git' },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Elevating digital landscapes with expertise in various technologies for seamless and visually compelling web development.<br />Here showcasing my skill set in various domains.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {technologies.map((tech, index) => (
                  <Tilt key={index} className="item" options={{ max: 25, scale: 1.05 }}>
                    <div>
                      {tech.icon}
                      <h5 style={{ fontSize: '14px' }}>{tech.name}</h5>
                    </div>
                  </Tilt>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
