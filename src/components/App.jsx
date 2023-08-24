// import Feedback from "./Feedback/Feedback";
import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  goodIncrement = () => {
    this.setState({
      good: this.state.good + 1
    })
  }

  neutralIncrement = () => {
    this.setState({
      neutral: this.state.neutral + 1
    })
  }

  badIncrement = () => {
    this.setState({
      bad: this.state.bad + 1
    })
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad
  };

  countPositiveFeedbackPercentage = () =>
    ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);

  render() {
    return (
      <div className="">
        <p>Please leave feedback</p>

        <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />

        <Statistics
          good = {this.state.good}
          neutral = {this.state.neutral}
          bad = {this.state.bad}
          total = {this.countTotalFeedback()}
          positivePercentage = {this.countPositiveFeedbackPercentage()}
        />
      </div>
    )
  }
}

export default App;
