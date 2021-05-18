import React, { useState } from 'react';
import MaterializeJS from 'materialize-css/dist/js/materialize.min.js';

const AddTechnicianModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      MaterializeJS.toast({ html: 'Please enter the first and lastname' });
    } else {
      console.log(firstName, lastName);

      //clear Fields
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id='add-technician-modal' className='modal modal-fixed-footer'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
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

export default AddTechnicianModal;
