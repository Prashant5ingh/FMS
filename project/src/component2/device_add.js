import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from "react";
import axios from "axios";

const url="http://localhost:8765/devices";
const message="Device successfully registered";
class DeviceAdd extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            deviceDetails:{
                device_serial:"",
                device_ip:"",
                device_type:"",
                device_status:"Activated",
                username: "operator1"
            },
            deviceDetailsErrorMessage:{
                device_serial:"",
                device_ip:"",
                device_type:""
            },
            deviceDetailsValid:{
                device_serial:false,
                device_ip:false,
                device_type:false,
                buttonActive:false
            },
            deviceList:["Router","Switch","Hub"],
            successMessage:"",
            errorMessage:""
        }
    }

    submitDevice=()=>
    {
        const { deviceDetails }=this.state;
        this.setState({errorMessage:"",successMessage:""});
        axios.post(url,deviceDetails).then(response=>{
            this.setState({successMessage:response.data.message,errorMessage:""});
        })
        .catch(error=>{
            if(error.response){
                this.setState({errorMessage:error.response.data.message,successMessage:message})
            }
            else{
                this.setState({errorMessage:"please run the backEnd",successMessage:""})
            }
        });
    }
    handleSubmit=(event)=>{
        console.log("clicked")
        event.preventDefault();
        this.submitDevice();
    }
    handleChange=(event)=>{
        const target=event.target;
        const value=target.value;
        const name=target.name;
        const {deviceDetails}=this.state;
        this.setState({deviceDetails:{...deviceDetails,[name]:value}});
        this.validateField(name,value);
    }
    validateField=(fieldName,value)=>{
        let fieldValidationErrors=this.state.deviceDetailsErrorMessage;
        let deviceDetailsValid=this.state.deviceDetailsValid;
        switch(fieldName){
            case "device_serial":
                const nameRegex=/^[A-Z]/;
                if(value===""){
                    fieldValidationErrors.device_serial="Field required";
                    deviceDetailsValid.device_serial=true;
                }
                else if(!value.match(nameRegex)){
                    fieldValidationErrors.device_serial="Please enter valid device serial number";
                    deviceDetailsValid.device_serial=true;
                }else{
                    fieldValidationErrors.device_serial="";
                    deviceDetailsValid.device_serial=true;
                }
                break;
            case "device_ip":
                // const ip=(\\d{1,2}|)
                const ipRegex=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
                if(value===""){
                    fieldValidationErrors.device_ip="Field required";
                    deviceDetailsValid.device_ip=true;
                }
                else if(!value.match(ipRegex)){
                    fieldValidationErrors.device_ip="Please enter valid IP address";
                    deviceDetailsValid.device_ip=true;
                }else{
                    fieldValidationErrors.device_ip="";
                    deviceDetailsValid.device_ip=true;
                }
                break;

            case "device_type":
                if(value===""){
                    fieldValidationErrors.device_type="This field is mandatory";
                    deviceDetailsValid.device_type=true;
                }
                else{
                    fieldValidationErrors.device_type="";
                    deviceDetailsValid.device_type=true;
                }
                break;
                default:
                    break;
        }
        deviceDetailsValid.buttonActive=
        deviceDetailsValid.device_serial&&
        deviceDetailsValid.device_ip&&
        deviceDetailsValid.device_type
        this.setState({deviceDetailsErrorMessage:fieldValidationErrors,
            deviceDetailsValid:deviceDetailsValid,
        successMessage:"",errorMessage:""});
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-4 offset-4">
                    <br/>
                    <br/>
                    <div className="card">
                        <div className="card-header bg-primary text-center">
                            <h4>ENTER THE DEVICE DETAILS</h4>
                        </div>
                        <div className="card-body">
                            <form className="createDevice" onSubmit={this.handleSubmit}>
                                <div className="device-group">
                                    <label htmlFor="device_serial">Device Serial Number</label>
                                    <input
                                    type="text"
                                    name="device_serial"
                                    id="device_serial"
                                    placeholder="Enter device serial number"
                                    value={this.state.deviceDetails.device_serial}
                                    onChange={this.handleChange}
                                    className="device-control"
                                    />
                                    <span name="device_serialError" className="text-danger">
                                        {this.state.deviceDetailsErrorMessage.device_serial}
                                    </span>
                                </div><br></br>


                                <div>
                                <label htmlFor="device_ip">Device IP address</label>
                                    <input
                                    type="text"
                                    name="device_ip"
                                    id="device_ip"
                                    placeholder="Enter device Ip address"
                                    value={this.state.deviceDetails.device_ip}
                                    onChange={this.handleChange}
                                    className="device-control"
                                    />
                                    <span name="device_ipError" className="text-danger">
                                        {this.state.deviceDetailsErrorMessage.device_ip}
                                    </span>
                                </div><br></br>


                                <div>
                                <label htmlFor="device_type">Device Type</label>
                                    <select
                                    name="device_type"
                                    id="device_type"
                                    value={this.state.deviceDetails.device_type}    
                                    onChange={this.handleChange}
                                    className="device-control"
                                    >
                                        <option value="">-----Choose device type-----</option>
                                         {this.state.deviceList.map(fun=>{
                                            return <option key={fun} value={fun}>{fun}</option>
                                         })}
                                    </select>
                                    <span name="device_typeError" className="text-danger">
                                        {this.state.deviceDetailsErrorMessage.device_type}
                                    </span>
                                </div><br></br>

                                <button type="submit" className="btn btn-primary"
                                   disabled={!this.state.deviceDetailsValid.buttonActive}>Add</button>&nbsp;&nbsp;
                                <button type="reset" className="btn btn-primary">Cancel</button>
                            </form>
                            <br/>
                        </div>
                        <span name="successMessage" className="text-success text-bold">
                            {this.state.successMessage}
                        </span>
                        <span name="errorMessage" className="text-success text-bold">
                            {this.state.errorMessage}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
export default DeviceAdd;