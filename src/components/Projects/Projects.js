import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="M3 Analytics App"
              description="M3 Analytics is a comprehensive management system designed specifically for the civil construction industry."
              ghLink="https://github.com/KashishGoell/m3_analytics"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Drug Inventory and Supply chain Tracking System App"
              description="With the aim to provide Right Quantity of Right Product on Right Place on Right Time in Right Condition at Right Cost for Right People and also to streamline the distribution of drugs to institutions and ensure availability of drugs at all times, a new, Innovative system named Drug Inventory and supply chain Tracking system."
              ghLink="https://github.com/KashishGoell/MediTrack"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Avengers Assemble"
              description="This is a basic flutter marvel avengers characters recognizer app using tensorflow lite image classifications machine learning - deep learning algorithms."
              ghLink="https://github.com/KashishGoell/avengers_assemble"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Blood Card"
              description="BLOOD CARD is cross platform mobile application that is developed using technologies like Flutter/Dart for frontend and Firebase for data storage. The sole goal of this application is to make blood donation resourceful and accessible all round the world."
              ghLink="https://github.com/KashishGoell/BLOOD-CARD"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Invisible Man using Mask-RCNN"
              description="This project explores the innovative use of Mask R-CNN, a deep learning-based model for instance segmentation, to achieve the illusion of invisibility. The primary objective is to detect and segment a person within an image or video frame, then seamlessly remove or replace them with the surrounding background, rendering them invisible."
              ghLink="https://github.com/sharmaji27/Invisible-Man"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
