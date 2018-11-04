import React, {Component} from 'react';

class Question extends Component {
  render () {
    if (this.props.question.active) {
      return <p className="question">{this.props.question.text}</p>;
    }
    return false;
  }
}

export default Question;
