import React from 'react';
import ReactDOM from 'react-dom/client';

import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Section title="Please leave feedback">
      <FeedbackOptions options={['good', 'neutral', 'bad']} />
      <Statistics />
      <Notification message="No feedback given" />
    </Section>
  </React.StrictMode>
);
