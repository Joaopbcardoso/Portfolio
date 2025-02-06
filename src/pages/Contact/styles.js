import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  background: linear-gradient(0deg, var(--background) 0%, rgba(10, 25, 47, 0.9) 100%);
`;

export const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--accent);
  text-align: center;
  margin-bottom: 3rem;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
`;

export const ContactContent = styled(motion.div)`
  background: rgba(10, 25, 47, 0.5);
  border-radius: 10px;
  padding: 2rem;
  border: 1px solid rgba(100, 255, 218, 0.1);
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.1);
`;

export const ContactInfo = styled.div`
  margin-bottom: 2rem;
  text-align: center;

  p {
    color: var(--text);
    margin-bottom: 1rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;

  a {
    color: var(--accent);
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      text-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
    }
  }
`;

export const ContactForm = styled.form`
  display: grid;
  gap: 1rem;

  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    background: rgba(10, 25, 47, 0.3);
    border: 1px solid rgba(100, 255, 218, 0.2);
    border-radius: 5px;
    color: var(--text);
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: 0 0 10px rgba(100, 255, 218, 0.2);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }

  button {
    padding: 1rem 2rem;
    background: var(--accent);
    color: var(--background);
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: transparent;
      color: var(--accent);
      box-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
    }
  }
`;