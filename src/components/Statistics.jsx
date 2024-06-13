function Statistics(props) {
  const totalFeedback = props.countTotalFeedback();
  const positiveFeedbackPercentage = props.countPositiveFeedbackPercentage();
  return totalFeedback === 0 ? (
    <h3>There is no feedback</h3>
  ) : (
    <>
      <h1>Statistics</h1>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {totalFeedback}</p>
      <p>Positive: {positiveFeedbackPercentage}%</p>
    </>
  );
}
export default Statistics;
