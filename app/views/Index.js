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
      My research focuses on human capital strategy and workplace diversity issues in different contexts of entrepreneurial forms and phases, drawing from the rich interplay of phenomenon and theory at the intersection of strategy, human resource management, and entrepreneurship. Linking macro patterns to micro behavior, my work exploits a variety of methods including theoretical modeling, qualitative data analysis, econometric analysis of archival data, and experimental design. 
      My Wharton page is <a href="https://bepp.wharton.upenn.edu/profile/jiayibao" target="_blank">here</a>. 
      </p>
    </article>
  </Main>
);

export default Index;
