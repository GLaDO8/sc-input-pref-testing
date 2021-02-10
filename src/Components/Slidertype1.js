import React, { Component } from "react";
import Slider, { createSliderWithTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
import "./../index.css";

const SliderWithTooltip = createSliderWithTooltip(Slider);

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
        <div className="rounded-lg bg-white shadow-lg p-4">
          <h2 className="text-xl font-medium mb-4">
            Question Type 5 (Segmented slider-type input)
          </h2>
          <div className="mb-8">
            <label for="male">
              How much time in a day do you spend on your smartphone?
            </label>
          </div>
          <div>
            <p className="text-xl mb-8">{screenTimeFormatter(sliderValue)}</p>
            <SliderWithTooltip
              min={0}
              max={720}
              step={5}
              tipFormatter={screenTimeFormatter}
              tipProps={{ overlayClassName: "foo" }}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Slidertype1;
