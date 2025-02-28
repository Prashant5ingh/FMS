import React from 'react';
import { BrowserRouter as  Router,Route,Routes,Link } from 'react-router-dom';
//import Home from './Home';
// import './bar.css';
//import Body from './Body';
//import homie from './homeic.jpg';
//import Contact from './Contact';
 //import LoginPage from './LoginPage';
//import img2 from './navlog.png';
import ManagTab from './ManagTab'
class MBar extends React.Component{
    render(){
        return(
            <div className='adb'>
            {/* <Router> */}
                <nav className='container-fluid navba'>
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
                     <div className='col-md-3'><Link to='/'><button>HOME</button></Link></div>
                    <div className='col-md-3'> <Link to='/fault'><button>FAULT HANDLING</button></Link></div>
                   {/* <div className='col-md-5'><input type="search" placeholder='search'></input></div> */}
                   <div className='col-md-2'> <Link to='/report'><button>REPORT</button></Link></div>
                   </div></div>
               
                   <div className='container-fluid tit'>
                       <h6>WELCOME MANAGER</h6>
                       </div>
                </nav>
                 {/* <Routes>
                <Route path='/' element=""/>
               <Route path='/fault' element={<ManagTab/>}/>
              </Routes>  */}
               {/* <Body/> */}
            {/* </Router> */}
            </div>
        )
    }
    }
export default MBar;