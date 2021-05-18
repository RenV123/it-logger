import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); //TODO: show a message on error

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);

    try {
      const response = await axios.get('/logs');

      setLogs(response.data);
      setLoading(false);
    } catch (error) {
      setError('Unable to fetch the logs from the database.');
      console.error(error.message);
    }
  };

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    return <h4 className='red-text'>{error}</h4>;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No Logs to show...</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

export default Logs;
