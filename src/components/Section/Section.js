import css from './Section.module.css';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export const Section = ({ title, children }) => (
  <section className={css.section}>
    <h2 className={css.title}>{title}</h2>

    <FeedbackOptions options={['good', 'neutral', 'bad']} />

    <Statistics />
  </section>
);
