import React, { Component } from "react";
import "./../index.css";
class Qchoicetype2 extends Component {
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
                id="onetwo2"
                name="qusage2"
                value="1-2 Hours"
                className="rounded-lg p-2 bg-gray-100 border-gray-200 border-2"
              />
              <label for="male">1-2 Hours</label>
              <br />
              <input
                type="radio"
                id="twofour2"
                name="qusage2"
                value="2-4 Hours"
              />
              <label for="female">2-4 Hours</label>
              <br />
              <input
                type="radio"
                id="foursix2"
                name="qusage2"
                value="4-6 Hours"
              />
              <label for="other">4-6 Hours</label>
              <br />
              <input
                type="radio"
                id="sixeight2"
                name="qusage2"
                value="6-8 Hours"
              />
              <label for="other">6-8 Hours</label>
              <br />
              <input
                type="radio"
                id="eightten2"
                name="qusage2"
                value="8-10 Hours"
              />
              <label for="other">8-10 Hours</label>
              <br />
              <input
                type="radio"
                id="tentwelve2"
                name="qusage2"
                value="10-12 Hours"
              />
              <label for="other">10-12 Hours</label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Qchoicetype2;
