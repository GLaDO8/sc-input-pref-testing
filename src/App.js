import React, { Component } from "react";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="app mx-auto max-w-sm mt-16">
        <header>
          <div className="wrapper">
            <h1 className="text-2xl font-bold">Input Form A/B Testing</h1>
          </div>
        </header>
        <div className="container mt-48">
          <section className="add-item">
            <form>
              <input
                className="m-4 p-2 border-2 rounded-lg"
                type="text"
                name="username"
                placeholder="What's your name?"
              />
              <button className="text-white bg-black py-2 px-6 rounded-lg">
                Next
              </button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}
export default App;
