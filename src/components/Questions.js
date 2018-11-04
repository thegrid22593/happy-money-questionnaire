import React, {Component} from 'react';
import Question from './Question';
import AnimatedQuestion from '../animations/AnimatedQuestion';

class Questions extends Component {
  render () {
    return (
      <div>
        <h3 className="question-counter">
          {`Question ${this.props.currentQuestionId} of ${this.props.questions.length}`}
        </h3>
        {this.props.questions.map (question => {
          return (
            <AnimatedQuestion
              key={question.id}
              pose={this.props.questionAnswered ? 'exit' : 'enter'}
            >
              <Question
                question={question}
                key={question.id}
                className="question"
              />
            </AnimatedQuestion>
          );
        })}
      </div>
    );
  }
}

export default Questions;
