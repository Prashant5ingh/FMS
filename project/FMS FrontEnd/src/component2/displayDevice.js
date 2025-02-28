import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
// import './operator.css'
import axios from 'axios';
//import { Routes,BrowserRouter as Router,Route,Link} from 'react-router-dom'
class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
    this.fetchDevice = this.fetchDevice.bind(this);
  }
  componentDidMount() {
    this.fetchDevice();
  }
  fetchDevice() {
    axios
      .get("http://localhost:8765/devices")
      .then(response => {
        this.setState({
          result: response.data,
          error: ""
        });
      });
  }
  render() {
    const { result } = this.state;
    return (
      <div>
        {/* <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={this.state.pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={this.handlePageClick}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
    /> */}
        <div className="row">
          <div className="col-8 offset-2"><br></br>
            <h3 className='d1'>Device Data</h3>
            <br />
            {result ? <Table list={result} /> : null}
          </div>
        </div>
      </div>
    );
  }
}
const Table = ({ list }) => (
  <table className="table table-striped">
    <thead className='t2'>
      <tr>
        <th>Device Serial Number</th>
        <th>Device IP Address</th>
        <th>Type of Device</th>
        <th>Device Status</th>
        <th>UserName</th>
      </tr>
    </thead>
    <tbody className='t1'>
      {list.map(item => (
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
            <span>{item.device_status}</span>
          </td>
          <td>
            <span>{item.username}</span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  
);
export default FrontPage;