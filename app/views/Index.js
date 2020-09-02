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
      I received my PhD in <a href="https://bepp.wharton.upenn.edu" target="_blank">Business Economics and Public Policy</a> from <a href="https://www.wharton.upenn.edu" target="_blank"> the Wharton School, University of Pennsylvania</a>. 
      My research focuses on human capital strategy and workplace diversity issues in different contexts of entrepreneurial forms and phases, drawing from the rich interplay of phenomenon and theory at the intersection of strategy, human resource management, and entrepreneurship. Linking macro patterns to micro behavior, my work exploits a variety of methods including theoretical modeling, qualitative data analysis, econometric analysis of archival data, and experimental design. One strand of my work in progress examines how social safety nets for employees impact venture outcomes. Another strand of my ongoing work studies emerging workplace practices, such as unlimited vacation, corporate sabbatical, and various remote work models, and particularly their implications for entrepreneurial businesses. 
      </p>
    </article>
  </Main>
);

export default Index;
