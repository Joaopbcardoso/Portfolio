import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
`;

export const ProjectsContainer = styled.div`
  max-width: 1200px;
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

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const ProjectCard = styled(motion.div)`
  background: rgba(10, 25, 47, 0.5);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(100, 255, 218, 0.2);
    border-color: var(--accent);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProjectContent = styled.div`
  padding: 1.5rem;

  h3 {
    color: var(--accent);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text);
    opacity: 0.8;
    margin-bottom: 1rem;
  }

  a {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--accent);
    color: var(--background);
    border-radius: 5px;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
      background: transparent;
      color: var(--accent);
      box-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
    }
  }
`;