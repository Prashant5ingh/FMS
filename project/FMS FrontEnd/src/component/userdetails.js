import React from "react";
import './Add.css'
import axios from 'axios';


export default class Userdetails extends React.Component {
     
    constructor(props) {
        super(props)
        this.state = {
           
        result: '',
            
        }
        this.Mount = this.Mount.bind(this);
    }

componentDidMount(){
    this.Mount();
}

    Mount(){
                    axios.get('http://localhost:8765/users')
  .then(response=>{
    this.setState({
        result:response.data
        
    })
  })
  .catch(function (error) {

    console.log(error);
  });
    }
    
    
    render() {

        // this.edit=(event)=>{
        //     console.log(event)
        //         }
        const { result} = this.state;
        return (

            <div >
              
                 <div className="row">
          <div className="col-6 offset-2">
            {/* <h3>Employee Data:</h3> */}
            <br />
            {result ? <Table list={result} /> : null}
          </div>
        </div>
       
            </div>

           )
      }  
      }
    
      
    const Table=({list})=>( <center>
      
            <table>
            <thead>
      <tr>
        <th>USERNAME</th>
        <th>ROLE</th>
        {/* <th>EDIT</th> */}
        
      </tr>
    </thead>
        <tbody>

   {list.map(item => (
        <tr key={item.id}>
          <td>
            <span>{item.username}</span>
          </td>
          <td>
            <span>{item.role}</span>
          </td>
          {/* <td>
            <span >{<AiFillEdit />}</span>
          </td> */}
          
        </tr>
      ))}
      
  </tbody>
</table>
<br/>

            </center>
          
        
    
        )