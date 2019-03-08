import React from 'react';
import PropTypes from 'prop-types';

import Project from './Progress/Project';
/*
const getRows = progress => progress.sort((a, b) => {
  let ret = 0;
  if (a.university > b.university) ret = -1;
  else if (a.unversity < b.university) ret = 1;
  else if (a.number > b.number) ret = 1;
  else if (a.number < b.number) ret = -1;
  return ret;
}).map((project, idx) => (
  <Project
    data={project}
    key={project.title}
    last={idx === progress.length - 1}
  />
));
*/
const Progress = ({ data }) => (
  <div className="progress">
    <div className="link-to" id="progress" />
    <div className="title">
      <h3>Work in Progress</h3>
    </div>
    {data.map(project => (
      <Project
        data={project}
        key={project.school}
      />
    ))}
  </div>
);

Progress.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Progress.defaultProps = {
  data: [],
};

export default Progress;
