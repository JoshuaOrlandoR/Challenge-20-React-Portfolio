import React from 'react';
import Card from './Card';
import './css/Projects.css';
// Define some example data for the cards
const cardData = [
  {
    id: 1,
    title: 'Placeholder',
    image: 'https://via.placeholder.com/350x150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    liveAppUrl: 'https://example.com',
    githubRepoUrl: 'Placeholder'
  },
  {
    id: 2,
    title: 'Placeholder',
    image: 'https://via.placeholder.com/350x150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    liveAppUrl: 'https://example.com',
    githubRepoUrl: 'Placeholder'
  },
  {
    id: 3,
    title: 'Placeholder',
    image: 'https://via.placeholder.com/350x150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    liveAppUrl: 'https://example.com',
    githubRepoUrl: 'Placeholder'
  },
  {
    id: 4,
    title: 'Placeholder',
    image: 'https://via.placeholder.com/350x150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    liveAppUrl: 'https://example.com',
    githubRepoUrl: 'Placeholder'
  },
  {
    id: 5,
    title: 'Placeholder',
    image: 'https://via.placeholder.com/350x150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    liveAppUrl: 'https://example.com',
    githubRepoUrl: 'Placeholder'
  },
  {
    id: 6,
    title: 'Placeholder',
    image: 'https://via.placeholder.com/350x150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    liveAppUrl: 'https://example.com',
    githubRepoUrl: 'Placeholder'
  }
];

function Projects() {
  return (
    <div className="container">
      <h2 className="text-center mb-4 mt-3">Projects</h2>
      <div className="row">
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
