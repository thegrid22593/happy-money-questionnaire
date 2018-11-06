import React, {Component} from 'react';
import AnimatedBox from '../animations/AnimatedBox';
import AnimatedButton from '../animations/AnimatedButton';

class HalfwayDisplay extends Component {
  constructor (props) {
    super (props);
    this.continueAssesment = this.continueAssesment.bind (this);
    this.state = {
      showing: false,
      beginClicked: false,
    };
  }

  componentWillReceiveProps (newProps) {
    if (newProps.reset) {
      this.setState ({
        beginClicked: false,
      });
    }

    if (newProps.showHalfwayDisplay) {
      setTimeout (() => {
        this.setState ({
          showing: true,
        });
      }, 100);
    } else {
      this.setState ({
        showing: false,
      });
    }
  }

  continueAssesment () {
    this.setState ({
      beginClicked: true,
      showing: false,
    });
    setTimeout (() => {
      this.props.continueAssesment ();
    }, 400);
  }

  render () {
    if (this.props.showHalfwayDisplay) {
      return (
        <section className="white-bg-box">
          <AnimatedBox pose={this.state.showing ? 'enter' : 'exit'}>
            <div className="white-box">
              <div className="white-box-content">
                <h1 className="start-title">
                  Wow! {this.props.userName} Those Answers Rocked!
                </h1>
                <div className="intro-text">
                  <p>
                    You've finished the first half of the assesment!
                  </p>
                  <p>Way to go!</p>
                  <p>
                    When you're ready let's move on to optimism!
                  </p>
                </div>
                <AnimatedButton
                  pose={this.state.beginClicked ? 'hidden' : 'visible'}
                  onClick={this.continueAssesment}
                  className="begin-button"
                >
                  Let's Go!
                </AnimatedButton>
              </div>
            </div>
          </AnimatedBox>
        </section>
      );
    }
    return false;
  }
}

export default HalfwayDisplay;
