import './App.css';
import React from 'react'
import UsersList from './components/UsersList'
import CreateUser from './components/CreateUser'

function App () {

    return ( 
    <div className="App">
      <h1>Vartotojų bazės tvarkyklė</h1>
        <div className="main">
        <CreateUser/>
        <UsersList/>
        </div>
    </div>
  );
 }

export default App;
