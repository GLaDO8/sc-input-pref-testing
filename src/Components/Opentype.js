import React, { Component } from "react";
import "./../index.css";

class Opentype extends Component {
  render() {
    return (
      <div>
        <div className="rounded-lg bg-blue-50 bg-opacity-75 shadow-lg p-4">
          <h2 className="text-xl font-medium mb-4">Open Ended Style</h2>
          <form>
            <div className="mb-8">
              <p>How much time in a day do you spend on your smartphone?</p>
            </div>
            <div className="flex flex-row items-center">
              <input
                id="hour"
                type="text"
                className="bg-gray-50 rounded-lg p-2 border-gray-200 border-2 w-10 m-1 mr-2"
                placeholder="2"
              />
              <label for="hour" className="mr-4">
                Hours
              </label>

              <input
                id="minute"
                type="text"
                className="bg-gray-50 rounded-lg p-2 border-gray-200 border-2 w-10 m-1 mr-2"
                placeholder="34"
              />
              <label for="minute">Minutes</label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Opentype;
