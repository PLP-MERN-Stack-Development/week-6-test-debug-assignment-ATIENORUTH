import React, { useState } from 'react';
import BugForm from './components/BugForm';
import BugList from './components/BugList';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleBugAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="App">
      <h1>Bug Tracker</h1>
      <BugForm onBugAdded={handleBugAdded} />
      <BugList refresh={refresh} />
    </div>
  );
}

export default App;
