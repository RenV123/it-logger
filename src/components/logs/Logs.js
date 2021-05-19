import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading || !logs) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs?.length === 0 ? (
        <p className='center'>No Logs to show...</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  logs: PropTypes.object,
  getLogs: PropTypes.func.isRequired,
};

//propName : stateProperty (we map the log state to a prop called log of this component)
const mapStateToProps = (state) => ({
  log: state.log,
});

//We need to pass an object in connect with any actions we run (getLogs).
//This action is then passed to the component as a prop
export default connect(mapStateToProps, { getLogs })(Logs);
