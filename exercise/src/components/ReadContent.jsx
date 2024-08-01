import React, { Component } from 'react';

class ReadContent extends Component {
  render() {
    return (
      <article>
        <h1>{this.props.title}</h1>
        <p>{this.props.review}</p>
      </article>
    );
  }
}

export default ReadContent;