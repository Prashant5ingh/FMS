// import logo from './logo.svg';
import React, {useEffect} from 'react';
import './App.css';
import axios from 'axios';
// import Delete from './delete';
// import Delete1 from './deletepopup';
import Bar from './Bar';
import Details from './op_details';
import DeviceAdd from './device_add';

function App() {
  useEffect(()=>{
    axios.get("http://localhost:8765/users").then(
      response => console.log(response.data)
    )
  },[])
  return (
    <div className="App">
      <React.Fragment>
        {/* <Delete/>  */}
        {/* <Bar/> */}
        <DeviceAdd/>
      </React.Fragment>
    </div>
  );
}

export default App;
