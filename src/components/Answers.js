import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';

class Answers extends Component {
  render () {
    return (
      <div className="answers-list">
        {this.props.answers.map (answer => {
          return (
            <Answer
              key={answer.id}
              answer={answer}
              selectAnswer={() => this.props.selectAnswer (answer)}
            />
          );
        })}
      </div>
    );
  }
}

Answer.propTypes = {
  answer: PropTypes.obj,
  selectAnswer: PropTypes.func,
};

export default Answers;
