import React, { Component } from "react";
import "./../index.css";
class Qchoicetype1 extends Component {
  render() {
    return (
      <div>
        <div className="rounded-lg bg-white shadow-lg p-4">
          <div className="flex flex-row justify-between">
            <form>
              <p className="mb-8">
                How much time in a day do you spend on your smartphone?
              </p>
              <input
                type="radio"
                id="onetwo"
                name="qusage1"
                value="1-2 Hours"
                className="rounded-lg p-2 bg-gray-100 border-gray-200 border-2"
              />
              <label for="male">1-2 Hours</label>
              <br />
              <input
                type="radio"
                id="twothree"
                name="qusage1"
                value="2-3 Hours"
              />
              <label for="female">2-3 Hours</label>
              <br />
              <input
                type="radio"
                id="threefour"
                name="qusage1"
                value="3-4 Hours"
              />
              <label for="other">3-4 Hours</label>
              <br />
              <input
                type="radio"
                id="fourfive"
                name="qusage1"
                value="4-5 Hours"
              />
              <label for="other">4-5 Hours</label>
              <br />
              <input
                type="radio"
                id="fivesix"
                name="qusage1"
                value="5-6 Hours"
              />
              <label for="other">5-6 Hours</label>
              <br />
              <input
                type="radio"
                id="sixseven"
                name="qusage1"
                value="6-7 Hours"
              />
              <label for="other">6-7 Hours</label>
              <br />
              <input
                type="radio"
                id="seveneight"
                name="qusage1"
                value="7-8 Hours"
              />
              <label for="other">7-8 Hours</label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Qchoicetype1;
