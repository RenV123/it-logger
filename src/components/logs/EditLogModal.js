import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MaterializeJS from 'materialize-css/dist/js/materialize.min.js';
import { updateLog } from '../../actions/logActions';
const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [technician, setTechnician] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTechnician(current.technician);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || technician === '') {
      MaterializeJS.toast({ html: 'Please enter a message and tech' });
    } else {
      const updatedLog = {
        id: current.id,
        message,
        attention,
        technician,
        date: new Date(),
      };
      updateLog(updatedLog);
      MaterializeJS.toast({ html: `Log updated by ${technician}` });

      //clear Fields
      setMessage('');
      setTechnician('');
      setAttention(false);
    }
  };

  return (
    <div
      id='edit-log-modal'
      className='modal modal-fixed-footer'
      style={modalStyle}
    >
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='technician'
              value={technician}
              className='browser-default'
              onChange={(e) => setTechnician(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <option value='John Doe'>John Doe</option>
              <option value='Sam Smith'>Sam Smith</option>
              <option value='Sara Wilson'>Sara Wilson</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect waves-light btn blue'
        >
          <i className='material-icons right'>send</i>
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

EditLogModal.propTypes = {
  current: PropTypes.object.isRequired,
  updateLog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
