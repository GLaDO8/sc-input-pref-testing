import React, { Component } from "react";
import "./index.css";
import Qchoicetype1 from "./Components/Qchoicetype1";
import Qchoicetype2 from "./Components/Qchoicetype2";
import Slidertype1 from "./Components/Slidertype1";
import Slidertype2 from "./Components/Slidertype2";

class App extends Component {
  constructor() {
    super();
    this.state = {
      q1preference: "",
    };
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
              You'll be presented with a few question types. Let us know which
              one you prefer.
            </p>
            <br />
            <p>
              <b>
                Note - We are not collecting information about your screen time,
                but only the your question preferences. Feel free to answer
                answer them.
              </b>
            </p>
          </div>
        </header>
        <div className="font-medium text-xl mx-auto max-w-4xl mt-24">
          <h3>Which of these two questions types do you prefer? </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-16 my-8">
          <Qchoicetype1 />
          <Qchoicetype2 />
        </div>
        <div className="flex flex-row mx-auto max-w-4xl">
          <form>
            <input
              type="radio"
              id="preference1"
              name="pref1"
              value="mcq style 1"
              className="rounded-lg p-2 bg-gray-100 border-gray-200 border-2"
              // onChange={this.handleChange}
              // value={this.state.username}
            />
            <label for="male">mcq style 1</label>
            <input
              type="radio"
              id="preference2"
              name="pref1"
              value="mcq style 2"
              className="rounded-lg p-2 bg-gray-100 border-gray-200 border-2"
            />
            <label for="male">mcq style 2</label>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-16 my-8">
          <Slidertype1 />
          <Slidertype2 />
        </div>
        <div className="flex flex-row mx-auto max-w-4xl">
          <form>
            <input
              type="radio"
              id="preference1"
              name="pref1"
              value="mcq style 1"
              className="rounded-lg p-2 bg-gray-100 border-gray-200 border-2"
              // onChange={this.handleChange}
              // value={this.state.username}
            />
            <label for="male">mcq style 1</label>
            <input
              type="radio"
              id="preference2"
              name="pref1"
              value="mcq style 2"
              className="rounded-lg p-2 bg-gray-100 border-gray-200 border-2"
            />
            <label for="male">mcq style 2</label>
          </form>
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
