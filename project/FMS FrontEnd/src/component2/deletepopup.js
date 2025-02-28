import React, { Component } from "react";
// import './style.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

class Delete1 extends Component{
    render(){
        return(
            <div className="container">
            <Popup trigger={<button>&#xe020;</button>} position="bottom right">
                <div><p>Are You Sure You Want to Delete This?</p></div>
                <button className="yes">Delete</button>&nbsp;&nbsp;
                <button className="yes">Cancel</button>
            </Popup>      
            </div>
        )
    }
}
export default Delete1;