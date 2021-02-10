import React, { Component } from "react";
import "./index.css";
import Qchoicetype1 from "./Components/Qchoicetype1";
import Qchoicetype2 from "./Components/Qchoicetype2";
import Slidertype1 from "./Components/Slidertype1";
import Slidertype2 from "./Components/Slidertype2";
import Opentype from "./Components/Opentype";
import Firebase from "./firebase";

function threeQuestions(state) {}

class App extends Component {
  constructor() {
    super();
    this.state = {
      sliderPref: "",
      mcqPref: "",
      overAllPref: "",
    };
    this.onSliderValueChange = this.onSliderValueChange.bind(this);
    this.onMcqValueChange = this.onMcqValueChange.bind(this);
    this.onOverallValueChange = this.onOverallValueChange.bind(this);

    this.formSubmit = this.formSubmit.bind(this);
    this.mcqFormSubmit = this.mcqFormSubmit.bind(this);
    this.finalFormSubmit = this.finalFormSubmit.bind(this);
  }
  onSliderValueChange(event) {
    this.setState({
      sliderPref: event.target.value,
    });
  }
  onMcqValueChange(event) {
    this.setState({
      mcqPref: event.target.value,
    });
  }
  onOverallValueChange(event) {
    this.setState({
      overAllPref: event.target.value,
    });
  }
  finalFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.overAllPref);
    const itemsRef = Firebase.database().ref("preferences");
    const Preferences = {
      mcqChoice: this.state.mcqPref,
      sliderChoice: this.state.sliderPref,
      finalChoice: this.state.overAllPref,
    };
    itemsRef.push(Preferences);
  }
  mcqFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.mcqPref);
  }
  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.sliderPref);
  }
  render() {
    const mcqChoice = this.state.mcqPref;
    const sliderChoice = this.state.sliderPref;
    let mcqComponent, sliderComponent;
    if (mcqChoice === "mcq style 1") {
      mcqComponent = <Qchoicetype1 />;
    } else {
      mcqComponent = <Qchoicetype2 />;
    }

    if (sliderChoice === "Slider Style 1") {
      sliderComponent = <Slidertype1 />;
    } else {
      sliderComponent = <Slidertype2 />;
    }
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
          <form onSubmit={this.mcqFormSubmit}>
            <input
              type="radio"
              name="pref1"
              value="mcq style 1"
              checked={this.state.mcqPref === "mcq style 1"}
              onChange={this.onMcqValueChange}
            />
            <label for="male">mcq style 1</label>
            <input
              type="radio"
              name="pref1"
              value="mcq style 2"
              checked={this.state.mcqPref === "mcq style 2"}
              onChange={this.onMcqValueChange}
            />
            <label for="male">mcq style 2</label>
            <button
              className="bg-black text-white p-2 px-4 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="font-medium text-xl mx-auto max-w-4xl mt-24">
          <h3>Which of these two questions types do you prefer? </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-16 my-8">
          <Slidertype1 />
          <Slidertype2 />
        </div>

        <form onSubmit={this.formSubmit}>
          <input
            type="radio"
            name="pref1"
            value="Slider Style 1"
            checked={this.state.sliderPref === "Slider Style 1"}
            onChange={this.onSliderValueChange}
          />
          <label>Slider Style 1</label>
          <input
            type="radio"
            name="pref1"
            value="Slider Style 2"
            checked={this.state.sliderPref === "Slider Style 2"}
            onChange={this.onSliderValueChange}
          />
          <label>Slider Style 2</label>
          <button
            className="bg-black text-white p-2 px-4 rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-16 my-8">
          <div>{mcqComponent}</div>
          <div>{sliderComponent}</div>
          <div>
            <Opentype />
          </div>
        </div>
        <form onSubmit={this.finalFormSubmit}>
          <input
            type="radio"
            name="pref1"
            value="MCQ Style"
            checked={this.state.overAllPref === "MCQ Style"}
            onChange={this.onOverallValueChange}
          />
          <label>MCQ Style</label>
          <input
            type="radio"
            name="pref1"
            value="Slider Style"
            checked={this.state.overAllPref === "Slider Style"}
            onChange={this.onOverallValueChange}
          />
          <label>Slider Style</label>
          <input
            type="radio"
            name="pref1"
            value="Open Style"
            checked={this.state.overAllPref === "Open Style"}
            onChange={this.onOverallValueChange}
          />
          <label>Open Style</label>
          <button
            className="bg-black text-white p-2 px-4 rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default App;
