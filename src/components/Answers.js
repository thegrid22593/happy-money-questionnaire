import React, {Component} from 'react';
import Answer from './Answer';
import AnimatedButton from '../animations/AnimatedButton';

class Answers extends Component {
  constructor (props) {
    super (props);
    this.selectAnswer = this.selectAnswer.bind (this);
  }

  selectAnswer (answer) {
    setTimeout (() => {
      this.props.selectAnswer (answer);
    }, 500);
  }

  render () {
    return (
      <div className="answers-list">
        {this.props.answers.map (answer => {
          return (
            <Answer
              key={answer.id}
              answer={answer}
              selectAnswer={this.selectAnswer}
            />
          );
        })}
      </div>
    );
  }
}

export default Answers;
