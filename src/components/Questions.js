import React, {Component} from 'react';
import Question from './Question';

class Questions extends Component {
  constructor (props) {
    super (props);
    console.log ('old-props');
  }

  render () {
    return (
      <div>
        <h3 className="question-counter">Question 1</h3>
        {this.props.questions.map (question => {
          return (
            <Question
              question={question}
              key={question.id}
              className="question"
            />
          );
        })}
      </div>
    );
  }
}

export default Questions;
