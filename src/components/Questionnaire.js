import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Questions from './Questions';
import Answers from './Answers';
import QuestionHeader from './QuestionHeader';
import AnimatedBox from '../animations/AnimatedBox';

class Questionnaire extends Component {
  constructor (props) {
    super (props);

    this.state = {
      questionAnswered: false,
      currentQuestionId: 1,
    };
  }

  componentWillReceiveProps (newProps) {
    console.log ('new-props', newProps);
    newProps.assesment.questions.forEach (question => {
      if (question.active) {
        this.setState ({
          currentQuestionId: question.id,
        });
      }
    });
  }

  updateAssesmentScore (answer) {
    this.setState ({
      questionAnswered: true,
    });
    setTimeout (() => {
      this.props.updateAssesmentScore (this.props.assesment.id, answer);
      this.setState ({
        questionAnswered: false,
      });
    }, 500);
  }

  render () {
    return (
      <main className="white-bg-box">
        <AnimatedBox pose={this.props.showingQuestionScreen ? 'enter' : 'exit'}>
          <div className="white-box">
            <QuestionHeader assesment={this.props.assesment} />
            <div className="white-box-content">
              <Questions
                currentQuestionId={this.state.currentQuestionId}
                questions={this.props.assesment.questions}
                questionAnswered={this.state.questionAnswered}
              />
              <Answers
                answers={this.props.assesment.answers}
                selectAnswer={answer => this.updateAssesmentScore (answer)}
              />
            </div>
          </div>
        </AnimatedBox>
      </main>
    );
  }
}

Questionnaire.propTypes = {
  showingQuestionScreen: PropTypes.bool,
  assesment: PropTypes.object,
  updateAssesmentScore: PropTypes.func,
};

export default Questionnaire;
