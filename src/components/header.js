import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import iaiIcon from '../images/iai_hires.png';
import gitHubIcon from '../images/GitHub-Mark-32px.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  render() {
    return (
      <header
        style={{
          background: `rgb(255, 255, 255)`,
          marginBottom: `1.45rem`,
          position: 'sticky',
          top: '0'
        }}
      >
        <div
          className="w3-bar"
          style={{
            maxWidth: 960,
            margin: '0 auto',
            padding: `1.45rem 1.0875rem`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            className="w3-hide-medium w3-hide-large"
            style={{ margin: 'auto' }}
          ></div>
          <img
            // className="w3-bar-item"
            style={{
              float: 'left',
              height: '50px',
              boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)',
              marginBottom: '0',
            }}
            src={iaiIcon}
            alt=""
          />
          <h1 className="w3-bar-item w3-hide-small" style={{ margin: 0 }}>
            <span style={{ marginLeft: '14px' }}>{this.props.siteTitle}</span>
          </h1>
          <div style={{ margin: 'auto' }}></div>
          <Link to="/" className="w3-bar-item w3-button w3-round w3-hide-small">
            Home
          </Link>
          <Link to="/labs" className="w3-bar-item w3-button w3-round w3-hide-small">
            Labs
          </Link>
          <a href="https://blog.instituteofai.com/" target="_blank" className="w3-bar-item w3-button w3-round w3-hide-small">
            Blog
          </a>
          <Link to="/about" className="w3-bar-item w3-button w3-round w3-hide-small">
            About
          </Link>
          <a href="https://github.com/instituteofai" target="_blank">
            <img
              style={{
                margin: 'auto'
              }}
              src={gitHubIcon}
              alt="ML101-GitHub Link"
            />
          </a>
          <button
            className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
            onClick={e => this.toggleMenu(e)}
          >
            &#9776;
          </button>
        </div>

        <div
          className={`w3-bar-block w3-hide-large w3-hide-medium ${
            this.state.showMenu ? 'w3-show' : 'w3-hide'
          }`}
        >
          <Link to="/" className="w3-bar-item w3-button">
            Home
          </Link>
          <Link to="/labs" className="w3-bar-item w3-button">
            IAI Labs
          </Link>
          <a href="https://blog.instituteofai.com/" target="_blank" className="w3-bar-item w3-button">
            Blog
          </a>
          <Link to="/about" className="w3-bar-item w3-button">
            About
          </Link>
          <a href="https://github.com/instituteofai/ML-101" target="_blank">
            <img
              style={{
                margin: 'auto'
              }}
              src={gitHubIcon}
              alt="ML101-GitHub Link"
            />
          </a>
        </div>
        <hr />
      </header>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
