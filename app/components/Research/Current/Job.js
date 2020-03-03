import React from 'react';
import PropTypes from 'prop-types';


const Job = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree"><b>{data.degree}</b></h4>
      <p className="school">{data.author}<font color="blue">{data.school}</font> </p>
      <p className="abstract"><u>Abstract:</u> {data.abstract}</p>
    </header>
  </article>
);



Job.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Job;
