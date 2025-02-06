import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import {
  ContactSection,
  ContactContainer,
  Title,
  ContactContent,
  ContactInfo,
  SocialLinks,
  ContactForm,
} from './styles';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ContactSection>
      <ContactContainer>
        <Title>Contact</Title>
        <ContactContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ContactInfo>
            <p>Let's talk! Get in touch through social media.</p>
            <SocialLinks>
              <a href="https://github.com/Joaopbcardoso " target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/joao-pedro-benvenutti/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:joaobenvenutti07@gmail.com">
                <FaEnvelope />
              </a>
              <a href="https://www.instagram.com/joaobenvenutti_/">
                <FaInstagram />
              </a>
            </SocialLinks>
          </ContactInfo>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;