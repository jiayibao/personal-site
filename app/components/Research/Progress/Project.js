import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ data, last }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.degree}</h4>
      <p className="school">{data.author}<font color="blue">{data.school}</font> </p>
    </header>
  </article>
);

Project.propTypes = {
   data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};


export default Project;
