import React, {Component} from 'react';
import Questionnaire from './components/Questionnaire';
import StartScreen from './components/StartScreen';
import HalfwayDisplay from './components/HalfwayDisplay';
import ResultsDisplay from './components/ResultsDisplay';

import fixture from './fixture';
import './App.scss';

class App extends Component {
  constructor (props) {
    super (props);
    this.updateAssesmentScore = this.updateAssesmentScore.bind (this);
    this.updateUserName = this.updateUserName.bind (this);
    this.startAssesment = this.startAssesment.bind (this);
    this.state = fixture;
    console.log (this.state);
  }

  componentDidMount () {
    setTimeout (() => {
      this.setState ({
        showingStartScreen: true,
      });
    }, 500);
  }

  updateAssesmentScore (assesmentId, answer) {
    console.log (
      'current-question-reverse: ',
      this.isCurrentQuestionReverse ()
    );
    let assesmentScores = this.state.assesmentScores.map (assesmentScore => {
      if (assesmentScore.id === assesmentId) {
        if (!this.isCurrentQuestionReverse ()) {
          assesmentScore.score += answer.points;
        } else {
          assesmentScore.score -= answer.points;
        }
      }
      return assesmentScore;
    });

    this.setState ({
      questionAnswered: true,
      assesmentScores: assesmentScores,
    });
    this.nextQuestion ();
  }

  updateUserName (name) {
    this.setState ({name});
  }

  startAssesment () {
    setTimeout (() => {
      this.setState ({
        showingStartScreen: false,
      });
      let assesments = this.state.assesments.map (assesment => {
        if (assesment.id === this.state.currentAssesmentId + 1) {
          assesment.active = true;
        } else {
          assesment.active = false;
        }
        return assesment;
      });
      this.setState ({
        assesments,
        currentAssesmentId: this.state.currentAssesmentId + 1,
      });
      this.setState ({
        showingQuestionScreen: true,
      });
    }, 500);
  }

  isCurrentQuestionReverse () {
    const activeAssesment = this.getActiveAssesment ();
    const activeQuestion = this.getActiveQuestion (activeAssesment.questions);
    if (activeQuestion.reverse) {
      return true;
    }
    return false;
  }

  getActiveAssesment () {
    return this.state.assesments.find (assesment => {
      if (assesment.active) {
        return assesment;
      }
    });
  }

  getActiveQuestion (questions) {
    return questions.find (question => {
      if (question.active) {
        return question;
      }
      return false;
    });
  }

  nextQuestion () {
    const activeAssesment = this.getActiveAssesment ();
    console.log ('is-last-question:', this.isLastQuestion (activeAssesment));
    if (!this.isLastQuestion (activeAssesment)) {
      const questions = this.incrementActiveQuestion (activeAssesment);
      activeAssesment.questions = questions;
      console.log ('questions', questions);
      let updatedAssessments = this.state.assesments.map (assesment => {
        if (assesment.id == activeAssesment) {
          assesment.questions = questions;
        }
        return assesment;
      });
      this.setState ({
        assesments: updatedAssessments,
      });
    } else {
      this.setState ({
        showingQuestionScreen: false,
      });
      if (this.state.currentAssesmentId === this.state.assesments.length) {
        setTimeout (() => {
          this.setState ({
            showingResults: true,
          });
        }, 500);
      } else {
        setTimeout (() => {
          this.setState ({
            showHalfwayDisplay: true,
          });
        }, 500);
      }
    }
  }

  incrementActiveQuestion (assesment) {
    let nextQuestionIndex = null;
    const questions = assesment.questions.map ((question, index) => {
      if (question.active) {
        question.active = false;
        question.answered = true;
        nextQuestionIndex = index + 1;
      }

      if (index === nextQuestionIndex) {
        question.active = true;
      }

      return question;
    });
    return questions;
  }

  isLastQuestion (assesment) {
    let activeQuestion = this.getActiveQuestion (assesment.questions);
    if (activeQuestion.id === assesment.questions.length) {
      return true;
    }
    return false;
  }

  continueAssesment () {
    this.setState ({
      showHalfwayDisplay: false,
    });
    this.startAssesment ();
  }

  render () {
    return (
      <main>
        <StartScreen
          updateUserName={this.updateUserName}
          userName={this.state.name}
          showingStartScreen={this.state.showingStartScreen}
          startAssesment={this.startAssesment}
        />
        {this.state.assesments.map (assesment => {
          if (assesment.active) {
            return (
              <Questionnaire
                showingQuestionScreen={this.state.showingQuestionScreen}
                key={assesment.id}
                assesment={assesment}
                updateAssesmentScore={this.updateAssesmentScore}
              />
            );
          }
        })}
        <ResultsDisplay
          userName={this.state.userName}
          assesmentScores={this.state.assesmentScores}
          showingResults={this.state.showingResults}
          continueAssesment={() => this.continueAssesment ()}
        />
        <HalfwayDisplay
          userName={this.state.name}
          showHalfwayDisplay={this.state.showHalfwayDisplay}
          continueAssesment={() => this.continueAssesment ()}
        />
      </main>
    );
  }
}

export default App;
