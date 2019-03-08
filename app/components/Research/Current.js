import React from 'react';
import PropTypes from 'prop-types';

import Job from './Current/Job';

const Current = ({ data }) => (
  <div className="current">
    <div className="link-to" id="current" />
    <div className="title">
      <h3>Working Papers</h3>
    </div>
    {data.map(job => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Current.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Current.defaultProps = {
  data: [],
};


export default Current;
