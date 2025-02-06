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
import fourlines from '../../assets/4lines.png'
import kanbenv from '../../assets/kanbenv.png'
import apps from '../../assets/app.png'

const projectsData = [
  {
    title: '4Lines',
    description: 'This is a sports news website focused on basketball and soccer. I applied my web development skills using React JS in this project.',
    image: fourlines,
    link: 'https://github.com/Joaopbcardoso/4lines',
  },
  {
    title: 'KanBenv (a Kanban system)',
    description: 'This project is a kanban system built with React JS, where users can sign up and create tasks, adding a description and setting their priority.',
    image: kanbenv,
    link: 'https://github.com/Joaopbcardoso/kanbenv_saep',
  },
  {
    title: 'Mobile Development',
    description: 'This project is a container for multiple mobile applications, showcasing the knowledge I gained from several React Native classes I took at SENAI.',
    image: apps,
    link: 'https://github.com/Joaopbcardoso/Desenvolvimento-de-Apps',
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
                  View Project on GitHub
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