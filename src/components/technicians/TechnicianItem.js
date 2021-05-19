import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTechnician } from '../../actions/technicianAction';
import MaterializeJS from 'materialize-css/dist/js/materialize.min.js';

const TechnicianItem = ({
  technician: { firstName, lastName, id },
  deleteTechnician,
}) => {
  const onDelete = () => {
    MaterializeJS.toast({
      html: `Technician was deleted!`,
    });
    deleteTechnician(id);
  };
  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
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
