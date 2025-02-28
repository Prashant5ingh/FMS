import React from "react";
import './opcss.css';

import axios from "axios";
export default class Edit extends React.Component{
   
    
    constructor(props){
        super(props);
        this.state={
                data:[]
        }
        console.log(this.state.data)
         }


        componentDidMount() {
            axios.get("http://localhost:8765/devices")
              .then(response => {
                // console.log(response.data)
                const data=response.data.device_ip
                console.log(response.data)
                this.setState({
                  data
                });
              });
            }

        onsave=(save,id)=>{

            console.log()
        }



    
     render(){
        return(<>
        
            <center> <div className="bdy">
<h3>Edit Details</h3>
       <label className="device">Device IP :</label>&nbsp;&nbsp;&nbsp;
        <input type="text" placeholder={this.state.device_ip} ></input><br></br><br></br>

       <label className="device">Device serial <br></br> number: </label>&nbsp;
        <input type="text"  ></input> <br></br><br></br>

       <label className="device">Device type:</label>&nbsp;
         <input type="text" disabled placeholder="" value="" ></input><br></br><br></br>
         
       <button type="submit" className="b1" >Save</button>&nbsp;&nbsp;
       <button type="reset"  className="b1">Cancel</button>
        </div></center>

        
        </>            
        );
    }
}