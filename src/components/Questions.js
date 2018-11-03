import React, {Component} from 'react';
import Question from './Question';
import AnimatedBox from '../animations/AnimatedBox';

class Questions extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div>
        <h3 className="question-counter">
          Question
          {' '}
          {this.props.currentQuestionId}
          {' '}
          of
          {' '}
          {this.props.questions.length}
        </h3>
        {this.props.questions.map (question => {
          return (
            <AnimatedBox
              key={question.id}
              pose={this.props.questionAnswered ? 'exit' : 'enter'}
            >
              <Question
                question={question}
                key={question.id}
                className="question"
              />
            </AnimatedBox>
          );
        })}
      </div>
    );
  }
}

export default Questions;
