import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <a href='https://twitter.com/KillianPasche' target='_blank' rel="noreferrer">
    <div>
      <BsTwitter/>
    </div>
    </a>
    <a href='https://github.com/PascheK/' target='_blank' rel="noreferrer">
    <div>
      <BsGithub/>
    </div>
    </a>
    <a href='https://www.instagram.com/k.pasch7/' target='_blank' rel="noreferrer">
    <div>
      <BsInstagram/>
    </div>
    </a>
  </div>
);

export default SocialMedia;