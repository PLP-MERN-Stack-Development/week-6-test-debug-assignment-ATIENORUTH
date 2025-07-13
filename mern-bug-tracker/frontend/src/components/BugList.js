import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BugList = ({ refresh }) => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/bugs')
      .then((res) => setBugs(res.data))
      .catch((err) => console.error('Error fetching bugs:', err));
  }, [refresh]);

  return (
    <div>
      <h3>Reported Bugs</h3>
      {bugs.length === 0 ? (
        <p>No bugs reported yet.</p>
      ) : (
        <ul>
          {bugs.map((bug) => (
            <li key={bug._id}>
              {bug.title} - <strong>{bug.status}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BugList;

