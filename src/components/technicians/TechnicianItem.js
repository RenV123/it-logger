import React from 'react';
import PropTypes from 'prop-types';

const TechnicianItem = ({ technician }) => {
  return (
    <li className='collection-item'>
      <div>
        {technician.firstName} {technician.lastName}
        <a href='#!' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechnicianItem.propTypes = {
  technician: PropTypes.object.isRequired,
};

export default TechnicianItem;
