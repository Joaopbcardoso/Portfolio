import React from 'react';
import {
  ProjectsSection,
  ProjectsContainer,
  Title,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
} from './styles';

const projectsData = [
  {
    title: '[Nome do Projeto 1]',
    description: '[Descrição do projeto 1] Um projeto incrível que demonstra minhas habilidades em...',
    image: 'https://picsum.photos/400/300',
    link: '#',
  },
  {
    title: '[Nome do Projeto 2]',
    description: '[Descrição do projeto 2] Outro projeto interessante que utiliza...',
    image: 'https://picsum.photos/401/300',
    link: '#',
  },
  {
    title: '[Nome do Projeto 3]',
    description: '[Descrição do projeto 3] Um projeto desafiador que implementa...',
    image: 'https://picsum.photos/402/300',
    link: '#',
  },
];

const Projects = () => {
  return (
    <ProjectsSection>
      <ProjectsContainer>
        <Title>Meus Projetos</Title>
        <ProjectsGrid>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Ver Projeto
                </a>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;