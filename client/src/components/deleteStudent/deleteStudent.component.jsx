import React, { useState } from 'react';
import { removeStudentByFullName } from '../../services/student.services';

export const DeleteStudent = () => {
  const [fullName, setFullName] = useState('');

  const HandleDelete = async () => {
    console.log(fullName);
    await removeStudentByFullName(fullName);
  };

  return (
    <div className='input-group mb-3'>
      <input
        type='text'
        className='form-control'
        placeholder='Student Full Names'
        aria-label="Recipient's username"
        aria-describedby='basic-addon2'
        onChange={(e) => setFullName(e.target.value)}
      />

      <div className='input-group-append'>
        <button className='btn btn-danger' type='button' onClick={HandleDelete}>
          Remove Student
        </button>
      </div>
    </div>
  );
};
