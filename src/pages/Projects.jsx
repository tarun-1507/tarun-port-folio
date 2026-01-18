import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import Weather from "../assets/projects/Weather.png";
import jobportal from "../assets/projects/job-portal.png";
import Tesla from "../assets/projects/Tesla.png";
import Resume from "../assets/projects/Resume.png";
import Bill from "../assets/projects/Bill.png";
import pg from "../assets/projects/pg.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobportal}
              isBlog={false}
              title="Teck Jobs"
              description="Smart, specialized portal built to connect you with your dream job in the modern professional landscape.Our core mission is to empower professionals by providing the tools for a successful career, including an intuitive Job Dashboard to track every application status in one place. Stop wasting time scrolling through generic listings; start leveraging TeckJobs to find a great company that launches your good life.It's the essential platform designed to make your journey from search to successful hire as efficient and simple as possible."
              demoLink="https://teck-job.netlify.app/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tesla}
              isBlog={false}
              title="Tesla catalog"
              description="This project involved engineering an interactive, high-fidelity hero slider component using React to showcase various Tesla vehicle models and specifications. The core implementation leveraged react-transition-group to manage complex, directional slide animations and smooth transitions between car models. I utilized advanced CSS/Sass and dynamic CSS variables to create a custom theming engine, allowing the button color, car shadow, and background glow to instantly update with the active slide."
              demoLink="https://tesla-catalogue.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Personal Portfolio"
              description="This project involved designing and developing a personal portfolio to serve as a consolidated showcase of my technical skills, projects, and professional experience. The site was built using a modern front-end framework like React demonstrating proficiency in building component-based, maintainable applications. I ensured a flawless user experience across all devices by implementing a fully responsive design with custom [e.g., CSS Modules or Tailwind CSS] for cross-browser compatibility."
              demoLink="https://tarunb-portfolio.netlify.app/"
            />
          </Col>

          
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="True Weather"
              description="True Weather gives you the most accurate forecast for your exact location, eliminating surprises. Our real-time radar and minute-by-minute updates ensure you're always prepared for rain or shine. Key features include Geolocation API integration for immediate local weather and a search function for global locations, displaying data like temperature, humidity, and wind speed."
              demoLink="https://true-weather-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Resume}
              isBlog={false}
              title="Resume Engineer"
              description="Reusme Engineer is full-featured web application,built with React.Js, that manages complex user input across sections like Experience, Skills, and Projects. The application features an intuitive user interface that allows users to instantly preview and select from a diverse library of modern, pre-designed resume templates."
              demoLink="https://resume-engineer.netlify.app/"
            />
          </Col>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bill}
              isBlog={false}
              title="Bill Maker"
              description=" This project is a Dynamic Invoicing System engineered to provide immediate billing solutions for businesses. The application's core functionality is the instantaneous generation of professional invoices and bills. A key feature was integration of a PDF generation module to allow users to instantly export and download professional invoices for client distribution."
              demoLink="https://bill-makers.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects