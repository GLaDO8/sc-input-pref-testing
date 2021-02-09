import React, { Component } from "react";
import "./index.css";

class Comparisonone extends Component {
  constructor() {
    super();
    this.state = {
      q1options: "",
      q2options: "",
      q3options: "",
    };
  }
  render() {
    return (
      <div className="grid grid-cols-3 gap-6 mt-16">
        <div>
          <div className="mb-8">
            <h2 className="text-xl font-medium mb-4">
              Question Type 1 (MCQ- 7 options)
            </h2>
            <label>
              How much time in a day do you spend on your smartphone?
            </label>
          </div>
          <div className="flex flex-row rounded-lg p-2 bg-gray-100 border-gray-200 border-2 justify-between">
            <select
              id="mcqstyle"
              className=" bg-gray-100 appearance-none"
              onChange={this.handleChange}
              value={this.state.q1options}
            >
              <option value="none" selected disabled hidden>
                Select an Option
              </option>
              <option value="Less than 1 Hour">Less than 1 Hour</option>
              <option value="1-2 Hours">1-2 Hours</option>
              <option value="2-3 Hours">2-3 Hours</option>
              <option value="3-4 Hours">3-4 Hours</option>
              <option value="4-5 Hours">4-5 Hours</option>
              <option value="5-6 Hours">5-6 Hours</option>
              <option value="More than 6 Hours">More than 6 Hours</option>
            </select>
            <img
              src="https://s2.svgbox.net/octicons.svg?ic=chevron-down-bold&color=000000"
              width="22"
              height="22"
              alt="chevron down"
              className="mr-4"
            ></img>
          </div>
        </div>
        <div>
          <div className="mb-8">
            <h2 className="text-xl font-medium mb-4">
              Question Type 2 (MCQ- 5 options)
            </h2>
            <label>
              How much time in a day do you spend on your smartphone?
            </label>
          </div>
          <div className="flex flex-row rounded-lg p-2 bg-gray-100 border-gray-200 border-2 justify-between">
            <select
              id="mcqstyle"
              className=" bg-gray-100 appearance-none"
              onChange={this.handleChange}
              value={this.state.q2options}
            >
              <option value="none" selected disabled hidden>
                Select an Option
              </option>
              <option value="Less than 1 Hour">Less than 1 Hour</option>
              <option value="1-2 Hours">1-2 Hours</option>
              <option value="2-4 Hours">2-4 Hours</option>
              <option value="4-6 Hours">4-6 Hours</option>
              <option value="More than 6 Hours">More than 6 Hours</option>
            </select>
            <img
              src="https://s2.svgbox.net/octicons.svg?ic=chevron-down-bold&color=000000"
              width="22"
              height="22"
              alt="chevron down"
              className="mr-4"
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-4">
            Question Type 3 (open-ended text field)
          </h2>
          <form>
            <div className="mb-8">
              <label for="male">
                How much time in a day do you spend on your smartphone?
              </label>
            </div>

            <input
              type="text"
              className="bg-gray-100 rounded-lg p-2 border-gray-200 border-2"
              placeholder="Eg: 2 Hour 35 Minutes"
              onChange={this.handleChange}
              value={this.state.q3options}
            />
          </form>
        </div>
      </div>
    );
  }
}
export default Comparisonone;
