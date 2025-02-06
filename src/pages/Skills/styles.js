import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillsSection = styled.section`
  display: flex;
  align-itens: center;
  jus
  min-height: 100vh;
  padding: 100px 0;
  background: linear-gradient(180deg, var(--background) 0%, rgba(10, 25, 47, 0.9) 100%);
`;

export const SkillsContainer = styled.div`
  max-width: 100vw;
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

export const SkillsGrid = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const SkillCard = styled(motion.div)`
  background: rgba(10, 25, 47, 0.5);
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(100, 255, 218, 0.2);
    border-color: var(--accent);
  }

  h3 {
    color: var(--accent);
    margin: 1rem 0;
  }

  .icon {
    font-size: 3rem;
    color: var(--accent);
  }

  p {
    color: var(--text);
    opacity: 0.8;
    max-width: 255px
  }
`;