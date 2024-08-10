import React, {useState} from 'react'

const AddStudentForms = (props) => {
  const initialFormState = {id: null, MatricNo:'', name:'', Address:'', Gender:'', PhoneNo:'', Dob:''}
  const [user, setUser] = useState(initialFormState)
  const handleInputChange = (event) => {
    const {name, value} = event.target
    setUser({...user, [name]: value})
  }
return (
  <form onSubmit={event => {
    event.preventDefault();
    if (!user.MatricNo || !user.MatricNo) return;
    props.addMatricNo(MatricNo);
    setUser(initialFormState);
    if (!user.name || !user.name) return;
    props.addname(name);
    setUser(initialFormState);
    if (!user.Address || !user.Address) return;
    props.addAddress(Address);
    setUser(initialFormState);
    if (!user.Gender || !user.Gender) return;
    props.addGender(Gender);
    setUser(initialFormState);
    if (!user.PhoneNo || !user.PhoneNo) return;
    props.addPhoneNo(PhoneNo);
    setUser(initialFormState);
    if (!user.Dob || !user.Dob) return;
    props.addDob(Dob);
    setUser(initialFormState);
  }}>
    <label>MatricNo</label>
    <input type="MatricNo" name="MatricNo" value={user.MatricNo} onChange={handleInputChange}/>
    <button>MatricNo</button>

    <label>name</label>
    <input type="text" name="name" value={user.name} onChange={handleInputChange}/>
    <button>Name</button>

    <label>Address</label>
    <input type="text" name="Address" value={user.Address} onChange={handleInputChange}/>
    <button>Address</button>

    <label>Gender</label>
    <input type="gender" name="Gender" value={user.Gender} onChange={handleInputChange}/>
    <button>Gender</button>

    <label>Dob</label>
    <input type="date" name="Dob" value={user.Dob} onChange={handleInputChange}/>
    <button>Dob</button>

    <label for="phone">Enter your phone number:</label>
  <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={user.PhoneNo} onChange={handleInputChange}/>
    <button>PhoneNo</button>
  </form>

)
}

export default AddStudentForms