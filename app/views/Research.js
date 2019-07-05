import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Publications from '../components/Research/Publications';
import Current from '../components/Research/Current';
import Progress from '../components/Research/Progress';

import progress from '../data/research/progress';
import degrees from '../data/research/degrees';
import positions from '../data/research/positions';

const sections = [
  'Publications',
  'Current',
  'Progress'
];

const Research = () => (
  <Main>
    <Helmet title="Research" />
    <article className="post" id="research">
      <header>
        <div className="title">
          <h2><Link to="research">Research</Link></h2>
          <div className="link-container">
            {sections.map(sec => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
         
        </div>
      </header>
      <Publications data={degrees} />
      <Current data={positions} />
      <Progress data={progress} />

    </article>
  </Main>
);

export default Research;
