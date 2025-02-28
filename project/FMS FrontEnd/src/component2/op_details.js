import React, { Component } from "react";
import axios from "axios";
import './opcss.css';
// import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Edit from "./Edit1";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    };
    
    
    this.fetchEmployees = this.fetchEmployees.bind(this);
  }
  componentDidMount() {
    this.fetchEmployees();
  }
  fetchEmployees() {
    axios.get("http://localhost:8765/devices")
      .then(response => {
        console.log(response.data)
        this.setState({
          result: response.data,
          
          error: ""
        });
      });
  }


  render() {
    return (
        // <Router>
      <div>
        <div className="row">
          <div className="col-8 offset-2">
          <div className="device">
  <table className="table table-striped">
    <thead>
      <tr id="frow">
      <td>Device Serial Number</td>
        <td>Device IP</td>
        <td>Device Type</td>
        <td></td>
      </tr>
    </thead>
    <tbody className="t2">
      {this.state.result.map(item => (
        <tr key={item.id}>
          <td>
            <span>{item.device_serial}</span>
          </td>
          <td>
            <span>{item.device_ip}</span>
          </td>
          <td>
            <span>{item.device_type}</span>
          </td>
          <td>
        
          {/* <Link to={'/edit'}>  <button className="fa"> Edit </button></Link> */}
          <button className="fa"> Edit </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  <Edit/>
  </div>
          </div>
        </div>
        
        <div>
        {/* <Routes>
        
        <Route path="/edit" element={< Edit/>}></Route>
        </Routes> */}
        </div>
      </div>  
      // </Router>
    );
  }
  }

//   onedit=(id)=>{
//     console.log(id)
//     const url="http://localhost:8765/devices" +id
//     axios.put(url)
//     .then(res=>{
//       console.log(res)
//       const result= this.state.result;
//       this.setState({result})
//     })
// }

// const Table = ({ list }) => (
//     <div className="device">
//   <table className="table table-striped">
//     <thead>
//       <tr id="frow">
//       <td>Device Serial Number</td>
//         <td>Device IP</td>
//         <td>Device Type</td>
        
//       </tr>
//     </thead>
//     <tbody>
//       {list.map(item => (
//         <tr key={item.id}>
//           <td>
//             <span>{item.device_serial}</span>
//           </td>
//           <td>
//             <span>{item.device_ip}</span>
//           </td>
//           <td>
//             <span>{item.device_type}</span>
//           </td>
//           <td>
//           <Link to={'/edit'}>
//             <button className="fa"  > Edit </button>
//           </Link>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
  
//   </div>

// );
         
export default Details;
