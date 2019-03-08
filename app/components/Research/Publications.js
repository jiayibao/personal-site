import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Publications/Degree';

const Publications = ({ data }) => (
  <div className="publications">
    <div className="link-to" id="publications" />
    <div className="title">
      <h3>Publications</h3>
    </div>
    {data.map(degree => (
      <Degree
        data={degree}
        key={degree.school}
      />
    ))}
  </div>
);

Publications.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Publications.defaultProps = {
  data: [],
};


export default Publications;
