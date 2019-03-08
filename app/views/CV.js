import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Main from '../layouts/Main';

import markdown from '../data/cv.md';

/*
import Personal from '../components/CV/Personal';
import Site from '../components/CV/Site';

const CV = () => (
  <Main>
    <Helmet title="CV" />
    <article className="post" id="cv">
      <header>
        <div className="title">
          <h2><Link to="/cv">CV</Link></h2>
        </div>
      </header>
      <Personal />
      <Site />
    </article>
  </Main>
);
*/

const count = markdown.split(/\s+/)
  .map(s => s.replace(/\W/g, ''))
  .filter(s => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const CV = () => (
  <Main>
    <Helmet title="CV" />
    <article className="post" id="cv">
      <header>
        <div className="title">
          <h2><Link to="/cv">CV</Link></h2>
          <p></p>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default CV;
