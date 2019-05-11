import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-md-3 title">
              Clicky Emojis
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
    );
  }
}

export default Header;

import React, { Component } from 'react';

class GameArea extends Component {
  render() {
    const emojis = this.props.emoji.map((item) =>
      <img className="thumb img-thumbnail"
        key={item.id}
        data-id={item.id}
        onClick={this.props.handleClick}
        src={item.image}
        alt={item.id}
      />
    );

    return (
      <main className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="h3 mt-4 mt-md-5 mb-4 mb-md-5 message">{this.props.message}</h1>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="image-container col-12 d-flex justify-content-center">
            {emojis}
          </div>
        </div>
      </main>
    );
  }
}

export default GameArea;