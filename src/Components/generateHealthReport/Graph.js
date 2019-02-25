import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "Calories Burnt",
            data: [
              2500,
              3000,
              1000,
              3000,
              2500,
              6000,
              1070,
              2280,
              3300,
              3000,
              1200,
              3700
            ],
            backgroundColor: ["#FBA8A8"],
            fill: true,
            pointHoverRadius: "8",
            pointBackgroundColor: [
              "#D74646",
              "#D74646",
              "#D74646",
              "#D74646",
              "#D74646",
              "#D74646",
              "#D74646",
              "#D74646",
              "#D74646",
              "#D74646",
              "#D74646",
              "#D74646"
            ],
            pointHoverBackgroundColor: [
              "#D74646",
              "#D74646",
              "#D74646",
              "#D74646",
              "#D74646",
              "#D74646",
              "#D74646",
              "#D74646",
              "#D74646",
              "#D74646",
              "#D74646",
              "#D74646"
            ]
          }
        ]
      }
    };
  }
  render() {
    // console.log(this.props);
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          width={this.props.graphWidth}
          height={this.props.graphHeight}
          options={{
            // maintainAspectRatio: false,
            title: {
              display: true,
              text: this.props.graphTitle,
              fontSize: 35
            },
            scales: {
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Months",
                    fontSize: 15
                  }
                }
              ],
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Average Calorie Consumption",
                    fontSize: 15
                  },
                  ticks: {
                    max: 7000,
                    beginAtZero: true
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}

export default Graph;
