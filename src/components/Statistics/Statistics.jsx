import PropTypes from 'prop-types';

const Statistics =({good, neutral, bad, total, positivePercentage }) => {
    return (<ul className="">
      <li>good: {good}</li>
      <li>neutral: {neutral}</li>
      <li>bad: {bad}</li>
      <li>total {total}</li>
      <li>positive feedback {positivePercentage}</li>
    </ul> );
 };
 
 Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
 };

 export default Statistics;