import  {Component}  from "react";
// import css from './Feedback.module.css'

class Feedback extends Component {
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positiveFeedback: 0,
      };

    goodIncrement = () => {
        this.setState({
           good: this.state.good +1
        })
    }

    neutralIncrement =() => {
        this.setState({
            neutral: this.state.neutral +1
        })
    }

    badIncrement =() => {
        this.setState({
            bad: this.state.bad +1
        })
    }

    countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);
    


    render(){
        return (
            <div className="">
                <p>Please leave feedback</p>
                <div className="">
                    <button onClick={this.goodIncrement}>good</button>
                    <button onClick={this.neutralIncrement}>neutral</button>
                    <button onClick={this.badIncrement}>bad</button>
                </div>
                <p>Statistics</p>
                <ul className="">
                    <li>good {this.state.good}</li>
                    <li>neutral {this.state.neutral}</li>
                    <li>bad {this.state.bad}</li>
                    <li>total {this.state.total}</li>
                    <li>positive feedback {this.state.positiveFeedback}</li>
                </ul>
            </div>
            
        )
    }
}

export default Feedback