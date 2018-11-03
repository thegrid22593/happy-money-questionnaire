import React, {Component} from 'react';
import AnimatedBox from '../animations/AnimatedBox';
import AnimatedButton from '../animations/AnimatedButton';

class HalfwayDisplay extends Component {
  constructor (props) {
    super (props);
    this.continueAssesment = this.continueAssesment.bind(this);
    this.state = {
      showing: false,
    };
  }

  componentWillReceiveProps (newProps) {
    if (this.props.showHalfwayDisplay !== newProps.showHalfwayDisplay) {
      setTimeout (() => {
        this.setState ({
          showing: true,
        });
      }, 100);
    }
  }

  continueAssesment() {
      this.setState({
          showing: false,
      })
      setTimeout(() => {
          this.props.continueAssesment();
      }, 100)
  }

  render () {
    if (this.props.showHalfwayDisplay) {
      return (
        <section className="white-bg-box">
          <AnimatedBox pose={this.state.showing ? 'enter' : 'exit'}>
            <div className="white-box">
              <div className="white-box-content">
                <h1 className="start-title">
                  Congrats!
                </h1>
                <p>
                  You've finished the first half of the assesment! Way to go!
                </p>
                <p>
                  When you're ready let move on to optimism!
                </p>
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
