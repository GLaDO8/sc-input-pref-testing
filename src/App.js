import React, { Component } from "react";
import "./index.css";
import Pageone from "./page1";
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="mx-auto max-w-3xl mt-16">
        <header>
          <div>
            <h1 className="text-2xl font-bold">Input Form A/B Testing</h1>
          </div>
        </header>
        <div className="container mt-48">
          <section className="add-item">
            <BrowserRouter>
              <button className="text-white bg-black py-2 px-6 rounded-lg">
                <Link to="/page1">Next</Link>
              </button>
              <Route path="/page1" component={Pageone} />
            </BrowserRouter>
          </section>
        </div>
      </div>
    );
  }
}
export default App;
