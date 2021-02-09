import React, { Component } from "react";
import "./index.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      q1options: "",
      q2options: "",
      q3options: "",
      q5slidervalue: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSliderChange = (value) => {
      this.setState(
        {
          value,
        },
        () => {
          console.log(this.state.q5slidervalue);
        }
      );
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <div className="mx-auto max-w-4xl mt-16">
        <header>
          <div>
            <h1 className="text-2xl font-bold mb-4">
              Screen Time Input Preference feedback - Shreyas's Master's Thesis
              Study
            </h1>
            <p>
              We are trying to understand what kind of input methods do people
              prefer when reporting their screen time on their smartphone. This
              website will collect your preferences for input types, which will
              help us in our study.
            </p>
            <br />
            <br />
            <p>
              Below you'll find a single question asked in various formats.
              Please tell us what are the <b>top three question formats</b> that
              you prefer.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-6 gap-y-16 my-16">
          <div>
            <div className="rounded-lg bg-white shadow-lg p-4">
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
                  // onChange={this.handleChange}
                  // value={this.state.q1options}
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
            <select id="q1choice" name="q1choice" className="mt-4">
              <option value="none" selected disabled hidden>
                Give your Preference
              </option>
              <option class="rank1" value="1st Choice">
                1st Choice
              </option>
              <option class="rank2" value="2nd Choice">
                2nd Choice
              </option>
              <option class="rank3" value="3rd Choice">
                3rd Choice
              </option>
            </select>
          </div>

          <div>
            <div className="rounded-lg bg-white shadow-lg p-4">
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
                  // onChange={this.handleChange}
                  // value={this.state.q2options}
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

            <select id="q1choice" name="q1choice" className="mt-4">
              <option value="none" selected disabled hidden>
                Give your Preference
              </option>
              <option class="rank1" value="1st Choice">
                1st Choice
              </option>
              <option class="rank2" value="2nd Choice">
                2nd Choice
              </option>
              <option class="rank3" value="3rd Choice">
                3rd Choice
              </option>
            </select>
          </div>

          <div>
            <div className="rounded-lg bg-white shadow-lg p-4">
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
                  // onChange={this.handleChange}
                  // value={this.state.q3options}
                />
              </form>
            </div>
            <select id="q1choice" name="q1choice" className="mt-4">
              <option value="none" selected disabled hidden>
                Give your Preference
              </option>
              <option class="rank1" value="1st Choice">
                1st Choice
              </option>
              <option class="rank2" value="2nd Choice">
                2nd Choice
              </option>
              <option class="rank3" value="3rd Choice">
                3rd Choice
              </option>
            </select>
          </div>

          <div>
            <div className="rounded-lg bg-white shadow-lg p-4">
              <h2 className="text-xl font-medium mb-4">
                Question Type 4 (semi open-ended text field)
              </h2>
              <form>
                <div className="mb-8">
                  <label for="male">
                    How much time in a day do you spend on your smartphone?
                  </label>
                </div>
                <div className="flex flex-row items-center">
                  <label for="hour">Hours</label>
                  <input
                    type="text"
                    className="bg-gray-100 rounded-lg p-2 border-gray-200 border-2 w-10 m-1 mr-4"
                    placeholder="2"
                    // onChange={this.handleChange}
                    // value={this.state.q3options}
                  />
                  <label for="minute">Minutes</label>
                  <input
                    type="text"
                    className="bg-gray-100 rounded-lg p-2 border-gray-200 border-2 w-10 m-1"
                    placeholder="34"
                    // onChange={this.handleChange}
                    // value={this.state.q3options}
                  />
                </div>
              </form>
            </div>

            <select id="q1choice" name="q1choice" className="mt-4">
              <option value="none" selected disabled hidden>
                Give your Preference
              </option>
              <option class="rank1" value="1st Choice">
                1st Choice
              </option>
              <option class="rank2" value="2nd Choice">
                2nd Choice
              </option>
              <option class="rank3" value="3rd Choice">
                3rd Choice
              </option>
            </select>
          </div>

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
              <Slider
                min={0}
                max={120}
                // value={this.state.q5slidervalue}
                // onChange={this.onSliderChange}
              />
            </div>
            <select id="q1choice" name="q1choice" className="mt-4">
              <option value="none" selected disabled hidden>
                Give your Preference
              </option>
              <option class="rank1" value="1st Choice">
                1st Choice
              </option>
              <option class="rank2" value="2nd Choice">
                2nd Choice
              </option>
              <option class="rank3" value="3rd Choice">
                3rd Choice
              </option>
            </select>
          </div>

          <div>
            <div className="rounded-lg bg-white shadow-lg p-4">
              <h2 className="text-xl font-medium mb-4">
                Question Type 6 (Slider-type input)
              </h2>
              <div className="mb-8">
                <label for="male">
                  How much time in a day do you spend on your smartphone?
                </label>
              </div>
              <Slider
                min={0}
                max={120}
                // value={this.state.q5slidervalue}
                // onChange={this.onSliderChange}
              />
            </div>
            <select id="q1choice" name="q1choice" className="mt-4">
              <option value="none" selected disabled hidden>
                Give your Preference
              </option>
              <option class="rank1" value="1st Choice">
                1st Choice
              </option>
              <option class="rank2" value="2nd Choice">
                2nd Choice
              </option>
              <option class="rank3" value="3rd Choice">
                3rd Choice
              </option>
            </select>
          </div>
        </div>
        <div className="mb-24">
          <button className="bg-black text-white p-2 px-4 rounded-lg">
            Submit
          </button>
        </div>
      </div>
    );
  }
}
export default App;
