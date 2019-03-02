import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import ActionButton from "./Button";
import SelectMenu from "./Menu";
class Graph extends Component {
  constructor(props) {
    super(props);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  state = {
    chartData: {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      datasets: [
        {
          label: "Aditya's Calories Burnt",
          data: [
            4500,
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
          backgroundColor: ["blue"],
          fill: false,
          borderColor: "blue",
          pointRadius: "3",
          pointHoverRadius: "8",
          pointBackgroundColor: ["red"],
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
  handleClick1() {
    // console.log(this.state.chartData.datasets[1].data);
    this.setState({
      chartData: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        datasets: [
          {
            label: "Shreyansh's Calories Burnt",
            data: [
              2500,
              3550,
              5000,
              5000,
              6500,
              6000,
              3070,
              5280,
              3300,
              3000,
              1900,
              4900
            ],
            backgroundColor: ["red"],
            fill: false,
            borderColor: "red",
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
    });
  }
  handleClick2() {
    // console.log(this.state.chartData.datasets[0].data);
    this.setState({
      chartData: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        datasets: [
          {
            label: "Aditya's Calories ",
            data: [
              4500,
              3000,
              1000,
              3000,
              2500,
              6500,
              1070,
              2280,
              3300,
              3000,
              1200,
              4700
            ],
            backgroundColor: ["blue"],
            fill: false,
            borderColor: "blue",
            pointRadius: "3",
            pointHoverRadius: "8",
            pointBackgroundColor: ["red"],
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
    });
  }
  handleClick3() {
    // console.log(this.state.chartData.datasets[1].data);
    this.setState({
      chartData: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        datasets: [
          {
            label: "Aditya's Calories Burnt",
            data: [
              4500,
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
            backgroundColor: ["blue"],
            fill: false,
            borderColor: "blue",
            pointRadius: "3",
            pointHoverRadius: "8",
            pointBackgroundColor: ["red"],
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
          },
          {
            label: "Shreyansh's Calories Burnt",
            data: [
              2500,
              3550,
              5000,
              5000,
              6500,
              6000,
              3070,
              5280,
              3300,
              3000,
              1900,
              4900
            ],
            backgroundColor: ["red"],
            fill: false,
            borderColor: "red",
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
    });
  }

  render() {
    // console.log(this.props);
    const chartTitle = this.props.chartTitle;
    console.log(this.state.chartData);
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
              text: chartTitle,
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
        <ActionButton buttonTitle="Change1" handleClick={this.handleClick1} />
        <ActionButton buttonTitle="Change2" handleClick={this.handleClick2} />
        <ActionButton buttonTitle="Change3" handleClick={this.handleClick3} />
      </div>
    );
  }
}

export default Graph;
