import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteLog, setCurrentLog } from '../../actions/logActions';
import MaterializeJS from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLog, setCurrentLog }) => {
  const onDelete = () => {
    deleteLog(log.id);
    MaterializeJS.toast({ html: 'Log deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
          onClick={() => setCurrentLog(log)}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last updated by{' '}
          <span className='black-text'>{log.technician}</span> on{' '}
          <span>
            {log.date &&
              Intl.DateTimeFormat('en-us', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              }).format(new Date(log.date))}
          </span>
        </span>
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrentLog: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrentLog })(LogItem);
