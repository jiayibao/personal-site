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
      I am an Assistant Professor of Public Policy and Entrepreneurship in <a href="https://publicpolicy.unc.edu/" target="_blank">the Department of Public Policy</a> and <a href="https://shuford.unc.edu/" target="_blank">the Shuford Program in Entrepreneurship</a> at <a href="https://www.unc.edu/" target="_blank">the University of North Carolina at Chapel Hill</a>. 
      I received my PhD in <a href="https://bepp.wharton.upenn.edu" target="_blank">Business Economics and Public Policy</a> from <a href="https://www.wharton.upenn.edu" target="_blank"> the Wharton School, University of Pennsylvania</a>. My research focuses on human capital forces that drive entrepreneurial participation, performance, and innovation from three lenses—institutional and societal environments, firm strategy, and diversity. Linking macro patterns to micro behavior, my work exploits a variety of methods, including qualitative interviews, quasi-experimental methods, randomized experiments, big data analytics, and machine learning. My research is divided into three streams: (1) how institutional and societal environments that shape entrepreneur and joiner decisions (e.g., social safety nets, technology policies, and intermediaries) influence venture formation and outcomes, (2) how human capital strategy in entrepreneurial firms (e.g., work benefits, compensation structures, and contracts) affect organizational performance, and (3) how inequalities along the gender and race lines are produced for entrepreneurial workers in digital labor markets.  
      </p>
    </article>
  </Main>
);

export default Index;
