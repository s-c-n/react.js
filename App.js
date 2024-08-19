import { useState } from 'react';
import './App.css';
import AddUserForms from './Component/StudentId/AddUserForms';
import UserTables from './Component/StudentId/UserTables';
function App() {
  // const userData = [
  //   {id: 1, name: 'John', username: 'johhny'},
  //   {id: 2, name: 'Jane', username: 'janey'},
  //   {id: 3, name: 'Christopher', username: 'chris'}
  // ]
  // const [users, setUsers] = useState(userData)
  // const addUser = (user) =>{
  //   user.id = user.length + 1
  //   setUsers([...users, user])
  // }
  const userData = [
      { id: 1, MatricNo: '21CD0098', name: 'Tania', Address: 'No32 lupod', PhoneNo: '080342156', Gender: 'male', Dob: '2/03/2008' },
      { id: 2, MatricNo: '21CD00984', name: 'Lumbia', Address: 'No32 underbrigde', PhoneNo: '08034215634', Gender: 'female', Dob: '2/10/2009' },
      { id: 3, MatricNo: '21CD00985', name: 'Tomba', Address: 'No32 eoplk', PhoneNo: '08034215678', Gender: 'she-male', Dob: '2/06/2006' },  
    ]
    const [users, setUsers] = useState(userData)
     const addUser = (user) =>{
       user.id = user.length + 1
      setUsers([...users, user])
     }
     const deleteUser = (id) => {
      setUsers(users.filter((user) => user.id !== id))
    }
  
    return (
//  <div className='container'>
// <h2>CRUD APP with Hooks</h2>
// <div className='flex-row'>
//   <div className='flex-large'>
//     <h2>Add User</h2>
//     <AddUserForm addUser={addUser} />
//   </div>
//   <div className='flex-large'>
//     <h2>View Users</h2>
//     <UserTable users={users} />
// </div>
<div className="container">
<h1>CRUD App with Hooks</h1>
<div className="flex-row">
  <div className="flex-large">
    <h2>AddUserForms</h2>
    <AddUserForms newUser = {addUser} />

  </div>
  
</div>
<div className="flex-large">
    <h2>View user</h2>
   <UserTables  listUsers = 
     {users} users={users} deleteUser={deleteUser} />
  </div>
</div>
  );
}

export default App;
