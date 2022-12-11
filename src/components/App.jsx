import React from 'react';

import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  // onLeaveFeedback = e => {
  //   console.log(e.target);
  //   const { name } = e.target;
  //   this.setState(prevState => ({
  //     [name]: prevState[name] + 1,
  //   }));
  // };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.good + this.state.neutral + this.state.bad}
            positivePercentage={
              this.state.good /
              (this.state.good + this.state.neutral + this.state.bad)
            }
          />
          <Notification message="No feedback given" />
        </Section>
      </>
    );
  }
}
