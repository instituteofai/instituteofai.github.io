import React from 'react';
import './course-unit.css';

export default class CourseUnit extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="cu-unit">
        <div className="">
          <span className="cu-num">{this.props.idx + 1}</span>
          <span className="cu-title">{this.props.unit.title}</span>
        </div>
       
          <div className="cu-body">
            {this.props.unit.items &&
              this.props.unit.items.map(item => {
                return <div className="cu-body-item">{item}</div>;
              })}
          </div>
       
      </div>
    );
  }
}
