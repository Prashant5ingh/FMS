import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class Delete extends React.Component{
    state = {
        posts: []
    }

    componentDidMount() { 
        axios.get("http://localhost:8765/devices")
        .then(res => {
            const posts = res.data;
            this.setState({posts});
            console.log(posts,"MJH")
        })
    }

    deleteRow(id, e){
        console.log(id, "MJH56")
        const url="http://localhost:8765/devices/" + id
        axios.delete(url)
        .then(res => {
            console.log(res);                                                                                               
            console.log("abcd", res);

            const posts = this.state.posts.filter(item => item.id !== id);
            this.setState({posts})
        })
    }


    render() {
        return (

            <div>
                <table className="table table-bordered">
                    <thead className="thead">
                        <tr>
                            <th>Device Serial Number</th>
                            <th>Device IP</th>
                            <th>Device_Type</th>
                        </tr>
                    </thead>

                    <tbody className="tbody">
                        {this.state.posts.map((post) => (
                            <tr>
                                <td>{post.device_serial}</td>
                                <td>{post.device_ip}</td>
                                <td>{post.device_type}</td>
                                <td><button className="btn btn-danger" key={post.id} onClick={(e) => this.deleteRow(post.id, post.e)}>&#xe020;</button></td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Delete;