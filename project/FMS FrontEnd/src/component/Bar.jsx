import React from 'react';
import { BrowserRouter as  Router,Route,Routes,Link } from 'react-router-dom';
import Adduser from './Add';
import Userdetails from './userdetails';
import Userdetailsdelete from './userdelete';
import Userdetailsedit from './userdetailsedit';
import Confirm from './confirm';
import Doughnut from './Doughnut';
//import Home from './Home';
import './bar.css';
// import Body from './Body';
// import homie from './homeic.jpg';
//import Contact from './Contact';
//  import LoginPage from './LoginPage';
//import img2 from './navlog.png';
class Bar extends React.Component{
    render(){
        return(
            <div className='adb'>
            
                        
                {/* <nav className='container-fluid navba'> */}
                    <div className='head'>
                        {/* <div className='container-fluid tit'>
                            <h6>WELCOME ADMIN</h6>
                            </div> */}
                        {/* <h4>Fault Mangement System</h4>
                    <div className='row a'>
                    <div className='col-md-8'></div> 
                    <div className='col-md-2'> <Link to='/changepin'>Change Password</Link></div> 
                    <div className='col-md-1 lab'> <Link to='/logout'><button className='up'>LOGOUT</button></Link></div>
                    </div> */}
                    <hr style={{background:"white"}}></hr>
                    <div className='row b'>
                    <div className='col-md-1'></div> 
                     <div className='col-md-1'><Link to='/'><button>HOME</button></Link></div>
                    <div className='col-md-2'> <Link to='/userdetails'><button>USER DETAILS</button></Link></div>
                   {/* <div className='col-md-5'><input type="search" placeholder='search'></input></div> */}
                   <div className='col-md-2'> <Link to='/adduser'><button>ADD USER</button></Link></div>
                   <div className='col-md-2'> <Link to='/changerole'><button>CHANGE ROLE</button></Link></div>
                   <div className='col-md-2'> <Link to='/deleteuser'><button>DELETE USER</button></Link></div>
                   <div className='col-md-2'> <Link to='/report'><button>REPORT</button></Link></div>
                   </div></div>
               
                {/* </nav> */}
                
                 {/* <Routes>
                <Route path='/adduser' element={<Adduser/>}/>
                <Route path='/home' element={<Userdetails/>}/>
                <Route path='/deleteuser' element={<Userdetailsdelete/>}/>
                <Route path='/changerole' element={<Userdetailsedit/>}/>
                <Route path='/report' element={<Doughnut/>}/>
              </Routes>  */}
             
               {/* <Body/> */}
           
            </div>
        )
    }
    }
export default Bar;