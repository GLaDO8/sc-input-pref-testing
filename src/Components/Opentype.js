import React, { Component } from "react";
import "./../index.css";

class Opentype extends Component {
  render() {
    return (
      <div>
        <div className="rounded-lg bg-white shadow-lg p-4">
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
              />
              <label for="minute">Minutes</label>
              <input
                type="text"
                className="bg-gray-100 rounded-lg p-2 border-gray-200 border-2 w-10 m-1"
                placeholder="34"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Opentype;
