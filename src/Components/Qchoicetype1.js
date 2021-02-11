import React, { Component } from "react";
import "./../index.css";
class Qchoicetype1 extends Component {
  render() {
    return (
      <div>
        <div className="rounded-lg bg-white shadow-lg p-4 h-96">
          <div className="flex flex-row justify-between">
            <form>
              <p className="text-lg font-medium mb-2">MCQ Style 1</p>
              <p className="mb-4 text-lg">
                How much time in a day do you spend on your smartphone?
              </p>
              <input
                type="radio"
                name="qusage1"
                value="0-1 Hour"
                id="zeroone"
                className="mr-2"
              />
              <label for="zeroone">0-1 Hour</label>
              <br />
              <input
                type="radio"
                name="qusage1"
                value="1-2 Hours"
                id="onetwo"
                className="mr-2"
              />
              <label for="onetwo">1-2 Hours</label>
              <br />
              <input
                type="radio"
                name="qusage1"
                value="2-3 Hours"
                id="twothree"
                className="mr-2"
              />
              <label for="twothree">2-3 Hours</label>
              <br />
              <input
                type="radio"
                name="qusage1"
                value="3-4 Hours"
                id="threefour"
                className="mr-2"
              />
              <label for="threefour">3-4 Hours</label>
              <br />
              <input
                type="radio"
                name="qusage1"
                value="4-5 Hours"
                id="fourfive"
                className="mr-2"
              />
              <label for="fourfive">4-5 Hours</label>
              <br />
              <input
                type="radio"
                name="qusage1"
                value="5-6 Hours"
                id="fivesix"
                className="mr-2"
              />
              <label for="fivesix">5-6 Hours</label>
              <br />
              <input
                type="radio"
                name="qusage1"
                value="6-7 Hours"
                id="sixseven"
                className="mr-2"
              />
              <label for="sixseven">6-7 Hours</label>
              <br />
              <input
                type="radio"
                name="qusage1"
                value="7-8 Hours"
                id="seveneight"
                className="mr-2"
              />
              <label for="seveneight">7-8 Hours</label>
              <br />
              <input
                type="radio"
                name="qusage1"
                value="8-9 Hours"
                id="eightnine"
                className="mr-2"
              />
              <label for="eightnine">8-9 Hours</label>
              <br />
              <input
                type="radio"
                name="qusage1"
                value="9-10 Hours"
                id="nineten"
                className="mr-2"
              />
              <label for="nineten">9-10 Hours</label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Qchoicetype1;
