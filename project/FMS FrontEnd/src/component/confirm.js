import React from "react";
import axios from "axios";
import './Add.css'
export default class Confirm extends React.Component{

  constructor(props){
    super(props);
    this.state={
      result:[],
      post:[],
      id:0
    }
  }
componentDidMount(){
  axios.get('http://localhost:8765/users')
  .then(response=>{
    this.setState({
        result:response.data
        
    })
    // this.setState({role:})
    console.log(this.state.result)
  })
  .catch(function (error) {

    console.log(error);
  });
}

onSubmit = e => {
  e.preventDefault();
  // var id=[];
  // for(var i=0;i<this.state.result.length;i=i+1){
  //   id[i]=this.state.result[i].id
  // }  
  // this.setState({id:id})
  console.log(this.state.role) 
  console.log(this.state.id)
  console.log("data",this.state.post)
  var id=this.state.id
  
  if (window.confirm("Do you really want to Edit the User Role?")) {

  axios.put('http://localhost:8765/users/'+id,{
    role:this.state.role,
    password:this.state.post[id-1].password,
      security_question: this.state.post[id-1].security_question,
      security_answer: this.state.post[id-1].security_answer,
      status:this.state.post[id-1].status,
        username:this.state.post[id-1].username,

  })
  .then(function (response) {
      console.log("post",response);
    })
    .catch(function (error) {
      
        console.log(error);
      });
      setTimeout(() => {
        
        alert("Role has been changed");
      }, 500);
        this.componentDidMount()
      }
}

formValChange = e => {
  console.log(e.target.value)
  var dropd = document.getElementById("role");
  console.log(dropd.options[dropd.selectedIndex].id)
  e.preventDefault();
        const { name, value } = e.target;
        this.setState({
          [name]: value,
          post:this.state.result,
          id:dropd.options[dropd.selectedIndex].id
      })

      
}



  render(){
    return(
      <>

      <div className="edit">
        <center>
      <form id="fname" onSubmit={this.onSubmit} noValidate>
        <h4>Change New Role</h4>
      <select  id="role" name="role" type="text"  className={ "form-control"} onChange={this.formValChange} required>
  
  <option value="def">---CHOOSE---</option>
  {this.state.result.map((item) => (
   
  <option name={item.role} id={item.id} key={item.id} value={item.role}>{item.role}</option>
  
  ))
    
            }
</select>
<br/>
<button type="submit" className="btn btn-primary">CHANGE</button>
</form>
</center>
      </div>
      </>
    )
  }

}