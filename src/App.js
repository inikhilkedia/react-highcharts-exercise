import React, { Component } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/v1/userdata")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ data });
      });
  }

  render() {
    const options = {
      chart: {
        type: "line",
        className: "chart",
        zoomType: "xy",
        panning: true,
        panKey: "shift"
      },
      tooltip: {
        crosshairs: [true, true],
        valueDecimals: 2
      },
      title: {
        text: "Accenture: Palo Alto Networks"
      },
      series: [
        {
          data: this.state.data
        }
      ]
    };

    return (
      <div className="App">
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={options}
        />
      </div>
    );
  }
}
