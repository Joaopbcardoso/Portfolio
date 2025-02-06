import React from 'react';
import { AboutSection, AboutContainer, AboutContent, AboutImage } from './styles';
import image from "../../assets/sobre.jpeg"

const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <AboutContent
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>About Me</h2>
          <p>
              I am a developer passionate about technology and innovation, with experience in web and mobile development.
          </p>
          <p>
              I began my studies in the development field through the Integrated Technical Course in Systems Development at SENAI, where I learned several technologies that serve as my foundation today. I still aim to explore more and greatly improve my knowledge.
          </p>
          <p>
          I am constantly seeking to learn new technologies and methodologies to create increasingly efficient and innovative solutions. I want to enhance my Back-End skills to become a skilled Full Stack developer.
          </p>
        </AboutContent>
        <AboutImage
          src={image}
          alt="Sobre mim"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AboutContainer>
    </AboutSection>
  );
};

export default About;