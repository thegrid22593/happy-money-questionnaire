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
  }

  /**
 * This componentDidMount function is the base for starting the inital
 * animation of the app, with an animated box from the bottom of the
 * screen.
 *
  @return void
 */
  componentDidMount () {
    setTimeout (() => {
      this.setState ({showingStartScreen: true});
    }, 500);
  }

  /**
 * Updates the assesment score on the state, checks some other.
 *
 * @param {number} assesmentId The assesment id that the score should be 
 * updated on.
 * @param {object} This The answer that user selected and will be used to 
 * calcualte what point value should be added to the score.
 */
  updateAssesmentScore (assesmentId, answer) {
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

  /**
 * Updates the state with the name.
 *
 * @param {string} name the name that will be used to update with.
 * @return void
 */
  updateUserName (name) {
    this.setState ({name});
  }

  /**
 * Transitions the app into the start of an assesment. Assesment is calculated
 * based on the currentAssesmentId and increments from there.
 *
 * @return void
 */
  startAssesment () {
    setTimeout (() => {
      this.setState ({showingStartScreen: false});
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
      this.setState ({showingQuestionScreen: true});
    }, 500);
  }

  /**
 * Checks if the current question has a reverse value which should then
 * make the score decrement
 *
 * @return boolean
 */
  isCurrentQuestionReverse () {
    const activeAssesment = this.getActiveAssesment ();
    const activeQuestion = this.getActiveQuestion (activeAssesment.questions);
    if (activeQuestion.reverse) {
      return true;
    }
    return false;
  }

  /**
 * Gets the active assesment
 *
 * @return {object} assesment
 */
  getActiveAssesment () {
    return this.state.assesments.find (assesment => {
      if (assesment.active) {
        return assesment;
      }
      return false;
    });
  }

  /**
   * Gets the active question
   *
   * @return {object} question
 */
  getActiveQuestion (questions) {
    return questions.find (question => {
      if (question.active) {
        return question;
      }
      return false;
    });
  }

  /**
   * Transitions the assesment to the next question, updating state along the way
   * with various ui transitions.
   *
   * @return void
 */
  nextQuestion () {
    const activeAssesment = this.getActiveAssesment ();
    if (!this.isLastQuestion (activeAssesment)) {
      const questions = this.incrementActiveQuestion (activeAssesment);
      activeAssesment.questions = questions;
      let updatedAssessments = this.state.assesments.map (assesment => {
        if (assesment.id === activeAssesment) {
          assesment.questions = questions;
        }
        return assesment;
      });
      this.setState ({assesments: updatedAssessments});
    } else {
      this.setState ({showingQuestionScreen: false});
      if (this.state.currentAssesmentId === this.state.assesments.length) {
        setTimeout (() => {
          this.setState ({showingResults: true});
        }, 500);
      } else {
        setTimeout (() => {
          this.setState ({showHalfwayDisplay: true});
        }, 500);
      }
    }
  }

  /**
   * Changes the active question by one index in the current array of questions 
   * on the active assesment
   *
   * @return {array} questions
 */
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

  /**
   * Checks to see if the current question is the last question in
   * the active assesment
   *
   * @return {boolean}
 */
  isLastQuestion (assesment) {
    let activeQuestion = this.getActiveQuestion (assesment.questions);
    if (activeQuestion.id === assesment.questions.length) {
      return true;
    }
    return false;
  }

  /**
   * Transitions the app to the next assesment if the 
   * app is not on the final assesment
   *
   * @return void
 */
  continueAssesment () {
    this.setState ({showHalfwayDisplay: false});
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
          return false;
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
