import React, {Component} from 'react';
import AnimatedButton from '../animations/AnimatedButton';

class Answer extends Component {
  constructor (props) {
    super (props);
    this.state = {
      selected: false,
    };
  }

  selectAnswer (answer) {
    this.setState ({
      selected: true,
    });
    console.log (this.props);
    this.props.selectAnswer (answer);
  }

  render () {
    return (
      <div
        pose={this.state.selected ? 'hidden' : 'visible'}
        className="answer"
        onClick={() => this.selectAnswer (this.props.answer)}
      >
        {this.props.answer.text}
      </div>
    );
  }
}

export default Answer;
