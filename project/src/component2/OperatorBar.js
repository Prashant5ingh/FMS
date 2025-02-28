import React from 'react';
import { BrowserRouter as  Router,Route,Routes,Link } from 'react-router-dom';
//import Home from './Home';
// import './bar.css';
// import Body from './Body';
// import homie from './homeic.jpg';
//import Contact from './Contact';
//  import LoginPage from './LoginPage';
//import img2 from './navlog.png';
import DeviceAdd from './device_add';
// import Edit from './Edit1';
import FrontPage from './displayDevice';
import Delete from './delete';
import Details from './op_details';


class Bar2 extends React.Component{
    render(){
        return(
            <div className='adb'>
            {/* <Router> */}
                <nav className='container-fluid navba'>
                        </nav>
                    <div className='head'>
                        {/* <h4>Fault Mangement System</h4>
                    <div className='row a'>
                    <div className='col-md-8'></div> 
                    <div className='col-md-2'> <Link to='/changepin'>Change Password</Link></div> 
                    <div className='col-md-1 lab'> <Link to='/logout'><button className='up'>LOGOUT</button></Link></div>
                    </div> */}
                    <hr style={{background:"white"}}></hr>
                    <div className='row b'>
                    <div className='col-md-1'></div> 
                     {/* <div className='col-md-1'><Link to='/'><button>HOME</button></Link></div> */}
                    <div className='col-md-2'> <Link to='/devicedetails'><button>DEVICE DETAILS</button></Link></div>
                   {/* <div className='col-md-5'><input type="search" placeholder='search'></input></div> */}
                   <div className='col-md-2'> <Link to='/adddevice'><button>ADD DEVICE</button></Link></div>
                   <div className='col-md-2'> <Link to='/edit'><button>EDIT DEVICE</button></Link></div>
                   <div className='col-md-2'> <Link to='/deletedevice'><button>DELETE DEVICE</button></Link></div>
                   {/* <div className='col-md-2'> <Link to='/report'><button>REPORT</button></Link></div> */}
                   </div></div>
               
                   {/* <div className='container-fluid tit'>
                       <h6>WELCOME OPERATOR</h6>
                       </div> */}
                 {/* <Routes>
                
               <Route path='/adduser' element={<DeviceAdd/>}/>
               <Route path='/edit' element={<Details/>}/>
               <Route path='/devicedetails' element={<FrontPage/>}/>
               <Route path='/deletedevice' element={<Delete/>}/>
              </Routes>  */}
            {/* </Router> */}
            </div>
        )
    }
    }
export default Bar2;