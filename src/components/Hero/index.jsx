import React from 'react';
import {
  HeroSection,
  HeroContent,
  TextContent,
  Title,
  Description,
  TypingEffect,
  ProfileImage
} from './styles';
import capa from "../../assets/capa.jpg"

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <TextContent>
          <Title>João Pedro Benvenutti Vidal Cardoso</Title>
          <TypingEffect>System Developer</TypingEffect>
          <Description>
            I am a Developer passionate about creating innovative solutions and 
            exceptional digital experiences. Specialized in React, JavaScript, 
            and modern web development.
          </Description>
        </TextContent>
        <ProfileImage
          src={capa} 
          alt="Profile picture"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
