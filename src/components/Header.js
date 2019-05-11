import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";

class Header extends Component {

  render() {
    return (
    <Jumbotron>
      <header>
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-md-3 title">
              Clicky Cats
            </div>
            <div className="col-md-6 text-center">
              {this.props.status}
            </div>
            <div className="col-md-3 score">
              Score: {this.props.score} | Top Score: {this.props.topScore}
            </div>
          </div>
        </div>
      </header>
    </Jumbotron>
    );
  }
}

export default Header;