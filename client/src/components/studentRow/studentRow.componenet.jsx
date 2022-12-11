import React from 'react'
//import Table from 'react-bootstrap/Table';

export const StudentRow= ({ID,FullName,Grade,Hobby}) => {
  return (
        <tr>
          <td>{ID}</td>
          <td>{FullName}</td>
          <td>{Grade}</td>
          <td>{Hobby}</td>
        </tr>
  )
}
