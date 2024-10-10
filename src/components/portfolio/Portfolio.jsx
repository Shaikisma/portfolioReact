import React from 'react';
import './Portfolio.css';
import JPMC from '../../assests/iphone00.png';
import ICANON from '../../assests/todolist2.png';

const projects = [
{ 
    id: 1,
    image: JPMC,
    title: 'iPHONE-14-lANDING-PAG.',
    
    description: 'Website similar to Apple iPhone 14s landing page which is built using React.js, WebGi, Three.js, GSAP ScrollTrigger..'
},
{ 
    id: 2,
    image: ICANON,
    title: 'ToDoList',
    
    
    description: ' Todo list using REact-js, which is device-specific, working on browsers local storage.'
},
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
           {projects.map((project) => {
            return (
                <article key={project.id} className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={project.image} alt={project.title} />
                    </div> 
                    <h3>{project.title}</h3>
                    <h5>{project.position}</h5>
                    <h6>{project.date}</h6>
                    <small className='portfolio__desc'>
                        {project.description}
                    </small>
               </article>
            )
            }) 
            }
        </div>
    </section>
  );
}

export default Portfolio;