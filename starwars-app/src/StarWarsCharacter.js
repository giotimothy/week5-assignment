import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class StarWarsCharacter extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        idx: PropTypes.string.isRequired
      })
    })
  }

  state = {
    starWarsChar: null,
    error: false
  }

  componentDidMount() {
    this.getCharInfo();
  }

  componentDidUpdate(previousProps) {
    let oldIndex = previousProps.match.params.idx;
    let newIndex = this.props.match.params.idx;

    if (oldIndex !== newIndex) {
      this.getCharInfo();
    }
  }

  getCharInfo = () => {
    let charIdx = this.props.match.params.idx;
    fetch(`https://swapi.dev/api/people/${charIdx}/`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          starWarsChar: data
        });
      })
      .catch(() => {
        this.setState({
          error: true
        });
      });
  }

  render() {
    const {starWarsChar, error} = this.state;
    let content;

    if (starWarsChar) {
      content = (
        <div>
          <h1>{starWarsChar.name}</h1>
          <p>
            Height: {starWarsChar.height}cm <br/>
            Mass: {starWarsChar.mass}kg <br/>
            Hair Color: {starWarsChar.hair_color} <br/>
            Skin Color: {starWarsChar.skin_color} <br/>
            Eye Color: {starWarsChar.eye_color} <br/>
          </p>
        </div>
      );
    }

    return (
      <div>
        {error && <p>Error! May the force be with you!</p>}
        {content}
      </div>
    );
  }
}

export default StarWarsCharacter;
