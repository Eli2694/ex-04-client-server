import React, { useEffect, useState } from 'react';
import { getStudent } from '../../services/student.services';
import { StudentRow } from '../studentRow/studentRow.componenet';
import './style.css';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import { DeleteStudent } from '../deleteStudent/deleteStudent.component';

export const StudentList = () => {
  const [studentsArr, setStudentsArr] = useState([]);

  const initComponent = async () => {
    let students = await getStudent();
    setStudentsArr(students);
  };
  useEffect(() => {
    initComponent();
  }, []);

  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>FullName</th>
            <th>Grade</th>
            <th>Hobby</th>
          </tr>
        </thead>
        <tbody>
          {studentsArr.length > 0 ? (
            studentsArr.map((s) => {
              return (
                <StudentRow
                  ID={s.StudentID}
                  FullName={s.fullName}
                  Grade={s.grade}
                  Hobby={s.hobby}
                ></StudentRow>
              );
            })
          ) : (
            <Spinner animation='border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          )}
        </tbody>
      </Table>
      <DeleteStudent></DeleteStudent>
    </>
  );
};
