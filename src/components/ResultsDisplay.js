import React, {Component} from 'react';
import AnimatedBox from '../animations/AnimatedBox';
import AnimatedIconLeft from '../animations/AnimatedIconLeft';
import AnimatedIconRight from '../animations/AnimatedIconRight';
import AnimatedButton from '../animations/AnimatedButton';

class ResultsDisplay extends Component {
  constructor (props) {
    super (props);
    this.resetAssesment = this.resetAssesment.bind (this);
    this.state = {
      showing: false,
      showIcons: false,
      beginClicked: false,
    };
  }

  componentWillReceiveProps (newProps) {
    if (newProps.reset) {
      this.setState ({
        beginClicked: false,
      });
    }

    if (newProps.showingResults) {
      setTimeout (() => {
        this.setState ({
          showing: true,
        });
        setTimeout (() => {
          this.setState ({
            showIcons: true,
          });
        }, 500);
      }, 100);
    } else {
      this.setState ({
        showing: false,
        showIcons: false,
      });
    }
  }

  resetAssesment () {
    this.setState ({
      beginClicked: true,
      showing: false,
    });
    setTimeout (() => {
      this.props.resetAssesment ();
    }, 300);
  }

  render () {
    if (this.props.showingResults) {
      return (
        <section className="white-bg-box">
          <AnimatedBox pose={this.state.showing ? 'enter' : 'exit'}>
            <div className="white-box">
              <div className="white-box-content">
                <h1 className="start-title">
                  You did it!
                </h1>
                <p>
                  You have finished both Assesments!
                </p>
                <p>See your scores below!</p>
                <div className="results">
                  {this.props.assesmentScores.map (assesmentScore => {
                    if (assesmentScore.id % 2) {
                      return (
                        <AnimatedIconRight
                          key={assesmentScore.id}
                          pose={this.state.showIcons ? 'visible' : 'hidden'}
                        >
                          <div
                            className="assesment-score"
                            key={assesmentScore.id}
                          >
                            <img
                              src={assesmentScore.icon}
                              alt={assesmentScore.name}
                            />
                            <h3>{assesmentScore.name}</h3>
                            <div className="score">{assesmentScore.score}</div>
                          </div>
                        </AnimatedIconRight>
                      );
                    } else {
                      return (
                        <AnimatedIconLeft
                          key={assesmentScore.id}
                          pose={this.state.showIcons ? 'visible' : 'hidden'}
                        >
                          <div
                            className="assesment-score"
                            key={assesmentScore.id}
                          >
                            <img
                              src={assesmentScore.icon}
                              alt={assesmentScore.name}
                            />
                            <h3>{assesmentScore.name}</h3>
                            <div className="score">{assesmentScore.score}</div>
                          </div>
                        </AnimatedIconLeft>
                      );
                    }
                  })}
                </div>
                <AnimatedButton
                  pose={this.state.beginClicked ? 'hidden' : 'visible'}
                  onClick={this.resetAssesment}
                  className="begin-button"
                >
                  Re-Take!
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

export default ResultsDisplay;
