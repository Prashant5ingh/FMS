import React from "react";
import './Doughnut.css';
import Chart from "react-apexcharts"

export default class Doughnut extends React.Component{
    constructor(props){
        super(props);
        this.state={
            series:[60,20,12,8],
            
            
            option:{
                labels: ["Clear", "Acknowledged", "Terminated", "Unacknowledged"],
                Chart:{
                    type:'donut',
                },
                responsive:[{
                    breakpoint:480,
                    Options:{
                        Chart:{
                            width:200,
                        },
                        legend:{
                            position:'bottom'
                        }
                    }
                }]
            }
        }
    }
    render(){
        return(
            <div className="length">
                <div className="drop">
                    <center><br></br>
                    <br></br>
                        <label for="report">--Choose a report--</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <select name="report" id="report">
                            <option value="clear">Clear</option>
                            <option value="acknowledged">Acknowledged</option>
                            <option value="terminated">Terminated</option>
                            <option value="unacknowledged">Unacknowledged</option>
                        </select>
                    </center>
                </div>
            <div id="Chart">
                <Chart options={this.state.option} labels={this.state.labels} series={this.state.series} type="donut"></Chart>
                </div>
                </div>

        )
    }
}