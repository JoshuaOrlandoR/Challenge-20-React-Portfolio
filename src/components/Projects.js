import React from 'react';
import Card from './Card';
import './css/Projects.css';
// Define some example data for the cards
const cardData = [
  {
    id: 1,
    title: 'eVie',
    image: 'https://yerimechoi.github.io/eVie/Assets/evie.png',
    description: 'eVie is an electic vehicle charger location tool. It allows users to search for charging stations in their area and provide info on them!',
    liveAppUrl: 'https://yerimechoi.github.io/eVie/',
    githubRepoUrl: 'https://github.com/yerimechoi/eVie'
  },
  {
    id: 2,
    title: 'pic-nic',
    image: 'https://cdn.midjourney.com/95b5453d-8c16-4368-ac0e-d221889b68ae/grid_0.png',
    description: 'pic-nic is a social media esque application centered around discovering and sharing food. Users can upload their own recipies, or browse for inspiration!',
    liveAppUrl: 'https://example.com',
    githubRepoUrl: 'Placeholder'
  },
  {
    id: 3,
    title: 'JACE',
    image: 'https://cdn.midjourney.com/95b5453d-8c16-4368-ac0e-d221889b68ae/grid_0.png',
    description: 'Jace is a MERN full stack application meant to give restauraunts the ability to easily process and oversee customer orders!',
    liveAppUrl: 'https://jace1971.herokuapp.com/',
    githubRepoUrl: 'https://github.com/cdennis27/JACE'
  },
  {
    id: 4,
    title: 'Placeholder',
    image: 'https://i.pinimg.com/736x/4d/79/99/4d7999a51a1a397189a6f98168bcde45--layout-design-ui-design.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    liveAppUrl: 'https://example.com',
    githubRepoUrl: 'Placeholder'
  },
  {
    id: 5,
    title: 'Placeholder',
    image: 'https://i.pinimg.com/originals/86/c0/8b/86c08b1adc64b6a3b2a0476ffc15ff3b.jpg',
    description: 'The placiest holder that ever placeholdered. This is a placeholder. This is not a real project! Eventually a real project will go here. But not right now. >:)',
    liveAppUrl: 'https://example.com',
    githubRepoUrl: 'Placeholder'
  },
  {
    id: 6,
    title: 'Placeholder',
    image: 'https://i.pinimg.com/736x/4d/79/99/4d7999a51a1a397189a6f98168bcde45--layout-design-ui-design.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    liveAppUrl: 'https://example.com',
    githubRepoUrl: 'Placeholder'
  }
];

function Projects() {
  return (
    <div className="container">
      <h2 className=" projectTitle text-center mb-3 mt-2">Projects</h2>
      <div className="row no-gutters">
        {cardData.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card
              title={card.title}
              image={card.image}
              description={card.description}
              liveAppUrl={card.liveAppUrl}
              githubRepoUrl={card.githubRepoUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
