import React, {Component} from 'react';
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

export default Answers;
