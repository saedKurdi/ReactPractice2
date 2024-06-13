import { Component } from "react";
import Statistics from "./Statistics";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((this.state.good / totalFeedback) * 100);
  };

  handleButtonClick = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>Please Leave Feedback</h1>
        <form>
          <button type="button" onClick={() => this.handleButtonClick("good")}>
            Good
          </button>
          <button
            type="button"
            onClick={() => this.handleButtonClick("neutral")}
          >
            Neutral
          </button>
          <button type="button" onClick={() => this.handleButtonClick("bad")}>
            Bad
          </button>
        </form>
        <Statistics
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
          countTotalFeedback={this.countTotalFeedback}
          good={this.state.good}
          bad={this.state.bad}
          neutral={this.state.neutral}
        />
      </>
    );
  }
}

export default Feedback;
