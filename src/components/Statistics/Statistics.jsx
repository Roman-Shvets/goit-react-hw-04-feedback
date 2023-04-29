import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p className={css.statIndicator}>Good: {good}</p>
      <p className={css.statIndicator}>Neutral: {neutral}</p>
      <p className={css.statIndicator}>Bad: {bad}</p>
      <p className={css.statIndicator}>Total: {total}</p>
      <p className={css.statIndicator}>
        Positive feedback: {positivePercentage}%
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
