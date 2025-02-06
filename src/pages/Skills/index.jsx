import React from 'react';
import { FaReact, FaJs, FaDatabase, FaTools } from 'react-icons/fa';
import { SkillsSection, SkillsContainer, Title, SkillsGrid, SkillCard } from './styles';

const skillsData = [
  {
    title: 'Front-end',
    icon: <FaReact />,
    description: 'React, JavaScript, HTML5, CSS3, Styled Components',
  },
  {
    title: 'Back-end',
    icon: <FaJs />,
    description: 'Node.js, Express, RESTful APIs',
  },
  {
    title: 'Banco de Dados',
    icon: <FaDatabase />,
    description: 'SQL and some experience with MongoDB',
  },
  {
    title: 'Ferramentas',
    icon: <FaTools />,
    description: 'Git, VS Code, Figma, pgAdmin 4, Postman, Agile Methodologies',
  },
];

const Skills = () => {
  return (
    <SkillsSection>
      <SkillsContainer>
        <Title>My Skills</Title>
        <SkillsGrid>
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;