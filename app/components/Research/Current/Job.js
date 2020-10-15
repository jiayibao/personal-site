import React from 'react';
import PropTypes from 'prop-types';


const Job = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.author}. <font color="black">{data.degree} </font> <font color="blue">{data.school} </font> </h4>
      <p></p>
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
