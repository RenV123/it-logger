import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TechnicianItem from './TechnicianItem';

const TechnicianListModal = () => {
  const [technicians, setTechnicians] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); //TODO: show a message on error

  useEffect(() => {
    getTechnicians();
    //eslint-disable-next-line
  }, []);

  const getTechnicians = async () => {
    setLoading(true);

    try {
      const response = await axios.get('/technicians');

      setTechnicians(response.data);
      setLoading(false);
    } catch (error) {
      setError('Unable to fetch the logs from the database.');
      console.error(error.message);
    }
  };

  if (error) {
    return <h4 className='red-text'>{error}</h4>;
  }

  return (
    <div id='technician-list-modal' className='modal modal-fixed-footer'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            technicians.map((technician) => (
              <TechnicianItem key={technician.id} technician={technician} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TechnicianListModal;
