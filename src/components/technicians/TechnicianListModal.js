import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TechnicianItem from './TechnicianItem';
import PropTypes from 'prop-types';
import { getTechnicians } from '../../actions/technicianAction';

const TechnicianListModal = ({
  getTechnicians,
  technician: { technicians, loading, error },
}) => {
  useEffect(() => {
    getTechnicians();
    //eslint-disable-next-line
  }, []);

  if (error) {
    return <h4 className='red-text'>{error}</h4>;
  }

  return (
    <div id='technician-list-modal' className='modal modal-fixed-footer'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            technicians?.map((technician) => (
              <TechnicianItem key={technician.id} technician={technician} />
            ))}
        </ul>
      </div>
    </div>
  );
};
TechnicianListModal.propTypes = {
  getTechnicians: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  technician: state.technician,
});

export default connect(mapStateToProps, { getTechnicians })(
  TechnicianListModal
);
