import React, {useState} from 'react'

const AddUserForms = (props) => {
  const initialFormState = {id: null, MatricNo:'', name:'', Address:'', Gender:'', PhoneNo:'', Dob:''}
  const [user, setUser] = useState(initialFormState)
  const handleInputChange = (event) => {
    const {name, value} = event.target
    setUser({...user, [name]: value})
  }
return (
  <form onSubmit={event => {
    event.preventDefault();
   if (!user.MatricNo || !user.name || !user.Address || !user.PhoneNo || !user.Dob || !user.Gender) return;
    props.newUser(user);
    setUser(initialFormState);
  }}>
    <label>MatricNo</label>
    <input type="text" name="MatricNo" value={user.MatricNo} onChange={handleInputChange}/>
   

    <label>name</label>
    <input type="text" name="name" value={user.name} onChange={handleInputChange}/>
  

    <label>Address</label>
    <input type="text" name="Address" value={user.Address} onChange={handleInputChange}/>
  

    <label>Gender</label>
    <input type="text" name="Gender" value={user.Gender} onChange={handleInputChange}/>


    <label>Dob</label>
    <input type="text" name="Dob" value={user.Dob} onChange={handleInputChange}/>


    <label for="PhoneNo">Enter your phone number:</label>
  <input type="number" name="PhoneNo" value={user.PhoneNo} onChange={handleInputChange}/>
    <button>AddUser</button>
  </form>

)
}

export default AddUserForms