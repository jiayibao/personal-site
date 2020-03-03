import React from 'react';
import PropTypes from 'prop-types';


const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree"><a href={data.link} target="_blank"><b>{data.degree}</b></a></h4>
      <p className="school">{data.author}<font color="blue">{data.school}</font>, {data.year}</p> 
     
      
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
