import React, {Component} from 'react';

class QuestionHeader extends Component {
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
