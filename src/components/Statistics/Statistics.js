import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <h2 className={css.title}>Statistics</h2>

    {total === 0 ? (
      <Notification message="No feedback given" />
    ) : (
      <ul className={css.list}>
        <li className={css.item}>Good: {good}</li>
        <li className={css.item}>Neutral: {neutral}</li>
        <li className={css.item}>Bad: {bad}</li>
        <li className={css.item}>Total: {total}</li>
        <li className={css.item}>Positive feedback: {positivePercentage}%</li>
      </ul>
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};
