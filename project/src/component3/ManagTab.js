import React from "react";
import './mang.css';
import isearch from './search.png';
class ManagTab extends React.Component{
    render(){
        return(
            <div className="container">
                  <div class="row">
                <div class="col-md-8"></div>
                <div class="col-md-2"><input type="search"></input></div>
                <div class="col-md-1"><img src={isearch} alt="search" style={{cursor:"pointer"}} width={35} height={35}></img></div>
               
                {/* <div class="col-md-1"></div> */}
            </div>
                <br></br>
                <table >
                    <tr className="head1" >
                        <th>Device Ip</th>
                        <th>Serial Nos</th>
                        <th>Device Type</th>
                        <th>Severity</th>
                        <th>Trap</th>
                        <th>Notes</th>
                        <th>Occurence</th>
                    </tr>
                    <tr className="red">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="green">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="purple">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="orange">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="yellow">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="green">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <br></br>
                <div className="tab2">
               <td className="ac">
                &nbsp;&nbsp;&nbsp;<button className="act">ACK</button><br></br><br></br>&nbsp;&nbsp;&nbsp;
                <button className="act">ACK</button><br></br><br></br>&nbsp;&nbsp;&nbsp;
                <button className="act">ACK</button><br></br><br></br>&nbsp;&nbsp;&nbsp;
                <button className="act">ACK</button><br></br><br></br>&nbsp;&nbsp;&nbsp;
                <button className="act">ACK</button><br></br><br></br>&nbsp;&nbsp;&nbsp;
                <button className="act">ACK</button><br></br><br></br>&nbsp;&nbsp;&nbsp;
                </td>
                <td className="ac">
                
                &nbsp;&nbsp;&nbsp;<button className="act">clear</button><br></br><br></br>&nbsp;&nbsp;&nbsp;
                <button className="act">clear</button><br></br><br></br>&nbsp;&nbsp;&nbsp;
                <button className="act">clear</button><br></br><br></br>&nbsp;&nbsp;&nbsp;
                <button className="act">clear</button><br></br><br></br>&nbsp;&nbsp;&nbsp;
                <button className="act">clear</button><br></br><br></br>&nbsp;&nbsp;&nbsp;
                <button className="act">clear</button><br></br><br></br>&nbsp;&nbsp;&nbsp;
                 </td>
                 <td className="ac">
                 &nbsp;&nbsp;&nbsp;<button className="act">Terminate</button><br></br><br></br>&nbsp;&nbsp;&nbsp;
                <button className="act">Terminate</button><br></br><br></br>&nbsp;&nbsp;&nbsp;
                <button className="act">Terminate</button><br></br><br></br>&nbsp;&nbsp;&nbsp;
                <button className="act">Terminate</button><br></br><br></br>&nbsp;&nbsp;&nbsp;
                <button className="act">Terminate</button><br></br><br></br>&nbsp;&nbsp;&nbsp;
                <button className="act">Terminate</button><br></br><br></br>&nbsp;&nbsp;&nbsp;
               </td>
            </div>
            </div>
        )
    }
}
export default ManagTab;