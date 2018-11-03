import React, {Component} from 'react';
import Questions from './Questions';
import Answers from './Answers';
import QuestionHeader from './QuestionHeader';
import AnimatedBox from '../animations/AnimatedBox';

class Questionnaire extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <main className="white-bg-box">
        <AnimatedBox pose={this.props.showingQuestionScreen ? 'enter' : 'exit'}>
          <div className="white-box">
            <QuestionHeader assesment={this.props.assesment} />
            <div className="white-box-content">
              <Questions
                questions={this.props.assesment.questions}
                questionAnswered={this.props.questionAnswered}
              />
              <Answers
                answers={this.props.assesment.answers}
                selectAnswer={answer =>
                  this.props.updateAssesmentScore (
                    this.props.assesment.id,
                    answer
                  )}
              />
            </div>
          </div>
        </AnimatedBox>
      </main>
    );
  }
}

export default Questionnaire;
