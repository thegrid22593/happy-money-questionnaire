import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
  render () {
    if (this.props.question.active) {
      return <p className="question">{this.props.question.text}</p>;
    }
    return false;
  }
}

Question.propTypes = {
  question: PropTypes.object,
};

export default Question;
