import React from "react";
import './Add.css'
import axios from 'axios';
import Userdetails from './userdetails';
import { Link } from "react-router-dom";
var data = {}


export default class Userdetailsdelete extends React.Component {

  
    state = {
      posts: [],

    }
    // this.Mount = this.Mount.bind(this);
    // this.d = this.d.bind(this);
    



  componentDidMount() {
    
    this.Mount();
    
  }

  Mount() {
    axios.get('http://localhost:8765/users')
      .then(response => {
        const posts=response.data;
        this.setState({posts})
        console.log(posts)
       
      })
      .catch(function (error) {

        console.log(error);
      });

      

  }

   delete(event,id){
    console.log("jhjhjh",id)
    
      // this.setState({action:"1"})
      // data.action=1;
      console.log(this.state)
      console.log("event.target.id", event.target.id);
  
      if (window.confirm("Do you really want to leave?")) {

        axios.put('http://localhost:8765/users/'+id,{
      
        status:"Deactivated",
        username:this.state.posts[id-1].username,
        role:this.state.posts[id-1].role,
        password:this.state.posts[id-1].password,
      security_question: this.state.posts[id-1].security_question,
      security_answer: this.state.posts[id-1].security_answer
        
      })
      .then(response=>{
        
      console.log(response)
      
        // console.log("status",this.state.post[i].status)
        // for(var i=0;i<this.state.post.length;i++){
        //   if(this.state.post[i].status==="Deactivated"){
                  const posts = this.state.posts.filter(item => item.id!==id || item.role==="admin" || item.role==="Admin")
            this.setState({posts})
            // alert()
        //     console.log(this.state.post[i].status)

        //   this.state.post[i].status=""
        //   }
        // }
      
     
      })
      .catch(function (error) {
  
      console.log(error);
      });
      setTimeout(() => {
        
        alert("Status has been changed");
      }, 500);
       
      }
      

      
  

  
  }
  render() {
    


    
    return (

      <div >
       
            <center>
              <br/>
        <table className="table table-bordered ">
          <thead className="thead">
            <tr>
              <th>USERNAME</th>
              <th>ROLE</th>
              {/* <th>Delete</th> */}
    
            </tr>
          </thead>
          <tbody>
    
            {this.state.posts.map((item) => (
              <tr key={item.id}>
                <td>
                  <span>{item.username}</span>
                </td>
                <td>
                  <span>{item.role}</span>
                </td>
    
                <td>
                  <button className='btn btn-danger' id={item.id} key={item.id} onClick={(e)=>this.delete(e,item.id)}>Delete</button>
                </td>
              </tr>
            ))
    
            }
    
          </tbody>
        </table>
      </center>
    

        
      </div>

    )
  }




}


