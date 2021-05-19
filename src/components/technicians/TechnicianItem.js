import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTechnician } from '../../actions/technicianAction';

const TechnicianItem = ({ technician, deleteTechnician }) => {
  const onDelete = () => {
    deleteTechnician(technician.id);
  };
  return (
    <li className='collection-item'>
      <div>
        {technician.firstName} {technician.lastName}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechnicianItem.propTypes = {
  technician: PropTypes.object.isRequired,
  deleteTechnician: PropTypes.func.isRequired,
};

export default connect(null, { deleteTechnician })(TechnicianItem);
