import React, { Component } from "react";
import "./../index.css";
class Qchoicetype2 extends Component {
  render() {
    return (
      <div>
        <div className="rounded-lg bg-white shadow-lg p-4 h-96">
          <div className="flex flex-row justify-between">
            <form>
              <p className="text-lg font-medium mb-2">MCQ Style 2</p>
              <p className="mb-4 text-lg">
                How much time in a day do you spend on your smartphone?
              </p>
              <label>
                <input
                  type="radio"
                  name="qusage2"
                  value="0-1 Hour"
                  className="mr-2"
                />
                0-1 Hour
              </label>
              <br />

              <label>
                <input
                  type="radio"
                  name="qusage2"
                  value="1-2 Hours"
                  className="mr-2"
                />
                1-2 Hours
              </label>
              <br />

              <label>
                <input
                  type="radio"
                  name="qusage2"
                  value="2-4 Hours"
                  className="mr-2"
                />
                2-4 Hours
              </label>
              <br />

              <label>
                <input
                  type="radio"
                  name="qusage2"
                  value="4-6 Hours"
                  className="mr-2"
                />
                4-6 Hours
              </label>
              <br />

              <label>
                <input
                  type="radio"
                  name="qusage2"
                  value="6-8 Hours"
                  className="mr-2"
                />
                6-8 Hours
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="qusage2"
                  value="8-10 Hours"
                  className="mr-2"
                />
                8-10 Hours
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="qusage2"
                  value="10-12 Hours"
                  className="mr-2"
                />
                10-12 Hours
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Qchoicetype2;
