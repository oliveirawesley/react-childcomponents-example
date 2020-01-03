import React from 'react';
import './App.css';
import PermissionsList from './components/permissionsList';

function App() {

  const permissions = [
    {id: 1, title: 'Permissão 1'},
    {id: 2, title: 'Permissão 2'}
  ]

  function handlePermissionId(permissionId) {
    const permission = permissions.find(p => p.id === permissionId);
    console.log('clicou em:', permission.id);
  }

  return (
    <div className="App">
      <header className="App-header">
        <PermissionsList 
          onClick={handlePermissionId}
          permissions={permissions}/>
      </header>
    </div>
  );
}

export default App;
