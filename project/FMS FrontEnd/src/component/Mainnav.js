import React from 'react';
import { BrowserRouter as  Router,Route,Routes,Link } from 'react-router-dom';
import Adduser from './Add';
import Userdetails from './userdetails';
import Userdetailsdelete from './userdelete';
import Userdetailsedit from './userdetailsedit';
import Confirm from './confirm';
import Doughnut from './Doughnut';
import Bar from './Bar';
import Bar2 from '../component2/OperatorBar';
import DeviceAdd from '../component2/device_add';
import Details from '../component2/op_details';
import FrontPage from '../component2/displayDevice';
import Delete from '../component2/delete';
import ManagTab from '../component3/ManagTab';
import MBar from '../component3/Managemod';

//import Home from './Home';
import './bar.css';
// import Body from './Body';
// import homie from './homeic.jpg';
//import Contact from './Contact';
//  import LoginPage from './LoginPage';
//import img2 from './navlog.png';
class Mainnav extends React.Component{
    render(){
        return(
            <div className='tit'>
            <Router>
                <nav className='container-fluid navba'>
                    <div className='head12'>
                        <br/>
                        <h4>Fault Management System</h4>
                    <div className='row a'>
                    <div className='col-md-8'></div> 
                    <div className='col-md-2'> <Link to='/changepin'>Change Password</Link></div> 
                    <div className='col-md-1 lab'> <Link to='/logout'><button className='up'>LOGOUT</button></Link></div>
                    </div>
                    <div className='row b'>
                    <div className='col-md-1'></div> 
                     <div className='col-md-1'><Link to='/'><button>HOME</button></Link></div>
                    <div className='col-md-2'> <Link to='/admin'><button>Admin</button></Link></div>
                   {/* <div className='col-md-5'><input type="search" placeholder='search'></input></div> */}
                   <div className='col-md-2'> <Link to='/operator'><button>Operator</button></Link></div>
                   <div className='col-md-2'> <Link to='/manager'><button>Managar</button></Link></div>
                   {/* <div className='col-md-2'> <Link to='/deleteuser'><button>DELETE USER</button></Link></div>
                   <div className='col-md-2'> <Link to='/report'><button>REPORT</button></Link></div> */}
                   </div></div>
               
                </nav>
                   {/* <div className='tit'>
            
                       </div> */}
                 <Routes>
                <Route path='/admin' element={<Bar/>}/>
                <Route path='/operator' element={<Bar2/>}/>
                <Route path='/manager' element={<MBar/>}/>
                <Route path='/adduser' element={<Adduser/>}/>
                <Route path='/userdetails' element={<Userdetails/>}/>
                <Route path='/deleteuser' element={<Userdetailsdelete/>}/>
                <Route path='/changerole' element={<Userdetailsedit/>}/>
                <Route path='/report' element={<Doughnut/>}/>
                <Route path='/adddevice' element={<DeviceAdd/>}/>
               <Route path='/edit' element={<Details/>}/>
               <Route path='/devicedetails' element={<FrontPage/>}/>
               <Route path='/deletedevice' element={<Delete/>}/>
               {/* <Route path='/deletedevice' element={<Delete/>}/> */}
               <Route path='/fault' element={<ManagTab/>}/>
                {/* <Route path='/home' element={<Userdetails/>}/>
                <Route path='/deleteuser' element={<Userdetailsdelete/>}/>
                <Route path='/changerole' element={<Userdetailsedit/>}/>
                <Route path='/report' element={<Doughnut/>}/> */}
               {/* <Route path='/home' element={<LoginPage/>}/> */}
              </Routes> 
               {/* <Body/> */}
            </Router>
            </div>
        )
    }
    }
export default Mainnav;