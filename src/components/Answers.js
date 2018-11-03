import React, {Component} from 'react';
import Answer from './Answer';
import AnimatedButton from '../animations/AnimatedButton';

class Answers extends Component {
  constructor (props) {
    super (props);
  }

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

export default Answers;
