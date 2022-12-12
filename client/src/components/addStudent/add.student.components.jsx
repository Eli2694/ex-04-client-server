import React, { useState } from 'react';
import { postStudent } from '../../services/student.services';
import './style.css';

export const AddStudent = () => {
  const [fullName, setFullName] = useState('');
  const [id, SetId] = useState('');
  const [age, setAge] = useState('');
  const [hobby, setHobby] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const students = { fullName, id, age, hobby };
    postStudent(students);
  };

  return (
    <div className='create'>
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <label>ID</label>
        <input type='number' required onChange={(e) => SetId(e.target.value)} />
        <label>Full Name</label>
        <input
          type='text'
          required
          onChange={(e) => setFullName(e.target.value)}
        />
        <label>Age:</label>
        <input
          type='number'
          required
          onChange={(e) => setAge(e.target.value)}
        />
        <label>Hobby:</label>
        <input
          type='text'
          required
          onChange={(e) => setHobby(e.target.value)}
        />
        <button>Add Student</button>
      </form>
    </div>
  );
};
