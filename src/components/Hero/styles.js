import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 100vw;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

export const TextContent = styled.div`
  flex: 1;
  margin-right: 10vw;
`;

export const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--accent);
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const TypingEffect = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--text);
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid var(--accent);
  animation: typing 6s steps(22) infinite, blink 0.6s step-end infinite;

  @keyframes typing {
    0% {
      width: 0%;
    }
    50% {
      width: 30%;
    }
    100% {
      width: 0%;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--text);
  opacity: 0.8;
  max-width: 600px;
  margin-bottom: 2rem;
`;

export const ProfileImage = styled(motion.img)`
  width: 450px;
  height: 450px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--accent);
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.3);
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

