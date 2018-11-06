import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AnimatedBox from '../animations/AnimatedBox';
import AnimatedButton from '../animations/AnimatedButton';

const Errors = function (props) {
  if (props.errors) {
    return props.errors.map (error => {
      return <p className="error" key={error.message}>{error.message}</p>;
    });
  }
  return false;
};

class StartScreen extends Component {
  constructor (props) {
    super (props);
    this.handleInputChange = this.handleInputChange.bind (this);
    this.startAssesment = this.startAssesment.bind (this);
    this.clearErrors = this.clearErrors.bind (this);
    this.state = {
      beginClicked: false,
      showErrors: false,
      errors: [],
    };
  }

  componentWillReceiveProps (newProps) {
    if (newProps.reset) {
      this.setState ({
        beginClicked: false,
      });
    }
  }

  handleInputChange (e) {
    this.props.updateUserName (e.target.value);
  }

  clearErrors () {
    this.setState ({
      errors: [],
      showErrors: false,
    });
  }

  handleValidation () {
    let errors = [];
    this.setState ({
      errors: errors,
    });
    if (!this.props.userName) {
      console.log ('working');
      errors.push ({message: 'Name field cannot be empty'});
      this.setState ({
        errors,
      });
      return false;
    }
    return true;
  }

  startAssesment () {
    if (this.handleValidation ()) {
      this.setState ({
        beginClicked: true,
        showErrors: null,
      });
      this.props.startAssesment ();
    } else {
      this.setState ({
        showErrors: true,
      });
    }
  }

  render () {
    return (
      <section className="white-bg-box">
        <AnimatedBox pose={this.props.showingStartScreen ? 'enter' : 'exit'}>
          <div className="white-box">
            <div className="white-box-content">
              <h1 className="start-title">
                Hi There!
              </h1>
              <div className="intro-text">
                <p>
                  You are about to take an assesment of your Grit and Optimism! Woohoo! Let's start off with your name and then we can get to the questions!
                </p>
                <p>Go ahead... write your name below!</p>
              </div>
              <div className="form-field">
                <Errors errors={this.state.errors} />
                <input
                  onChange={this.handleInputChange}
                  onFocus={this.clearErrors}
                  onKeyDown={this.handleEnterPress}
                  type="text"
                  name="userName"
                  value={this.props.userName}
                  className={this.state.showErrors ? 'required-highlight' : ''}
                />
                <AnimatedButton
                  pose={this.state.beginClicked ? 'hidden' : 'visible'}
                  onClick={this.startAssesment}
                  className="begin-button"
                >
                  Begin
                </AnimatedButton>
              </div>

            </div>
          </div>
        </AnimatedBox>
      </section>
    );
  }
}

StartScreen.propTypes = {
  reset: PropTypes.bool,
  userName: PropTypes.string,
  assesmentScores: PropTypes.array,
  showingStartScreen: PropTypes.bool,
  startAssesment: PropTypes.func,
};

export default StartScreen;
