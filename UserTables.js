import React from 'react'

const UserTables = (props) => {
  return (
    <table>
    <thead>
      <tr>
        <th>MatricNo</th>
        <th>Name</th>
        <th>Address</th>
        <th>Gender</th>
        <th>PhoneNo</th>
        <th>Dob</th>
      </tr>
    </thead>
    <tbody>
    {props.listUsers.length > 0 ? (
        props.listUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.MatricNo}</td>
            <td>{user.name}</td>
            <td>{user.Address}</td>
            <td>{user.Gender}</td>
            <td>{user.PhoneNo}</td>
            <td>{user.Dob}</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button
              onClick={() => props.deleteUser(user.id)}
              className="button muted-button"
              >
              Delete
             </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan= '7'>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)
}

export default UserTables