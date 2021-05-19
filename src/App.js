import React, { useEffect, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/addBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechnicianModal from './components/technicians/AddTechnicianModal';
import TechnicianListModal from './components/technicians/TechnicianListModal';

import 'materialize-css/dist/css/materialize.min.css';
import 'material-design-icons/iconfont/material-icons.css';
import MaterializeJS from 'materialize-css/dist/js/materialize.min.js';

import './App.css';

const App = () => {
  useEffect(() => {
    MaterializeJS.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechnicianModal />
          <TechnicianListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
