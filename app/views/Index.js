import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Jiayi Bao</Link></h2>
          <p></p>
        </div>
      </header>
      <p> 
      I am a PhD Candidate in <a href="https://bepp.wharton.upenn.edu" target="_blank">Business Economics and Public Policy</a> at  
      <a href="https://www.wharton.upenn.edu" target="_blank"> the Wharton School</a>. 
      I study human capital and workplace problems in entrepreneurial settings, using a combination of theoretical modeling, econometric analysis, and experimental design. 
      My Wharton page is <a href="https://bepp.wharton.upenn.edu/profile/jiayibao" target="_blank">here</a>. 
      </p>
    </article>
  </Main>
);

export default Index;
