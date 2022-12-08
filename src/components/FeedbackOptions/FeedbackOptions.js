import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    return (
      <div className={css.feedback}>
        {this.props.options.map(option => (
          <button
            key={option}
            type="button"
            name={option}
            onClick={this.props.onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

// export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return (
//     <div className={css.feedback}>
//       {options.map(option => (
//         <button
//           key={option}
//           type="button"
//           name={option}
//           onClick={onLeaveFeedback}
//         >
//           {option}
//         </button>
//       ))}
//     </div>
//   );
// };

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
