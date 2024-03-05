import css from './App.module.css'
import { useState } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export default function App (){
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type]+1,
    }))
  };

  const countTotalFeedback = () => {
    const {good, neutral, bad} = feedback;
    return good + neutral + bad
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? ((feedback.good / total) * 100).toFixed(2) : 0;
  };

    return (
      <div className={css.container}>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleFeedback}
          />
        </Section>
        {countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
             good = {feedback.good}
             neutral = {feedback.neutral}
             bad = {feedback.bad}
             total = {countTotalFeedback()}
             positivePercentage = {countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    )
  }

// import css from './App.module.css'
// import { Component } from "react";
// import Statistics from "./Statistics/Statistics";
// import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
// import Section from "./Section/Section";
// import Notification from "./Notification/Notification";

// class App extends Component {

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedback = type => {
//     this.setState(prevState => ({
//       [type]: prevState[type] + 1,
//     }));
//   };

//   goodIncrement = () => {
//     this.setState({
//       good: this.state.good + 1
//     })
//   }

//   neutralIncrement = () => {
//     this.setState({
//       neutral: this.state.neutral + 1
//     })
//   }

//   badIncrement = () => {
//     this.setState({
//       bad: this.state.bad + 1
//     })
//   }

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad
//   };

//   countPositiveFeedbackPercentage = () =>
//     ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);

//   render() {
//     return (
//       <div className={css.container}>
//         <Section title={"Please leave feedback"}>
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.handleFeedback}
//           />
//         </Section>
//         {this.countTotalFeedback() > 0 ? (
//           <Section title="Statistics">
//             <Statistics
//              good = {this.state.good}
//              neutral = {this.state.neutral}
//              bad = {this.state.bad}
//              total = {this.countTotalFeedback()}
//              positivePercentage = {this.countPositiveFeedbackPercentage()}
//             />
//           </Section>
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </div>
//     )
//   }
// }

// export default App;
