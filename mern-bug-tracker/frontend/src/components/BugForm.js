import React, { useState } from 'react';
import axios from 'axios';

const BugForm = ({ onBugAdded }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/bugs', { title });
      onBugAdded(response.data); // Notify parent to refresh bug list
      setTitle(''); // Clear input
    } catch (error) {
      console.error('Error submitting bug:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Report a New Bug</h3>
      <input
        type="text"
        placeholder="Bug title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">Submit Bug</button>
    </form>
  );
};

export default BugForm;
