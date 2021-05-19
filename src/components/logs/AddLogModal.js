import React, { useState } from 'react';
import MaterializeJS from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logActions';
import TechnicianSelectOptions from '../../components/technicians/TechnicianSelectOptions';

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [technician, setTechnician] = useState('');

  const onSubmit = () => {
    if (message === '' || technician === '') {
      MaterializeJS.toast({ html: 'Please enter a message and tech' });
    } else {
      const newLog = {
        message,
        attention,
        technician,
        date: new Date(),
      };

      addLog(newLog);

      MaterializeJS.toast({ html: `Log added by ${technician}` });

      //clear Fields
      setMessage('');
      setTechnician('');
      setAttention(false);
    }
  };

  return (
    <div
      id='add-log-modal'
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
              <TechnicianSelectOptions />
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

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};

export default connect(null, { addLog })(AddLogModal);
