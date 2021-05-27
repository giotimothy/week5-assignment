import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StarWarsHome extends Component {
  state = {
    allCharacters: [],
    error: false
  }

  componentDidMount() {
    this.getStarWarsCharacters();
  }

  getStarWarsCharacters = () => {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          allCharacters: data.results
        });
      })
      .catch(() => {
        this.setState({
          error: true
        });
      });
  }

  render() {
    const {error: isError} = this.state;
    const starWarsCharacters = this.state.allCharacters.map((oneChar, idx) => {
      let charIndex = idx + 1;
      return (
        <li>
          <Link to={`/people/${charIndex}`}>{oneChar.name}</Link>
        </li>
      );
    });

    return (
      <div>
        {isError && <p>Error! May the force be with you!</p>}
        <ul>{starWarsCharacters}</ul>
      </div>
    );
  }
}

export default StarWarsHome;
