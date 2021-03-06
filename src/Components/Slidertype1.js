import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./../index.css";

function screenTimeFormatter(v) {
  let hours = Math.floor(v / 60);
  let mins = v % 60;
  return `${hours} Hours, ${mins} Minutes`;
}

class Slidertype1 extends Component {
  state = { sliderValue: 0 };
  handleChange = (sliderValue) => {
    this.setState({ sliderValue });
  };
  render() {
    const { sliderValue } = this.state;
    return (
      <div>
        <div className="rounded-lg bg-blue-50 bg-opacity-75 shadow-lg p-4">
          <h2 className="text-xl font-medium mb-4">Slider with 15-min Step</h2>
          <p className="mb-8">
            How much time in a day do you spend on your smartphone?
          </p>
          <div>
            <p className="text-xl mb-6">{screenTimeFormatter(sliderValue)}</p>
            <Slider
              min={0}
              max={720}
              step={15}
              onChange={this.handleChange}
              className="mb-6"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Slidertype1;
