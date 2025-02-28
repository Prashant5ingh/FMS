import './appp.css'
import React from 'react'
import './style.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BrowserRouter ,Routes, Router,Route,Switch } from 'react-router-dom'
// import Question from './question'
import { ReactDOM } from 'react'



import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
export default  class Login extends React.Component{
 
constructor(props){
    super(props);
    this.state={
        username: "" ,
        password:""
        
    } 
    this.handlesubmit = this.handlesubmit.bind(this);
    
}

   handleusername=(e)=>{

    console.log("vishesh",e.target.value)
    this.setState({username:e.target.value})
    
  }
  goToAdmin(){
    // this.props.history.push("/question")
  }
  handlepassword=(e)=>{
    console.log("pass",e.target.value)
    this.setState({password:e.target.value})
    
  }
  
    handlesubmit=(e)=>{
     const navigate=useNavigate();   
    console.log(this.state)
    axios.post('http://localhost:8765/login', this.state)
    .then(function (response,navigate) {
    console.log(response);
    // navigate('/question');
    // console.log(response.data.role)
      if(response.data.role==="" && response.data.state){
        this.goToAdmin();
        this.props.push("/question")
        
        // this.myFunction(){ 
        //   this.props.history.push("/dashboard"); 
        // }
        const Dasborad=()=>{

        
        // return <Navigate replace to="/Manager/home" />;
        }
    
      
      }else if(response.data.role==="operator"){

      }else if(response.data.role==="manager"){

      }else{

      }

  })
  .catch(function (error) {
    console.log(error);
  });
  this.goToAdmin();
    }
    render(){

        // if(this.state.fireRedirect) {
        //     return <Link to=""/>
        // }

        return (
            <div className="auth-form-container">
                <div><h1>Fault Management System</h1></div>
                <h2>Login</h2>
                <form className="login-form" >
                    <label htmlFor="email">Username</label>
                    <input  type="text" placeholder="username" id="email" name="email" onChange={this.handleusername}  />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="********" id="password" name="password" onChange={this.handlepassword} />
                    <button type="submit" onClick={this.handlesubmit}>Log In</button>
                </form>
                <button className="link-btn" >Forget password?</button>
            </div>
            
        )
    }
}
