import React from 'react'

const UserTable = (props) => {
  return (
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
         {props.users.length > 0 ? (
            props.users.map((user) => (
                <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                    <button className='button muted-button'>Edit</button>
                    <button className='button muted-button'>DeleteUser</button>
                </td>
            </tr>
            ))
          ):( 
            <tr>
                <td colSpan="3">No users found</td>
            </tr>
            )} 
    </tbody>
</table>
);
}

export default UserTable