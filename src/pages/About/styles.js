import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
`;

export const AboutContainer = styled.div`
  max-width: 100wh;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const AboutContent = styled(motion.div)`
  h2 {
    font-size: 2.5rem;
    color: var(--accent);
    margin-bottom: 2rem;
    text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
  }

  p {
    font-size: 1.1rem;
    color: var(--text);
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
`;

export const AboutImage = styled(motion.img)`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.2);
  margin: 100px 20vw;
  display: block;
`;