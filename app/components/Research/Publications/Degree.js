import React from 'react';
import PropTypes from 'prop-types';


const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.author}. {data.year}. <font color="blue"><a href={data.link} target="_blank">{data.degree}</a></font> {data.school}</h4>
      <p></p>
    </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};


export default Degree;
