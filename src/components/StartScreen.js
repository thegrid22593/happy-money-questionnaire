import React, {Component} from 'react';
import AnimatedBox from '../animations/AnimatedBox';
import AnimatedButton from '../animations/AnimatedButton';

class StartScreen extends Component {
  constructor (props) {
    super (props);
    this.handleInputChange = this.handleInputChange.bind (this);
    this.startAssesment = this.startAssesment.bind (this);
    this.state = {
      beginClicked: false,
    };
  }

  handleInputChange (e) {
    this.props.updateUserName (e.target.value);
  }

  startAssesment () {
    this.setState ({
      beginClicked: true,
    });
    this.props.startAssesment ();
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
              <p>
                You are about to take an assesment of your Grit and Optimism! Woohoo! Let's start off with your name and then we can get to the questions!
              </p>
              <p>Go ahead... write your name below!</p>
              <input
                onChange={this.handleInputChange}
                onKeyDown={this.handleEnterPress}
                type="text"
                name="userName"
                value={this.props.userName}
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
        </AnimatedBox>
      </section>
    );
  }
}
export default StartScreen;
