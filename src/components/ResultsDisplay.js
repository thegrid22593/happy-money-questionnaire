import React, {Component} from 'react';
import AnimatedBox from '../animations/AnimatedBox';
import AnimatedButton from '../animations/AnimatedButton';

class ResultsDisplay extends Component {
  constructor (props) {
    super (props);
    this.state = {
      showing: false,
    };
  }

  componentWillReceiveProps (newProps) {
    if (this.props.showingResults !== newProps.showingResults) {
      setTimeout (() => {
        this.setState ({
          showing: true,
        });
      }, 100);
    }
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
                    return (
                      <div className="assesment-score" key={assesmentScore.id}>
                        <img
                          src={assesmentScore.icon}
                          alt={assesmentScore.name}
                        />
                        <h3>{assesmentScore.name}</h3>
                        <div className="score">{assesmentScore.score}</div>
                      </div>
                    );
                  })}
                </div>
                {/* <AnimatedButton
                  pose={this.state.beginClicked ? 'hidden' : 'visible'}
                  onClick={this.props.continueAssesment}
                  className="begin-button"
                >
                  Let's Go!
                </AnimatedButton> */}
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
