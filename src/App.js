import React, { Component } from "react";
import "./index.css";
import Qchoicetype1 from "./Components/Qchoicetype1";
import Qchoicetype2 from "./Components/Qchoicetype2";
import Slidertype1 from "./Components/Slidertype1";
import Slidertype2 from "./Components/Slidertype2";
import Opentype from "./Components/Opentype";
import Firebase from "./firebase";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sliderPref: "",
      mcqPref: "",
      overAllPref: "",
      isSubmitted: "No",
    };
    this.onSliderValueChange = this.onSliderValueChange.bind(this);
    this.onMcqValueChange = this.onMcqValueChange.bind(this);
    this.onOverallValueChange = this.onOverallValueChange.bind(this);

    // this.formSubmit = this.formSubmit.bind(this);
    // this.mcqFormSubmit = this.mcqFormSubmit.bind(this);
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
    this.setState({
      isSubmitted: "Yes",
    });
  }
  // mcqFormSubmit(event) {
  //   event.preventDefault();
  //   console.log(this.state.mcqPref);
  // }
  // formSubmit(event) {
  //   event.preventDefault();
  //   console.log(this.state.sliderPref);
  // }
  render() {
    const mcqChoice = this.state.mcqPref;
    const sliderChoice = this.state.sliderPref;
    const showThankYouMessage = this.state.isSubmitted;
    let mcqComponent, sliderComponent, thankYouComponent;
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
    if (showThankYouMessage === "Yes") {
      thankYouComponent = (
        <h3 className="text-lg font-bold mt-8">
          Thank you for Helping me out!
        </h3>
      );
    }

    return (
      <div className="px-4">
        <header className="mx-auto max-w-4xl mt-16">
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
              You will be presented with a few question types. Let us know which
              one you prefer.
            </p>
            <br />
            <p>
              <b>
                Note - We are not collecting information about your screen time,
                but only your question preferences. So feel free to answer them.
              </b>
            </p>
          </div>
        </header>

        <h3 className="font-medium text-xl mx-auto max-w-4xl mt-36">
          1. Which of these two multiple correct choices questions do you
          prefer? (REQUIRED)
        </h3>

        <div className="mx-auto max-w-4xl mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-8 my-8">
            <Qchoicetype1 />
            <Qchoicetype2 />
          </div>

          <form onSubmit={this.mcqFormSubmit}>
            <div className="md:grid md:grid-cols-2 gap-6 gap-y-8 my-8">
              <label className="mr-6">
                <input
                  type="radio"
                  name="pref1"
                  value="MCQ Style 1"
                  checked={this.state.mcqPref === "MCQ Style 1"}
                  onChange={this.onMcqValueChange}
                  className="mr-2"
                  required="required"
                />
                MCQ Style 1
              </label>

              <label>
                <input
                  type="radio"
                  name="pref1"
                  value="MCQ Style 2"
                  checked={this.state.mcqPref === "MCQ Style 2"}
                  onChange={this.onMcqValueChange}
                  className="mr-2"
                />
                MCQ Style 2
              </label>
            </div>
          </form>
        </div>

        <div className="mx-auto max-w-4xl mt-16">
          <h3 className="font-medium text-xl mx-auto max-w-4xl mt-36">
            2. Which of these two slider type questions do you prefer?
            (REQUIRED)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-8 my-8">
            <Slidertype1 />
            <Slidertype2 />
          </div>

          <form onSubmit={this.formSubmit}>
            <div className="md:grid md:grid-cols-2 gap-6 gap-y-8 my-8">
              <label className="mr-6">
                <input
                  type="radio"
                  name="pref1"
                  value="Slider with Step"
                  checked={this.state.sliderPref === "Slider with Step"}
                  onChange={this.onSliderValueChange}
                  className="mr-2"
                  required="required"
                />
                Slider with Step
              </label>

              <label>
                <input
                  type="radio"
                  name="pref1"
                  value="Normal Slider"
                  checked={this.state.sliderPref === "Normal Slider"}
                  onChange={this.onSliderValueChange}
                  className="mr-2"
                />
                Normal Slider
              </label>
            </div>
          </form>
        </div>

        <div className="mx-auto max-w-6xl mt-16 mb-24">
          <h3 className="font-medium text-xl mx-auto max-w-4xl mt-36">
            3. Which of these three question types do you prefer? (REQUIRED)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-8 my-8">
            <div>{mcqComponent}</div>
            <div>{sliderComponent}</div>
            <div>
              <Opentype />
            </div>
          </div>

          <form onSubmit={this.finalFormSubmit}>
            <div className="md:grid md:grid-cols-3 gap-6 gap-y-8 my-8">
              <label className="mr-6">
                <input
                  type="radio"
                  name="pref1"
                  value="MCQ Type"
                  checked={this.state.overAllPref === "MCQ Type"}
                  onChange={this.onOverallValueChange}
                  className="mr-2"
                  required="required"
                />
                MCQ Type
              </label>

              <label className="mr-6">
                <input
                  type="radio"
                  name="pref1"
                  value="Slider Type"
                  checked={this.state.overAllPref === "Slider Type"}
                  onChange={this.onOverallValueChange}
                  className="mr-2"
                />
                Slider Type
              </label>

              <label>
                <input
                  type="radio"
                  name="pref1"
                  value="Open-Ended Type"
                  checked={this.state.overAllPref === "Open-Ended Type"}
                  onChange={this.onOverallValueChange}
                  className="mr-2"
                />
                Open-Ended type
              </label>
            </div>

            <br />
            <button
              className="bg-black text-white p-3 px-6 rounded-lg mt-12"
              type="submit"
            >
              Submit
            </button>
          </form>
          <div>{thankYouComponent}</div>
        </div>
      </div>
    );
  }
}
export default App;
