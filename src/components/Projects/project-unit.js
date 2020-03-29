import React, { Component } from 'react';
import { Link } from 'gatsby';
import { shortenText } from "../../helper/common";
import './project-unit.css';

export default class ProjectUnit extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <a className="pu-unit" href={this.props.project.url} target="_blank">
        <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <div>
              <img className="pu-image" src={this.props.project.imageUrls[0]} alt="Image" />
            </div>
            <div style={{ fontSize: 'large', marginLeft: '10px' }}>
              {this.props.project.title}
            </div>
          </div>
          <div className="pu-desc">
            {shortenText(this.props.project.description)}
          </div>
        </div>
      </a>
    )
  }
}