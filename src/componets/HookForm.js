import React, {useState} from 'react';

// function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }

const HookForm = props => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmpassword] = useState("");
    //const [error, setError] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName,lastName, email, password };
        console.log("Welcome", newUser);
    };



    return (
         <div>
                <form onSubmit={createUser  }>
            <div>
                <label htmlFor='firstName'>Firstname: </label> 
                <input type="text" onChange={  (e) => setFirstname(e.target.value)  } />
                {firstName.length > 3 || firstName.length == 0 ? "":<span className="danger">First Name must be 3 characters or more</span> }
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
                {lastName.length > 3 || lastName.length == 0 ? "":<span className="danger">Last Name must be 3 characters or more</span> }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                {email.length > 2 || email.length == 0 ? "":<span className="danger">Email must be 2 characters or more</span> }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />       
                {password.length > 8 || password.length == 0 ? "":<span className="danger">Password must be 8 characters or more</span> }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmpassword(e.target.value) } />
                {password==confirmPassword ? "":<span className="danger">Password Must Match</span> }
            </div>
            <input type="submit" value="Create User" />
        </form> 
        <p>FirstName:{firstName}</p>
        <p>Lastname:{lastName}</p>
        <p>Email:{email}</p>
        <p>Password:{password}</p>
        <p>confirmPassword:{confirmPassword}</p>
        
        
       

        </div>
        
    );
   
}
export default HookForm;