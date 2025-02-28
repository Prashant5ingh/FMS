import React from "react";
import './Add.css'


import axios from 'axios';
export default class Adduser extends React.Component {
     
    constructor(props) {
        super(props)
        this.state = {
           
            email: '',
            status:'Activated',
            password: '',
            cpass:'',
            isError: {
                name: '',
                email: '',
                password: ''
            }
        }
    }
    regExp = RegExp(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    )
    formValid = ({ isError, ...rest }) => {
        let isValid = false;
        
        console.log("rest",rest)
        console.log("rest ",isError)
        Object.values(isError).forEach(val => {
            if (val.length > 0) {
                isValid = false
                // console.log("length",val.length)
                // console.log("f1")
            } else {
                isValid = true
                // console.log("t1")
                
            }
        });
        Object.values(rest).forEach(val => {
           let a=isError.email
           let b=isError.name
           let c=isError.password
            if (val === '' || (a!=='' || b!=='' || c!=='')) {
                isValid = false
                // console.log("f2")
            } else {
                // console.log("values",val)
                isValid = true
                // console.log("t2")
            }
        });
        // console.log("valid",isValid)
        return isValid;
    };
    onSubmit = e => {
        
        e.preventDefault();
        // this.formValid(this.state);
        if (this.formValid(this.state) && this.state.cpass===this.state.password) {
            console.log("data",this.state)

            axios.post('http://localhost:8765/users', this.state)
  .then(function (response) {
    console.log("post",response);
  })
  .catch(function (error) {

    console.log(error);
  });
  alert("User Added")
        } else {
            console.log("Form is invalid!");
            alert("Form is invalid!!! OR Password Not Matched!!!")
        }
    };

    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };
        // this.setState({cpass:e.target.value});
        switch (name) {
            case "username":
                isError.name =
                    value.length < 4 ? "Atleast 4 characaters required" : "";
                break;
            case "email":
                isError.email = this.regExp.test(value)
                    ? ""
                    : "Email address is invalid";
                break;
            case "password":
                isError.password =
                    value.length < 6 ? "Atleast 6 characaters required" : "";
                break;
                // case "cp":
                //     cpass = value;
                //     console.log("cpass")
                //     break;
            default:
                break;
        }
        this.setState({
            isError,
            [name]: value
        })

    };
    render() {
        const { isError } = this.state;
        return (
            <center>
            <form id="fname" onSubmit={this.onSubmit} noValidate>
                <div className="form-group">
                    <label>USERNAME</label>
                    <input
                        type="text"
                        className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="username"
                        onChange={this.formValChange}
                    />
                    {isError.name.length > 0 && (
                        <span className="invalid-feedback">{isError.name}</span>
                    )}
                </div>
                <div className="form-group">
                    <label>EMAIL</label>
                    <input
                        type="email"
                        className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="email"
                        onChange={this.formValChange}
                    />
                    {isError.email.length > 0 && (
                        <span className="invalid-feedback">{isError.email}</span>
                    )}
                </div>
                <div className="form-group">
                    <label>PASSWORD</label>
                    <input
                        type="password"
                        className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="password"
                        onChange={this.formValChange}
                    />
                    {isError.password.length > 0 && (
                        <span className="invalid-feedback">{isError.password}</span>
                    )}
                </div>
                <div className="form-group">
                    <label>CONFIRM PASSWORD</label>
                    <input
                        type="password" 
                        name="cpass"
                        className={ "form-control"}
                        
                        onChange={this.formValChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cars">ROLE</label>
<select id="role" name="role"  type="text"  className={ "form-control"} onChange={this.formValChange} required>
  <option value="def">---None---</option>
  <option value="Admin">Admin</option>
  <option value="Operator">Operator</option>
  <option value="Manager">Manager</option>
</select>
                </div>

                <div className="form-group">
                    <label htmlFor="ques">SECURITY QUESTION</label>
<select id="ques" name="security_question"  type="text"  className={ "form-control"} onChange={this.formValChange} required>
  <option value="def">---None---</option>
  <option value="place">Which is your favourite place</option>
  <option value="pet">What is your Pet name</option>
  <option value="player">favourite Player</option>
  <option value="Color">favourite Color</option>
</select>
                </div>

                <div className="form-group">
                    <label>ANSWER</label>
                    <input
                        type="text" 
                        name="security_answer"
                        className={ "form-control"}
                        required
                        onChange={this.formValChange}
                    />
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
            </center>
        );
    }
}