import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechnicians } from '../../actions/technicianAction';

const TechnicianSelectOptions = ({
  getTechnicians,
  technician: { technicians, loading },
}) => {
  useEffect(() => {
    getTechnicians();
    //eslint-disable-next-line
  }, []);

  return (
    !loading &&
    technicians !== null &&
    technicians.map((technician) => (
      <option
        key={technician.id}
        value={`${technician.firstName} ${technician.lastName}`}
      >
        {technician.firstName} {technician.lastName}
      </option>
    ))
  );
};

TechnicianSelectOptions.propTypes = {
  getTechnicians: PropTypes.func.isRequired,
  technician: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  technician: state.technician,
});

export default connect(mapStateToProps, { getTechnicians })(
  TechnicianSelectOptions
);
