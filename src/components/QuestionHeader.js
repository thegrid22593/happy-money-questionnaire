import React, {Component} from 'react';
import Question from './Question';

class QuestionHeader extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div className="question-header">
        <h6 className="assesment-name">
          {this.props.assesment.name}
        </h6>
        <h6 className="assesment-number">
          Assesment: {this.props.assesment.id}
        </h6>
      </div>
    );
  }
}

export default QuestionHeader;
