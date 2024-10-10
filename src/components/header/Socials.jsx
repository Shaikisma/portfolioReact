import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';

const Socials = () => {
  return (
    <div className='header__socials'>
       <a href="https://www.linkedin.com/in/shaik-ismail-84b786304" target='_blank'><BsLinkedin/></a>
       <a href="https://github.com/Shaikisma" target='_blank'><BsGithub/></a>
    </div>
  );
}

export default Socials;