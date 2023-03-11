import React from 'react';
import './css/Card.css';
function Card(props) {
  return (
    <div className="card mb-4">
      <img src={props.image} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <div className="card-links d-flex justify-content-around">
          <a href={props.liveAppUrl} target="_blank" rel="noopener noreferrer" className="btn btn-live btn-dark">Live App</a>
          <a href={props.githubRepoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-github btn-success">GitHub Repo</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
