import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Cell from '../components/Teaching/Cell';
import data from '../data/teaching';

const Teaching = () => (
  <Main>
    <Helmet title="Teaching" />
    <article className="post" id="teaching">
      <header>
        <div className="title">
          <h2><Link to="/teaching">Teaching</Link></h2>
          <p></p>
        </div>
      </header>
      {data.map(project => (
        <Cell
          data={project}
          key={project.school}
        />
      ))}
    </article>
  </Main>
);

export default Teaching;
