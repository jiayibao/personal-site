import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
 <article className="degree-container">
    <header>
      <h4 className="degree">{data.degree}</h4>
      <p className="school">{data.author}, {data.year}, {data.school}</p>
    </header>
  </article>
);

Cell.propTypes = {
   data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Cell;
