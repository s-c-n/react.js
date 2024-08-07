import { useState } from 'react';
import './App.css';
import UserTable from './Component/UserTable';
import AddUserForm from './Component/AddUserForm';
function App() {
  const userData = [
    {id: 1, name: 'John', username: 'johhny'},
    {id: 2, name: 'Jane', username: 'janey'},
    {id: 3, name: 'Christopher', username: 'chris'}
  ]
  const [users, setUsers] = useState(userData)
  const addUser = (user) =>{
    user.id = user.length + 1
    setUsers([...users, user])
  }
    return (
<div className='container'>
<h2>CRUD APP with Hooks</h2>
<div className='flex-row'>
  <div className='flex-large'>
    <h2>Add User</h2>
    <AddUserForm addUser={addUser} />
  </div>
  <div className='flex-large'>
    <h2>View Users</h2>
    <UserTable users={users} />
  </div>
</div>
  

</div>
  );
}

export default App;
